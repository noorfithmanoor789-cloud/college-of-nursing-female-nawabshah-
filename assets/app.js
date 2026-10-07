import { db } from './firebase.js';
import { 
    collection, addDoc, getDocs, query, orderBy, serverTimestamp, 
    doc, updateDoc 
} from 'firebase/firestore';
import { 
    EXAM_STUDENTS, 
    ALL_TESTS,
    COLLEGE_INFO,
    NEXT_STUDENT_START,
    getActiveTestFromFirebase,
    setActiveTestInFirebase,
    getCurrentTestId,
    getCurrentTestQuestions,
    getCurrentTestConfig
} from './data.js';

// ==================== DYNAMIC VARIABLES ====================
let EXAM_QUESTIONS = [];
let CURRENT_TEST = {};
let ACTIVE_TEST_ID = 'test1';
let REGISTERED_STUDENTS = [];

// ==================== STATE MANAGEMENT ====================
let currentUser = null;
let currentQuestionIndex = 0;
let userAnswers = [];
let timer = null;
let timeLeft = 0;
let examStartTime = null;
let examEndTime = null;
let examSubmitted = false;

// ==================== DOM REFERENCES ====================
const loginSection = document.getElementById('loginSection');
const registerSection = document.getElementById('registerSection');
const instructionsSection = document.getElementById('instructionsSection');
const loginForm = document.getElementById('loginForm');
const registerForm = document.getElementById('registerForm');
const loginError = document.getElementById('loginError');
const registerError = document.getElementById('registerError');
const startExamBtn = document.getElementById('startExamBtn');
const showRegisterBtn = document.getElementById('showRegisterBtn');
const backToLoginBtn = document.getElementById('backToLoginBtn');

// ==================== INITIALIZE ====================
(async () => {
    try {
        const testId = await getActiveTestFromFirebase();
        ACTIVE_TEST_ID = testId;
        EXAM_QUESTIONS = getCurrentTestQuestions();
        CURRENT_TEST = getCurrentTestConfig();
        userAnswers = new Array(EXAM_QUESTIONS.length).fill(null);
        await loadRegisteredStudents();
        console.log('📝 Loaded Test:', CURRENT_TEST.name);
        console.log('👥 Registered Students:', REGISTERED_STUDENTS.length);
    } catch (error) {
        console.error('❌ Init error:', error);
        ACTIVE_TEST_ID = 'test1';
        EXAM_QUESTIONS = ALL_TESTS['test1'].questions;
        CURRENT_TEST = ALL_TESTS['test1'];
        userAnswers = new Array(EXAM_QUESTIONS.length).fill(null);
    }
})();

// ==================== LOAD REGISTERED STUDENTS ====================
async function loadRegisteredStudents() {
    try {
        const q = query(collection(db, 'registered-students'), orderBy('registeredAt', 'desc'));
        const querySnapshot = await getDocs(q);
        REGISTERED_STUDENTS = [];
        querySnapshot.forEach((doc) => {
            REGISTERED_STUDENTS.push({ id: doc.id, ...doc.data() });
        });
        console.log('✅ Registered students loaded:', REGISTERED_STUDENTS.length);
    } catch (error) {
        console.error('Error loading registered students:', error);
    }
}

// ==================== UPDATE INSTRUCTIONS ====================
function updateInstructionsWithTestInfo() {
    const testInfo = document.getElementById('testInfo');
    if (testInfo) {
        testInfo.innerHTML = `
            <strong>🏥 ${COLLEGE_INFO.name}</strong><br>
            <strong>📝 Test:</strong> ${CURRENT_TEST.name} 
            | <strong>Questions:</strong> ${CURRENT_TEST.totalQuestions} 
            | <strong>Time:</strong> ${CURRENT_TEST.timeLimit} minutes
        `;
    }
    const totalQuestionsDisplay = document.getElementById('totalQuestionsDisplay');
    if (totalQuestionsDisplay) totalQuestionsDisplay.textContent = CURRENT_TEST.totalQuestions;
    const timeLimitDisplay = document.getElementById('timeLimitDisplay');
    if (timeLimitDisplay) timeLimitDisplay.textContent = CURRENT_TEST.timeLimit;
}

