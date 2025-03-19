import NewsApiService from './js-search/js-search'
const refs = {
  searchForm: document.querySelector(".js-search-form"),
  articlesContainer: document.querySelector(".js-articles"),
  loadMoreBtn: document.querySelector('[data-action="load-more"]'),
};

const newsApiService = new NewsApiService();

refs.searchForm.addEventListener('submit', onSearch);
refs.loadMoreBtn.addEventListener('click', onLoadMore);


function onSearch(e) {
    e.preventDefault();

    newsApiService.query = e.currentTarget.elements.query.value
    
    newsApiService.fetchArticles();
    
}

function onLoadMore() {
   newsApiService.fetchArticles();
}