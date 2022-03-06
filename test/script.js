import { questions, reptiles } from '../reptiles/data.js';

document
  .querySelector('.page-content__learn-more')
  .addEventListener('click', () => {
    startTest();
  });

window.addEventListener('load', () => {
  reptiles.forEach((r) => {
    orderForm.reptileType.innerHTML += `<option>${r.name}</option>`;
  });
});

document.querySelector('.make-an-order').addEventListener('click', async () => {
  const fields = ['name', 'email', 'reptileType', 'productType', 'count'];
  const formValue = {};
  let hasError = false;
  fields.forEach((f) => {
    formValue[f] = orderForm[f].value;
    if (!formValue[f]) {
      hasError = true;
    }
  });
  if (hasError) {
    alert('Заполните все поля!');
    return;
  }
  let responsee = await fetch(
    'http://wedding.progoff.ru/reptiland/controller.php?key=add-app',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
      body: JSON.stringify(formValue),
    }
  );

  await responsee.json();
  document.querySelector('.btn-close')?.click();
});

const field = document.querySelector('.page-content');
let points = 0;
let activeId = 0;

const onAnswer = (event) => {
  const answer = event.target.closest('[data-points]');
  if (!answer) {
    return;
  }
  points += Number.parseInt(answer.dataset.points, 10);
  if (activeId < questions.length) {
    activeId += 1;
    setQuestion(activeId);
    return;
  }

  getResult(points);
};

const test = document.querySelector('.test');
const testResult = document.querySelector('.test__result');
test.addEventListener('click', onAnswer);

function startTest() {
  field.classList.add('page-content_testing');
  activeId = questions[0].id;
  setQuestion(activeId);
}

function setQuestion(id) {
  const question = questions.find((q) => q.id == id);
  test.innerHTML = `
  <div class="test__question-container">
    <div class="test__question">
    ${question.name}
    </div>
    ${question.answers
      .map(
        (a) => `
        <div data-points="${a.points}" class="test__answer">
            <div class="page-content__page-point"></div>
            ${a.name}
        </div>
        `
      )
      .join('')}
      </div>
    <div class="steps">
        ${questions
          .map(
            (q) => `
              <div class="steps__point ${
                q.id == id ? 'steps__point_active' : ''
              }"></div>
              `
          )
          .join('')}
    </div>
    `;
}

function getResult(points) {
  field.classList.add('page-content_loading');
  field.classList.remove('page-content_testing');

  setTimeout(() => {
    field.classList.remove('page-content_loading');
    field.classList.add('page-content_finished');
  }, 3000);

  const reptile = getReptile(points);

  testResult.innerHTML = `
  <h3 class="page-content__result-header">Больше всего вам подходит</h3>
  <h2 class="page-content__result-name" style="color:${reptile.testNameColor}">${reptile.name}</h2>
  <div class="page-content__result-content">
    <img
      src="${reptile.img}"
      alt=""
      class="page-content__img"
    />
    <div class="page-content__description">
      <span
        >${reptile.testDescription}</span
      >
      <small
        >Если вам понравился кто-то из питомцев,вы можете заказать
        сувенирную продукцию с его изображением</small
      >
      <button
                type="button"
                class="page-content__learn-more"
                data-bs-toggle="modal"
                data-bs-target="#staticBackdrop"
              >
                Заказать
              </button>
    </div>
  </div>
  <div class="page-content__result-content d-sm-flexx">
    <div class="w-50"></div>
    <div class="page-content__description pt-0">
      <small
        >Если вам понравился кто-то из питомцев,вы можете заказать
        сувенирную продукцию с его изображением</small
      >
      <button
                type="button"
                class="page-content__learn-more"
                data-bs-toggle="modal"
                data-bs-target="#staticBackdrop"
              >
                Заказать
              </button>
    </div>
  </div>
  `;
}

function getReptile(points) {
  let resultId = 0;

  if (points >= 0 && points <= 15) {
    resultId = 7;
  }
  if (points >= 20 && points <= 35) {
    resultId = 8;
  }
  if (points >= 40 && points <= 55) {
    resultId = 1;
  }
  if (points >= 60 && points <= 75) {
    resultId = 3;
  }
  if (points >= 80 && points <= 95) {
    resultId = 5;
  }
  if (points >= 100 && points <= 115) {
    resultId = 4;
  }
  if (points >= 120 && points <= 135) {
    resultId = 6;
  }
  if (points >= 140 && points <= 155) {
    resultId = 2;
  }

  return reptiles.find((r) => r.id == resultId);
}