// ==================== SHOW REGISTER FORM ====================
if (showRegisterBtn) {
    showRegisterBtn.addEventListener('click', function(e) {
        e.preventDefault();
        if (loginSection) loginSection.style.display = 'none';
        if (registerSection) registerSection.style.display = 'block';
    });
}

// ==================== BACK TO LOGIN ====================
if (backToLoginBtn) {
    backToLoginBtn.addEventListener('click', function(e) {
        e.preventDefault();
        if (registerSection) registerSection.style.display = 'none';
        if (loginSection) loginSection.style.display = 'block';
    });
}

// ============================================================
// 🔥 LOGIN WITH ADMIN APPROVAL CHECK
// ============================================================
// Rules:
// 1. Student must have registered (in registered-students)
// 2. Student status must be "approved" (admin approved)
// 3. Only then login allowed
// ============================================================

if (loginForm) {
    loginForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        const username = document.getElementById('username').value.trim();
        const password = document.getElementById('password').value.trim();

        console.log('🔐 Login attempt:', username);

        // ==================== ADMIN LOGIN ====================
        if (username === 'admin' && password === 'admin123') {
            localStorage.setItem('adminLoggedIn', 'true');
            window.location.href = 'admin/dashboard.html';
            return;
        }

        // ==================== CHECK 1: IS STUDENT REGISTERED? ====================
        const registeredStudent = REGISTERED_STUDENTS.find(s => 
            s.username === username && s.password === password
        );

        if (!registeredStudent) {
            loginError.innerHTML = `
                ⚠️ <strong>Registration Required!</strong><br>
                Aap ne abhi register nahi kiya. Pehle "Register" button par click karke form fill karein.
            `;
            loginError.style.display = 'block';
            console.log('❌ Not registered:', username);
            return;
        }

        // ==================== CHECK 2: IS ADMIN APPROVED? ====================
        if (registeredStudent.status === 'pending') {
            loginError.innerHTML = `
                ⏳ <strong>Waiting for Admin Approval!</strong><br>
                Aapka registration admin ke paas hai. Approval ke baad hi login ho sakta hai.<br>
                <small>Please wait for admin to verify your payment and approve.</small>
            `;
            loginError.style.display = 'block';
            console.log('⏳ Pending approval:', username);
            return;
        }

        if (registeredStudent.status === 'rejected') {
            loginError.innerHTML = `
                ❌ <strong>Registration Rejected!</strong><br>
                Aapka registration admin ne reject kar diya hai.<br>
                <small>Please contact admin for more information.</small>
            `;
            loginError.style.display = 'block';
            console.log('❌ Rejected:', username);
            return;
        }

        // ==================== CHECK 3: VERIFY CREDENTIALS ====================
        if (registeredStudent.status === 'approved') {
            // Find student in pre-registered list
            let student = EXAM_STUDENTS.find(s => 
                s.username === username && s.password === password
            );

            // If not found, use registered student data
            if (!student) {
                student = {
                    name: registeredStudent.name,
                    username: registeredStudent.username,
                    password: registeredStudent.password
                };
            }

            console.log('✅ Approved student login:', student.name);
            await handleSuccessfulLogin(student);
        } else {
            loginError.textContent = 'Invalid username or password. Please try again.';
            loginError.style.display = 'block';
        }
    });
}

// ==================== HANDLE SUCCESSFUL LOGIN ====================
async function handleSuccessfulLogin(student) {
    currentUser = student;
    localStorage.setItem('examUser', JSON.stringify(student));
    
    try {
        await getActiveTestFromFirebase();
        CURRENT_TEST = getCurrentTestConfig();
        EXAM_QUESTIONS = getCurrentTestQuestions();
    } catch (error) {
        console.log('Using cached test');
    }
    
    if (loginSection) loginSection.style.display = 'none';
    if (registerSection) registerSection.style.display = 'none';
    if (instructionsSection) instructionsSection.style.display = 'block';
    if (loginError) loginError.style.display = 'none';
    
    const welcomeMsg = document.getElementById('welcomeMessage');
    if (welcomeMsg) welcomeMsg.textContent = `Welcome, ${student.name}!`;
    
    updateInstructionsWithTestInfo();
    console.log('✅ Login successful:', student.name);
}

