// ============================================================
// FIREBASE IMPORTS
// ============================================================
import { db } from './firebase.js';
import { doc, getDoc, setDoc } from 'firebase/firestore';

// ============================================================
// COLLEGE INFORMATION
// ============================================================
export const COLLEGE_INFO = {
    name: 'College of Nursing Female Nawabshah',
    shortName: 'CON Nawabshah',
    location: 'Nawabshah, Sindh',
    currentSession: '2026',
    firebaseProject: 'college-nursing-nawabshah',
    jazzCash: '03234296569',
    examFee: 500
};

// ============================================================
// STUDENTS LIST (Pre-registered 100 Students)
// ============================================================
export const EXAM_STUDENTS = [
    { name: 'NIRMA', username: 'student1', password: '1' },
    { name: 'Farah Naz', username: 'student2', password: '2' },
    { name: 'Ayesha', username: 'student3', password: '3' },
    { name: 'Mehwish', username: 'student4', password: '4' },
    { name: 'Muskan', username: 'student5', password: '5' },
    { name: 'Zoha', username: 'student6', password: '6' },
    { name: 'SONIA SINDHU', username: 'student7', password: '7' },
    { name: 'ISHA', username: 'student8', password: '8' },
    { name: 'Iqra', username: 'student9', password: '9' },
    { name: 'ALIYA', username: 'student10', password: '10' },
    { name: 'Laiba', username: 'student11', password: '11' },
    { name: 'Hira Naseem', username: 'student12', password: '12' },
    { name: 'JAWARIA', username: 'student13', password: '13' },
    { name: 'Bakhtawar', username: 'student14', password: '14' },
    { name: 'Bushra', username: 'student15', password: '15' },
    { name: 'Zahira', username: 'student16', password: '16' },
    { name: 'Iqra', username: 'student17', password: '17' },
    { name: 'Dua', username: 'student18', password: '18' },
    { name: 'Sobia Naz', username: 'student19', password: '19' },
    { name: 'PARVEEN', username: 'student20', password: '20' },
    { name: 'Bibi Amber Naz', username: 'student21', password: '21' },
    { name: 'Benazeer memon', username: 'student22', password: '22' },
    { name: 'Bibi Zainab Naz', username: 'student23', password: '23' },
    { name: 'Isha Riaz', username: 'student24', password: '24' },
    { name: 'Dua', username: 'student25', password: '25' },
    { name: 'Iqra', username: 'student26', password: '26' },
    { name: 'Saira', username: 'student27', password: '27' },
    { name: 'KAJAL', username: 'student28', password: '28' },
    { name: 'Eraj', username: 'student29', password: '29' },
    { name: 'Alishah', username: 'student30', password: '30' },
    { name: 'NAYAB', username: 'student31', password: '31' },
    { name: 'UROOJ AIJAZ', username: 'student32', password: '32' },
    { name: 'Tabeer Naz Rajper', username: 'student33', password: '33' },
    { name: 'Murk Aqsa', username: 'student34', password: '34' },
    { name: 'Bibi Sumiya', username: 'student35', password: '35' },
    { name: 'ASIA', username: 'student36', password: '36' },
    { name: 'Manahil', username: 'student37', password: '37' },
    { name: 'Sumera', username: 'student38', password: '38' },
    { name: 'Samra Naz', username: 'student39', password: '39' },
    { name: 'Farwa', username: 'student40', password: '40' },
    { name: 'Nadia', username: 'student41', password: '41' },
    { name: 'Sasui', username: 'student42', password: '42' },
    { name: 'Maheen', username: 'student43', password: '43' },
    { name: 'Rozina', username: 'student44', password: '44' },
    { name: 'Muskan', username: 'student45', password: '45' },
    { name: 'Sumaiya', username: 'student46', password: '46' },
    { name: 'Bisma', username: 'student47', password: '47' },
    { name: 'Laiba', username: 'student48', password: '48' },
    { name: 'Rabia', username: 'student49', password: '49' },
    { name: 'Ambar Mehak', username: 'student50', password: '50' },
    { name: 'TAHSEEN UL REHMAN', username: 'student51', password: '51' },
    { name: 'Hira', username: 'student52', password: '52' },
    { name: 'Rabia', username: 'student53', password: '53' },
    { name: 'Almas', username: 'student54', password: '54' },
    { name: 'Kanwal Gul', username: 'student55', password: '55' },
    { name: 'Muskan', username: 'student56', password: '56' },
    { name: 'Mahwish', username: 'student57', password: '57' },
    { name: 'Tanzeem Fatima', username: 'student58', password: '58' },
    { name: 'Mehak Ahmed', username: 'student59', password: '59' },
    { name: 'Kirpa Devi', username: 'student60', password: '60' },
    { name: 'Shoumaila', username: 'student61', password: '61' },
    { name: 'Aaisha', username: 'student62', password: '62' },
    { name: 'Zainab Kareez Memon', username: 'student63', password: '63' },
    { name: 'SANAM', username: 'student64', password: '64' },
    { name: 'Nisha', username: 'student65', password: '65' },
    { name: 'SHAFA', username: 'student66', password: '66' },
    { name: 'Laiba urooj', username: 'student67', password: '67' },
    { name: 'Fozia Zahid', username: 'student68', password: '68' },
    { name: 'Adeeba', username: 'student69', password: '69' },
    { name: 'Ramsha Akhtar', username: 'student70', password: '70' },
    { name: 'Sindhu', username: 'student71', password: '71' },
    { name: 'Bisma', username: 'student72', password: '72' },
    { name: 'Kanwal Soomro', username: 'student73', password: '73' },
    { name: 'Rehana', username: 'student74', password: '74' },
    { name: 'Bibi Syeda Sania Shah', username: 'student75', password: '75' },
    { name: 'Shumaila', username: 'student76', password: '76' },
    { name: 'Nargis Naz', username: 'student77', password: '77' },
    { name: 'Alisha', username: 'student78', password: '78' },
    { name: 'Sana Zahra', username: 'student79', password: '79' },
    { name: 'REEMA KHOSO', username: 'student80', password: '80' },
    { name: 'FATIMA', username: 'student81', password: '81' },
    { name: 'Tahira', username: 'student82', password: '82' },
    { name: 'Aqsa Bibi', username: 'student83', password: '83' },
    { name: 'Ghullam Batool Bhan', username: 'student84', password: '84' },
    { name: 'Gul Naz', username: 'student85', password: '85' },
    { name: 'Najma', username: 'student86', password: '86' },
    { name: 'SANOBER', username: 'student87', password: '87' },
    { name: 'Aman Fatima', username: 'student88', password: '88' },
    { name: 'MEHNAZ', username: 'student89', password: '89' },
    { name: 'REEHANA', username: 'student90', password: '90' },
    { name: 'FATIMA ARAEN', username: 'student91', password: '91' },
    { name: 'Javeria Abid', username: 'student92', password: '92' },
    { name: 'Bibi Mehar Ul Nisa', username: 'student93', password: '93' },
    { name: 'Sumaya', username: 'student94', password: '94' },
    { name: 'Khadeeja', username: 'student95', password: '95' },
    { name: 'Saiqa', username: 'student96', password: '96' },
    { name: 'ALISHBA', username: 'student97', password: '97' },
    { name: 'Rizwana', username: 'student98', password: '98' },
    { name: 'Nimra', username: 'student99', password: '99' },
    { name: 'Sadaf Naz', username: 'student100', password: '100' }
];

