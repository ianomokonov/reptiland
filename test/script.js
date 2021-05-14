import { questions } from '../reptiles/data.js';

document
  .querySelector('.page-content__learn-more')
  .addEventListener('click', () => {
    startTest();
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
test.addEventListener('click', onAnswer);

function startTest() {
  field.classList.add('page-content_testing');
  activeId = questions[0].id;
  setQuestion(activeId);
}

function setQuestion(id) {
  const question = questions.find((q) => q.id == id);
  test.innerHTML = `
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
    <div class="test__question-points">
        ${questions
          .map(
            (q) => `
              <div class="test__question-point ${
                q.id == id ? 'test__question-point_active' : ''
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
}
