
const hr = document.getElementById('hr');
const min = document.getElementById('min');
const sec = document.getElementById('sec');
let seconds = sec.innerText;
 sec.innerText =60;
 min.innerText=30;
function startTimer(){

 sec.innerText--;
 if(sec.innerText==0){
    min.innerText--;
    sec.innerText=60;
}
if(min.innerText===0){
    endyes();
}
}
const int = setInterval(startTimer, 1000);

const question = document.getElementById('ques');
const option1 = document.getElementById('option1');
const option2 = document.getElementById('option2');
const option3 = document.getElementById('option3');
const option4 = document.getElementById('option4');
const qsNo = document.getElementById('qno');
const radio = document.querySelectorAll("input[type='radio']");
const sc =document.getElementById('sc');
const remark =document.getElementById('h1');
let currentQs = 0;
let score =0;
const qs = [
 {
   question: "What is Medical-Surgical Nursing?",
   options: ["A specialty nursing area focused on caring for adult patients in a wide range of settings", "A type of surgical procedure performed without anesthesia", "A branch of medicine dealing with medications used in surgery", "A term for surgical instruments used in medical procedures"],
   correct: "option 1"
},

 {
   question: "Which of the following conditions is commonly managed in Medical-Surgical Nursing?",
   options: ["Diabetes mellitus", "Pediatric asthma", "Obstetric complications", "Psychiatric disorders"],
   correct: "option 1"
},

 {
   question: "What is the primary goal of Medical-Surgical Nursing?",
   options: ["To provide comprehensive care to adult patients across the health continuum", "To specialize in surgical interventions for critically ill patients", "To focus solely on administering medications in surgical settings", "To manage acute and chronic conditions in pediatric patients"],
   correct: "option 2"
},

{
   question: "Which of the following nursing interventions is common in Medical-Surgical Nursing?",
   options: [ "Performing developmental assessments in infants","Monitoring vital signs postoperatively", "Administering prenatal vitamins to pregnant women", "Providing cognitive therapy to psychiatric patients"],
   correct: "option 2"
},
 {
   question: "What role does a Medical-Surgical Nurse typically play in patient care?",
   options: [ "Assisting surgeons during surgical procedures", "Conducting psychotherapy sessions with patients","Assessment, diagnosis, planning, implementation, and evaluation of nursing care", "Administering anesthesia to patients preoperatively"],
   correct: "option 3"
},

 {
   question: "Which of the following is a common postoperative complication?",
   options: ["Hypoglycemia", "Hypertension", "Osteoporosis","Infection"],
   correct: "option 4"
},

 {
   question: "What is the purpose of preoperative nursing assessments?",
   options: ["To identify potential risks and complications", "To provide psychological counseling to patients", "To administer anesthesia to patients", "To monitor vital signs during surgery"],
   correct: "option 1"
},

 {
   question: "What does 'NPO' stand for in medical-surgical nursing?",
   options: ["Nothing per oral", "Nausea prevention operation", "Nursing plan of operation", "No prior observation"],
   correct: "option 1"
},

 {
   question: "Which of the following is a priority nursing intervention for a patient with impaired gas exchange?",
   options: [ "Encourage fluid intake","Administer oxygen therapy", "Provide pain relief", "Apply cold compresses"],
   correct: "option 2"
},

{
   question: "What is the purpose of incentive spirometry?",
   options: [ "To measure blood pressure", "To assess neurological status", "To improve lung function after surgery","To monitor urinary output"],
   correct: "option 3"
},

 {
   question: "Which of the following is a common side effect of opioid analgesics?",
   options: ["Respiratory depression", "Increased heart rate", "Decreased blood pressure", "Elevated body temperature"],
   correct: "option 1"
},

 {
   question: "What is the purpose of applying sequential compression devices (SCDs) to a patient's legs?",
   options: [ "To promote wound healing", "To relieve pain","To prevent deep vein thrombosis (DVT)", "To improve mobility"],
   correct: "option 3"
},

 {
   question: "Which of the following is a sign of hypovolemic shock?",
   options: [ "Increased urine output", "Hyperthermia", "Bradycardia","Decreased blood pressure"],
   correct: "option 4"
},

 {
   question: "What is the primary cause of peptic ulcer disease (PUD)?",
   options: ["Helicobacter pylori infection", "Excessive alcohol consumption", "High fiber diet", "Low gastric acid secretion"],
   correct: "option 1"
},

{
   question: "Which of the following is a symptom of acute pancreatitis?",
   options: [ "Rapid weight loss","Severe abdominal pain", "Hypoglycemia", "Hypertension"],
   correct: "option 2"
},

{
   question: "What is the primary goal of treatment for chronic obstructive pulmonary disease (COPD)?",
   options: [ "To cure the underlying cause", "To prevent future exacerbations","To relieve symptoms and improve quality of life", "To reverse lung damage"],
   correct: "option 3"
},

 {
   question: "Which of the following is a characteristic of heart failure?",
   options: [ "Excessive blood flow to the heart","Impaired cardiac function leading to inadequate tissue perfusion", "Hypertension", "Decreased preload"],
   correct: "option 2"
},

{
   question: "What is the primary cause of chronic kidney disease (CKD)?",
   options: [ "Hypertension", "Excessive fluid intake","Diabetes mellitus", "High-protein diet"],
   correct: "option 3"
},

 {
   question: "What is the primary treatment for hyperkalemia?",
   options: ["Administration of calcium gluconate", "Insulin and glucose infusion", "Diuretics", "Sodium bicarbonate"],
   correct: "option 1"
},

{
   question: "Which of the following is a common complication of diabetic ketoacidosis (DKA)?",
   options: ["Hyperglycemia", "Metabolic acidosis", "Hypokalemia", "Hypernatremia"],
   correct: "option 1"
},

{
   question: "What is the primary goal of treatment for sepsis?",
   options: ["Early recognition and initiation of antibiotics", "Surgical intervention", "Fluid restriction", "Pain management"],
   correct: "option 1"
},

 {
   question: "Which of the following is a common symptom of appendicitis?",
   options: [ "Left upper quadrant abdominal pain","Right lower quadrant abdominal pain", "Epigastric pain", "Periumbilical pain"],
   correct: "option 2"
},

{
   question: "What is the purpose of a nasogastric (NG) tube?",
   options: ["To decompress the stomach", "To administer enteral feedings", "To monitor gastric pH", "To measure abdominal girth"],
   correct: "option 2"
},

 {
   question: "Which of the following is a potential complication of a urinary catheter?",
   options: ["Urinary tract infection (UTI)", "Increased urine output", "Improved bladder function", "Reduced risk of pressure ulcers"],
   correct: "option 1"
},

{
   question: "What is the primary treatment for acute respiratory distress syndrome (ARDS)?",
   options: ["Mechanical ventilation and supportive care", "Surgical intervention", "Antibiotics", "Steroid therapy"],
   correct: "option 1"
},

 {
   question: "Which of the following is a sign of intracranial pressure (ICP)?",
   options: ["Decreased level of consciousness", "Hypotension", "Decreased pupil size", "Bradycardia"],
   correct: "option 1"
},

 {
   question: "What is the primary goal of treatment for acute myocardial infarction (AMI)?",
   options: [ "To prevent further damage to the heart", "To lower blood pressure","To restore blood flow to the heart muscle", "To increase heart rate"],
   correct: "option 3"
},

 {
   question: "Which of the following is a common complication of pneumonia?",
   options: ["Respiratory failure", "Hyperglycemia", "Hypotension", "Renal failure"],
   correct: "option 1"
},

 {
   question: "What is the primary cause of chronic liver disease?",
   options: ["Alcohol abuse and viral hepatitis", "Excessive dietary fat intake", "Low cholesterol levels", "High blood pressure"],
   correct: "option 1"
},

 {
   question: "Which of the following is a symptom of deep vein thrombosis (DVT)?",
   options: [ "Chest pain radiating to the back","Swelling and pain in the affected limb", "Numbness and tingling in the fingers", "Blurred vision"],
   correct: "option 2"
},

 {
   question: "What is the primary goal of treatment for rheumatoid arthritis (RA)?",
   options: ["To reduce inflammation and pain", "To improve joint mobility", "To increase bone density", "To prevent future exacerbations"],
   correct: "option 1"
},

 {
   question: "Which of the following is a common side effect of chemotherapy?",
   options: [ "Increased appetite", "Weight gain", "Hypotension","Nausea and vomiting"],
   correct: "option 4"
},

{
   question: "What is the purpose of an arterial blood gas (ABG) analysis?",
   options: ["To assess oxygenation and acid-base balance", "To measure blood glucose levels", "To evaluate kidney function", "To monitor electrolyte levels"],
   correct: "option 1"
},

{
   question: "Which of the following is a characteristic of Parkinson's disease?",
   options: ["Tremors and muscle rigidity", "Memory loss and confusion", "Increased muscle tone", "Blurred vision"],
   correct: "option 1"
},

 {
   question: "What is the primary treatment for atrial fibrillation (AFib)?",
   options: [ "Surgical ablation", "Beta-blockers", "Anticoagulant therapy","Diuretics"],
   correct: "option 3"
},

{
   question: "Which of the following is a common symptom of acute glomerulonephritis?",
   options: [ "Hypertension", "Hypoventilation", "Hypoglycemia","Hematuria and proteinuria"],
   correct: "option 4"
},

{
   question: "What is the primary goal of treatment for diabetic foot ulcers?",
   options: ["To promote wound healing and prevent infection", "To reduce blood glucose levels", "To improve circulation", "To relieve pain"],
   correct: "option 1"
},

{
   question: "Which of the following is a potential complication of a blood transfusion?",
   options: ["Transfusion reaction", "Increased oxygenation", "Decreased blood pressure", "Hyperkalemia"],
   correct: "option 1"
},

{
   question: "What is the primary cause of hyperthyroidism?",
   options: [ "Hypothyroidism", "Excessive iodine intake", "Thyroidectomy","Graves' disease"],
   correct: "option 4"
},

 {
   question: "Which of the following is a common symptom of diverticulitis?",
   options: ["Left lower quadrant abdominal pain", "Right upper quadrant abdominal pain", "Periumbilical pain", "Epigastric pain"],
   correct: "option 4"
},

 {
   question: "What is the primary goal of treatment for systemic lupus erythematosus (SLE)?",
   options: ["To control inflammation and prevent organ damage", "To increase blood pressure", "To lower cholesterol levels", "To improve joint mobility"],
   correct: "option 1"
},
 {
   question: "Which of the following is a common symptom of hepatitis?",
   options: [ "Hypertension", "Decreased appetite","Jaundice", "Increased urine output"],
   correct: "option 3"
},

 {
   question: "What is the primary cause of acute pancreatitis?",
   options: ["Gallstones and alcohol abuse", "High-protein diet", "Excessive caffeine consumption", "Low-fat diet"],
   correct: "option 1"
},

{
   question: "Which of the following is a common complication of chronic obstructive pulmonary disease (COPD)?",
   options: ["Respiratory failure", "Hypotension", "Hyperglycemia", "Hyperkalemia"],
   correct: "option 1"
},

 {
   question: "What is the primary goal of treatment for Crohn's disease?",
   options: [ "To improve kidney function", "To control inflammation and relieve symptoms","To increase blood flow to the intestines", "To prevent future exacerbations"],
   correct: "option 2"
},

 {
   question: "Which of the following is a common symptom of anemia?",
   options: [ "Increased energy levels", "Weight gain","Fatigue and weakness", "Hypertension"],
   correct: "option 3"
},

 {
   question: "What is the primary cause of hypothyroidism?",
   options: ["Autoimmune thyroiditis (Hashimoto's disease)", "Excessive thyroid hormone production", "Low iodine intake", "Thyroidectomy"],
   correct: "option 1"
},

 {
   question: "Which of the following is a common complication of acute renal failure?",
   options: ["Electrolyte imbalances", "Hypoglycemia", "Hypotension", "Increased urine output"],
   correct: "option 1"
},

 {
   question: "What is the primary goal of treatment for peptic ulcer disease (PUD)?",
   options: ["To reduce gastric acid secretion and promote healing", "To prevent infection", "To increase gastric motility", "To improve liver function"],
   correct: "option 1"
},

 {
   question: "Which of the following is a common symptom of gastroesophageal reflux disease (GERD)?",
   options: [ "Hypotension", "Increased appetite", "Heartburn and regurgitation","Nausea and vomiting"],
   correct: "option 3"
}


]