// ============================================================
// TEST 1: Fundamental of Nursing -I (30 Original + FON Bank)
// ============================================================
const TEST1_QUESTIONS = [
    // ---------- ORIGINAL 30 QUESTIONS ----------
    { id: 1, question: "The one of the primary roles of a professional nurse:", options: { A: "To prescribe medication", B: "To provide physical and emotional support to patients", C: "To manage hospital administration", D: "To conduct surgical procedures" }, correct: "B" },
    { id: 2, question: "The following statement is a TRUE responsibility of professional nurses in terms of health promotion:", options: { A: "Educating people about hygiene, nutrition, and healthy lifestyle", B: "Performing surgeries", C: "Diagnosing diseases without doctor's supervision", D: "Prescribing medication" }, correct: "A" },
    { id: 3, question: "The primary role of a nurse is in healthcare:", options: { A: "To diagnose illnesses", B: "To take care of people who are sick, injured, and need health support", C: "To prescribe medication", D: "To perform surgeries" }, correct: "B" },
    { id: 4, question: "The nursing considered in the context of healthcare is:", options: { A: "A secondary support system", B: "The backbone of health care", C: "An administrative role", D: "A specialized field" }, correct: "B" },
    { id: 5, question: "The nurses can typically perform his/her work at", options: { A: "Only in hospitals", B: "Only in clinics", C: "Hospitals, clinics, communities, and disaster situation", D: "Only in private practices" }, correct: "C" },
    { id: 6, question: "The nurses provide to patients:", options: { A: "Direct patient care, promote health, and prevent illness", B: "Only medication management", C: "Only surgical assistance", D: "Only administrative support" }, correct: "A" },
    { id: 7, question: "The primary otherness/difference between an occupation and a profession:", options: { A: "Level of pay", B: "Requirement for formal qualifications and training", C: "Type of work involved", D: "Level of supervision" }, correct: "B" },
    { id: 8, question: "The following is an example of a Nursing profession:", options: { A: "Doctor", B: "Driver/factory worker", C: "The Care provider to sick", D: "Shopkeeper/laborer" }, correct: "C" },
    { id: 9, question: "The following characteristic is typically associated with a Nurse profession:", options: { A: "Variable commitment", B: "Supervised work environment", C: "Strong commitment and autonomy", D: "Lack of formal qualifications" }, correct: "C" },
    { id: 10, question: "The one of the primary roles of a nurse as a teacher:", options: { A: "To administer medication", B: "To teach patients about healthy lifestyles", C: "To perform surgical procedures", D: "To manage hospital administration" }, correct: "B" },
    { id: 11, question: "The nurses on duty instruct families on discharge of patient:", options: { A: "How to perform surgical procedures", B: "How to care for a loved one at home", C: "How to manage hospital budgets", D: "How to prescribe medication" }, correct: "B" },
    { id: 12, question: "A nurse who coordinates the activities of other healthcare team members is acting as a:", options: { A: "Counselor", B: "Rehabilitator", C: "Manager", D: "Communicator" }, correct: "C" },
    { id: 13, question: "The sensitive questions should be asked during history taking:", options: { A: "In a public area to gather more information quickly", B: "In a quiet and private space", C: "In front of other patients", D: "Over the phone without ensuring privacy" }, correct: "B" },
    { id: 14, question: "The health care providers should carefully communicate with patients during history taking:", options: { A: "Using complex medical jargon", B: "Interrupting frequently to clarify doubts", C: "Using respectful and polite language, and listening actively", D: "Avoiding eye contact" }, correct: "C" },
    { id: 15, question: "The role and impact of prayers and Holy-Quran for Muslim patients during illness are:", options: { A: "Avoid prayer during illness", B: "Seek comfort, strongness and strength through their faith and spirituality", C: "Consider prayer less important than physical care", D: "Do not believe in the healing power of prayer" }, correct: "B" },
    { id: 16, question: "The healthcare providers should acknowledge a patient's feelings:", options: { A: "By ignoring their emotions", B: "By changing the subject", C: "By using simple statements to acknowledge their feelings", D: "By discussing other patients' cases" }, correct: "C" },
    { id: 17, question: "The assurance should be given to the patients regarding their health issue:", options: { A: "That their information will be shared with others for educational purposes", B: "That their information will be posted online", C: "That their information is private and used only for their care", D: "That their information will be used for research without consent" }, correct: "C" },
    { id: 18, question: "The primary goal of active listening in therapeutic communication is:", options: { A: "To provide immediate solutions to the patient's problems", B: "To interrupt the patient and offer advice", C: "To remain silent throughout the conversation", D: "To pay full attention to the patient's words and emotions" }, correct: "D" },
    { id: 19, question: "The following is an example of a non-therapeutic response:", options: { A: "'You will be fine' (without proof)", B: "'I'm here to listen to you.'", C: "'Can you explain that further?'", D: "'I'm paying attention to what you're saying.'" }, correct: "A" },
    { id: 20, question: "The effect of using non-therapeutic responses on the patient:", options: { A: "It builds trust and reduces anxiety.", B: "It has no impact on the patient's feelings.", C: "It increases stress, fear, or confusion.", D: "It makes the patient feel more relaxed." }, correct: "C" },
    { id: 21, question: "The following is a technique of responding non-therapeutically:", options: { A: "Clarification", B: "Active listening", C: "Under-loading", D: "Silence" }, correct: "C" },
    { id: 22, question: "The consequence of invalidating a patient's emotions:", options: { A: "It makes the patient feel heard and understood.", B: "It reduces trust and stops the patient from sharing openly.", C: "It has no impact on the patient's emotional state.", D: "It increases the patient's confidence." }, correct: "B" },
    { id: 23, question: "The primary purpose of therapeutic communication techniques while taking patient history?", options: { A: "To diagnose the patient quickly", B: "Builds trust and helps gather accurate patient information", C: "To prescribe medication", D: "To discharge the patient" }, correct: "B" },
    { id: 24, question: "The following are a verbal technique used in therapeutic communication:", options: { A: "Using gestures", B: "Maintaining eye contact", C: "Uses words, tone, questions, and therapeutic phrases", D: "Touching the patient" }, correct: "C" },
    { id: 25, question: "An example of a non-verbal technique used in therapeutic communication are", options: { A: "Asking open-ended questions", B: "Uses gestures, facial expressions, eye contact, posture, touch, and other silent cues", C: "Speaking loudly", D: "Ignoring the patient" }, correct: "B" },
    { id: 26, question: "The nurse should be ensured for patient comfort during history taking:", options: { A: "Privacy", B: "Presence of many people", C: "Loud environment", D: "Bright lights" }, correct: "A" },
    { id: 27, question: "Is it important for nurses to introduce himself to the patient?", options: { A: "To make the patient feel uncomfortable", B: "To build up rapport & trust/establish a professional relationship", C: "To ignore the patient's presence", D: "To leave the room" }, correct: "B" },
    { id: 28, question: "Being a professional health care provider, how should you communicate with the patient?", options: { A: "Clearly and softly", B: "Loudly and quickly", C: "Slowly and unclear", D: "All of these" }, correct: "A" },
    { id: 29, question: "No doubts about roles of nurse but, the primary role of a nurse is considered:", options: { A: "A teacher", B: "A rehabilitator", C: "A caregiver", D: "A manager" }, correct: "C" },
    { id: 30, question: "A nurse who protects a client's human rights and legal rights and by keeping their religion or culture in mind as a:", options: { A: "Protector", B: "Manager", C: "Clinical advocate", D: "Communicator" }, correct: "C" },

    // ---------- FON BANK ADDED AFTER Q30 ----------
    // UNIT 1: Nursing History
    { id: 31, question: "Who is considered the founder of modern nursing?", options: { A: "Rufaidah Bint Sa'ad", B: "Elizabeth Fry", C: "Florence Nightingale", D: "Virginia Henderson" }, correct: "C" },
    { id: 32, question: "During which war did Florence Nightingale gain fame for her nursing work?", options: { A: "World War I", B: "Crimean War", C: "American Civil War", D: "Boer War" }, correct: "B" },
    { id: 33, question: "Who was the first Muslim nurse in the Islamic and Eastern world?", options: { A: "Maham", B: "Rufaidah Bint Sa'ad", C: "Phoebe", D: "Wazir Begum" }, correct: "B" },
    { id: 34, question: "In which year was the Pakistan Nursing Council (PNC) established?", options: { A: "1947", B: "1948", C: "1952", D: "1973" }, correct: "B" },
    { id: 35, question: "Which ancient civilization was the first to maintain medical records?", options: { A: "Greek", B: "Roman", C: "Egyptian", D: "Chinese" }, correct: "C" },
    { id: 36, question: "What was the mortality rate of British troops that Florence Nightingale found during the Crimean War?", options: { A: "10%", B: "25%", C: "41%", D: "50%" }, correct: "C" },
    { id: 37, question: "The term 'Lady with the Lamp' is associated with:", options: { A: "Elizabeth Fry", B: "Florence Nightingale", C: "Rufaidah Bint Sa'ad", D: "Dorothea Orem" }, correct: "B" },
    { id: 38, question: "Which historical period saw a shortage of people to care for the sick due to the closure of monasteries and convents?", options: { A: "Middle Ages", B: "Fifteenth to Nineteenth Century", C: "Early Civilization", D: "Twentieth Century" }, correct: "B" },
    { id: 39, question: "When did formal nursing education begin in Pakistan?", options: { A: "Before 1947", B: "After 1947", C: "After 1971", D: "In the 21st century" }, correct: "B" },
    { id: 40, question: "Who is considered the first 'visiting nurse' in ancient Rome?", options: { A: "Florence Nightingale", B: "Phoebe", C: "Rufaidah", D: "Elizabeth Fry" }, correct: "B" },

    // UNIT 2: Roles of the Nurse in Health Care
    { id: 41, question: "Which of the following is a primary role of the nurse as a caregiver?", options: { A: "Prescribing medications", B: "Managing physical needs and preventing illness", C: "Performing surgery", D: "Ordering diagnostic tests" }, correct: "B" },
    { id: 42, question: "What is the role of the nurse as an advocate?", options: { A: "To protect the client's human and legal rights", B: "To teach the client about their illness", C: "To coordinate care with other team members", D: "To manage the nursing unit" }, correct: "A" },
    { id: 43, question: "Ensuring that patients understand their health, illnesses, medications, and treatments is the role of the nurse as a:", options: { A: "Counselor", B: "Teacher", C: "Manager", D: "Researcher" }, correct: "B" },
    { id: 44, question: "A nurse who assists and guides a patient in solving problems or making decisions is acting as a:", options: { A: "Caregiver", B: "Advocate", C: "Counselor", D: "Leader" }, correct: "C" },
    { id: 45, question: "What is a key characteristic of a profession?", options: { A: "A short training period", B: "A code of ethics", C: "Lack of autonomy", D: "No need for ongoing research" }, correct: "B" },
    { id: 46, question: "Which leadership style involves shared leadership between the leader and the group?", options: { A: "Autocratic", B: "Democratic", C: "Transformational", D: "Situational" }, correct: "B" },
    { id: 47, question: "A nurse who collects data to improve nursing practice and provides information for evidence-based practice is acting as a:", options: { A: "Manager", B: "Leader", C: "Researcher", D: "Team player" }, correct: "C" },
    { id: 48, question: "Which of the following is a responsibility of a nurse manager?", options: { A: "Direct patient care only", B: "Planning, organizing, directing, and controlling", C: "Performing lab tests", D: "Prescribing physical therapy" }, correct: "B" },
    { id: 49, question: "What is the term for the internal impulse that allows one to take action or change behaviors?", options: { A: "Motivation", B: "Empathy", C: "Sympathy", D: "Assertiveness" }, correct: "A" },
    { id: 50, question: "A nurse who thinks 'outside the box' and questions why something is being done is demonstrating:", options: { A: "Critical thinking", B: "Leadership", C: "Management", D: "Teaching" }, correct: "A" },

    // UNIT 3: Goals of Nursing and Related Concepts
    { id: 51, question: "According to Maslow's hierarchy of needs, which need is at the base of the pyramid?", options: { A: "Safety", B: "Love and Belonging", C: "Physiological", D: "Esteem" }, correct: "C" },
    { id: 52, question: "On what date is World Health Day celebrated?", options: { A: "7th April", B: "12th May", C: "1st December", D: "10th October" }, correct: "A" },
    { id: 53, question: "Which of the following is a component of the nursing process?", options: { A: "Assessment", B: "Diagnosis", C: "Planning", D: "All of the above" }, correct: "D" },
    { id: 54, question: "What is the definition of a basic human need?", options: { A: "Something that is desired but not essential", B: "Something necessary for an organism to live a healthy life", C: "A luxury item", D: "A self-fulfillment need" }, correct: "B" },
    { id: 55, question: "Which level of Maslow's hierarchy includes self-esteem, confidence, and achievement?", options: { A: "Physiological", B: "Safety", C: "Love and Belonging", D: "Esteem" }, correct: "D" },
    { id: 56, question: "The goal of the nursing process is to:", options: { A: "Diagnose medical diseases", B: "Prescribe medications", C: "Identify and treat actual or potential health problems", D: "Perform surgery" }, correct: "C" },
    { id: 57, question: "Which organization is a specialized, non-political health agency of the United Nations?", options: { A: "WHO", B: "PNC", C: "PNF", D: "ICN" }, correct: "A" },
    { id: 58, question: "Which need is at the top of Maslow's hierarchy?", options: { A: "Safety", B: "Esteem", C: "Self-actualization", D: "Love and Belonging" }, correct: "C" },
    { id: 59, question: "Who defined nursing as 'assisting the individual, sick or well, in the performance of those activities contributing to health'?", options: { A: "Florence Nightingale", B: "Virginia Henderson", C: "ANA", D: "World Health Organization" }, correct: "B" },
    { id: 60, question: "Which of the following is NOT a step in the nursing process?", options: { A: "Assessment", B: "Evaluation", C: "Intervention", D: "Diagnosis" }, correct: "C" },

    // UNIT 4: Communication
    { id: 61, question: "What is the process of sending and receiving a message called?", options: { A: "Interaction", B: "Communication", C: "Feedback", D: "Observation" }, correct: "B" },
    { id: 62, question: "Which of the following is an example of non-verbal communication?", options: { A: "Speaking", B: "Writing", C: "Facial expressions", D: "Reading" }, correct: "C" },
    { id: 63, question: "What is the term for communication that is purposeful and goal-oriented, creating a beneficial outcome for the client?", options: { A: "Social communication", B: "Therapeutic communication", C: "Verbal communication", D: "Non-verbal communication" }, correct: "B" },
    { id: 64, question: "What does the acronym SOLER stand for in active listening?", options: { A: "Sit, Open, Lean, Eye contact, Relax", B: "Stand, Observe, Listen, Explain, Respond", C: "Speak, Open, Look, Engage, Repeat", D: "Sit, Organize, Listen, Evaluate, Report" }, correct: "A" },
    { id: 65, question: "Which of the following is a barrier to effective communication?", options: { A: "Active listening", B: "Empathy", C: "Changing the subject", D: "Clarification" }, correct: "C" },
    { id: 66, question: "Repeating the patient's words to encourage them to give more details is known as:", options: { A: "Paraphrasing", B: "Reflection", C: "Clarification", D: "Summarizing" }, correct: "B" },
    { id: 67, question: "What is the term for the distance observed between two people, often 4 to 12 feet?", options: { A: "Intimate zone", B: "Personal zone", C: "Social zone", D: "Public zone" }, correct: "C" },
    { id: 68, question: "Which phase of nurse-client communication involves setting mutual goals?", options: { A: "Introduction", B: "Working", C: "Termination", D: "Pre-interaction" }, correct: "B" },
    { id: 69, question: "'You said that you don't care but there are tears in your eyes' is an example of which communication technique?", options: { A: "Empathy", B: "Confrontation", C: "Interpretation", D: "Facilitation" }, correct: "B" },
    { id: 70, question: "Which of the following is considered a written method of communication in nursing?", options: { A: "A conversation with a patient", B: "A verbal report to a physician", C: "Charting in the patient's record", D: "A team meeting" }, correct: "C" },

    // UNIT 5: Vital Signs
    { id: 71, question: "Which of the following is NOT a vital sign?", options: { A: "Temperature", B: "Pulse", C: "Blood Pressure", D: "Pain" }, correct: "D" },
    { id: 72, question: "What is the normal oral body temperature range for an adult?", options: { A: "96.6 °F to 98.6 °F", B: "97.6 °F to 99.6 °F", C: "98.6 °F to 100.6 °F", D: "99.6 °F to 101.6 °F" }, correct: "B" },
    { id: 73, question: "Which pulse site is most commonly used to assess the heart rate?", options: { A: "Apical", B: "Carotid", C: "Radial", D: "Femoral" }, correct: "C" },
    { id: 74, question: "A normal adult pulse rate is:", options: { A: "40-60 beats per minute", B: "60-100 beats per minute", C: "100-120 beats per minute", D: "120-140 beats per minute" }, correct: "B" },
    { id: 75, question: "What is the term for a respiratory rate below 12 breaths per minute?", options: { A: "Tachypnea", B: "Bradypnea", C: "Dyspnea", D: "Apnea" }, correct: "B" },
    { id: 76, question: "What does the systolic blood pressure represent?", options: { A: "Pressure in the arteries when the heart is relaxing", B: "Pressure in the arteries when the heart is contracting", C: "The difference between systolic and diastolic pressure", D: "The average pressure in the arteries" }, correct: "B" },
    { id: 77, question: "When taking a blood pressure, the cuff should be placed over the:", options: { A: "Brachial artery", B: "Radial artery", C: "Carotid artery", D: "Femoral artery" }, correct: "A" },
    { id: 78, question: "Which of the following is considered a normal adult blood pressure reading?", options: { A: "80/50 mm Hg", B: "120/80 mm Hg", C: "150/95 mm Hg", D: "180/100 mm Hg" }, correct: "B" },
    { id: 79, question: "What is the term for a heart rate over 100 beats per minute?", options: { A: "Bradycardia", B: "Tachycardia", C: "Arrhythmia", D: "Murmur" }, correct: "B" },
    { id: 80, question: "Pain is often referred to as the:", options: { A: "First vital sign", B: "Fifth vital sign", C: "Primary vital sign", D: "Secondary vital sign" }, correct: "B" },

    // UNIT 6: Skin Management (Pressure Ulcers)
    { id: 81, question: "A pressure ulcer is an injury to the skin and underlying tissue resulting from:", options: { A: "Prolonged pressure", B: "A bacterial infection", C: "An allergic reaction", D: "Exposure to chemicals" }, correct: "A" },
    { id: 82, question: "Which of the following is a common site for pressure ulcers in a patient confined to a bed?", options: { A: "Knees", B: "Elbows", C: "Heels", D: "Abdomen" }, correct: "C" },
    { id: 83, question: "What is the first stage of a pressure ulcer characterized by?", options: { A: "Full-thickness skin loss", B: "Non-blanchable redness of intact skin", C: "Partial-thickness skin loss", D: "Exposed bone, tendon, or muscle" }, correct: "B" },
    { id: 84, question: "Which factor contributes to the development of pressure ulcers by stretching and tearing cell walls and tiny blood vessels?", options: { A: "Pressure", B: "Friction", C: "Shear", D: "Moisture" }, correct: "C" },
    { id: 85, question: "How often should an immobile patient be repositioned to prevent pressure ulcers?", options: { A: "Every 12 hours", B: "Every 4-6 hours", C: "At least every 2 hours", D: "Once a day" }, correct: "C" },
    { id: 86, question: "A patient with incontinence is at a higher risk for pressure ulcers because:", options: { A: "They have poor nutrition", B: "Moisture makes the skin more susceptible to breakdown", C: "They are usually older", D: "They have decreased sensory perception" }, correct: "B" },
    { id: 87, question: "Which stage of pressure ulcer involves full-thickness tissue loss with exposed bone, tendon, or muscle?", options: { A: "Stage I", B: "Stage II", C: "Stage III", D: "Stage IV" }, correct: "D" },
    { id: 88, question: "Which of the following is a nursing intervention to prevent pressure ulcers?", options: { A: "Massaging reddened areas", B: "Using a draw sheet to move patients", C: "Keeping the head of the bed elevated at 90 degrees", D: "Providing a low-protein diet" }, correct: "B" },
    { id: 89, question: "What is a common complication of a pressure ulcer?", options: { A: "Sepsis", B: "Hypertension", C: "Hyperglycemia", D: "Asthma" }, correct: "A" },
    { id: 90, question: "Which of the following is a risk factor for developing pressure ulcers?", options: { A: "Adequate nutrition", B: "Decreased sensory perception", C: "Increased mobility", D: "Youthful age" }, correct: "B" },

    // UNIT 7: Concept of Safety and Risk Management
    { id: 91, question: "What is the probability of exposure to danger, harm, or loss called?", options: { A: "Hazard", B: "Risk", C: "Safety", D: "Accident" }, correct: "B" },
    { id: 92, question: "Which acronym is used to remember the steps for using a fire extinguisher?", options: { A: "PASS", B: "RACE", C: "STOP", D: "DROP" }, correct: "A" },
    { id: 93, question: "In the event of a fire, what does the 'C' in the RACE acronym stand for?", options: { A: "Call", B: "Contain", C: "Confine", D: "Control" }, correct: "C" },
    { id: 94, question: "A patient with a low platelet count is at an increased risk for which safety hazard?", options: { A: "Falls", B: "Bleeding", C: "Infection", D: "Burns" }, correct: "B" },
    { id: 95, question: "Which of the following is a physical hazard in the hospital environment?", options: { A: "Bacteria", B: "Slippery floors", C: "Radiation", D: "Stress" }, correct: "B" },
    { id: 96, question: "When applying restraints, what is a crucial nursing intervention?", options: { A: "Tie the restraint to the side rails", B: "Ensure it is tight to prevent movement", C: "Check circulation and skin integrity frequently", D: "Leave the patient alone to rest" }, correct: "C" },
    { id: 97, question: "Which of the following is a biological hazard for a nurse?", options: { A: "Needle stick injury", B: "Slippery floor", C: "Lifting a heavy patient", D: "Verbal abuse" }, correct: "A" },
    { id: 98, question: "What is the primary purpose of a side rail?", options: { A: "To restrict patient movement", B: "To increase patient mobility and prevent falls", C: "To provide a place to attach restraints", D: "To make the bed look neat" }, correct: "B" },
    { id: 99, question: "To minimize the risk of falls, a nurse should:", options: { A: "Keep the bed in the highest position", B: "Keep the call bell out of the patient's reach", C: "Ensure the floor is clean and dry", D: "Use loose, non-fitting footwear for the patient" }, correct: "C" },
    { id: 100, question: "How should a nurse handle a needle stick injury?", options: { A: "Ignore it if there is no bleeding", B: "Wash the area with soap and water, report immediately, and complete an incident report", C: "Cover it with a band-aid and continue working", D: "Only report it if the patient is known to have an infectious disease" }, correct: "B" },

    // UNIT 8: Concept of Teaching Learning
    { id: 101, question: "What is the first step in the teaching-learning process?", options: { A: "Develop a teaching plan", B: "Identify the learning needs of the patient", C: "Perform health teaching", D: "Evaluate learning" }, correct: "B" },
    { id: 102, question: "Which of the following is a principle of teaching-learning?", options: { A: "Ignore the patient's learning needs", B: "Use a single teaching strategy", C: "Include the patient in planning", D: "Avoid communication" }, correct: "C" },
    { id: 103, question: "A nurse is teaching a patient about insulin administration. What is the best way to evaluate learning?", options: { A: "Ask the patient if they understand", B: "Have the patient demonstrate the procedure", C: "Give the patient a written test", D: "Ask the family if they understood" }, correct: "B" },
    { id: 104, question: "Which factor can affect a patient's ability to learn?", options: { A: "Language", B: "Cognitive level", C: "Cultural differences", D: "All of the above" }, correct: "D" },
    { id: 105, question: "What is the role of the nurse as a teacher?", options: { A: "To provide medical diagnoses", B: "To help patients develop self-care abilities", C: "To prescribe medications", D: "To perform surgery" }, correct: "B" },
    { id: 106, question: "When developing a teaching plan, the nurse should first:", options: { A: "Select teaching strategies", B: "Assess the patient's learning needs", C: "Implement the plan", D: "Evaluate the outcomes" }, correct: "B" },
    { id: 107, question: "Which of the following is an appropriate teaching strategy for a patient with low literacy?", options: { A: "Providing a complex written handout", B: "Using simple verbal instructions and demonstrations", C: "Lecturing for 30 minutes", D: "Giving a textbook to read" }, correct: "B" },
    { id: 108, question: "Health teaching at the clinical site should be:", options: { A: "Based on the nurse's convenience", B: "Individualized to the patient's needs", C: "Given only at discharge", D: "The same for all patients" }, correct: "B" },
    { id: 109, question: "What is the ultimate goal of patient teaching?", options: { A: "To increase hospital revenue", B: "To promote health and prevent illness", C: "To reduce nursing workload", D: "To satisfy hospital administration" }, correct: "B" },
    { id: 110, question: "Which of the following is a barrier to learning?", options: { A: "Motivation", B: "Lack of interest", C: "Readiness to learn", D: "Good health" }, correct: "B" },

    // UNIT 9: Oxygenation – Respiratory Function & Cardiovascular System
    { id: 111, question: "What is the normal range for PaO2?", options: { A: "35-45 mm Hg", B: "75-85 mm Hg", C: "95-100 mm Hg", D: "100-110 mm Hg" }, correct: "B" },
    { id: 112, question: "Which of the following is a function of the cardiovascular system?", options: { A: "Maintain acid-base balance", B: "Transport oxygen and nutrients", C: "Produce red blood cells", D: "Regulate body temperature" }, correct: "B" },
    { id: 113, question: "What is the term for inadequate tissue oxygenation at the cellular level?", options: { A: "Hypoxemia", B: "Hyperventilation", C: "Hypoxia", D: "Hypoventilation" }, correct: "C" },
    { id: 114, question: "Which condition is defined as the collapse of a lobe or an entire lung?", options: { A: "Pneumonia", B: "Atelectasis", C: "Pneumothorax", D: "Hemothorax" }, correct: "B" },
    { id: 115, question: "What is the formula for Cardiac Output (CO)?", options: { A: "CO = Heart Rate / Stroke Volume", B: "CO = Stroke Volume x Heart Rate", C: "CO = Blood Pressure x Heart Rate", D: "CO = Stroke Volume / Heart Rate" }, correct: "B" },
    { id: 116, question: "The primary muscle of inspiration is the:", options: { A: "Intercostal muscle", B: "Abdominal muscle", C: "Diaphragm", D: "Pectoral muscle" }, correct: "C" },
    { id: 117, question: "Which of the following is an early sign of hypoxia?", options: { A: "Cyanosis", B: "Bradypnea", C: "Restlessness", D: "Coma" }, correct: "C" },
    { id: 118, question: "What is the purpose of surfactant in the lungs?", options: { A: "To transport oxygen", B: "To maintain surface tension and prevent alveolar collapse", C: "To fight infection", D: "To remove carbon dioxide" }, correct: "B" },
    { id: 119, question: "A patient with a pulse oximetry reading of 85% is most likely experiencing:", options: { A: "Normal oxygenation", B: "Hyperoxia", C: "Hypoxia", D: "Optimal gas exchange" }, correct: "C" },
    { id: 120, question: "Which method of oxygen delivery provides the most accurate and controlled oxygen concentration?", options: { A: "Nasal cannula", B: "Simple face mask", C: "Venturi mask", D: "Non-rebreather mask" }, correct: "C" },

    // UNIT 10: Mobility, Activity and Exercise
    { id: 121, question: "Which of the following is an example of an isometric exercise?", options: { A: "Running", B: "Swimming", C: "Squeezing a towel between the knees", D: "Weight lifting" }, correct: "C" },
    { id: 122, question: "What is the term for movement of a bone away from the midline of the body?", options: { A: "Adduction", B: "Abduction", C: "Flexion", D: "Extension" }, correct: "B" },
    { id: 123, question: "Which system is responsible for producing blood cells?", options: { A: "Muscular system", B: "Nervous system", C: "Skeletal system", D: "Cardiovascular system" }, correct: "C" },
    { id: 124, question: "Which type of exercise involves a constant speed of movement regardless of the force applied?", options: { A: "Isotonic", B: "Isometric", C: "Isokinetic", D: "Aerobic" }, correct: "C" },
    { id: 125, question: "What is a common cardiovascular complication of immobility?", options: { A: "Increased blood pressure", B: "Orthostatic hypotension", C: "Increased heart rate", D: "Decreased cholesterol" }, correct: "B" },
    { id: 126, question: "Which of the following is a result of immobility on the respiratory system?", options: { A: "Increased lung expansion", B: "Atelectasis", C: "Decreased respiratory secretions", D: "Improved gas exchange" }, correct: "B" },
    { id: 127, question: "Turning the sole of the foot inward is known as:", options: { A: "Eversion", B: "Inversion", C: "Pronation", D: "Supination" }, correct: "B" },
    { id: 128, question: "What is the efficient use of the body as a machine and a means of locomotion called?", options: { A: "Body alignment", B: "Body mechanics", C: "Activity tolerance", D: "Range of motion" }, correct: "B" },
    { id: 129, question: "Which of the following is a nursing diagnosis related to immobility?", options: { A: "Risk for Infection", B: "Impaired Physical Mobility", C: "Acute Pain", D: "Ineffective Coping" }, correct: "B" },
    { id: 130, question: "Which type of exercise is defined as a planned, structured, and repetitive bodily movement?", options: { A: "Physical activity", B: "Exercise", C: "Recreation", D: "ADLs" }, correct: "B" },

    // UNIT 11: Process of Hospitalization
    { id: 131, question: "What is the term for the process of admitting a patient to a hospital?", options: { A: "Discharge", B: "Transfer", C: "Admission", D: "Referral" }, correct: "C" },
    { id: 132, question: "Which of the following is a nursing responsibility during admission?", options: { A: "Obtaining informed consent for surgery", B: "Performing a comprehensive assessment", C: "Prescribing medications", D: "Scheduling follow-up appointments" }, correct: "B" },
    { id: 133, question: "When transferring a patient to another unit, the nurse must:", options: { A: "Send the patient alone", B: "Communicate the patient's condition to the receiving unit", C: "Stop all medications", D: "Remove the patient's identification band" }, correct: "B" },
    { id: 134, question: "What is the nurse's role in preparing a patient for discharge?", options: { A: "Providing discharge teaching", B: "Ignoring the patient's questions", C: "Delaying the discharge process", D: "Withholding discharge instructions" }, correct: "A" },
    { id: 135, question: "Which of the following is a normal reaction to hospitalization?", options: { A: "Complete relaxation", B: "Anxiety and fear", C: "Unconditional trust in staff", D: "No emotional response" }, correct: "B" },
    { id: 136, question: "What is the term for the transfer of a patient from one unit to another within the hospital?", options: { A: "Admission", B: "Discharge", C: "Transfer", D: "Referral" }, correct: "C" },
    { id: 137, question: "During discharge, the nurse should ensure that the patient:", options: { A: "Leaves without any instructions", B: "Understands the discharge plan and medications", C: "Is not given any follow-up appointments", D: "Has no access to community resources" }, correct: "B" },
    { id: 138, question: "Which of the following is a nursing responsibility during a patient's transfer?", options: { A: "Providing a verbal report to the receiving nurse", B: "Leaving the patient unattended", C: "Discarding the patient's medical records", D: "Avoiding communication with the patient's family" }, correct: "A" },
    { id: 139, question: "A patient being admitted to the hospital may experience:", options: { A: "Loss of privacy", B: "Increased independence", C: "Decreased anxiety", D: "No change in routine" }, correct: "A" },
    { id: 140, question: "What is the first step in the discharge process?", options: { A: "The patient leaves the hospital", B: "The nurse assesses the patient's readiness for discharge", C: "The physician signs the discharge order", D: "The family takes the patient home" }, correct: "B" },

    // Cleaned-up MCQs (Q8–Q30 from second file)
    { id: 141, question: "Which parts of the brain control our respiratory rate and temperature?", options: { A: "Cerebellum and Cerebrum", B: "Medulla oblongata and Hypothalamus", C: "Anterior and posterior Pituitary gland", D: "Limbic system", E: "Pons and cerebellum" }, correct: "B" },
    { id: 142, question: "A nurse prepared a bed to receive a new patient:", options: { A: "Occupied bed", B: "Unoccupied bed", C: "Orthopedic bed", D: "Cardiac bed", E: "All of these" }, correct: "B" },
    { id: 143, question: "The fundamental purposes of bedding are:", options: { A: "Clean and comfortable", B: "To reduce the risk of infection", C: "To prevent bed sores", D: "Wrinkle-free", E: "All of these" }, correct: "E" },
    { id: 144, question: "The order of Maslow's Hierarchy of Needs, from bottom to top, is:", options: { A: "Safety, Esteem, Social, Self-Actualization, Physiological", B: "Physiological, Esteem, Social, Safety, Self-Actualization", C: "Physiological, Safety, Social, Esteem, Self-Actualization", D: "Physiological, Safety, Esteem, Social, Self-Actualization", E: "Self-Actualization, Esteem, Social, Safety, Physiological" }, correct: "C" },
    { id: 145, question: "Achievement, respect, social recognition, and accomplishment are needs:", options: { A: "Self-Esteem", B: "Safety Needs", C: "Self-Actualization", D: "Physiological Needs", E: "Social Needs" }, correct: "A" },
    { id: 146, question: "If pulse rate is greater than 100 bpm or less than 60 bpm, outside the normal range, it is called:", options: { A: "Hypertension and Hypotension", B: "Tachypnea and Bradypnea", C: "Tachycardia and Bradycardia", D: "Hyperpyrexia and Hypoxia", E: "Hyperthermia and Hypothermia" }, correct: "C" },
    { id: 147, question: "Food, water, sleep, and sex are examples of:", options: { A: "Physiological Needs", B: "Safety Needs", C: "Self-Actualization", D: "Social Needs", E: "Self-Esteem" }, correct: "A" },
    { id: 148, question: "Learning by listening to words is known as:", options: { A: "Visual learning style", B: "Taste learning style", C: "Auditory learning style", D: "Kinesthetic learning style", E: "None of these" }, correct: "C" },
    { id: 149, question: "In preparing patients and family for discharge:", options: { A: "Nurse role", B: "Nursing responsibility", C: "Nursing care", D: "Both A & C", E: "All of these" }, correct: "E" },
    { id: 150, question: "_____ is muscle wasting, which refers to a decrease in the size of muscles in the body.", options: { A: "Disuse atrophy", B: "Disuse osteoporosis", C: "Contractures", D: "Center of gravity", E: "Line of gravity" }, correct: "A" },
    { id: 151, question: "A condition of difficulty in breathing is called:", options: { A: "Dyspnea", B: "Tachypnea", C: "Apnea", D: "Bradypnea", E: "Eupnea" }, correct: "A" },
    { id: 152, question: "Tachypnea is indicated by a respiratory rate greater than:", options: { A: "10 breaths/min", B: "20 breaths/min", C: "40 breaths/min", D: "60 breaths/min", E: "80 breaths/min" }, correct: "B" },
    { id: 153, question: "The _____ is a hollow, cone-shaped organ about the size of a fist.", options: { A: "Lungs", B: "Liver", C: "Heart", D: "Larynx", E: "Pharynx" }, correct: "C" },
    { id: 154, question: "The process of attending to people's needs, experiences, and feelings and making specific interventions to help them learn particular things is called:", options: { A: "Learning", B: "Prioritize needs", C: "Teaching", D: "Examine educational resources", E: "Both A & C" }, correct: "C" },
    { id: 155, question: "Gaps in knowledge that exist between a desired level of performance and the actual level of performance are called:", options: { A: "Teaching", B: "Learning", C: "Learning needs", D: "Prioritize needs", E: "Evaluation" }, correct: "C" },
    { id: 156, question: "Following are all characteristics of safety EXCEPT:", options: { A: "Commitment", B: "Caring", C: "Radiation", D: "Personal", E: "Coaching" }, correct: "C" },
    { id: 157, question: "Certain chronic conditions such as cardiovascular disease are risk factors for skin breakdown and delayed healing:", options: { A: "Decubitus ulcer", B: "Liver", C: "Diabetes", D: "Stomach", E: "Both C & D" }, correct: "C" },
    { id: 158, question: "Which of the following are common sites of bed sores?", options: { A: "Elbow", B: "Hip", C: "Heel", D: "All of these", E: "None of these" }, correct: "D" },
    { id: 159, question: "Abrasion and blister involving the epidermis and possibly dermis is called:", options: { A: "Suspected deep tissue injury", B: "Stage 1", C: "Stage 2", D: "Stage 3", E: "Stage 4" }, correct: "C" },
    { id: 160, question: "The flow of information from receiver to sender, the reaction to the message, is called:", options: { A: "Sender", B: "Channel", C: "Message", D: "Feedback", E: "Receiver" }, correct: "D" },
    { id: 161, question: "Following are all elements of communication EXCEPT:", options: { A: "Sender", B: "Message", C: "Channel", D: "Written", E: "Receiver" }, correct: "D" },
    { id: 162, question: "_____ was an English social reformer, statistician, and the founder of modern nursing.", options: { A: "Lillian Wald", B: "Florence Nightingale", C: "Clara Barton", D: "Parthenope", E: "William Edward" }, correct: "B" },
    { id: 163, question: "The first meeting of the World Health Assembly finished on:", options: { A: "24 July 1948", B: "25 July 1949", C: "26 July 1950", D: "27 July 1951", E: "28 July 1952" }, correct: "A" },

    // FON BCQs (Q1–Q54 from third file)
    { id: 164, question: "Over which artery is the stethoscope placed when taking blood pressure:", options: { A: "Radial", B: "Brachial", C: "Apical", D: "Carotid", E: "Femoral" }, correct: "B" },
    { id: 165, question: "A person who speaks up for or acts on behalf of the client so as to protect him, this is called:", options: { A: "Client Advocate", B: "Change agent", C: "Communicator", D: "Teacher", E: "All of the above" }, correct: "A" },
    { id: 166, question: "_____ work a thorough understanding of the research process:", options: { A: "Team manager", B: "Research", C: "Research nurse", D: "Change agent", E: "All of the above" }, correct: "C" },
    { id: 167, question: "Nurse Researcher identify research questions, design and conduct scientific _____, collect and analyze data and report:", options: { A: "Studies", B: "Working", C: "Reporting", D: "Documentation", E: "All of these" }, correct: "A" },
    { id: 168, question: "Clients who have fever, a term is used as:", options: { A: "Febrile", B: "Afebrile", C: "Hyperpyrexia", D: "High grade fever", E: "All of these" }, correct: "A" },
    { id: 169, question: "Pressure relieving devices used to prevent pressure ulcers include:", options: { A: "Air mattress", B: "Water mattress", C: "Both A & B", D: "Revolving chair", E: "Wheel chair" }, correct: "C" },
    { id: 170, question: "The 5th sign of vital sign is:", options: { A: "Pain", B: "Oxygen", C: "Weight & height", D: "Respiratory rate", E: "Blood pressure" }, correct: "A" },
    { id: 171, question: "Which parts of brain control our respiratory rate & temperature?", options: { A: "Cerebellum & Cerebrum", B: "Medulla oblongata & Hypothalamus", C: "Anterior & posterior Pituitary gland", D: "Limbic system", E: "Pons and cerebellum" }, correct: "B" },
    { id: 172, question: "A Nurse prepared a bed to receive a new patient:", options: { A: "Occupied bed", B: "Unoccupied bed", C: "Orthopedic bed", D: "Cardiac bed", E: "All of these" }, correct: "B" },
    { id: 173, question: "The fundamental purposes of bedding is:", options: { A: "Clean and comfortable", B: "To reduce the risk of infection", C: "To prevent bed sores", D: "Wrinkles free", E: "All of these" }, correct: "E" },
    { id: 174, question: "The order of Maslow's Hierarchy of Needs, from bottom to top is:", options: { A: "Safety, Esteem, Social, Self-Actualization, Physiological", B: "Physiological, Esteem, Social, Safety, Self-Actualization", C: "Physiological, Safety, Social, Esteem, Self-Actualization", D: "Physiological, Safety, Esteem, Social, Self-Actualization", E: "Self-Actualization, Esteem, Social, Safety, Physiological" }, correct: "C" },
    { id: 175, question: "Achievement, respect, social recognition, and accomplishment are needs:", options: { A: "Self-Esteem", B: "Safety Needs", C: "Self-actualization", D: "Physiological Needs", E: "Social Needs" }, correct: "A" },
    { id: 176, question: "If Pulse rate is greater than 100/bm or lesser than 60/bm; from normal range is called:", options: { A: "Hypertension & Hypotension", B: "Tachyphnea & Bradyphnea", C: "Tachycardia & Bradycardia", D: "Hyperpyrexia & hypoxia", E: "Hyperthermia & hypothermia" }, correct: "C" },
    { id: 177, question: "Food, water, sleep, and sex, are examples of:", options: { A: "Physiological Needs", B: "Safety Needs", C: "Self-actualization", D: "Social Needs", E: "Self-Esteem" }, correct: "A" },
    { id: 178, question: "Learn by listening to the words is known as:", options: { A: "Visual learning style", B: "Taste learning style", C: "Auditory learning style", D: "Kinesthetic learning style", E: "None of these" }, correct: "C" },
    { id: 179, question: "_____ in preparing patients and family for discharge.", options: { A: "Nurse role", B: "Nursing responsibility", C: "Nursing care", D: "Both A & C", E: "All of these" }, correct: "E" },
    { id: 180, question: "_____ is muscle wasting, which refer to a decrease in the size of muscles in the body.", options: { A: "Disuse atrophy", B: "Disuse osteoporosis", C: "Contractures", D: "Center of gravity", E: "Line of gravity" }, correct: "A" },
    { id: 181, question: "It is a condition of difficulty in breathing is called:", options: { A: "Dyspnea", B: "Tachypnea", C: "Apnea", D: "Bradypnea", E: "Eupnoea" }, correct: "A" },
    { id: 182, question: "Tachypnea is indicated by a respiratory rate greater than:", options: { A: "10 breaths/m", B: "20 breaths/m", C: "40 breaths/m", D: "60 breaths/m", E: "80 breaths/m" }, correct: "B" },
    { id: 183, question: "The _____ is a hollow cone-shaped organ about the size of a fist.", options: { A: "Lungs", B: "Liver", C: "Heart", D: "Larynx", E: "Pharynx" }, correct: "C" },
    { id: 184, question: "It is the process of attending to people's needs, experiences feelings and making specific interventions to help them learn particular things is called:", options: { A: "Learning", B: "Prioritize needs", C: "Teaching", D: "Examine educational resources", E: "Both A & C" }, correct: "C" },
    { id: 185, question: "Gaps in knowledge that exist between a desired level of performance and the actual level of performance is called:", options: { A: "Teaching", B: "Learning", C: "Learning needs", D: "Prioritize needs", E: "Evaluation" }, correct: "C" },
    { id: 186, question: "Following all are the characteristics of safety EXCEPT:", options: { A: "Commitment", B: "Caring", C: "Radiation", D: "Personal", E: "Coaching" }, correct: "C" },
    { id: 187, question: "Certain chronic conditions such as _____ and cardiovascular disease are risk factors for skin breakdown and delayed healing.", options: { A: "Decubitus ulcer", B: "Liver", C: "Diabetes", D: "Stomach", E: "Both C & D" }, correct: "C" },
    { id: 188, question: "Which of the following common sites of bed sores:", options: { A: "Elbow", B: "Hip", C: "Heel", D: "All of these", E: "None of these" }, correct: "D" },
    { id: 189, question: "Abrasion, blister involving the epidermis and possibly dermis is called:", options: { A: "Suspected deep tissue injury", B: "Stage-1", C: "Stage-2", D: "Stage-3", E: "Stage-4" }, correct: "C" },
    { id: 190, question: "It is the flow of information from receiver to the sender, the reaction to the message is called:", options: { A: "Sender", B: "Channel", C: "Message", D: "Feedback", E: "Receiver" }, correct: "D" },
    { id: 191, question: "Following all are the elements of communication EXCEPT:", options: { A: "Sender", B: "Message", C: "Channel", D: "Written", E: "Receiver" }, correct: "D" },
    { id: 192, question: "_____ was an English social reformer, statistician and the founder of modern nursing.", options: { A: "Lillian Wald", B: "Florence Nightingale", C: "Clara Barton", D: "parthenecope", E: "William Edward" }, correct: "B" },
    { id: 193, question: "The first meeting of World Health Assembly finishing on:", options: { A: "24 July 1948", B: "25 July 1949", C: "26 July 1950", D: "27 July 1951", E: "28 July 1952" }, correct: "A" },
    { id: 194, question: "A nurse has measured the blood pressure reading was 140/90, what will be the pulse pressure?", options: { A: "60", B: "50", C: "70", D: "40", E: "30" }, correct: "B" },
    { id: 195, question: "What is width of or size of BP cuff in adult?", options: { A: "3cm", B: "5cm", C: "13cm", D: "17cm", E: "All of these" }, correct: "C" },
    { id: 196, question: "Investigates the role of nurses which further improve the nursing practices:", options: { A: "Manager", B: "Communicator", C: "Client advocate", D: "Researcher", E: "Change agent" }, correct: "D" },
    { id: 197, question: "Bradycardia is a condition that occurs due to:", options: { A: "Decreases respiration from normal range", B: "Increases pulses", C: "Decrease blood pressure", D: "Increases respiratory rate", E: "Decrease pulses from normal range" }, correct: "E" },
    { id: 198, question: "An adult pulse rate ranges from _____ to _____ beats per minute:", options: { A: "40-100 bpm", B: "60-100 bpm", C: "70-140 bpm", D: "60-100 mmHg", E: "70-120 bpm" }, correct: "B" },
    { id: 199, question: "Surface Body Temperature is mostly measured at:", options: { A: "Tympanic site", B: "Oral site", C: "Axillary site", D: "Rectal", E: "B and C" }, correct: "C" },
    { id: 200, question: "Core temperatures cannot be measured at:", options: { A: "Tympanic site", B: "Rectal site", C: "Oral site", D: "Both A and B", E: "None of these" }, correct: "C" },
    { id: 201, question: "Which one of the following vital sign is in our conscious control:", options: { A: "Temperature", B: "Pulse", C: "Respirations", D: "Blood pressure", E: "None of these" }, correct: "C" },
    { id: 202, question: "Which of the following pulse site is located in the elbow crease?", options: { A: "Apical", B: "Brachial", C: "Popliteal", D: "Carotid", E: "Dorsal paedis" }, correct: "B" },
    { id: 203, question: "For a BP reading of 140/92, what is the bottom number (92) known as?", options: { A: "Systolic", B: "Diastolic", C: "Pulse pressure", D: "Volume", E: "Rhythm" }, correct: "B" },
    { id: 204, question: "An instrument used to Measure the blood pressure is:", options: { A: "Sphygmomanometer", B: "Stethoscope", C: "Pulse oximeter", D: "Weight machine", E: "All of these" }, correct: "A" },
    { id: 205, question: "In communication that exchanged shares idea between:", options: { A: "Channel and sender", B: "Sender and feedback", C: "Source and medium", D: "Message and receiver", E: "Sender and receiver" }, correct: "E" },
    { id: 206, question: "Therapeutic communication is also called as:", options: { A: "Effective communication", B: "Body language", C: "Nonverbal communication", D: "Effective nonverbal communication", E: "None of these" }, correct: "A" },
    { id: 207, question: "Therapeutic communication techniques are include all except one:", options: { A: "Give broad opening", B: "Overloading", C: "Exploring", D: "Open ended questions", E: "Offering self" }, correct: "B" },
    { id: 208, question: "All of the following are steps in Therapy planning except one:", options: { A: "Assessment", B: "Nursing diagnosis", C: "Analysis", D: "Implementation", E: "Planning" }, correct: "C" },
    { id: 209, question: "Which of the following is Purpose of Transfer:", options: { A: "Patient's need / wish", B: "Availability of Treatment", C: "Medical diagnosis", D: "Financial status", E: "All of the above" }, correct: "E" },
    { id: 210, question: "Definition of nursing 'The act of utilizing the environment of the patient to assist him in his recovery' was given by:", options: { A: "Verginia Henderson", B: "Florence nightingale", C: "Doreen Norton In the 1950", D: "Wiedenbach in 1963", E: "Johnson 1959" }, correct: "B" },
    { id: 211, question: "All of the following factors Facilitate learning except one:", options: { A: "Active involvement", B: "Environment", C: "Feedback", D: "Readiness", E: "Stress and anxiety" }, correct: "E" },
    { id: 212, question: "All conditions contribute to the development of Pressure Sores except:", options: { A: "Poor Nutrition (malnourishment)", B: "Urinary or fecal incontinence", C: "Chastity", D: "Immobility", E: "None of these" }, correct: "C" },
    { id: 213, question: "The specialized agency that promote health and control communicable diseases is:", options: { A: "UNICEF", B: "WHO", C: "WFO", D: "ANA", E: "UNDP" }, correct: "B" },
    { id: 214, question: "The most severe type of Decubitus ulcer which can be life threatening is:", options: { A: "Stage 1", B: "Stage 2", C: "Stage 3", D: "Stage 4", E: "Both a & d" }, correct: "D" },
    { id: 215, question: "If the person's body temperature is 99.6° F, what will be in Celsius?", options: { A: "38.6 Celsius", B: "36.6 Celsius", C: "37° Celsius", D: "37.6° Celsius", E: "98.6° Celsius" }, correct: "D" },
    { id: 216, question: "Best treatment and prevention of bedsores was removing the pressure by turning the patient's position every two hourly, it was stated by:", options: { A: "Doreen Norton in the 1950", B: "Lydia Hall in 1955", C: "Wiedenbach in 1963", D: "Fry in 1953", E: "Johnson 1959" }, correct: "A" },
    { id: 217, question: "Temperature checked by a thermometer used in the ear canal is called:", options: { A: "Auxiliary site", B: "Tympanic site", C: "Rectal site", D: "Oral site", E: "All of the above" }, correct: "B" }
];
// ============================================================
// TEST 2: Anatomy & Physiology-I (70 Questions)
// ============================================================
const TEST2_QUESTIONS = [
    { id: 1, question: "Which Of The Following Statements Most Accurate Describes Abduction Of A Joint?", options: { A: "Decrease The Joint Angle", B: "Increase The Joint Angle", C: "Movement Away From The Midline", D: "Movement Towards The Midline", E: "None Of Above" }, correct: "C" },
    { id: 2, question: "Which Of The Following Refers To A Movement In A Superior Direction?", options: { A: "Flexion", B: "Extension", C: "Adduction", D: "Plantar Flexion", E: "Elevation" }, correct: "E" },
    { id: 3, question: "Which Term Refer To A Movement That Decreases The Angle Of A Joint?", options: { A: "Flexion", B: "Extension", C: "Abduction", D: "Adduction", E: "Medial Rotation" }, correct: "A" },
    { id: 4, question: "Which Plane Divides The Body Into A Left And Right?", options: { A: "Coronal Plane", B: "Sagital Plane", C: "Transverse Plane", D: "Oblique Plane", E: "All Of Above" }, correct: "B" },
    { id: 5, question: "Which Of The Following Planes Is A Horizontal Line Though The Body?", options: { A: "Coronal Plane", B: "Sagital Plane", C: "Transverse Plane", D: "Oblique Plane", E: "None Of Above" }, correct: "C" },
    { id: 6, question: "What Does The Coronal Plane Divide The Body Into?", options: { A: "Top And Bottom", B: "Left And Right", C: "Diagonal Halves", D: "Front And Back", E: "Upper Half Of The Body And Lower Half Of The Body" }, correct: "D" },
    { id: 7, question: "Which Of The Following Joints Does Not Allow Any Movement?", options: { A: "Synovial Joint", B: "Fibrous Joint", C: "Ball And Socket Joint", D: "Cartilaginous Joint", E: "All Of Above" }, correct: "B" },
    { id: 8, question: "Glenoid Cavity Articulates", options: { A: "Clavicle With Acromion", B: "Clavicle With Scapula", C: "Scapula With Acromion", D: "Humerus With Scapula" }, correct: "D" },
    { id: 9, question: "Deoxygenated Blood From Body Towards The Heart Is Drained By:", options: { A: "Arteries", B: "Pulmonary Artery", C: "Nerves", D: "Veins", E: "Capillaries" }, correct: "D" },
    { id: 10, question: "The Point Where Union Of Two Or More Bones Occurs Is Called:", options: { A: "Tendon", B: "Ligament", C: "Joint", D: "Muscle", E: "Connective Tissue" }, correct: "C" },
    { id: 11, question: "The Heart Is Protected By The:", options: { A: "Femur", B: "Cranium", C: "Tibia", D: "Humerus", E: "Ribcage" }, correct: "E" },
    { id: 12, question: "Which Of The Following Structures Is The Most Superficial?", options: { A: "Muscle", B: "Joint", C: "Tendon", D: "Connective Tissue", E: "Skin" }, correct: "E" },
    { id: 13, question: "Which Of The Following Is Not A Portion Of The Vertebral Column?", options: { A: "Cranial Vertebrae", B: "Cervical Vertebrae", C: "Lumber Vertebrae", D: "Thoracic Vertebrae", E: "Sacral Vertebrae" }, correct: "A" },
    { id: 14, question: "The Vessels That Carry Blood Away From The Heart Are Called:", options: { A: "Veins", B: "Lymphatics", C: "Capillaries", D: "Arteries", E: "Lymph Node" }, correct: "D" },
    { id: 15, question: "Which one of the following is sesamoid bone:", options: { A: "Tibia", B: "Femur", C: "Rib", D: "Scapula", E: "Patella" }, correct: "E" },
    { id: 16, question: "One Of The Following Is Not Skin Appendages:", options: { A: "Hairs", B: "Nails", C: "Sebaceous Glands", D: "Epidermis", E: "Sweat Glands" }, correct: "D" },
    { id: 17, question: "Ribs And Sternum Are Connected By", options: { A: "Areolar Tissue", B: "Hyaline Cartilage", C: "White Fibrous Cartilage", D: "Bony Matter", E: "None Of Above" }, correct: "B" },
    { id: 18, question: "The Wall Of Gut Is Formed By Layers In Numbers:", options: { A: "2", B: "3", C: "4", D: "5", E: "6" }, correct: "C" },
    { id: 19, question: "Layers Of Epidermis Are:", options: { A: "2", B: "3", C: "5", D: "4", E: "6" }, correct: "C" },
    { id: 20, question: "Long Bone Has One Shaft And Two:", options: { A: "Condyles", B: "Diaphysis", C: "Epiphysis", D: "Tubercles", E: "Fossa" }, correct: "C" },
    { id: 21, question: "Outer Part Of Kidney Parenchyma Is Called:", options: { A: "Medulla", B: "Bladder", C: "Urethra", D: "Ureter", E: "Renal Cortex" }, correct: "E" },
    { id: 22, question: "Lymphatic Vessels Of Small Intestine Are Called As:", options: { A: "Lacteals", B: "Tonsils", C: "Lymph Nodes", D: "Vena Cava", E: "Aorta" }, correct: "A" },
    { id: 23, question: "Smooth Muscle Is Present In:", options: { A: "Stomach", B: "Abdominal Wall", C: "Heart", D: "Foot", E: "Hand" }, correct: "A" },
    { id: 24, question: "The Right Side Of The Heart Pumps Deoxygenated Blood Towards The:", options: { A: "Abdomen", B: "Brain", C: "Lungs", D: "Stomach", E: "Kidneys" }, correct: "C" },
    { id: 25, question: "Skeletal Muscle Is The Type Of:", options: { A: "Non Striated Muscles", B: "Smooth Muscles", C: "Involuntary Muscles", D: "Striated Muscles", E: "Cardiac Muscles" }, correct: "D" },
    { id: 26, question: "Jejunum Is The Part Of:", options: { A: "Large Intestine", B: "Appendix", C: "Stomach", D: "Rectum", E: "Small Intestine" }, correct: "E" },
    { id: 27, question: "Stratum Lucidum Is The Layer Of:", options: { A: "Dermis", B: "Epidermis", C: "Appendages", D: "Muscles", E: "Bones" }, correct: "B" },
    { id: 28, question: "Which One Of The Following Is Long Bone:", options: { A: "Pisiform", B: "Scapula", C: "Tibia", D: "Patella", E: "Vertebra" }, correct: "C" },
    { id: 29, question: "Which One Of The Following Is A Type Fibrous Joint:", options: { A: "Shoulder Joint", B: "Elbow Joint", C: "Skull Sutures", D: "Superior Radio-Ulnar Joint", E: "Knee Joint" }, correct: "C" },
    { id: 30, question: "Which One Of The Following Is A Type Ball-And-Socket Joint:", options: { A: "Shoulder Joint", B: "Elbow Joint", C: "Skull Sutures", D: "Superior Radio-Ulnar Joint", E: "Knee Joint" }, correct: "A" },
    { id: 31, question: "Which One Of The Following Is A Type Of Hinge Joint:", options: { A: "Shoulder Joint", B: "Elbow Joint", C: "Skull Sutures", D: "Superior Radio-Ulnar Joint", E: "Hip Joint" }, correct: "B" },
    { id: 32, question: "Which One Of The Following Is The Pivot Joint:", options: { A: "Shoulder Joint", B: "Elbow Joint", C: "Skull Sutures", D: "Superior Radio-Ulnar Joint", E: "Knee Joint" }, correct: "D" },
    { id: 33, question: "Appendix Is Attached With:", options: { A: "Jejunum", B: "Ileum", C: "Rectum", D: "Cecum", E: "Stomach" }, correct: "D" },
    { id: 34, question: "Oxygenated Blood From The Lungs Is Carried To The Left Atrium By The", options: { A: "Pulmonary Artery", B: "Capillaries", C: "Pulmonary Vein", D: "Aorta", E: "Superior Vena Cava" }, correct: "C" },
    { id: 35, question: "Which One Of The Following Has Deep Fascia:", options: { A: "Face", B: "Anterior Abdominal Wall", C: "Breast", D: "Thigh" }, correct: "D" },
    { id: 36, question: "The fluid mosaic model describes the structure of:", options: { A: "Nucleus", B: "Plasma membrane", C: "Mitochondria", D: "Endoplasmic reticulum", E: "Cytoskeleton" }, correct: "B" },
    { id: 37, question: "Which organelle is responsible for ATP production via oxidative phosphorylation?", options: { A: "Golgi apparatus", B: "Lysosome", C: "Mitochondria", D: "Peroxisome", E: "Ribosome" }, correct: "C" },
    { id: 38, question: "The sodium-potassium pump (Na+/K+ ATPase) moves:", options: { A: "2 Na+ out, 3 K+ in", B: "3 Na+ out, 2 K+ in", C: "2 Na+ in, 3 K+ out", D: "3 Na+ in, 2 K+ out", E: "Equal amounts of Na+ and K+ in opposite directions" }, correct: "B" },
    { id: 39, question: "Osmosis refers to the movement of:", options: { A: "Solutes across a semipermeable membrane", B: "Water across a selectively permeable membrane", C: "Ions against their concentration gradient", D: "Large molecules via endocytosis", E: "Proteins through channel proteins" }, correct: "B" },
    { id: 40, question: "During active transport, molecules move:", options: { A: "From high to low concentration without energy", B: "From low to high concentration using energy", C: "Via simple diffusion through the lipid bilayer", D: "Only when coupled with osmosis", E: "Through gap junctions" }, correct: "B" },
    { id: 41, question: "The phase of the cell cycle where DNA replication occurs is:", options: { A: "G1 phase", B: "S phase", C: "G2 phase", D: "M phase", E: "G0 phase" }, correct: "B" },
    { id: 42, question: "Which cell junction allows direct cytoplasmic communication between adjacent cells?", options: { A: "Tight junction", B: "Adherens junction", C: "Desmosome", D: "Gap junction", E: "Hemidesmosome" }, correct: "D" },
    { id: 43, question: "Phagocytosis is primarily carried out by which type of cells?", options: { A: "Erythrocytes", B: "Neurons", C: "Macrophages", D: "Adipocytes", E: "Fibroblasts" }, correct: "C" },
    { id: 44, question: "Transcription occurs in the:", options: { A: "Cytoplasm", B: "Nucleus", C: "Mitochondria", D: "Ribosome", E: "Rough ER" }, correct: "B" },
    { id: 45, question: "Cyclins and cyclin-dependent kinases (CDKs) are key regulators of:", options: { A: "Protein synthesis", B: "Cell cycle progression", C: "Membrane potential", D: "Glycolysis", E: "Cell adhesion" }, correct: "B" },
    { id: 46, question: "The most abundant formed element in human blood is:", options: { A: "Leukocytes", B: "Platelets", C: "Erythrocytes", D: "Lymphocytes", E: "Plasma proteins" }, correct: "C" },
    { id: 47, question: "Which blood cell is primarily responsible for antibody production?", options: { A: "Neutrophil", B: "Monocyte", C: "T lymphocyte", D: "B lymphocyte", E: "Eosinophil" }, correct: "D" },
    { id: 48, question: "Hemoglobin binds most strongly to:", options: { A: "Carbon dioxide", B: "Oxygen", C: "Carbon monoxide", D: "Nitric oxide", E: "Bicarbonate ion" }, correct: "C" },
    { id: 49, question: "The intrinsic and extrinsic pathways converge in the:", options: { A: "Common pathway of coagulation", B: "Fibrinolytic system", C: "Complement cascade", D: "Formation of platelet plug", E: "Production of thromboxane A₂" }, correct: "A" },
    { id: 50, question: "Which immunoglobulin class can cross the placenta to provide passive immunity to the fetus?", options: { A: "IgA", B: "IgD", C: "IgE", D: "IgG", E: "IgM" }, correct: "D" },
    { id: 51, question: "The primary function of neutrophils is:", options: { A: "Antigen presentation", B: "Phagocytosis of bacteria", C: "Allergic response modulation", D: "Antibody secretion", E: "Viral defense" }, correct: "B" },
    { id: 52, question: "Which cell type is considered the 'bridge' between innate and adaptive immunity?", options: { A: "Natural Killer (NK) cell", B: "Dendritic cell", C: "Basophil", D: "Mast cell", E: "Plasma cell" }, correct: "B" },
    { id: 53, question: "The Rh factor is clinically most significant in:", options: { A: "ABO blood typing", B: "Hemolytic disease of the newborn", C: "Autoimmune hemolytic anemia", D: "Thrombocytopenia", E: "Leukemia diagnosis" }, correct: "B" },
    { id: 54, question: "Which complement pathway is activated by antibodies bound to antigens?", options: { A: "Classical pathway", B: "Alternative pathway", C: "Lectin pathway", D: "Mannose-binding pathway", E: "Properdin pathway" }, correct: "A" },
    { id: 55, question: "Hematopoiesis in adults primarily occurs in the:", options: { A: "Liver and spleen", B: "Yellow bone marrow", C: "Red bone marrow", D: "Thymus", E: "Lymph nodes" }, correct: "C" },
    { id: 56, question: "During isovolumetric ventricular contraction:", options: { A: "Atrial pressure exceeds ventricular pressure.", B: "Blood is ejected into the aorta.", C: "Ventricular volume decreases rapidly.", D: "All heart valves are closed.", E: "The atrioventricular (AV) valves are open." }, correct: "D" },
    { id: 57, question: "The pacemaker potential of the sinoatrial (SA) node is primarily due to:", options: { A: "Inward Na+ current through fast Na+ channels.", B: "Inward Ca2+ current through T-type Ca2+ channels.", C: "'Funny' current (If) of Na+ influx.", D: "Rapid efflux of K+", E: "Inward Cl- current." }, correct: "C" },
    { id: 58, question: "The Frank-Starling law of the heart states that:", options: { A: "Heart rate increases with sympathetic stimulation.", B: "Cardiac output is proportional to venous return.", C: "Ejection fraction decreases with increased preload.", D: "Stroke volume increases with increased afterload.", E: "Contractility is independent of muscle fiber length." }, correct: "B" },
    { id: 59, question: "Which vessel type has the greatest total cross-sectional area and is the primary site of peripheral resistance?", options: { A: "Aorta", B: "Arteries", C: "Arterioles", D: "Capillaries", E: "Venules" }, correct: "C" },
    { id: 60, question: "Mean arterial pressure (MAP) is best approximated by the formula:", options: { A: "(SBP + DBP) / 2", B: "DBP + 1/3(SBP - DBP)", C: "SBP - DBP", D: "CO × TPR", E: "HR × SV" }, correct: "B" },
    { id: 61, question: "The baroreceptor reflex, in response to a sudden increase in blood pressure, would cause:", options: { A: "Increased heart rate and vasoconstriction.", B: "Decreased heart rate and vasodilation.", C: "Increased contractility and venous return.", D: "Increased sympathetic outflow.", E: "Release of vasopressin (ADH)." }, correct: "B" },
    { id: 62, question: "Which factor does NOT increase stroke volume?", options: { A: "Increased end-diastolic volume (preload).", B: "Increased sympathetic stimulation.", C: "Increased afterload.", D: "Increased contractility.", E: "Decreased arterial pressure." }, correct: "C" },
    { id: 63, question: "The P wave on an electrocardiogram (ECG) corresponds to:", options: { A: "Ventricular depolarization.", B: "Ventricular repolarization.", C: "Atrial depolarization.", D: "Atrial repolarization.", E: "Delay at the AV node." }, correct: "C" },
    { id: 64, question: "In a normal heart, the primary determinant of coronary blood flow is:", options: { A: "Sympathetic tone.", B: "Aortic pressure.", C: "Myocardial oxygen demand.", D: "Parasympathetic stimulation.", E: "Blood viscosity." }, correct: "C" },
    { id: 65, question: "The primary function of the venous valves is to:", options: { A: "Regulate capillary pressure.", B: "Prevent backflow of blood.", C: "Increase arterial resistance.", D: "Facilitate gas exchange.", E: "Store blood volume." }, correct: "B" },
    { id: 66, question: "The functional unit of a myofibril responsible for contraction is the:", options: { A: "Sarcolemma", B: "Sarcoplasmic reticulum", C: "Sarcomere", D: "Motor unit", E: "T-tubule" }, correct: "C" },
    { id: 67, question: "During skeletal muscle contraction, which molecule directly blocks the myosin-binding site on actin?", options: { A: "Troponin", B: "Tropomyosin", C: "Calmodulin", D: "ATP", E: "Calcium (Ca2+)" }, correct: "B" },
    { id: 68, question: "The 'sliding filament theory' describes:", options: { A: "How action potentials travel along the sarcolemma", B: "The shortening of sarcomeres by actin and myosin filaments sliding past each other", C: "The release of acetylcholine at the neuromuscular junction", D: "The storage and release of calcium ions", E: "The role of ATP in muscle relaxation" }, correct: "B" },
    { id: 69, question: "Which type of muscle fiber is characterized by fast contraction, high glycolytic capacity, and quick fatigue?", options: { A: "Type I (slow oxidative)", B: "Type IIa (fast oxidative-glycolytic)", C: "Type IIb/x (fast glycolytic)", D: "Cardiac muscle fibers", E: "Smooth muscle fibers" }, correct: "C" },
    { id: 70, question: "The role of calcium in skeletal muscle contraction is to:", options: { A: "Hydrolyze ATP to ADP + Pi", B: "Bind to troponin and move tropomyosin away from the myosin-binding sites", C: "Bind directly to myosin heads to form cross-bridges", D: "Pump sodium out of the muscle cell", E: "Repolarize the muscle membrane" }, correct: "B" }
];

