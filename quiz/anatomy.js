
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
const int = setInterval(startTimer, 500);

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
        question: "What is anatomy?",
        options: ["The study of the structure and organization of the human body.", "The study of chemical processes within the human body.", "The study of the nervous system.", "The study of human behavior."],
        correct: "option 1"
      },
      {
        question: "What is the function of the circulatory system?",
        options: ["To transport oxygen, nutrients, and hormones to cells throughout the body and remove waste products.", "To regulate body temperature.", "To produce blood cells.", "To digest food."],
        correct: "option 1"
      },
      {
        question: "Which organ is part of the digestive system?",
        options: [ "Kidney","Liver", "Brain", "Heart"],
        correct: "option 2"
      },
      {
        question: "What is the main function of the respiratory system?",
        options: ["To facilitate the exchange of oxygen and carbon dioxide between the body and the environment.", "To pump blood throughout the body.", "To regulate body temperature.", "To digest food."],
        correct: "option 1"
      },
      {
        question: "What are the bones in the human arm called?",
        options: [ "Femur, tibia, and fibula", "Scapula and clavicle","Humerus, radius, and ulna", "Carpals and metacarpals"],
        correct: "option 3"
      },
      {
        question: "What is the largest organ in the human body?",
        options: [ "Liver", "Heart", "Brain","Skin"],
        correct: "option 4"
      },
      {
        question: "Which part of the brain controls balance and coordination?",
        options: [ "Cerebrum","Cerebellum", "Brainstem", "Hypothalamus"],
        correct: "option 2"
      },
      {
        question: "What is the main function of the skeletal system?",
        options: ["To provide structure, support, and protection for the body.", "To produce hormones.", "To pump blood throughout the body.", "To digest food."],
        correct: "option 1"
      },
      {
        question: "Which type of muscle is responsible for involuntary movements like breathing and digestion?",
        options: [ "Skeletal muscle", "Cardiac muscle", "Tendon","Smooth muscle"],
        correct: "option 4"
      },
      {
        question: "What is the purpose of the lymphatic system?",
        options: ["To help the body fight infection and disease.", "To regulate blood sugar levels.", "To produce hormones.", "To regulate body temperature."],
        correct: "option 1"
      },
      {
        question: "Which gland is often referred to as the 'master gland' of the endocrine system?",
        options: [ "Thyroid gland", "Adrenal gland","Pituitary gland", "Pancreas"],
        correct: "option 3"
      },
      {
        question: "What is the role of the urinary system?",
        options: ["To remove waste products from the body and regulate fluid balance.", "To regulate body temperature.", "To produce hormones.", "To digest food."],
        correct: "option 1"
      },
      {
        question: "Which part of the eye controls the amount of light that enters?",
        options: [ "Retina", "Cornea", "Lens","Pupil"],
        correct: "option 4"
      },
      {
        question: "What is the purpose of the reproductive system?",
        options: ["To produce offspring and ensure the survival of the species.", "To regulate body temperature.", "To digest food.", "To facilitate movement."],
        correct: "option 1"
      },
      {
        question: "Which part of the neuron receives signals from other neurons?",
        options: [ "Axon","Dendrite", "Synapse", "Cell body"],
        correct: "option 2"
      },
      {
        question: "What is the function of the integumentary system?",
        options: ["To protect the body from environmental damage and regulate temperature.", "To produce hormones.", "To pump blood throughout the body.", "To digest food."],
        correct: "option 1"
      },
      {
        question: "Which bone protects the brain?",
        options: [ "Rib cage", "Vertebrae", "Femur","Skull"],
        correct: "option 4"
      },
      {
        question: "What is the function of the pancreas?",
        options: ["To produce insulin and regulate blood sugar levels.", "To filter blood and remove toxins.", "To pump blood throughout the body.", "To digest food."],
        correct: "option 1"
      },
      {
        question: "Which organ produces bile to aid in digestion?",
        options: [ "Pancreas","Liver", "Stomach", "Gallbladder"],
        correct: "option 2"
      },
      {
        question: "What is the purpose of the endocrine system?",
        options: ["To regulate various bodily functions using hormones.", "To regulate body temperature.", "To produce blood cells.", "To digest food."],
        correct: "option 1"
      },
      {
        question: "Which part of the brain is responsible for higher functions such as thinking and problem-solving?",
        options: [ "Cerebellum", "Brainstem", "Cerebrum","Hypothalamus"],
        correct: "option 3"
      },
      {
        question: "What is the function of the immune system?",
        options: ["To protect the body from foreign invaders such as bacteria and viruses.", "To regulate blood sugar levels.", "To produce hormones.", "To regulate body temperature."],
        correct: "option 1"
      },
      {
        question: "Which bone connects the shoulder to the arm?",
        options: [ "Humerus","Clavicle", "Scapula", "Radius"],
        correct: "option 2"
      },
      {
        question: "What is the purpose of the cardiovascular system?",
        options: ["To transport blood, oxygen, and nutrients throughout the body.", "To regulate body temperature.", "To produce hormones.", "To digest food."],
        correct: "option 1"
      },
      {
        question: "Which part of the ear is responsible for detecting sound vibrations?",
        options: [ "Eardrum", "Auditory canal","Cochlea", "Pinna"],
        correct: "option 3"
      },
      {
        question: "What is the role of the gallbladder?",
        options: ["To store and concentrate bile produced by the liver.", "To filter blood and remove toxins.", "To pump blood throughout the body.", "To digest food."],
        correct: "option 1"
      },
      {
        question: "Which gland regulates metabolism and energy levels?",
        options: [ "Pituitary gland","Thyroid gland", "Adrenal gland", "Pancreas"],
        correct: "option 2"
      },
      {
        question: "What is the function of the skeletal muscle system?",
        options: ["To enable movement of the body and maintain posture.", "To regulate body temperature.", "To produce hormones.", "To digest food."],
        correct: "option 1"
      },
      {
        question: "Which part of the nervous system controls voluntary movements?",
        options: ["Somatic nervous system", "Autonomic nervous system", "Peripheral nervous system", "Central nervous system"],
        correct: "option 2"
      },
      {
        question: "Which develops from the rhombocephaalon?",
        options: ["Dienchepalon", "Mesencephalon", "Telencehalon", "Mylencehalon"],
        correct: "option 2"
      },
      
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
  if (currentQs > 28) {
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