const accordion = document.querySelectorAll('.nav__accordion');
const options = document.querySelectorAll('.nav__options');
const hamburger = document.querySelector('.hamburger__hamburger');
const hamburgerMenu = document.querySelector('.hamburger__menu');
const overlay = document.querySelector('.ov');


accordion[0].addEventListener('click', ()=> {
    options[0].classList.toggle('hidden');
    //options[1].classList.remove('hidden');
    console.log(accordion);
});

accordion[1].addEventListener('click', ()=> {
    options[1].classList.toggle('hidden');
   // options[0].classList.remove('hidden');
});

hamburger.addEventListener('click', () => {
    hamburgerMenu.classList.toggle('hide');
    overlay.classList.toggle('overlay');
})




//nextElementSibling;