// ============================================================
// 🔥 REGISTRATION FORM - AUTO MATCH + PENDING STATUS
// ============================================================
// Logic:
// 1. Student form fill kare (Name + Father Name)
// 2. System checks if Name matches pre-registered list
// 3. If MATCH → Auto-assign username/password, status = "pending"
// 4. If NO MATCH → Add as new student, status = "pending"
// 5. Admin approval required in both cases
// ============================================================

if (registerForm) {
    registerForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        const studentName = document.getElementById('regName').value.trim();
        const fatherName = document.getElementById('regFather').value.trim();
        const phone = document.getElementById('regPhone').value.trim();
        const tid = document.getElementById('regTid').value.trim();
        
        console.log('📝 Registration:', studentName);
        
        // Validation
        if (!studentName || !fatherName || !phone || !tid) {
            registerError.textContent = 'Please fill all fields!';
            registerError.style.display = 'block';
            return;
        }
        
        if (!/^03\d{9}$/.test(phone)) {
            registerError.textContent = 'Please enter valid phone number (03XXXXXXXXX)';
            registerError.style.display = 'block';
            return;
        }

        // Check if already registered
        const alreadyRegistered = REGISTERED_STUDENTS.find(s => 
            s.name.toLowerCase() === studentName.toLowerCase()
        );
        
        if (alreadyRegistered) {
            if (alreadyRegistered.status === 'approved') {
                registerError.textContent = 'You are already registered and approved! Please login.';
            } else if (alreadyRegistered.status === 'pending') {
                registerError.textContent = 'Your registration is pending approval. Please wait.';
            } else {
                registerError.textContent = 'Your registration was rejected. Contact admin.';
            }
            registerError.style.display = 'block';
            return;
        }
        
        try {
            const btn = registerForm.querySelector('button[type="submit"]');
            btn.textContent = '⏳ Submitting...';
            btn.disabled = true;

            // ============================================================
            // STEP 1: Check if student matches pre-registered list
            // ============================================================
            const matchedStudent = EXAM_STUDENTS.find(s => 
                s.name.toLowerCase() === studentName.toLowerCase()
            );

            if (matchedStudent) {
                // ✅ MATCH FOUND - Pre-registered student
                // Auto-assign existing username/password
                // Status = PENDING (Admin approval required)
                console.log('✅ Matched with pre-registered:', matchedStudent.name);
                
                await addDoc(collection(db, 'registered-students'), {
                    name: matchedStudent.name,
                    fatherName: fatherName,
                    phone: phone,
                    tid: tid,
                    username: matchedStudent.username,
                    password: matchedStudent.password,
                    jazzCashNumber: COLLEGE_INFO.jazzCash,
                    examFee: COLLEGE_INFO.examFee,
                    status: 'pending', // ⚠️ PENDING until admin approves
                    type: 'existing',
                    registeredAt: new Date().toISOString(),
                    registeredTimestamp: serverTimestamp(),
                    approvedAt: null,
                    approvedBy: null
                });
                
                alert(`✅ Registration Submitted!\n\nName: ${matchedStudent.name}\nUsername: ${matchedStudent.username}\nPassword: ${matchedStudent.password}\n\n⏳ Please wait for ADMIN APPROVAL.\n\nAdmin will verify your payment (Rs. ${COLLEGE_INFO.examFee}) and approve your account.\nAfter approval, you can login.`);
                
                await loadRegisteredStudents();
                
                registerForm.reset();
                if (registerSection) registerSection.style.display = 'none';
                if (loginSection) loginSection.style.display = 'block';
                
            } else {
                // ❌ NO MATCH - New student
                // Add with pending status
                console.log('⚠️ New student - Admin approval required');
                
                await addDoc(collection(db, 'registered-students'), {
                    name: studentName,
                    fatherName: fatherName,
                    phone: phone,
                    tid: tid,
                    username: `pending_${Date.now()}`, // Temporary
                    password: `pending_${Date.now()}`,
                    jazzCashNumber: COLLEGE_INFO.jazzCash,
                    examFee: COLLEGE_INFO.examFee,
                    status: 'pending',
                    type: 'new',
                    registeredAt: new Date().toISOString(),
                    registeredTimestamp: serverTimestamp(),
                    approvedAt: null,
                    approvedBy: null
                });
                
                alert(`✅ Registration Submitted!\n\nName: ${studentName}\nFee: Rs. ${COLLEGE_INFO.examFee}\nJazzCash: ${COLLEGE_INFO.jazzCash}\nTID: ${tid}\n\n⏳ Please wait for ADMIN APPROVAL.\n\nAdmin will verify your payment and assign your username/password.`);
                
                await loadRegisteredStudents();
                
                registerForm.reset();
                if (registerSection) registerSection.style.display = 'none';
                if (loginSection) loginSection.style.display = 'block';
            }
            
        } catch (error) {
            console.error('Error:', error);
            registerError.textContent = 'Error submitting form. Please try again.';
            registerError.style.display = 'block';
            
            const btn = registerForm.querySelector('button[type="submit"]');
            btn.textContent = '✅ Register';
            btn.disabled = false;
        }
    });
}

