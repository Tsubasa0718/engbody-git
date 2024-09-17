'use strict';
// 動きのきっかけの起点となるアニメーションの関数を定義
const BgRexTrigger = document.querySelectorAll('.bgLRextendTrigger');
const BgApTrigger = document.querySelectorAll('.bgappearTrigger');
const BgFadeAnime = () => {
    const CheckElement = (element, className) => {
      const rect = element.getBoundingClientRect();
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const elemTop = rect.top + scrollTop;
      const windowHeight = window.innerHeight;
  
      if (scrollTop + windowHeight > elemTop) {
        element.classList.add(className);
      } else {
        element.classList.remove(className);
      }
    }
   
   // 背景色が伸びて出現（左から右）
    BgRexTrigger.forEach(element => 
      CheckElement(element, 'bgLRextend')
  );

  // 文字列を囲う子要素
   BgApTrigger.forEach(element => 
    CheckElement(element, 'bgappear')
  );
};

// Intersection Observerを使用してスクロール検出を最適化
const TriggerAll =  document.querySelectorAll('.bgLRextendTrigger, .bgappearTrigger');
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
  };
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        BgFadeAnime();
      }
    });
  }, observerOptions);
  
  // 監視対象の要素を追加
  TriggerAll.forEach(element => {
    observer.observe(element);
  });

// 画面が読み込まれたらすぐに実行
window.addEventListener('load', BgFadeAnime);