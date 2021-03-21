
//Burger

const burgerBtn = document.querySelector('.burger__btn'),
  menu = document.querySelector('.nav');

burgerBtn.addEventListener('click', () => {
  menu.classList.toggle('active');
  burgerBtn.classList.toggle('active');
  document.body.classList.toggle('lock');
});

menu.addEventListener('click', (e) => {
  if (e.target.classList.contains('nav__link')) {
    e.preventDefault();
    menu.classList.remove('active');
    burgerBtn.classList.remove('active');
    document.body.classList.remove('lock');
  }

});

// End Burger

// search

const search = document.querySelector('.search__box'),
  body = document.querySelector('body');

search.addEventListener('click', function (e) {
  e.stopPropagation();
  this.classList.add('search__box_active');
});

body.addEventListener('click', function () {
  search.classList.remove('search__box_active');
});