// ==================== START EXAM ====================
if (startExamBtn) {
    startExamBtn.addEventListener('click', () => {
        localStorage.setItem('examStarted', 'true');
        window.location.href = 'student/test.html';
    });
}

// ==================== EXAM PAGE ====================
if (window.location.pathname.includes('test.html')) {
    (async () => {
        await getActiveTestFromFirebase();
        EXAM_QUESTIONS = getCurrentTestQuestions();
        CURRENT_TEST = getCurrentTestConfig();
        ACTIVE_TEST_ID = getCurrentTestId();
        userAnswers = new Array(EXAM_QUESTIONS.length).fill(null);
        timeLeft = CURRENT_TEST.timeLimit * 60;
        
        const userData = JSON.parse(localStorage.getItem('examUser'));
        if (!userData) {
            window.location.href = '../index.html';
        }

        currentUser = userData;
        document.getElementById('studentNameDisplay').textContent = currentUser.name;
        document.getElementById('totalQNum').textContent = EXAM_QUESTIONS.length;
        
        const testNameDisplay = document.getElementById('testNameDisplay');
        if (testNameDisplay) testNameDisplay.textContent = CURRENT_TEST.name;

        displayQuestion(0);
        startTimer();

        document.getElementById('prevBtn')?.addEventListener('click', () => navigateQuestion(-1));
        document.getElementById('nextBtn')?.addEventListener('click', () => navigateQuestion(1));
        document.getElementById('submitBtn')?.addEventListener('click', submitExam);
    })();
}

function displayQuestion(index) {
    if (index < 0 || index >= EXAM_QUESTIONS.length) return;

    const question = EXAM_QUESTIONS[index];
    document.getElementById('currentQNum').textContent = index + 1;
    document.getElementById('questionText').textContent = question.question;
    document.getElementById('progressFill').style.width = `${((index + 1) / EXAM_QUESTIONS.length) * 100}%`;

    const optionsContainer = document.getElementById('optionsContainer');
    optionsContainer.innerHTML = '';

    const optionKeys = ['A', 'B', 'C', 'D', 'E'];
    optionKeys.forEach((key) => {
        if (question.options[key]) {
            const div = document.createElement('div');
            div.className = 'option-item';
            if (userAnswers[index] === key) div.classList.add('selected');
            div.textContent = `${key}. ${question.options[key]}`;
            div.addEventListener('click', () => selectOption(index, key));
            optionsContainer.appendChild(div);
        }
    });

    currentQuestionIndex = index;
    updateButtons();
}

function selectOption(questionIndex, optionKey) {
    userAnswers[questionIndex] = optionKey;
    displayQuestion(questionIndex);
}

function navigateQuestion(direction) {
    const newIndex = currentQuestionIndex + direction;
    if (newIndex >= 0 && newIndex < EXAM_QUESTIONS.length) {
        displayQuestion(newIndex);
    }
}

function updateButtons() {
    document.getElementById('prevBtn').disabled = currentQuestionIndex === 0;
    document.getElementById('nextBtn').disabled = currentQuestionIndex === EXAM_QUESTIONS.length - 1;
}

function startTimer() {
    const timerDisplay = document.getElementById('timerDisplay');
    examStartTime = new Date();

    timer = setInterval(() => {
        timeLeft--;
        const minutes = Math.floor(timeLeft / 60);
        const seconds = timeLeft % 60;
        timerDisplay.textContent = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;

        if (timeLeft <= 0) {
            clearInterval(timer);
            alert('Time is up!');
            submitExam();
        }
    }, 1000);
}

