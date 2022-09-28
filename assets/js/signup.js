//const overlay = document.getElementById('overlay');
//const SignUp = document.getElementById('signup');


SignUp.addEventListener('click', (e) => {
    //const modal = document.querySelector(Button.dataset.modalTarget)
    let modal = document.querySelector('#signups');
    closeModal(modal);
});

function closeModal(modal) {
    if (modal == null) return
    modal.classList.add('active');
    overlay.classList.add('active');
}