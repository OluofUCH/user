
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
      question: "What is pharmacology?",
      options: ["The study of drugs and their effects on living organisms.", "The study of viruses and bacteria.", "The study of genetic disorders.", "The study of human behavior."],
      correct: "option 1"
    },
    {
      question: "What is a side effect of a medication?",
      options: ["An unintended or adverse reaction to a drug.", "The desired therapeutic effect of a drug.", "The dosage of a drug.", "The chemical composition of a drug."],
      correct: "option 1"
    },
    {
      question: "What is the purpose of a placebo in a clinical trial?",
      options: ["To serve as a control group for comparison with the experimental group receiving the actual drug.", "To maximize the effectiveness of the drug being tested.", "To reduce the risk of adverse effects.", "To increase the dosage of the drug."],
      correct: "option 1"
    },
    {
      question: "What is the term for a drug's ability to produce a desired therapeutic effect?",
      options: ["Efficacy", "Potency", "Toxicity", "Side effect"],
      correct: "option 1"
    },
    {
      question: "Which phase of clinical trials involves testing a drug on a larger group of people to evaluate its effectiveness, safety, and optimal dosage?",
      options: ["Phase III", "Phase I", "Phase II", "Phase IV"],
      correct: "option 1"
    },
    {
      question: "What is the primary function of an antagonist drug?",
      options: ["To block or inhibit the action of a neurotransmitter or hormone.", "To enhance the action of a neurotransmitter or hormone.", "To mimic the action of a neurotransmitter or hormone.", "To have no effect on neurotransmitters or hormones."],
      correct: "option 1"
    },
    {
      question: "What is the term for the body's decreased response to a drug over time, requiring higher doses to achieve the same effect?",
      options: ["Tolerance", "Dependence", "Withdrawal", "Addiction"],
      correct: "option 1"
    },
    {
      question: "What is the mechanism of action of an agonist drug?",
      options: ["To mimic or enhance the action of a neurotransmitter or hormone.", "To block or inhibit the action of a neurotransmitter or hormone.", "To have no effect on neurotransmitters or hormones.", "To induce tolerance to other drugs."],
      correct: "option 1"
    },
    {
      question: "Which term refers to the process by which a drug is absorbed, distributed, metabolized, and excreted by the body?",
      options: ["Pharmacokinetics", "Pharmacodynamics", "Toxicology", "Pharmacogenetics"],
      correct: "option 1"
    },
    {
      question: "What is the term for the range of doses of a drug that produce the desired therapeutic effect without causing significant adverse effects?",
      options: ["Therapeutic window", "Toxic dose", "Lethal dose", "Minimum effective dose"],
      correct: "option 1"
    },
    {
      question: "Which type of drug is used to relieve pain without causing loss of consciousness?",
      options: ["Analgesic", "Anesthetic", "Antipyretic", "Antiemetic"],
      correct: "option 1"
    },
    {
      question: "What is the term for a substance that blocks the action of an enzyme, thereby slowing down or preventing a biochemical reaction?",
      options: ["Enzyme inhibitor", "Enzyme activator", "Enzyme substrate", "Enzyme co-factor"],
      correct: "option 1"
    },
    {
      question: "Which term refers to the study of how genetic variations influence an individual's response to drugs?",
      options: ["Pharmacogenetics", "Pharmacokinetics", "Toxicology", "Pharmacodynamics"],
      correct: "option 1"
    },
    {
      question: "What is the primary function of an anti-inflammatory drug?",
      options: ["To reduce inflammation and pain.", "To lower blood pressure.", "To treat bacterial infections.", "To stimulate the immune system."],
      correct: "option 1"
    },
    {
      question: "Which type of drug is used to treat high blood pressure?",
      options: ["Antihypertensive", "Antibiotic", "Antidepressant", "Antipsychotic"],
      correct: "option 1"
    },
    {
      question: "What is the term for the study of the adverse effects of chemicals on living organisms?",
      options: ["Toxicology", "Pharmacology", "Pharmacokinetics", "Pharmacodynamics"],
      correct: "option 1"
    },
    {
      question: "Which phase of clinical trials involves testing a drug on a small group of healthy volunteers to evaluate its safety and dosage range?",
      options: ["Phase I", "Phase II", "Phase III", "Phase IV"],
      correct: "option 1"
    },
    {
      question: "What is the term for the condition in which a drug produces harmful effects at doses lower than those required to produce beneficial therapeutic effects?",
      options: ["Toxicity", "Side effect", "Tolerance", "Dependence"],
      correct: "option 1"
    },
    {
      question: "Which type of drug is used to treat bacterial infections?",
      options: ["Antibiotic", "Antiviral", "Antifungal", "Antipyretic"],
      correct: "option 1"
    },
    {
      question: "What is the term for the study of how drugs interact with living organisms to produce their effects?",
      options: ["Pharmacodynamics", "Pharmacokinetics", "Toxicology", "Pharmacogenetics"],
      correct: "option 1"
    },
    {
      question: "Which term refers to the condition in which a drug user experiences uncomfortable symptoms when discontinuing drug use?",
      options: ["Withdrawal", "Tolerance", "Dependence", "Addiction"],
      correct: "option 1"
    },
    {
      question: "What is the term for the lowest dose of a drug that produces a detectable response in the body?",
      options: ["Minimum effective dose", "Maximum tolerated dose", "Toxic dose", "Lethal dose"],
      correct: "option 1"
    },
    {
      question: "Which type of drug is used to prevent or relieve nausea and vomiting?",
      options: ["Antiemetic", "Analgesic", "Antipyretic", "Antidepressant"],
      correct: "option 1"
    },
    {
      question: "What is the primary function of an antipyretic drug?",
      options: ["To reduce fever.", "To lower blood pressure.", "To treat bacterial infections.", "To stimulate the immune system."],
      correct: "option 1"
    },
    {
      question: "Which term refers to the study of the effects of drugs on the body over a period of time?",
      options: ["Chronopharmacology", "Pharmacokinetics", "Pharmacodynamics", "Toxicology"],
      correct: "option 1"
    },
    {
      question: "What is the term for the study of the time course of drug absorption, distribution, metabolism, and excretion?",
      options: ["Pharmacokinetics", "Pharmacodynamics", "Toxicology",
    
     "Pharmacogenetics"],
      correct: "option 1"
    },
    {
      question: "Which phase of clinical trials involves monitoring the long-term effects of a drug after it has been approved and marketed?",
      options: ["Phase IV", "Phase I", "Phase II", "Phase III"],
      correct: "option 1"
    },
    {
      question: "What is the primary function of an antipsychotic drug?",
      options: ["To treat psychotic disorders such as schizophrenia.", "To reduce inflammation and pain.", "To lower blood pressure.", "To stimulate the immune system."],
      correct: "option 1"
    },
    {
      question: "Which term refers to the study of how drugs are absorbed, distributed, metabolized, and excreted by the body?",
      options: ["Pharmacokinetics", "Pharmacodynamics", "Toxicology", "Pharmacogenetics"],
      correct: "option 1"
    },
    {
      question: "What is the term for the study of how drugs affect the body based on the time of administration?",
      options: ["Chronopharmacology", "Pharmacokinetics", "Pharmacodynamics", "Toxicology"],
      correct: "option 1"
    },
    {
      question: "Which type of drug is used to treat depression?",
      options: ["Antidepressant", "Antianxiety", "Antipsychotic", "Antihypertensive"],
      correct: "option 1"
    },
    {
      question: "What is the primary function of an anticoagulant drug?",
      options: ["To prevent blood clot formation.", "To lower blood pressure.", "To treat bacterial infections.", "To stimulate the immune system."],
      correct: "option 1"
    },
    {
      question: "Which term refers to the study of the effects of drugs on the body's biological rhythms?",
      options: ["Chronopharmacology", "Pharmacokinetics", "Pharmacodynamics", "Toxicology"],
      correct: "option 1"
    },
    {
      question: "What is the term for the study of the harmful effects of drugs on living organisms?",
      options: ["Toxicology", "Pharmacology", "Pharmacokinetics", "Pharmacodynamics"],
      correct: "option 1"
    },
    {
      question: "Which phase of clinical trials involves testing a drug on a larger group of patients to confirm its efficacy and monitor adverse effects?",
      options: ["Phase III", "Phase I", "Phase II", "Phase IV"],
      correct: "option 1"
    },
    {
      question: "What is the term for the study of how genetic variations influence an individual's response to drugs?",
      options: ["Pharmacogenetics", "Pharmacokinetics", "Toxicology", "Pharmacodynamics"],
      correct: "option 1"
    },
    {
      question: "Which type of drug is used to prevent or treat allergic reactions?",
      options: ["Antihistamine", "Antibiotic", "Antifungal", "Antiviral"],
      correct: "option 1"
    },
    {
      question: "What is the primary function of an antiarrhythmic drug?",
      options: ["To stabilize heart rhythm.", "To lower blood pressure.", "To treat bacterial infections.", "To stimulate the immune system."],
      correct: "option 1"
    },
    {
      question: "Which term refers to the study of the effects of drugs on the body's immune system?",
      options: ["Immunopharmacology", "Pharmacokinetics", "Pharmacodynamics", "Toxicology"],
      correct: "option 1"
    },
    {
      question: "What is the term for the study of the effects of drugs on the developing fetus?",
      options: ["Teratology", "Pharmacokinetics", "Pharmacodynamics", "Toxicology"],
      correct: "option 1"
    },
    {
      question: "Which phase of clinical trials involves testing a drug on a small group of patients to assess its safety and efficacy?",
      options: ["Phase II", "Phase I", "Phase III", "Phase IV"],
      correct: "option 1"
    },
    {
      question: "What is the primary function of an antitussive drug?",
      options: ["To suppress coughing.", "To lower blood pressure.", "To treat bacterial infections.", "To stimulate the immune system."],
      correct: "option 1"
    },
    {
      question: "Which type of drug is used to relieve anxiety and promote relaxation?",
      options: ["Anxiolytic", "Antidepressant", "Antipsychotic", "Antihypertensive"],
      correct: "option 1"
    },
    {
      question: "What is the term for the study of the effects of drugs on the body's reproductive system?",
      options: ["Reproductive pharmacology", "Pharmacokinetics", "Pharmacodynamics", "Toxicology"],
      correct: "option 1"
    },
    {
      question: "Which term refers to the study of the effects of drugs on the body's cardiovascular system?",
      options: ["Cardiovascular pharmacology", "Pharmacokinetics", "Pharmacodynamics", "Toxicology"],
      correct: "option 1"
    },
    {
      question: "What is the primary function of an expectorant drug?",
      options: ["To promote the clearance of mucus from the respiratory tract.", "To lower blood pressure.", "To treat bacterial infections.", "To stimulate the immune system."],
      correct: "option 1"
    },
    {
      question: "Which type of drug is used to treat seizures?",
      options: ["Antiepileptic", "Antidepressant", "Antipsychotic", "Antihypertensive"],
      correct: "option 1"
    },
    {
      question: "What is the term for the study of how drugs affect the body's ability to defend against pathogens?",
      options: ["Immunopharmacology", "Pharmacokinetics", "Pharmacodynamics", "Toxicology"],
      correct: "option 1"
    },
    {
      question: "Which phase of clinical trials involves testing a drug on a large number of patients to monitor its long-term safety and effectiveness?",
      options: ["Phase IV", "Phase I", "Phase II", "Phase III"],
      correct: "option 1"
    },
    {
      question: "What is the primary function of an antidiabetic drug?",
      options: ["To lower blood sugar levels.", "To lower blood pressure.", "To treat bacterial infections.", "To stimulate the immune system."],
      correct: "option 1"
    },
    {
      question: "Which term refers to the study of how drugs affect the body's central nervous system?",
      options: ["Neuropharmacology", "Pharmacokinetics", "Pharmacodynamics", "Toxicology"],
      correct: "option 1"
    },
    {
      question: "What is the term for the study of the effects of drugs on the body's endocrine system?",
      options: ["Endocrine pharmacology", "Pharmacokinetics", "Pharmacodynamics", "Toxicology"],
      correct: "option 1"
    },
    {
      question: "Which type of drug is used to treat fungal infections?",
      options: ["Antifungal", "Antibiotic", "Antiviral", "Antiparasitic"],
      correct: "option 1"
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
    if (currentQs > 51) {
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