async function submitExam() {
    if (examSubmitted) return;
    
    const unanswered = userAnswers.filter(a => a === null).length;
    if (unanswered > 0) {
        if (!confirm(`You have ${unanswered} unanswered questions. Submit?`)) return;
    }

    examSubmitted = true;
    clearInterval(timer);
    examEndTime = new Date();
    const timeTaken = Math.floor((examEndTime - examStartTime) / 1000);

    let correct = 0;
    EXAM_QUESTIONS.forEach((q, index) => {
        if (userAnswers[index] === q.correct) correct++;
    });

    const total = EXAM_QUESTIONS.length;
    const percentage = ((correct / total) * 100).toFixed(2);
    const passFail = percentage >= 50 ? 'Pass' : 'Fail';

    const resultData = {
        studentName: currentUser.name,
        username: currentUser.username,
        testId: ACTIVE_TEST_ID,
        testName: CURRENT_TEST.name,
        score: correct,
        totalQuestions: total,
        percentage: parseFloat(percentage),
        passFail: passFail,
        examDate: new Date().toLocaleDateString(),
        timeTaken: timeTaken,
        submittedAt: new Date().toISOString(),
        college: COLLEGE_INFO.name
    };

    localStorage.setItem('examResult', JSON.stringify(resultData));

    try {
        await addDoc(collection(db, 'exam-results'), {
            ...resultData,
            submittedAt: serverTimestamp()
        });
        alert('✅ Result Saved Successfully!');
    } catch (error) {
        console.error('Error:', error);
        alert('⚠️ Saved locally');
    }
    
    window.location.href = 'result.html';
}

async function getAllResults() {
    try {
        const q = query(collection(db, 'exam-results'), orderBy('submittedAt', 'desc'));
        const querySnapshot = await getDocs(q);
        const results = [];
        querySnapshot.forEach((doc) => {
            results.push({ id: doc.id, ...doc.data() });
        });
        return results;
    } catch (error) {
        console.error('Error:', error);
        return [];
    }
}

// ==================== RESULT PAGE ====================
if (window.location.pathname.includes('result.html')) {
    const resultData = JSON.parse(localStorage.getItem('examResult'));
    if (!resultData) {
        window.location.href = '../index.html';
    }

    const resultContainer = document.getElementById('resultContent');
    
    resultContainer.innerHTML = `
        <h2>📊 Your Exam Results</h2>
        <div style="background:#e8f4fd; padding:12px; border-radius:10px; margin-bottom:15px;">
            <p style="margin:0; font-weight:bold; color:#1a2a6c;">🏥 ${resultData.college || 'College of Nursing'}</p>
        </div>
        <div class="result-item"><span class="label">Student Name:</span><span class="value">${resultData.studentName}</span></div>
        <div class="result-item"><span class="label">Username:</span><span class="value">${resultData.username}</span></div>
        <div class="result-item"><span class="label">Test:</span><span class="value">${resultData.testName || 'N/A'}</span></div>
        <div class="result-item"><span class="label">Score:</span><span class="value">${resultData.score} / ${resultData.totalQuestions}</span></div>
        <div class="result-item"><span class="label">Percentage:</span><span class="value">${resultData.percentage}%</span></div>
        <div class="result-item"><span class="label">Status:</span><span class="value ${resultData.passFail === 'Pass' ? 'pass' : 'fail'}">${resultData.passFail === 'Pass' ? '✅ PASS' : '❌ FAIL'}</span></div>
        <div class="result-item"><span class="label">Time Taken:</span><span class="value">${Math.floor(resultData.timeTaken / 60)}m ${resultData.timeTaken % 60}s</span></div>
        <div class="result-item"><span class="label">Date:</span><span class="value">${resultData.examDate}</span></div>
    `;

    document.getElementById('logoutBtn')?.addEventListener('click', () => {
        localStorage.clear();
        window.location.href = '../index.html';
    });
}

