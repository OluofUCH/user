function start1(){
    document.getElementById('box').style.display='block';
    document.getElementById('bo').style.display='none';
}

const email = document.getElementById('email');
const name = document.getElementById('name');
const nam = name.value;
function start(){
const email = document.getElementById('email');
const name = document.getElementById('name');
const nam = name.value;
if(email.value==''||nam==''|| email.value=="email"||nam=="User name"){
    alert('Please fill up the details');
}
else{
    document.getElementById('box').style.display='none';
    document.getElementById('bo').style.display='none';
    document.getElementById('quiz').style.display='block';
    const email = document.getElementById('email');
const name = document.getElementById('name');
const nam = name.value;
const tx = document.getElementById('nt');
    tx.innerText="Welcome " + nam;
}
}

function start2(){
    document.getElementById('box').style.display='none';
    document.getElementById('bo').style.display='none';
    document.getElementById('quiz').style.display='none';
    document.getElementById('quiz2').style.display='block';

}