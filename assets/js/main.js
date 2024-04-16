`use strict`;

// header movements
const header = document.querySelector('header');
const body = document.querySelector('body');
const hamburger = document.querySelector('.header__hamburger');
const hamburgerBackground = document.querySelector('.header__hamburgerList');
let prevScrollPos = window.scrollY;

hamburger.addEventListener('click', function () {
  header.classList.toggle('header__hamburgerList-hidden');
  hamburger.classList.toggle('header__hamburger-cross');
});

hamburgerBackground.addEventListener('click', function () {
  header.classList.add('header__hamburgerList-hidden');
  hamburger.classList.remove('header__hamburger-cross');
});

window.onscroll = function () {
  if (header.classList.contains('header__hamburgerList-hidden')) {
    let currentScrollPos = window.scrollY;

    // Scroll down
    if (prevScrollPos < currentScrollPos) {
      header.classList.add('header-hidden');
      header.classList.remove('header-visible');
    }
    // Scroll up
    else {
      header.classList.add('header-visible');
      header.classList.remove('header-hidden');
    }

    prevScrollPos = currentScrollPos;
  }
};
