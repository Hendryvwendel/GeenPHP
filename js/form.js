// make loader work
const loader = document.querySelector('.loader');

// select inputs
const submitBtn = document.querySelector('.submit-btn');
const name = document.querySelector('#name');
const email = document.querySelector('#email');
const password = document.querySelector('#password');
const tac = document.querySelector('#terms-and-cond');
const notification = document.querySelector('#notification');

submitBtn.addEventListener('click', () => {
     if(name.value.length < 3){
        showAlert('Je naam moet 3 of meer tekens bevatten!!');
     } else if(!email.value.length){
         showAlert('vul je email-adres in!!')
     } else if(password.value.length < 8){
         showAlert('je wachtwoord moet 8 tekens of langer zijn!!');
     } else if(!tac.checked){
         showAlert('je moet akkoord gaan met de algemene voorwaarden');
     } else {
         loader.style.display = 'block';
         
     }
})



const showAlert = (msg) => {
    let alertBox = document.querySelector('.alert-box');
    let alertMsg = document.querySelector('.alert-msg');
    alertMsg.innerHTML = msg;
    alertBox.classList.add('show');
    setTimeout(() => {
        alertBox.classList.remove('show');
    }, 3000);
}