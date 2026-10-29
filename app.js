'use strict';
const views = {
  overview: { file: 'r2-overview-1440.png', label: '研究總覽', caption: '研究總覽｜將歷史、比較與走勢集中到同一個起點。', alt: 'TRADE 合成示範的研究總覽，集中呈現歷史案例、比較與近期走勢入口。', width: 1440, height: 900 },
  history: { file: 'r2-history-1440.png', label: '歷史案例', caption: '歷史案例｜保留案例脈絡，協助理解研究內容。', alt: 'TRADE 合成示範的歷史案例介面；數值均為人工示範資料。', width: 1440, height: 900 },
  comparison: { file: 'r2-comparison-1440.png', label: '資料比較', caption: '資料比較｜目前與選定歷史案例的視覺對照，不代表預測。', alt: 'TRADE 目前與歷史案例比較的合成資料圖表；非真實行情或未來預測。', width: 1440, height: 900 },
  mobile: { file: 'r2-overview-390.png', label: '手機畫面', caption: '手機畫面｜既有 390px Chrome 模擬截圖，非實體手機驗證。', alt: 'TRADE 合成研究總覽在 390 像素 Chrome 模擬視窗的畫面。', width: 390, height: 844 }
};
const galleryImage = document.getElementById('gallery-image');
const galleryLink = document.getElementById('gallery-link');
const galleryCaption = document.getElementById('gallery-caption');
const galleryButtons = document.querySelectorAll('[data-view]');
galleryCaption.setAttribute('aria-live', 'polite');
galleryButtons.forEach(button => button.addEventListener('click', () => {
  const key = button.dataset.view;
  const view = views[key];
  if (!view) return;
  galleryImage.src = 'assets/' + view.file;
  galleryImage.alt = view.alt;
  galleryImage.width = view.width;
  galleryImage.height = view.height;
  galleryImage.classList.toggle('mobile-image', key === 'mobile');
  galleryLink.href = galleryImage.getAttribute('src');
  galleryLink.setAttribute('aria-label', '開啟' + view.label + '完整截圖（另開分頁）');
  galleryCaption.textContent = view.caption;
  galleryButtons.forEach(item => item.setAttribute('aria-pressed', String(item === button)));
}));
