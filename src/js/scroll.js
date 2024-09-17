'use strict';
const SideBtn = document.querySelector('.c-side-btn');

window.addEventListener('scroll', ()=>{
    if(window.scrollY > 300) {
        SideBtn.classList.add('visible')
    } else{
        SideBtn.classList.remove('visible');
    }
})
SideBtn.addEventListener('click',()=> {
    window.scrollTo({
        top: 0,
    });
})
// side-btn

const Header = document.querySelector('.l-header');
const HeaderCta = document.querySelector('.l-header__cta');

window.addEventListener('scroll', ()=> {
if(window.scrollY > 200){
 Header.classList.add('header--active');
 HeaderCta.classList.add('show');
}else{
 Header.classList.remove('header--active');
 HeaderCta.classList.remove('show');
}
})
// header