// ============================================================
// 🔥 ADMIN DASHBOARD - APPROVAL SYSTEM
// ============================================================
if (window.location.pathname.includes('dashboard.html')) {
    const adminLoggedIn = localStorage.getItem('adminLoggedIn');
    if (!adminLoggedIn) {
        const password = prompt('Enter admin password:');
        if (password === 'admin123') {
            localStorage.setItem('adminLoggedIn', 'true');
        } else {
            alert('Invalid admin password!');
            window.location.href = '../index.html';
        }
    }

    (async () => {
        await getActiveTestFromFirebase();
        loadTestManagement();
        loadTestFilterOptions();
        loadTestLegend();
        await loadAdminResults();
        await loadRegistrationRequests();
    })();

    document.getElementById('refreshBtn')?.addEventListener('click', loadAdminResults);
    document.getElementById('searchInput')?.addEventListener('input', filterResults);
    document.getElementById('sortSelect')?.addEventListener('change', sortResults);
    document.getElementById('testFilterSelect')?.addEventListener('change', filterByTest);
    document.getElementById('refreshRegBtn')?.addEventListener('click', loadRegistrationRequests);
    document.getElementById('adminLogoutBtn')?.addEventListener('click', () => {
        localStorage.removeItem('adminLoggedIn');
        window.location.href = '../index.html';
    });

    document.getElementById('updateTestBtn')?.addEventListener('click', async () => {
        const select = document.getElementById('activeTestSelect');
        const testId = select.value;
        const testName = ALL_TESTS[testId]?.name || '';
        
        if (confirm(`Switch to "${testName}"?`)) {
            const btn = document.getElementById('updateTestBtn');
            btn.textContent = '⏳ Switching...';
            btn.disabled = true;
            
            const success = await setActiveTestInFirebase(testId);
            
            if (success) {
                alert(`✅ Test Switched!\n\nActive Test: "${testName}"`);
                window.location.reload();
            } else {
                alert('❌ Error');
                btn.textContent = '🔄 Switch Test';
                btn.disabled = false;
            }
        }
    });
}

let allResults = [];
let allRegistrations = [];

function loadTestManagement() {
    const select = document.getElementById('activeTestSelect');
    if (select) {
        const currentActive = getCurrentTestId();
        select.innerHTML = '';
        Object.keys(ALL_TESTS).forEach(key => {
            const test = ALL_TESTS[key];
            const option = document.createElement('option');
            option.value = key;
            const activeStatus = key === currentActive ? ' ✅ (Active)' : '';
            option.textContent = `${test.name} (${test.totalQuestions} Qs, ${test.timeLimit} min)${activeStatus}`;
            if (key === currentActive) option.selected = true;
            select.appendChild(option);
        });
    }
    
    const statusEl = document.getElementById('testStatus');
    if (statusEl) {
        const currentActive = getCurrentTestId();
        const test = ALL_TESTS[currentActive];
        statusEl.textContent = `✅ ${test.name} Active`;
    }
}

function loadTestFilterOptions() {
    const filterSelect = document.getElementById('testFilterSelect');
    if (filterSelect) {
        filterSelect.innerHTML = '<option value="all">📊 All Tests</option>';
        Object.keys(ALL_TESTS).forEach(key => {
            const test = ALL_TESTS[key];
            const option = document.createElement('option');
            option.value = key;
            option.textContent = test.name;
            filterSelect.appendChild(option);
        });
    }
}

function loadTestLegend() {
    const legendDiv = document.getElementById('testLegend');
    if (!legendDiv) return;
    
    const colors = ['#d4edda', '#cce5ff', '#fff3cd', '#e8d5f5', '#fce4ec', '#d1ecf1'];
    const textColors = ['#155724', '#004085', '#856404', '#6c3483', '#880e4f', '#0c5460'];
    
    let legendHTML = '<strong>Test Legend:</strong> ';
    
    Object.keys(ALL_TESTS).forEach((key, index) => {
        const test = ALL_TESTS[key];
        legendHTML += `
            <span style="display:inline-block; padding:2px 10px; border-radius:12px; font-size:0.75rem; 
                         font-weight:600; background:${colors[index % colors.length]}; 
                         color:${textColors[index % textColors.length]}; margin:2px;">
                ${test.name}
            </span>
        `;
    });
    
    legendDiv.innerHTML = `<p style="margin:0; font-size:0.9rem; color:#6c757d;">${legendHTML}</p>`;
}

