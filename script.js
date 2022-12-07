'use strict';

//Get elements from the DOM

const menu = document.querySelector('.menu');
const menuBtn = document.querySelector('.menu-btn');

// toggle open close button

menuBtn.addEventListener('click', () => {
  menu.classList.toggle('menu-open');
});