// ============================================================
// TEST 3: Microbiology & Infection Control (35 Questions)
// ============================================================
const TEST3_QUESTIONS = [
    { id: 1, question: "'Separation of an infected patient from other members of the society for the period of communicability' is known as:", options: { A: "Isolation", B: "Separation", C: "Segregation", D: "Exclusion", E: "Elimination" }, correct: "A" },
    { id: 2, question: "The time in which an infectious agent may be transferred directly or indirectly from an infected person to another person is called:", options: { A: "Incubation Period", B: "Communicability Period", C: "Latent Period", D: "Susceptibility", E: "Pathogenicity" }, correct: "B" },
    { id: 3, question: "The measures taken to prevent the spread of pathogens to other patients is known as:", options: { A: "Isolation Components", B: "Isolation Factors", C: "Isolation Precautions", D: "Isolation Purposes", E: "Isolation Determinants" }, correct: "C" },
    { id: 4, question: "'Protect the community by preventing transfer of infection from the reservoir to the possible susceptible hosts' is known as:", options: { A: "Isolation Component", B: "Isolation Factors", C: "Isolation Precautions", D: "Isolation Purposes", E: "Isolation Determinants" }, correct: "D" },
    { id: 5, question: "'Path by which a pathogen leaves its host' is known as:", options: { A: "Agent", B: "Host", C: "Reservoir", D: "Portal of Exit", E: "Portal of Entry" }, correct: "D" },
    { id: 6, question: "The manner in which a pathogen enters a susceptible host?", options: { A: "Agent", B: "Host", C: "Reservoir", D: "Portal of Exit", E: "Portal of Entry" }, correct: "E" },
    { id: 7, question: "Which one is the example of direct contact of infection transmission?", options: { A: "Mucosa", B: "Coughing", C: "Sneezing", D: "Speaking", E: "Talking" }, correct: "A" },
    { id: 8, question: "Which one of the diseases is transmitted by direct contact?", options: { A: "Whooping Cough", B: "Pertussis", C: "Tuberculosis", D: "AIDS", E: "Rabies" }, correct: "D" },
    { id: 9, question: "Which one of the diseases is transmitted by droplet contact?", options: { A: "STD", B: "AIDS", C: "Skin Infection", D: "Eye Infection", E: "Tuberculosis" }, correct: "E" },
    { id: 10, question: "Which one of the diseases is transmitted by inoculation into skin or mucosa?", options: { A: "Whooping Cough", B: "Pertussis", C: "Tuberculosis", D: "AIDS", E: "Rabies" }, correct: "E" },
    { id: 11, question: "Which one of the disease agents live in soil?", options: { A: "Rabies", B: "Tetanus", C: "Pertussis", D: "Tuberculosis", E: "Mumps" }, correct: "B" },
    { id: 12, question: "The spread of infectious agents through contaminated objects or substances, known as:", options: { A: "Agent", B: "Host", C: "Vector", D: "Vehicle", E: "Reservoir" }, correct: "D" },
    { id: 13, question: "Malaria is caused by:", options: { A: "Bacteria", B: "Fungi", C: "Protozoa", D: "Prions", E: "Virus" }, correct: "C" },
    { id: 14, question: "Which one is the fungal infection?", options: { A: "Pneumonia", B: "Tuberculosis", C: "Athlete's foot", D: "Malaria", E: "Rabies" }, correct: "C" },
    { id: 15, question: "Which one is the most common vehicles?", options: { A: "Blood", B: "Saliva", C: "Organ", D: "Serum", E: "Water" }, correct: "E" },
    { id: 16, question: "An arthropod or any other living carrier (like a snail) that transports an infectious agent to a susceptible individual is called:", options: { A: "Agent", B: "Host", C: "Vector", D: "Vehicle", E: "Reservoir" }, correct: "C" },
    { id: 17, question: "The infectious agent undergoes multiplication or development within the vector before being transmitted to the susceptible individual is known as:", options: { A: "Mechanical Vector", B: "Physical Vector", C: "Chemical Vector", D: "Biological Vector", E: "Nutritional Vector" }, correct: "D" },
    { id: 18, question: "Which one is the tiny, non-living particles that require a host cell to replicate?", options: { A: "Bacteria", B: "Fungi", C: "Protozoa", D: "Prions", E: "Virus" }, correct: "E" },
    { id: 19, question: "Which one is the most important host factor to produce the disease?", options: { A: "Age", B: "Gender", C: "Residence", D: "Environment", E: "Immunity" }, correct: "E" },
    { id: 20, question: "Which one is an appropriate application of isolation to reduce and break the...?", options: { A: "Natural History of disease", B: "Incubation Period", C: "Latent Period", D: "Chain of transmission", E: "Surveillance of Disease" }, correct: "D" },
    { id: 21, question: "Which one is the natural habitat where an infectious agent lives, grows, and multiplies, serving as a source from which the agent can be transmitted to other hosts?", options: { A: "Biological Agent", B: "Reservoir", C: "Host", D: "Portal of Exit", E: "Portal of entry" }, correct: "B" },
    { id: 22, question: "The time interval between the invasion of the host by an infectious agent and the appearance of the first symptoms of disease:", options: { A: "Natural History of Disease", B: "Chain of transmission", C: "Latent Period", D: "Incubation Period", E: "Period of Surveillance" }, correct: "D" },
    { id: 23, question: "Isolation precautions helps in limiting the number of:", options: { A: "Old Cases during an Epidemic", B: "Burden of Cases during an Epidemic", C: "Prevalence during an Epidemic", D: "New Cases during an Epidemic", E: "New Cases during an Endemic" }, correct: "D" },
    { id: 24, question: "Isolation precautions helps to protect patients, family members, visitors and healthcare workers from:", options: { A: "The Spread of Host or Infection", B: "The Spread of Vector or Infection", C: "The Spread of Agent or Infection", D: "The Spread of Reservoir or Infection", E: "The Spread of Pathogens or Infection" }, correct: "E" },
    { id: 25, question: "What is the aim of Isolation Precautions?", options: { A: "Controlling and Preventing the Spread of vectors and Pathogens", B: "Controlling and Preventing the Spread of hosts and Pathogens", C: "Controlling and Preventing the Spread of agents and Reservoir", D: "Controlling and Preventing the Spread of Infections and Pathogens", E: "Controlling and Preventing the Spread of Reservoir and Hosts" }, correct: "D" },
    { id: 26, question: "Which one of the microorganisms seen with naked eye?", options: { A: "Virus", B: "Bacteria", C: "Fungi", D: "Algae", E: "Helminths" }, correct: "E" },
    { id: 27, question: "'Lactobacillus' are mostly used for:", options: { A: "Vegetables", B: "Fruits", C: "Nuts", D: "Pulses", E: "Milk" }, correct: "E" },
    { id: 28, question: "Which one is needed for made Alcohol?", options: { A: "Bacteria", B: "Virus", C: "Malt", D: "Protozoa", E: "Algae" }, correct: "C" },
    { id: 29, question: "Which one of the microorganisms were used in bead?", options: { A: "Lactobacillus", B: "Saccharomyces", C: "Aspergillus", D: "Pseudomonas", E: "Salmonella" }, correct: "B" },
    { id: 30, question: "Which one of the microorganisms is helpful to preparation of yogurt?", options: { A: "Lactobacillus", B: "Saccharomyces", C: "Aspergillus", D: "Pseudomonas", E: "Salmonella" }, correct: "A" },
    { id: 31, question: "Which one of the microorganisms is contaminated food?", options: { A: "Lactobacillus", B: "Saccharomyces", C: "Aspergillus", D: "Pseudomonas", E: "Salmonella" }, correct: "E" },
    { id: 32, question: "Which Microorganisms used for alcohol production?", options: { A: "Saccharomyces Sereviceae", B: "Bacillus Subtilis", C: "Penicillium Chrysogenum", D: "Aspergillus", E: "Pseudomonas" }, correct: "A" },
    { id: 33, question: "Which one of the microorganisms is needed for fermentation?", options: { A: "Virus", B: "Bacteria", C: "Algae", D: "Yeast", E: "Protozoa" }, correct: "D" },
    { id: 34, question: "Which one is needed for 'soy sauce'?", options: { A: "Lactobacillus", B: "Saccharomyces", C: "Aspergillus", D: "Pseudomonas", E: "Salmonella" }, correct: "C" },
    { id: 35, question: "When a microorganism introduced into the body for its beneficial qualities is known as?", options: { A: "Biotics", B: "Abiotics", C: "Antibiotics", D: "Prebiotics", E: "Probiotic" }, correct: "E" }
];