async function loadAdminResults() {
    const tbody = document.getElementById('resultsBody');
    if (!tbody) return;
    tbody.innerHTML = '<tr><td colspan="9">Loading results...</td></tr>';

    try {
        const allFirebaseResults = await getAllResults();
        const testFilter = document.getElementById('testFilterSelect')?.value || 'all';
        
        let filteredResults = allFirebaseResults;
        if (testFilter !== 'all') {
            filteredResults = allFirebaseResults.filter(r => r.testId === testFilter);
        }
        
        allResults = filteredResults;
        displayResults(allResults);
        
        const countMsg = document.getElementById('resultCount');
        if (countMsg) {
            countMsg.innerHTML = `📊 Total Results: <strong>${filteredResults.length}</strong>`;
        }
    } catch (error) {
        tbody.innerHTML = '<tr><td colspan="9">Error</td></tr>';
        console.error(error);
    }
}

function displayResults(results) {
    const tbody = document.getElementById('resultsBody');
    if (results.length === 0) {
        tbody.innerHTML = '<tr><td colspan="9">No results found</td></tr>';
        return;
    }

    const colors = ['#d4edda', '#cce5ff', '#fff3cd', '#e8d5f5', '#fce4ec', '#d1ecf1'];
    const textColors = ['#155724', '#004085', '#856404', '#6c3483', '#880e4f', '#0c5460'];
    const testKeys = Object.keys(ALL_TESTS);

    tbody.innerHTML = results.map((result, index) => {
        const testIndex = testKeys.indexOf(result.testId);
        const bgColor = testIndex >= 0 ? colors[testIndex % colors.length] : '#f8d7da';
        const textColor = testIndex >= 0 ? textColors[testIndex % textColors.length] : '#721c24';
        
        return `
            <tr>
                <td>${index + 1}</td>
                <td><strong>${result.studentName || 'N/A'}</strong></td>
                <td>${result.username || 'N/A'}</td>
                <td><span style="display:inline-block; padding:2px 10px; border-radius:12px; font-size:0.75rem; font-weight:600; background:${bgColor}; color:${textColor};">${result.testName || 'N/A'}</span></td>
                <td>${result.score || 0}/${result.totalQuestions || 0}</td>
                <td>${result.percentage || 0}%</td>
                <td><span class="status-badge ${result.passFail === 'Pass' ? 'status-pass' : 'status-fail'}">${result.passFail || 'N/A'}</span></td>
                <td>${result.examDate || 'N/A'}</td>
                <td>${result.timeTaken ? `${Math.floor(result.timeTaken / 60)}m ${result.timeTaken % 60}s` : 'N/A'}</td>
            </tr>
        `;
    }).join('');
}

function filterResults() {
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();
    const filtered = allResults.filter(r => 
        (r.studentName?.toLowerCase().includes(searchTerm) || 
         r.username?.toLowerCase().includes(searchTerm))
    );
    displayResults(filtered);
}

function filterByTest() {
    loadAdminResults();
}

function sortResults() {
    const sortType = document.getElementById('sortSelect').value;
    let sorted = [...allResults];
    switch(sortType) {
        case 'highest': sorted.sort((a, b) => (b.score || 0) - (a.score || 0)); break;
        case 'lowest': sorted.sort((a, b) => (a.score || 0) - (b.score || 0)); break;
        case 'latest': sorted.sort((a, b) => new Date(b.submittedAt) - new Date(a.submittedAt)); break;
    }
    displayResults(sorted);
}

// ============================================================
// 🔥 ADMIN - LOAD REGISTRATION REQUESTS
// ============================================================
async function loadRegistrationRequests() {
    const tbody = document.getElementById('registrationsBody');
    if (!tbody) return;
    tbody.innerHTML = '<tr><td colspan="8">Loading...</td></tr>';

    try {
        const q = query(collection(db, 'registered-students'), orderBy('registeredTimestamp', 'desc'));
        const querySnapshot = await getDocs(q);
        allRegistrations = [];
        querySnapshot.forEach((doc) => {
            allRegistrations.push({ id: doc.id, ...doc.data() });
        });
        
        displayRegistrations(allRegistrations);
        
        const countMsg = document.getElementById('registrationCount');
        if (countMsg) {
            const pending = allRegistrations.filter(r => r.status === 'pending').length;
            const approved = allRegistrations.filter(r => r.status === 'approved').length;
            countMsg.innerHTML = `📋 Total: <strong>${allRegistrations.length}</strong> | ⏳ Pending: <strong style="color:#dc3545;">${pending}</strong> | ✅ Approved: <strong style="color:#28a745;">${approved}</strong>`;
        }
    } catch (error) {
        tbody.innerHTML = '<tr><td colspan="8">Error loading</td></tr>';
        console.error(error);
    }
}

