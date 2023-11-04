// Найдите все элементы с классом __select
const selectAll = document.querySelectorAll('.__select');

// Переберите каждый элемент и добавьте обработчики событий
selectAll.forEach((selectSingle) => {
  const selectSingle_title = selectSingle.querySelector('.__select__title');
  const selectSingle_labels = selectSingle.querySelectorAll('.__select__label');

  // Toggle menu
  selectSingle_title.addEventListener('click', () => {
    if ('active' === selectSingle.getAttribute('data-state')) {
      selectSingle.setAttribute('data-state', '');
    } else {
      selectSingle.setAttribute('data-state', 'active');
    }
  });

  // Close when click to option
  for (let i = 0; i < selectSingle_labels.length; i++) {
    selectSingle_labels[i].addEventListener('click', (evt) => {
      selectSingle_title.textContent = evt.target.textContent;
      selectSingle.setAttribute('data-state', '');
    });
  }
});

let form = document.getElementById('form');
let button = document.getElementById('button');
button.addEventListener('click', () => form.reset());

const userSearch = document.querySelector('.form__search');
const searchSelect = document.querySelector('.search__select');

userSearch.addEventListener('click', () => {
  searchSelect.classList.toggle('active');
}) 

searchSelect.addEventListener('click', (e) => {
  e.stopPropagation();
}) 

const swiper = new Swiper(".mySwiper", {
  loop: true,
  slidesPerView: 1,
  slideToClickedSlide: true,
  spaceBetween: 30,
  slidesPerGroup: 1,
  pagination: {
    el: ".swiper-pagination",
    type: 'bullets',
  },
});