function gen(){
   const item = qs[currentQs];
question.innerText = item.question;
option1.innerText = item.options[0];
option2.innerText = item.options[1];
option3.innerText = item.options[2];
option4.innerText = item.options[3];
qsNo.innerText='Question ' + currentQs;
correct = item.correct;
// if(correct==answer()){
//     score++;
// }
// else{console.log('wrong')}
if (currentQs == 0) {
 document.querySelector('#prev').style.display='none';
}
}
function validate(){
   const item = qs[currentQs];
   correct=item.correct;
       let answer;
       let formValid = false;
   //     radio.forEach(radio=>{
   //         if(radio.checked){
   //             answer = radio.id;
   //             console.log(answer);
   //             if(correct==answer){
   //                 console.log(score);
   //                 score++;
   //             }
   //         }
       
   //     }
       
   
   // );
   for(var i =0; i<radio.length; i++){
       if(radio[i].checked){
           formValid= true;
           answer = radio[i].id;
           break;
       }
   }
   if(formValid==false){
       console.log('error');
   }
   else{
       if(correct==answer){
           score++;
       }
   }


}
function next(){
   validate(); 
   currentQs++;
   if (currentQs >= 49) {
   document.querySelector('#next').style.display='none';
   console.log(qs.length)
   }
   else{
   gen(currentQs);
   qsNo.innerText='Question ' + currentQs;
   document.getElementById('option 1').checked = false;
   document.getElementById('option 2').checked = false;
   document.getElementById('option 3').checked = false;
   document.getElementById('option 4').checked = false;

   document.querySelectorAll("input[type='radio']").checked = false;
   
           
   document.querySelector('#next').style.display='inline';
if(currentQs > 0){
 document.querySelector('#prev').style.display='inline';
}
  
}}
function previous(){
   currentQs--;
  
   gen(currentQs);
   qsNo.innerText='Question ' + currentQs;
   document.querySelector('#prev').style.display='inline';
     
   document.querySelector('#next').style.display='inline';
   if (currentQs == 0) {
     document.querySelector('#prev').style.display='none';
    }
 
}
function end(){
    validate();
    document.getElementById('con').style.display='block';
    document.getElementById('end').style.display='none';
}
function endyes(){
    clearInterval(int);
    document.getElementById('con').style.display='none';
    document.getElementById('end').style.display='block';
    sc.innerText= "Your score is " + score*2 + "%";
    if(score > 25){
        remark.innerText ="You did well";
    }
    if(score<25){
        remark.innerText = "you failed goodluck next time"
    }
}
function endno(){
    document.getElementById('con').style.display='none';
    document.getElementById('end').style.display='none';
}
function cont(){
window.location.href='quizo3.html';
}