// ============================================================
// TEST 4: Biochemistry for Nurses (35 Questions)
// ============================================================
const TEST4_QUESTIONS = [
    { id: 1, question: "The following are derived from cholesterol, EXCEPT", options: { A: "Bile acids", B: "Steroid hormones", C: "Vitamin D", D: "Energy" }, correct: "D" },
    { id: 2, question: "Enzyme regulating the conversion of ethanol to acetaldehyde", options: { A: "Alcohol dehydrogenase", B: "Acetaldehyde dehydrogenase", C: "Catalase", D: "Enolase" }, correct: "A" },
    { id: 3, question: "The normal range of serum osmolality (in mOsm/L) is", options: { A: "280 to 295", B: "300 to 320", C: "350 to 375", D: "200 to 250" }, correct: "A" },
    { id: 4, question: "The fuel value of fat is", options: { A: "4", B: "7", C: "9", D: "5" }, correct: "C" },
    { id: 5, question: "Heme is converted to bilirubin mainly in", options: { A: "Kidney", B: "Liver", C: "Spleen", D: "Bone marrow" }, correct: "C" },
    { id: 6, question: "In molecular cloning, Blue White screening is used for", options: { A: "To screen for recombinant vectors", B: "To detect gene mutations", C: "To identify desired chromosomal DNA insert in plasmid vectors", D: "To detect host DNA in situ" }, correct: "C" },
    { id: 7, question: "Enzymes increase reaction rates by", options: { A: "Altering the free energy of the reaction", B: "Inhibiting the backward reaction", C: "Enriching the forward reaction", D: "Decreasing the energy of activation" }, correct: "D" },
    { id: 8, question: "Which of the following is most important content of diet?", options: { A: "Protein", B: "Water", C: "Vitamin", D: "Minerals" }, correct: "B" },
    { id: 9, question: "In all the following RNA participates directly except", options: { A: "Post translation modification", B: "Post transcriptional modification", C: "DNA replication", D: "Splicing" }, correct: "A" },
    { id: 10, question: "Normal level of serum phosphorous is", options: { A: "2.5-4.5 mgm%", B: "7.9 mgm%", C: "40-50 mgm%", D: "1.2 mgm%" }, correct: "A" },
    { id: 11, question: "Inside the cell, the substance, which contributes to most of the osmolality, is", options: { A: "Protein", B: "Potassium", C: "Urea", D: "Phosphate" }, correct: "B" },
    { id: 12, question: "Daily requirement of iron in man is", options: { A: "1gm", B: "10 microgram", C: "10 mg", D: "20 mg" }, correct: "C" },
    { id: 13, question: "In human body which of the following trace element is next to iron", options: { A: "Ca++", B: "Zn++", C: "Cu++", D: "Selenium" }, correct: "B" },
    { id: 14, question: "Ferritin - an inactive form of iron is stored in", options: { A: "Gut", B: "Spleen", C: "Liver", D: "All of the above" }, correct: "D" },
    { id: 15, question: "Is the measure of how much material makes up the object is termed as:", options: { A: "Matter", B: "Mass", C: "Weight", D: "Volume", E: "Gas" }, correct: "B" },
    { id: 16, question: "Measure of the force of gravity on an object is called:", options: { A: "Mass", B: "Volume", C: "Weight", D: "Matter", E: "Solid" }, correct: "C" },
    { id: 17, question: "Tiny particles or building blocks of matter, smallest unit of matter is known as:", options: { A: "Atom", B: "Molecule", C: "Mass", D: "Gas", E: "Volume" }, correct: "A" },
    { id: 18, question: "Cooling air causes water vapor to change to liquid is called:", options: { A: "Evaporation", B: "Physical change", C: "Chemical change", D: "Condensation", E: "Boiling" }, correct: "D" },
    { id: 19, question: "Type of change which is permanent after interaction with particles is called as:", options: { A: "Physical change", B: "Chemical change", C: "Reversible", D: "Condensation", E: "Evaporation" }, correct: "B" },
    { id: 20, question: "Type of substance that can be dissolved is called as:", options: { A: "Solvent", B: "Solute", C: "Water", D: "Solution", E: "Element" }, correct: "B" },
    { id: 21, question: "Type of bond in which the atoms share one pair of electrons is called:", options: { A: "Double bond", B: "Covalent bond", C: "Non covalent bond", D: "Single bond", E: "Triple bond" }, correct: "D" },
    { id: 22, question: "All below mentioned are known as organic compounds except:", options: { A: "Proteins", B: "Carbohydrates", C: "Fats", D: "Sachharides", E: "Sodium Chloride" }, correct: "E" },
    { id: 23, question: "Type of bond in which there is sharing of four bonding of electrons between the atoms is called:", options: { A: "Single bond", B: "Covalent bond", C: "Non covalent bond", D: "Double bond", E: "Triple bond" }, correct: "D" },
    { id: 24, question: "Types of molecules having the same molecular formula but different arrangements or branches are called:", options: { A: "Isomerism", B: "Chain isomers", C: "Functional group members", D: "Positional isomers", E: "Bonding" }, correct: "A" },
    { id: 25, question: "The most common of organic compounds in the body is:", options: { A: "Proteins", B: "Fats", C: "Carbohydrates", D: "Salt", E: "Saturated fatty acids" }, correct: "C" },
    { id: 26, question: "Which are known as simple carbohydrates:", options: { A: "Monosaccharide", B: "Disaccharides", C: "Nucleic acids", D: "Polysaccharides", E: "A & B" }, correct: "E" },
    { id: 27, question: "Peroxidase enzyme contain", options: { A: "Chromium", B: "Selenium", C: "Magnesium", D: "Calcium" }, correct: "B" },
    { id: 28, question: "Translation occurs at", options: { A: "Mitochondria", B: "Centrosome", C: "Nucleus", D: "Ribosome" }, correct: "D" },
    { id: 29, question: "Which is not a oligosaccharide sugar?", options: { A: "Galactose", B: "Lactose", C: "Maltose", D: "Sucrose" }, correct: "A" },
    { id: 30, question: "One molecule of acetyl Co-A gives rise to ATP molecules?", options: { A: "2", B: "8", C: "12", D: "32" }, correct: "C" },
    { id: 31, question: "Why is chemistry important in nursing?", options: { A: "To understand biological processes", B: "To analyze financial reports", C: "To perform physical exercises", D: "To create aesthetically pleasing environments" }, correct: "A" },
    { id: 32, question: "Air is an example of:", options: { A: "Element", B: "Mixture", C: "Compound", D: "Isotope" }, correct: "B" },
    { id: 33, question: "The chemical formula for carbon dioxide is:", options: { A: "CO", B: "CO2", C: "CO3", D: "CO3" }, correct: "B" },
    { id: 34, question: "Ionic bonds are formed by the:", options: { A: "Sharing of electrons", B: "Transfer of electrons", C: "Both i and ii", D: "Attraction of protons" }, correct: "B" },
    { id: 35, question: "In a redox reaction, reduction involves:", options: { A: "Gain of electrons", B: "Loss of electrons", C: "No change in electrons", D: "Sharing of electrons" }, correct: "A" }
];

