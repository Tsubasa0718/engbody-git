
const btns = document.querySelectorAll('.tab-body_wrapper_btn');
const trainerArea = document.querySelector(".tab-body_content_trainer-area");
const staffArea = document.querySelector(".tab-body_content_staff-area");
btns.forEach(btn => {
    btn.addEventListener('click', () => {
        btns.forEach(btn => {
            btn.classList.remove('.active');
        });
        btn.classList.add('.active');
    });
});
// btn
// 初期状態の設定（トレーナーエリアとスタッフエリアを非表示にする）

staffArea.classList.add("hide");

// ボタンがクリックされた時の挙動を設定
btns.forEach(function(btn, index) {
  btn.addEventListener("click", function() {
    if (index === 0) {  // "トレーナー"ボタンがクリックされた時
      trainerArea.classList.remove("hide");
      trainerArea.classList.add("show");
      staffArea.classList.remove("show");
      staffArea.classList.add("hide");
    } else {  // "スタッフ"ボタンがクリックされた時
      trainerArea.classList.remove("show");
      trainerArea.classList.add("hide");
      staffArea.classList.remove("hide");
      staffArea.classList.add("show");
    }
  });
});
//tab


const swiper = new Swiper('.swiper', {
  // Optional parameters
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

});
// swiper

document.addEventListener('DOMContentLoaded', function() {
  const accordionHeaders = document.querySelectorAll('.accordion_wrapper_menu');
  
  accordionHeaders.forEach(function(accordionHeader) {
    accordionHeader.addEventListener('click', function() {
      accordionHeader.classList.toggle('active');
      
      const accordionContent = this.nextElementSibling;
      accordionContent.style.height = accordionContent.scrollHeight + 'px';
      
      if (accordionContent.classList.contains('active')) {
        accordionContent.style.height = '0px';
      } else {
        accordionContent.style.height = accordionContent.scrollHeight + 'px';
      }
      accordionContent.classList.toggle('active');
    });
  });
});

//accodion


document.addEventListener('DOMContentLoaded', ()=>{
  const elements = document.querySelectorAll('.opelment');
  const slidebg = document.querySelectorAll('.slide-element')
  elements.forEach((el)=>{
    el.classList.add('.opacityOn');
  });
  slidebg.forEach((sl)=>{
    sl.classList.add('slideOn');
  });
  
})

//mvanimation

const AnimationTarget = document.querySelectorAll('.animation-target');

window.addEventListener('scroll', ()=>{
  for (let i = 0; i < AnimationTarget.length; i++) {
    const getElementDistance = AnimationTarget[i].getBoundingClientRect().top + AnimationTarget[i].clientHeight * .5;
    if(this.window.innerHeight > getElementDistance){
      AnimationTarget[i].classList.add('.popup');
    }
    
  }
})
//scrollanimation

const Header = document.getElementById('header-scroll');
const Nav = document.getElementById('nav');

window.addEventListener('scroll', ()=>{
  const ScrollTriger = 20;
  if(window.scrollY > ScrollTriger){
    Header.classList.add('scroll')
    Nav.classList.add('scroll')
  } else if(window.scrollY < ScrollTriger){
    Header.classList.remove('scroll')
    Nav.classList.remove('scroll')
  }
})
// headeranimation

const SideBtn = document.getElementById('side-btn');
window.addEventListener('scroll', ()=>{
  const elementPosition = SideBtn.getBoundingClientRect().top;
  if(elementPosition < window.innerHeight){
    SideBtn.classList.add('.side');
   }

})
window.addEventListener('scroll', ()=> {
   if(window.scrollY === 0){
     SideBtn.classList.remove('.side');
    } 
   })

   SideBtn.addEventListener('click', ()=>{
    window.scrollTo(0, 0);
   })
//sidebtn