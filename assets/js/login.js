//const { Button } = require("bootstrap");

const LogIn = document.getElementById('logon');
//const LagIn = document.getElementById('lagin');
const overlay = document.getElementById('overlay');
const SignUp = document.getElementById('signup');


LogIn.addEventListener('click', (e) => {
    //const modal = document.querySelector(Button.dataset.modalTarget)
    let modal = document.querySelector('#lagin');
    openModal(modal);
});

function openModal(modal) {
    if (modal == null) return
    modal.classList.add('active');
    overlay.classList.add('active');
}