// ============================================================
// TEST 5: English-I (70 Questions)
// ============================================================
const TEST5_QUESTIONS = [
    { id: 1, question: "The researcher placed the documents ______ the table, and this careful arrangement helped the team review the data systematically.", options: { A: "on", B: "at", C: "under", D: "between", E: "among" }, correct: "A" },
    { id: 2, question: "The seminar continued ______ the scheduled time, and therefore many participants stayed longer to complete the discussion.", options: { A: "by", B: "beyond", C: "at", D: "for", E: "in" }, correct: "B" },
    { id: 3, question: "She spoke ______ confidence, and her clear tone convinced the audience of her expertise.", options: { A: "with", B: "by", C: "in", D: "for", E: "at" }, correct: "A" },
    { id: 4, question: "The students sat ______ the shade, and this protected them from the intense afternoon heat.", options: { A: "on", B: "near", C: "under", D: "beside", E: "across" }, correct: "C" },
    { id: 5, question: "The files were distributed ______ the committee members, and each person received equal responsibility.", options: { A: "between", B: "on", C: "in", D: "at", E: "among" }, correct: "E" },
    { id: 6, question: "He completed the task ______ great difficulty, and this experience strengthened his problem-solving skills.", options: { A: "in", B: "with", C: "by", D: "for", E: "on" }, correct: "B" },
    { id: 7, question: "The guest arrived ______ time, and the program started without any delay.", options: { A: "by", B: "in", C: "on", D: "at", E: "before" }, correct: "C" },
    { id: 8, question: "She walked ______ the corridor, and her footsteps echoed through the quiet building.", options: { A: "across", B: "between", C: "along", D: "through", E: "into" }, correct: "C" },
    { id: 9, question: "The medicine should be taken ______ meals, and this ensures better absorption.", options: { A: "at", B: "after", C: "before", D: "with", E: "during" }, correct: "B" },
    { id: 10, question: "The discussion moved ______ the original topic, and new ideas emerged naturally.", options: { A: "from", B: "to", C: "across", D: "beyond", E: "into" }, correct: "D" },
    { id: 11, question: "He stood ______ the door, and this position allowed him to greet everyone personally.", options: { A: "at", B: "on", C: "beside", D: "in", E: "near" }, correct: "A" },
    { id: 12, question: "The announcement was made ______ public interest, and transparency was maintained.", options: { A: "by", B: "in", C: "for", D: "with", E: "on" }, correct: "B" },
    { id: 13, question: "She divided the workload ______ her assistants, and cooperation improved significantly.", options: { A: "among", B: "between", C: "on", D: "in", E: "over" }, correct: "A" },
    { id: 14, question: "The professor spoke ______ authority, and students listened attentively.", options: { A: "in", B: "by", C: "on", D: "with", E: "at" }, correct: "D" },
    { id: 15, question: "The responsibility fell ______ the senior staff, and they accepted it willingly.", options: { A: "to", B: "for", C: "with", D: "on", E: "at" }, correct: "D" },
    { id: 16, question: "The error was discovered ______ accident, and corrective measures were taken immediately.", options: { A: "by", B: "with", C: "on", D: "at", E: "in" }, correct: "A" },
    { id: 17, question: "The team worked ______ pressure, and their performance remained consistent.", options: { A: "in", B: "under", C: "at", D: "on" }, correct: "B" },
    { id: 18, question: "The letter was written ______ behalf of the department, and it reflected collective opinion.", options: { A: "by", B: "with", C: "on", D: "for", E: "at" }, correct: "C" },
    { id: 19, question: "The discussion continued ______ several hours, and valuable conclusions were drawn.", options: { A: "since", B: "during", C: "for", D: "over", E: "within" }, correct: "C" },
    { id: 20, question: "The policy was implemented ______ stages, and this reduced operational risk.", options: { A: "by", B: "with", C: "in", D: "on", E: "at" }, correct: "C" },
    { id: 21, question: "If the data is verified carefully, the conclusions ______ more reliable.", options: { A: "will be", B: "would be", C: "were", D: "had been", E: "are" }, correct: "A" },
    { id: 22, question: "If he studied consistently, he ______ the examination confidently.", options: { A: "passes", B: "will pass", C: "would pass", D: "had passed", E: "has passed" }, correct: "C" },
    { id: 23, question: "If the instructions had been clearer, the error ______ avoided.", options: { A: "is", B: "was", C: "would have been", D: "will be", E: "were" }, correct: "C" },
    { id: 24, question: "If you heat ice, it ______ water, and this is a basic scientific fact.", options: { A: "would become", B: "has become", C: "became", D: "becomes", E: "will become" }, correct: "D" },
    { id: 25, question: "If she had informed us earlier, we ______ the schedule accordingly.", options: { A: "change", B: "changed", C: "will change", D: "would change", E: "would have changed" }, correct: "E" },
    { id: 26, question: "If the team works together, productivity ______ significantly.", options: { A: "would increase", B: "increased", C: "increases", D: "has increased", E: "had increased" }, correct: "C" },
    { id: 27, question: "If I were the coordinator, I ______ fairness in evaluation.", options: { A: "ensure", B: "ensured", C: "will ensure", D: "would ensure", E: "have ensured" }, correct: "D" },
    { id: 28, question: "If the experiment fails, the hypothesis ______ revised.", options: { A: "had been", B: "has been", C: "was", D: "is", E: "will be" }, correct: "E" },
    { id: 29, question: "If she practices regularly, her confidence ______ steadily.", options: { A: "had grown", B: "will grow", C: "grows", D: "would grow", E: "has grown" }, correct: "B" },
    { id: 30, question: "If the warning had been ignored, serious consequences ______ followed.", options: { A: "follow", B: "followed", C: "will follow", D: "would have", E: "have followed" }, correct: "D" },
    { id: 31, question: "The message was ______, and therefore everyone understood the task without confusion.", options: { A: "clear", B: "correct", C: "concise", D: "complete", E: "concrete" }, correct: "A" },
    { id: 32, question: "The report was ______, and all required details were included for decision-making.", options: { A: "concise", B: "complete", C: "correct", D: "clear", E: "courteous" }, correct: "B" },
    { id: 33, question: "His explanation was ______, and the factual accuracy impressed the panel.", options: { A: "concise", B: "clear", C: "correct", D: "concrete", E: "complete" }, correct: "C" },
    { id: 34, question: "The instructions were ______, and no unnecessary information distracted the reader.", options: { A: "clear", B: "correct", C: "complete", D: "concrete", E: "courteous" }, correct: "A" },
    { id: 35, question: "The speaker used ______ language, and real examples strengthened the message.", options: { A: "correct", B: "concise", C: "clear", D: "complete", E: "concrete" }, correct: "E" },
    { id: 36, question: "The email was ______, and its polite tone maintained professional relationships.", options: { A: "clear", B: "correct", C: "concise", D: "complete", E: "courteous" }, correct: "E" },
    { id: 37, question: "The proposal was ______ and no important aspect was left unexplained.", options: { A: "correct", B: "clear", C: "complete", D: "concrete", E: "concise" }, correct: "C" },
    { id: 38, question: "The instructions were ______ and they avoided all possible ambiguity.", options: { A: "concise", B: "correct", C: "concrete", D: "clear", E: "complete" }, correct: "D" },
    { id: 39, question: "The speaker was ______ and the audience felt respected throughout the discussion.", options: { A: "clear", B: "correct", C: "concise", D: "complete", E: "courteous" }, correct: "E" },
    { id: 40, question: "The student submitted the assignment early ______ received positive feedback.", options: { A: "who", B: "which", C: "whom", D: "whose", E: "that" }, correct: "A" },
    { id: 41, question: "The book ______ you recommended was extremely helpful.", options: { A: "who", B: "which", C: "whom", D: "whose", E: "where" }, correct: "B" },
    { id: 42, question: "The professor ______ lecture inspired the class is highly respected.", options: { A: "who", B: "whom", C: "which", D: "whose", E: "that" }, correct: "D" },
    { id: 43, question: "The laboratory ______ the experiment was conducted is well equipped.", options: { A: "who", B: "which", C: "whom", D: "that", E: "where" }, correct: "E" },
    { id: 44, question: "The candidate ______ the panel selected demonstrated strong leadership.", options: { A: "who", B: "which", C: "whom", D: "whose", E: "that" }, correct: "C" },
    { id: 45, question: "The device ______ was installed last week has improved efficiency.", options: { A: "who", B: "which", C: "whom", D: "whose", E: "where" }, correct: "B" },
    { id: 46, question: "The researcher ______ findings were published gained recognition.", options: { A: "who", B: "whom", C: "which", D: "whose", E: "that" }, correct: "D" },
    { id: 47, question: "The meeting ______ the policy was productive.", options: { A: "who", B: "which", C: "when", D: "that", E: "where" }, correct: "E" },
    { id: 48, question: "The assistant ______ the supervisor praised worked diligently.", options: { A: "who", B: "which", C: "whom", D: "whose", E: "that" }, correct: "C" },
    { id: 49, question: "The theory ______ explains the phenomenon is widely accepted.", options: { A: "who", B: "which", C: "whom", D: "whose", E: "where" }, correct: "B" },
    { id: 50, question: "The author ______ book you read is attending the conference.", options: { A: "who", B: "whom", C: "which", D: "whose", E: "that" }, correct: "D" },
    { id: 51, question: "The classroom ______ students collaborate actively shows better outcomes.", options: { A: "who", B: "which", C: "where", D: "whose", E: "that" }, correct: "C" },
    { id: 52, question: "The mentor ______ guided us was extremely supportive.", options: { A: "who", B: "which", C: "whom", D: "whose", E: "that" }, correct: "A" },
    { id: 53, question: "The policy ______ objectives are clearly defined is effective.", options: { A: "who", B: "which", C: "whom", D: "whose", E: "that" }, correct: "D" },
    { id: 54, question: "The moment ______ changed his career came unexpectedly.", options: { A: "who", B: "which", C: "when", D: "that", E: "where" }, correct: "C" },
    { id: 55, question: "The team ______ performance improved was rewarded.", options: { A: "who", B: "which", C: "whom", D: "whose", E: "that" }, correct: "D" },
    { id: 56, question: "The city ______ he studied has excellent universities.", options: { A: "who", B: "which", C: "where", D: "whose", E: "that" }, correct: "C" },
    { id: 57, question: "The supervisor ______ advice we followed was experienced.", options: { A: "who", B: "whom", C: "which", D: "whose", E: "that" }, correct: "D" },
    { id: 58, question: "The project ______ was completed on time received funding.", options: { A: "who", B: "which", C: "whom", D: "whose", E: "where" }, correct: "B" },
    { id: 59, question: "The student ______ dedication impressed everyone succeeded.", options: { A: "who", B: "which", C: "whom", D: "whose", E: "that" }, correct: "D" },
    { id: 60, question: "She ______ complete the task today, and her schedule allows sufficient time.", options: { A: "can", B: "could", C: "may", D: "would", E: "must" }, correct: "A" },
    { id: 61, question: "The committee ______ approve the proposal, and discussions are still ongoing.", options: { A: "can", B: "may", C: "would", D: "could", E: "must" }, correct: "B" },
    { id: 62, question: "He ______ have informed us earlier, and this delay caused confusion.", options: { A: "can", B: "may", C: "could", D: "would", E: "must" }, correct: "C" },
    { id: 63, question: "The students ______ follow the guidelines, and compliance ensures fairness.", options: { A: "could", B: "may", C: "can", D: "must", E: "would" }, correct: "D" },
    { id: 64, question: "She ______ attend the conference, and funding has already been approved.", options: { A: "would", B: "could", C: "must", D: "can", E: "may" }, correct: "D" },
    { id: 65, question: "Neither the teacher nor the students ______ aware of the change.", options: { A: "is", B: "are", C: "was", D: "were", E: "be" }, correct: "D" },
    { id: 66, question: "Each of the reports ______ been reviewed carefully.", options: { A: "have", B: "has", C: "were", D: "are", E: "be" }, correct: "B" },
    { id: 67, question: "The manager ______ resolve the issue, and his experience supports this.", options: { A: "would", B: "may", C: "can", D: "could", E: "must" }, correct: "C" },
    { id: 68, question: "A number of students ______ participating actively.", options: { A: "is", B: "was", C: "has", D: "are", E: "be" }, correct: "D" },
    { id: 69, question: "She ______ have succeeded earlier, and proper guidance was missing.", options: { A: "can", B: "may", C: "would", D: "must", E: "could" }, correct: "E" },
    { id: 70, question: "Choose the correct sentence:", options: { A: "She don't like coffee.", B: "She doesn't likes coffee.", C: "She doesn't like coffee.", D: "She not like coffee.", E: "She no like coffee." }, correct: "C" }
];

