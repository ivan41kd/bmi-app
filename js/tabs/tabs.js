const tabs = document.querySelectorAll('.main-tab');
const articles = document.querySelectorAll('article');

// Добавляем событие клика для каждой вкладки
tabs.forEach((tab) => {
 tab.addEventListener('click', () => {
  // Удаляем класс 'active' у всех вкладок
  tabs.forEach((t) => t.classList.remove('active'));

  // Добавляем класс 'active' текущей вкладке
  tab.classList.add('active');

  // Проверяем все статьи
  articles.forEach((article) => {
   // Если dataset.tab у вкладки совпадает с dataset.page у статьи
   if (tab.dataset.tab === article.dataset.page) {
    // Эта статья становится активной
    article.classList.remove('inactive');
    article.classList.add('active');
   } else {
    // Остальные статьи становятся неактивными
    article.classList.remove('active');
    article.classList.add('inactive');
   }
  });
 });
});