function displayRegistrations(registrations) {
    const tbody = document.getElementById('registrationsBody');
    if (registrations.length === 0) {
        tbody.innerHTML = '<tr><td colspan="8">No registrations</td></tr>';
        return;
    }

    tbody.innerHTML = registrations.map((reg, index) => {
        let statusStyle = '';
        if (reg.status === 'pending') statusStyle = 'background:#fff3cd; color:#856404; padding:4px 12px; border-radius:20px; font-weight:600;';
        else if (reg.status === 'approved') statusStyle = 'background:#d4edda; color:#155724; padding:4px 12px; border-radius:20px; font-weight:600;';
        else statusStyle = 'background:#f8d7da; color:#721c24; padding:4px 12px; border-radius:20px; font-weight:600;';
        
        return `
            <tr>
                <td>${index + 1}</td>
                <td><strong>${reg.name || 'N/A'}</strong></td>
                <td>${reg.fatherName || 'N/A'}</td>
                <td>${reg.phone || 'N/A'}</td>
                <td>${reg.tid || 'N/A'}</td>
                <td><span style="${statusStyle}">${reg.status || 'pending'}</span></td>
                <td style="font-size:0.8rem;">${reg.username || 'N/A'}</td>
                <td>
                    ${reg.status === 'pending' ? `
                        <button onclick="approveStudent('${reg.id}')" style="background:#28a745; color:white; border:none; padding:6px 12px; border-radius:6px; cursor:pointer; font-size:0.8rem; margin-right:5px;">✅ Approve</button>
                        <button onclick="rejectStudent('${reg.id}')" style="background:#dc3545; color:white; border:none; padding:6px 12px; border-radius:6px; cursor:pointer; font-size:0.8rem;">❌ Reject</button>
                    ` : `
                        <span style="color:#6c757d; font-size:0.8rem;">${reg.status === 'approved' ? 'Approved ✅' : 'Rejected ❌'}</span>
                    `}
                </td>
            </tr>
        `;
    }).join('');
}

// ============================================================
// 🔥 ADMIN - APPROVE STUDENT
// ============================================================
window.approveStudent = async function(regId) {
    if (!confirm('Approve this student?\n\nThey will be able to login after approval.')) return;
    
    try {
        const reg = allRegistrations.find(r => r.id === regId);
        if (!reg) return;
        
        let username = reg.username;
        let password = reg.password;
        
        // For completely new students, generate new credentials
        if (reg.type === 'new') {
            const approvedCount = allRegistrations.filter(r => r.status === 'approved').length;
            username = `student${NEXT_STUDENT_START + approvedCount}`;
            password = `${NEXT_STUDENT_START + approvedCount}`;
        }
        
        // Update registration status
        const regRef = doc(db, 'registered-students', regId);
        await updateDoc(regRef, {
            status: 'approved',
            username: username,
            password: password,
            approvedAt: new Date().toISOString(),
            approvedBy: 'admin'
        });
        
        alert(`✅ Student Approved!\n\nName: ${reg.name}\nUsername: ${username}\nPassword: ${password}\n\nStudent can now login.`);
        
        await loadRegisteredStudents();
        await loadRegistrationRequests();
        
    } catch (error) {
        console.error('Error:', error);
        alert('❌ Error approving student');
    }
};

// ============================================================
// 🔥 ADMIN - REJECT STUDENT
// ============================================================
window.rejectStudent = async function(regId) {
    if (!confirm('Reject this registration?')) return;
    
    try {
        const regRef = doc(db, 'registered-students', regId);
        await updateDoc(regRef, {
            status: 'rejected',
            rejectedAt: new Date().toISOString(),
            rejectedBy: 'admin'
        });
        
        alert('❌ Registration Rejected');
        await loadRegistrationRequests();
        
    } catch (error) {
        console.error('Error:', error);
        alert('❌ Error rejecting');
    }
};

// ==================== AUTO REDIRECT ====================
if (window.location.pathname === '/' || window.location.pathname.includes('index.html')) {
    const userData = JSON.parse(localStorage.getItem('examUser'));
    const examStarted = localStorage.getItem('examStarted');
    
    if (userData && examStarted === 'true') {
        window.location.href = 'student/test.html';
    }
}

export { };