// ============================================================
// TEST 6: Ideology & Constitution of Pakistan (35 Questions)
// ============================================================
const TEST6_QUESTIONS = [
    { id: 1, question: "Anything can be an idea: the concept bears no value judgment.", options: { A: "No value judgment.", B: "Value judgment.", C: "Decision Making", D: "Power dynamics", E: "Value conflict" }, correct: "A" },
    { id: 2, question: "In Europe, the medieval age period is supposed to have begun in the", options: { A: "Seventh century", B: "Fourth century", C: "Third century", D: "Sixth century", E: "Fifth century" }, correct: "E" },
    { id: 3, question: "An idea is an eternally existing pattern or of which individual things in any class are", options: { A: "Perfect copies", B: "Imperfect copies", C: "Carbon copies", D: "Filtered copies", E: "Negative copies" }, correct: "B" },
    { id: 4, question: "A highly systematized and comprehensive pattern of cognitive and moral beliefs about man.", options: { A: "Forms", B: "Copies", C: "Ideas", D: "Ideology", E: "Existence" }, correct: "D" },
    { id: 5, question: "Two basic elements: 'collectivity', i.e., shared land and territory, and 'relationship', i.e., a grouping based on faith, creed, language, political philosophy or, unfortunately, even ethnicity.", options: { A: "The foundation of Ideology", B: "The examination of ideology", C: "The examination of Philosophy", D: "The examination of Ethics", E: "The foundation of Ethics" }, correct: "A" },
    { id: 6, question: "In C.E. 1500 the Mughal conqueror .... started mounting his campaigns for Muslim rule in subcontinent", options: { A: "Akbar", B: "Babur", C: "Humayun", D: "Jahangir", E: "Sir Syed Ahmad Khan" }, correct: "B" },
    { id: 7, question: "In Europe, the medieval age period is supposed to have ended in the", options: { A: "Eleventh century", B: "Twelfth Century", C: "Thirteenth Century", D: "Fifteenth century", E: "Sixteenth century" }, correct: "D" },
    { id: 8, question: "'A society united by .... as to its origin and a common aversion to its neighbors.'", options: { A: "A common identity", B: "A common error", C: "A common factor", D: "A common heredity", E: "A common DNA" }, correct: "B" },
    { id: 9, question: "An Act of the Parliament of the United Kingdom that brought about a limited increase in the involvement of Indians in the governance of British India", options: { A: "The Indian Councils Act 1909", B: "The Indian Councils Act 1908", C: "The Indian Councils Act 1910", D: "The Indian Councils Act 1907", E: "The Indian Councils Act 1911" }, correct: "A" },
    { id: 10, question: "The nation is a sovereign state founded upon .... a free association of individuals.", options: { A: "The will of the people", B: "The will of the Military", C: "The will of the Kings", D: "The will of the democrats", E: "The will of the Sociologists" }, correct: "A" },
    { id: 11, question: "A great aggregation of men, sane of mind and warm of heart, creates .... which is called a nation.", options: { A: "A moral conflict", B: "A moral Thinking", C: "A moral position", D: "A moral consciousness", E: "A moral dilemma" }, correct: "D" },
    { id: 12, question: "Identification with one's own nation and support for its interests, especially to the exclusion or detriment of the interests of other nations.", options: { A: "Nationalism", B: "Two Nation Theory", C: "Cultural Shock", D: "A moral conflict", E: "A moral Thinking" }, correct: "A" },
    { id: 13, question: "A motivational and extremely important force behind the advancement of any nation and provides an accurate direction and a sense of purpose to a nation.", options: { A: "Philosophy", B: "Ethics", C: "Morality", D: "Relationship", E: "Ideology" }, correct: "E" },
    { id: 14, question: "Nationalism, ideology based on the premise that the individual's loyalty and devotion to the nation-state", options: { A: "Equal other individual or group interests", B: "Surpass other individual or group interests", C: "Conflicts other individual or group interests", D: "Conflue other individual or group interests", E: "Negatively impacts other individual or group interests" }, correct: "B" },
    { id: 15, question: "The concept of the provision of rights is based on", options: { A: "The power of individuals", B: "The economy of the Government", C: "The social values of the society", D: "The Global perspective", E: "The Regional perspective" }, correct: "C" },
    { id: 16, question: "Indian politics during the struggle for independence remained under the shadows of .... an Indian ideal and ambition for the Hindu dominated state and culture for the Hindus and non Hindus alike.", options: { A: "Swadesh Movement", B: "AliGarth Movement", C: "Hindutva Movement", D: "Quit India Movement", E: "Mukti Bahini Movement" }, correct: "C" },
    { id: 17, question: "In Europe, the medieval age period is supposed to have ended when", options: { A: "The Arabs started attaching different areas of the world", B: "The Western Roman Empire fell", C: "The Eastern Roman Empire fell", D: "The Western Ottoman Empire fell", E: "The British Empire fell" }, correct: "B" },
    { id: 18, question: "Our beloved country Pakistan came into existence on 14 August 1947 as a result of", options: { A: "The partition of British India", B: "The partition of British Bengal", C: "War of independence", D: "The partition of British Colony", E: "The partition of British Power" }, correct: "A" },
    { id: 19, question: "The role of ...... has a historical value as he announced the slaves as a free member of society.", options: { A: "Jimmy Carter", B: "Gerald Ford", C: "Richard Nixon", D: "Abraham Lincoln", E: "Lyndon B. Johnson" }, correct: "D" },
    { id: 20, question: "The idea of nation states appeared in Europe at the beginning of the 19th century A.D. According to this concept was the innermost belief of the nation state, in which sovereignty belonged to the people.", options: { A: "Democracy", B: "Religious authority", C: "Cultural inheritance", D: "Witch hunt", E: "Secularism" }, correct: "A" },
    { id: 21, question: "The United Nations has been working for the of human beings all over the world.", options: { A: "Dignity, fairness, equality, respect and power dynamics", B: "Dignity, fairness, equity, respect and independence", C: "Dignity, fairness, equality, respect and independence", D: "Dignity, fairness, equality, Paternalism and independence", E: "Dignity, Veracity, equality, respect and independence" }, correct: "C" },
    { id: 22, question: "The ...... settled in India with the proper legal permission of the Mughals who were ruling India at that time.", options: { A: "Roman East India Company", B: "German East India Company", C: "British East India Company", D: "Dutch East India Company", E: "Ottoman East India Company" }, correct: "C" },
    { id: 23, question: "Since the birth of ...... till the partition plan of 3rd June 1947, the Hindu extremists, activated by their ideal, tried to keep Muslims under pressure.", options: { A: "The Indian National Congress in 1885", B: "The British National Congress in 1885", C: "The Aligarh National Congress in 1885", D: "The Ottoman National Congress in 1885", E: "The Muslim National Congress in 1885" }, correct: "A" },
    { id: 24, question: "The first constitution of Pakistan was adopted on", options: { A: "23rd March 1959", B: "23rd March 1954", C: "23rd March 1956", D: "23rd March 1955", E: "23rd March 1958" }, correct: "C" },
    { id: 25, question: "The ...... and the 'Convention on the Rights of the Child' are the most important efforts for the provision of human rights for all over the world.", options: { A: "Regional Declaration of Human Rights", B: "South East Declaration of Human Rights", C: "Helsinki Declaration of Human Rights", D: "Moscow Declaration of Human Rights", E: "Universal Declaration of Human Rights" }, correct: "E" },
    { id: 26, question: "Most linguists agree that the Urdu language is a product of the Hindu-Muslim interaction in the", options: { A: "North Asia", B: "South Asia", C: "Middle East", D: "Persia", E: "West Asia." }, correct: "B" },
    { id: 27, question: "In political development, Policy planners and economists (closely interconnected) ignored the relationships between", options: { A: "State formation and economic development", B: "state formation and power dynamics", C: "State formation and religious values", D: "State formation and cultural propaganda", E: "State formation and role of print media" }, correct: "A" },
    { id: 28, question: "Good governance dwells on efficient, effective, and corruption free", options: { A: "Multiparty system", B: "Military power", C: "Frequent constitution amendments", D: "Public administration", E: "Power dominance" }, correct: "D" },
    { id: 29, question: "According to Mr. ......, the former Secretary-General of the United Nations said: 'The commitment of the United Nations to human rights stems from the Organization's founding Charter.'", options: { A: "Catarina Vaz Pinto", B: "Ban Ki-moon", C: "Mario Soares", D: "Jorge Sampaio", E: "Kofi Annan" }, correct: "E" },
    { id: 30, question: "The most famous thinker, ......, held the opinion that ideology is about the ideas of any ruling class, who desire to uphold their honored position and order through capitalism.", options: { A: "Karl Marx", B: "Antoine Destutt' de Tracy", C: "Immanuel Kant", D: "Florence Nightingale", E: "Ibrahim Maslow" }, correct: "A" },
    { id: 31, question: "According to ...... of the Human rights Declaration, 'All human beings are born free and equal in dignity and rights'.", options: { A: "The article 5", B: "The article 3", C: "The article 1", D: "The article 6", E: "The article 2" }, correct: "C" },
    { id: 32, question: "'Basic principles through which a state is governed'. 'a set of rules for the people who agree to live together in a state.'", options: { A: "Informed consent", B: "Rule of law", C: "Religious Books", D: "Constitution", E: "Constitutional amendments" }, correct: "D" },
    { id: 33, question: "According to the first constitution, the full name of Pakistan is", options: { A: "The Islamic State of Pakistan", B: "The Muslim democracy of Pakistan", C: "The Muslim country of Pakistan", D: "The Islamic democracy of Pakistan", E: "The Islamic Republic of Pakistan" }, correct: "E" },
    { id: 34, question: "All the leaders of the parliamentary groups of the various political parties signed the draft of the constitution (1973). It was collectively passed by the Assembly on", options: { A: "10th April 1973", B: "10th May 1973", C: "10th March 1973", D: "10th June 1973", E: "10th February 1973" }, correct: "A" },
    { id: 35, question: "The newly born state of Pakistan adopted ...... as interim constitution because during the early years, formulating a new constitution for such a newly emerged state of Pakistan was a very difficult task.", options: { A: "The Indian 1935 and Independence 1948 Acts", B: "The Indian 1931 and Independence 1947 Acts", C: "The Indian 1935 and Independence 1947 Acts", D: "The Indian 1935 and Independence 1946 Acts", E: "The Indian 1925 and Independence 1947 Acts" }, correct: "C" }
];

