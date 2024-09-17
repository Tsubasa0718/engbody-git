'use strict';
const Questions = document.querySelectorAll('.accordion__question');
 
Questions.forEach(question =>{
    question.addEventListener('click',()=>{
     const answer = question.nextElementSibling;
     answer.style.maxHeight = answer.style.maxHeight ? null : answer.scrollHeight + 'px';
     question.classList.toggle('active');
    })
})