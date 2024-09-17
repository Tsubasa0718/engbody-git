'use strict';
const tabs = document.querySelectorAll('.tab');
const tabContents = document.querySelectorAll('.tab-content');

// 初期状態で最初のタブとコンテンツをアクティブにする
tabs[0].classList.add('tab--active');
tabContents[0].classList.add('show');

const setActiveTab = (clickedTab, clickedIndex) => {
  // すべてのタブとコンテンツから active クラスを削除
  tabs.forEach(tab => tab.classList.remove('tab--active'));
  tabContents.forEach(content => content.classList.remove('show'));

  // クリックされたタブと対応するコンテンツをアクティブにする
  clickedTab.classList.add('tab--active');
  tabContents[clickedIndex].classList.add('show');
}

tabs.forEach((tab, index) => {
  tab.addEventListener('click', () => {
    setActiveTab(tab, index);
  });
});