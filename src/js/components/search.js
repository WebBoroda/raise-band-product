// search

const search = document.querySelector('.search__box');
const body = document.querySelector('body');


search.addEventListener('click', function(e) {
  e.stopPropagation();
  this.classList.add('search__box_active');
});

body.addEventListener('click', function(e) {
	e.stopPropagation();
  search.classList.remove('search__box_active');
});

