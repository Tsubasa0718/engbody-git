document.addEventListener('DOMContentLoaded', function() {
  'use strict';

  window.addEventListener('scroll', ()=>{
    let Header = document.querySelector('.l-header');
    let HeaderBtn = document.querySelector('.l-header__btn');
    if(window.scrollY > 200){
     Header.classList.add('header-active');
     HeaderBtn.classList.add('header-active');
    } else{
      Header.classList.remove('header-active');
      HeaderBtn.classList.remove('header-active');
    }
  });
  // headerscroll
    const elements = document.querySelectorAll('.opelment');
    const slidebg = document.querySelectorAll('.p-mv__slidebg');
    elements.forEach((el)=>{
      el.classList.add('opacityOn'); // ピリオドを削除
    });
    slidebg.forEach((sl)=>{
      sl.classList.add('slideOn'); // 正しくクラス名を指定
    });
  
//mvanimation
  const swiper = new Swiper('.swiper', {
      loop: true,
    
      pagination: {
        el: '.swiper-pagination',
      },
    
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    
    });
  // swiper
  const AnimationTarget = document.querySelectorAll('.scroll-target');
  
  window.addEventListener('scroll', ()=>{
  for (let i = 0; i < AnimationTarget.length; i++) {
    const getElementDistance = AnimationTarget[i].getBoundingClientRect().top + AnimationTarget[i].clientHeight * .5;
    if(window.innerHeight > getElementDistance){
      AnimationTarget[i].classList.add('fadeUp');
    }
    
  }
})
  //scrollanimation

  
  const tabs = Array.from(document.querySelectorAll('.tab'));
  const contents = Array.from(document.querySelectorAll('.tab-content'));

  tabs.forEach((tab, index) => {
      tab.addEventListener('click', () => {
          tabs.find(t => t.classList.contains('tab--active'))?.classList.remove('tab--active');
          tab.classList.add('tab--active');
          contents.find(content => content.classList.contains('show'))?.classList.remove('show');
          contents[index].classList.add('show');
      });
  });
  //tabanimation


  const AccordionQuestions = document.querySelectorAll('.p-faq__accordion__question');
  
  const ToggleAccordion = (question) =>{
    const Answer = question.nextElementSibling;
   if(Answer.classList.contains('active')){
      Answer.style.height = '0px';
      Answer.style.paddingBottom = '0px';
      
    }else{
      Answer.style.paddingBottom = '0.9375rem'; // 仮の値
      Answer.style.height = Answer.scrollHeight + 'px';
    }
    question.classList.toggle('active');
    Answer.classList.toggle('active');
  }

  AccordionQuestions.forEach((question)=>{
    question.addEventListener('click', () => ToggleAccordion(question));
  })

  
  //accordion
  
  document.querySelector('.p-price__wrapper').addEventListener('scroll', (event) =>{
    
    if(event.currentTarget.scrollLeft > 20){
      
      const PriceScroll = document.querySelector('.p-price__wrapper__scroll');
      if(PriceScroll){
         PriceScroll.style.transition = 'opacity 0.5s';
         PriceScroll.style.opacity = '0';
         setTimeout(() => { PriceScroll.style.display = 'none'; }, 500);
      }
     }
  })
  // price

  let SideBtn = document.querySelector('.c-sidebtn');
  window.addEventListener('scroll', () => {
    if(window.scrollY > 300){
      SideBtn.classList.add('sidebtn');
    }
    else{
      SideBtn.classList.remove('sidebtn'); 

    }
  })
});
  // sidebtn