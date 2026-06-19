document.addEventListener('DOMContentLoaded', function () {
    const container = document.getElementById('container');
    const signUpForm = document.querySelector('.sign-up');
    const signInForm = document.querySelector('.sign-in');
    const signUpBtn = document.getElementById('register');
    const signInBtn = document.getElementById('login');

   
    signUpBtn.addEventListener('click', function () {
        container.classList.add('right-panel-active');
        signUpForm.classList.add('active');
        signInForm.classList.remove('active');
    });

    
    signInBtn.addEventListener('click', function () {
        container.classList.remove('right-panel-active');
        signUpForm.classList.remove('active');
        signInForm.classList.add('active');
    });

    
    const signUpFormSubmit = document.getElementById('signUpForm');
    const signInFormSubmit = document.getElementById('signInForm');

    signUpFormSubmit.addEventListener('submit', function (event) {
        event.preventDefault();
        alert('Sign-up form submitted!');
        
    });

    signInFormSubmit.addEventListener('submit', function (event) {
        event.preventDefault();
        alert('Sign-in form submitted!');
        
    });
});