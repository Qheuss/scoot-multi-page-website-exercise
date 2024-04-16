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

// accordion faq
const faqArticle = document.querySelectorAll('.faq__article');

faqArticle.forEach((element) => {
  element.addEventListener('click', function () {
    const chevron = this.querySelector('.chevron__arrow');
    if (chevron) {
      chevron.style.transform =
        chevron.style.transform === 'scaleY(-1)' ? '' : 'scaleY(-1)';
      chevron.style.top = chevron.style.top === '-1.6rem' ? '' : '-1.6rem';
    }
  });
});