// ============================================================
// ALL TESTS
// ============================================================
export const ALL_TESTS = {
    test1: { id: 'test1', name: 'Fundamental of Nursing-I', description: '217 MCQs (Original 30 + FON Full Bank)', timeLimit: 120, passingScore: 50, questions: TEST1_QUESTIONS },
    test2: { id: 'test2', name: 'Anatomy & Physiology-I', description: '70 MCQs', totalQuestions: 70, timeLimit: 90, passingScore: 50, questions: TEST2_QUESTIONS },
    test3: { id: 'test3', name: 'Microbiology & Infection Control', description: '35 MCQs', totalQuestions: 35, timeLimit: 60, passingScore: 50, questions: TEST3_QUESTIONS },
    test4: { id: 'test4', name: 'Biochemistry for Nurses', description: '35 MCQs', totalQuestions: 35, timeLimit: 60, passingScore: 50, questions: TEST4_QUESTIONS },
    test5: { id: 'test5', name: 'English-I', description: '70 MCQs', totalQuestions: 70, timeLimit: 90, passingScore: 50, questions: TEST5_QUESTIONS },
    test6: { id: 'test6', name: 'Ideology & Constitution of Pakistan', description: '35 MCQs', totalQuestions: 35, timeLimit: 60, passingScore: 50, questions: TEST6_QUESTIONS }
};

