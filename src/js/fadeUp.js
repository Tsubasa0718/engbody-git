'use strict';
const FedeUpEfect = () => {
 const elements = document.querySelectorAll('.fadeUpEfect');
  elements.forEach(element => {
    const elemPos = element.getBoundingClientRect().top + window.scrollY + 100;
    const scroll =  window.scrollY;
    const windowHeight= window.innerHeight;
    if (scroll >= elemPos - windowHeight) {
        element.classList.add('fadeUp');
      }
  });
}

window.addEventListener('scroll',FedeUpEfect);