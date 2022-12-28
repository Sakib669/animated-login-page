let signUpBtnLink = document.querySelector('.signUpBtn-link');
let signInBtnLink = document.querySelector('.signInBtn-link');
let wrapper = document.querySelector('.wrapper');

signUpBtnLink.addEventListener('click', () => {
    wrapper.classList.toggle('active');
});

signInBtnLink.addEventListener('click', () => {
    wrapper.classList.toggle('active');
});