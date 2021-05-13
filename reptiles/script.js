import { reptiles } from './data.js';

const image = document.querySelector('.page-content__main-img');
const info = document.querySelector('.reptile-description');
const pages = document.querySelector('.page-content__page-points');
let activeIndex = 0;

show(reptiles[activeIndex].id);

function show(id) {
  const reptile = reptiles.find((r) => r.id === id);

  info.innerHTML = `
    <span class="page-content__public-name">${reptile.latinName}</span>
    <h1 class="main-header">${reptile.name}</h1>
    <span class="page-content__aria">${reptile.area}</span>
    <p class="page-content__description">
        ${reptile.description}
    </p>
    <a class="page-content__learn-more" href="/reptile/index.html?id=${reptile.id}">Узнать больше</a>
  `;

  image.src = reptile.img;
  setPages(activeIndex);
}

function setPages(activeIndex) {
  pages.innerHTML = reptiles
    .map((r, index) => {
      return `<div class="page-content__page-point ${
        index == activeIndex ? 'page-content__page-point_active' : ''
      } ${getHiddenClass(index, activeIndex)}"></div>`;
    })
    .join('');
}

function getHiddenClass(index, activeIndex) {
  if ((activeIndex < 4 && index > 3) || (activeIndex > 3 && index < 4)) {
    return 'page-content__page-point_hidden';
  }
  return '';
}

document.addEventListener('wheel', (e) => {
  if (e.deltaY < 0 && activeIndex > 0) {
    activeIndex -= 1;
    show(reptiles[activeIndex].id);
    return;
  }

  if (e.deltaY > 0 && activeIndex < reptiles.length - 1) {
    activeIndex += 1;
    show(reptiles[activeIndex].id);
    return;
  }
});
