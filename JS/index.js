
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

// "show"と"hide"のクラスを切り替える関数
function toggleClasses(element, addClass, removeClass) {
  element.classList.add(addClass);
  element.classList.remove(removeClass);
}

// ボタンがクリックされた時の挙動を設定
btns.forEach(function(btn, index) {
  btn.addEventListener("click", function() {
    if (index === 0) {  // "トレーナー"ボタンがクリックされた時
      toggleClasses(trainerArea, "show", "hide");
      toggleClasses(staffArea, "hide", "show");
    } else {  // "スタッフ"ボタンがクリックされた時
      toggleClasses(trainerArea, "hide", "show");
      toggleClasses(staffArea, "show", "hide");
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
  
  const toggleAccordion = (header) => {
    const content = header.nextElementSibling;
    content.style.height = content.classList.contains('active') ? '0px' : content.scrollHeight + 'px';
    header.classList.toggle('active');
    content.classList.toggle('active');
  };

  accordionHeaders.forEach((header) => {
    header.addEventListener('click', () => toggleAccordion(header));
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

const sideBtn = document.getElementById('side-btn');

// スクロールに応じてボタンの表示を切り替える関数
const toggleSideButton = () => {
  const elementPosition = sideBtn.getBoundingClientRect().top;
  if (elementPosition < window.innerHeight) {
    sideBtn.classList.add('side');
  } else if (window.scrollY === 0) {
    sideBtn.classList.remove('side');
  }
};

// スクロールイベントに一つの関数を割り当て
window.addEventListener('scroll', toggleSideButton);

// ボタンクリックでページトップにスクロール
sideBtn.addEventListener('click', () => {
  window.scrollTo(0, 0);
});

// sideBtn のコメントは不要なので削除しました。