// ============================================================
// 🔥 FIREBASE-BASED TEST SWITCHING
// ============================================================

let currentActiveTestId = 'test1';

export const getActiveTestFromFirebase = async () => {
    try {
        const configRef = doc(db, 'system-config', 'active-test');
        const configSnap = await getDoc(configRef);
        
        if (configSnap.exists()) {
            const data = configSnap.data();
            const testId = data.activeTestId;
            
            if (ALL_TESTS[testId]) {
                currentActiveTestId = testId;
                console.log('✅ Active test from Firebase:', testId);
                return testId;
            }
        } else {
            await setDoc(configRef, {
                activeTestId: 'test1',
                updatedAt: new Date().toISOString()
            });
        }
    } catch (error) {
        console.error('❌ Error:', error);
    }
    return currentActiveTestId;
};

export const setActiveTestInFirebase = async (testId) => {
    try {
        if (!ALL_TESTS[testId]) return false;
        
        const configRef = doc(db, 'system-config', 'active-test');
        await setDoc(configRef, {
            activeTestId: testId,
            activeTestName: ALL_TESTS[testId].name,
            updatedAt: new Date().toISOString(),
            updatedBy: 'admin'
        }, { merge: true });
        
        currentActiveTestId = testId;
        console.log('✅ Test switched:', testId);
        return true;
    } catch (error) {
        console.error('❌ Error:', error);
        return false;
    }
};

export const getCurrentTestId = () => currentActiveTestId;
export const getCurrentTestQuestions = () => ALL_TESTS[currentActiveTestId].questions;
export const getCurrentTestConfig = () => ALL_TESTS[currentActiveTestId];

export const ACTIVE_TEST_ID = 'test1';
export const EXAM_QUESTIONS = ALL_TESTS['test1'].questions;
export const CURRENT_TEST = ALL_TESTS['test1'];

export function getAllTests() {
    return Object.keys(ALL_TESTS).map(key => ({
        id: ALL_TESTS[key].id,
        name: ALL_TESTS[key].name,
        description: ALL_TESTS[key].description,
        totalQuestions: ALL_TESTS[key].totalQuestions,
        timeLimit: ALL_TESTS[key].timeLimit,
        passingScore: ALL_TESTS[key].passingScore,
        isCurrent: key === currentActiveTestId
    }));
}
