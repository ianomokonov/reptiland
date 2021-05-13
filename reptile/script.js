import { reptiles } from '../reptiles/data.js';

const reptile = reptiles.find(
  (r) => r.id == new URL(document.location).searchParams.get('id')
);

if (reptile) {
  document.body.style.setProperty(
    'background-image',
    `url(${reptile.infoBackground})`,
    'important'
  );

  setData(reptile);
}

function setData(reptile) {
  if (!reptile.fullDescription) {
    return;
  }
  setFirstSection(reptile);
  setSecondSection(reptile);
  setThirdSection(reptile);
  setFourthSection(reptile);
}

function setFirstSection(reptile) {
  const section = document.querySelector('.first-section');
  section.innerHTML = `
    <h1 class="main-header main-header_centered">${reptile.name}</h1>
    <div class="row">
      <div class="col-7 first-section__image">
        <img src="${reptile.fullDescription.mainImg}" alt="" />
        <div class="first-section__length">
          <div style="background-color: ${reptile.fullDescription.tailColor}" class="first-section__tail-lenght">
            <span style="color: ${reptile.fullDescription.tailColor}" class="first-section__length-label">Хвост</span>
            <span  class="first-section__length-value">${reptile.fullDescription.tailLength}</span>
          </div>
          <div style="background-color: ${reptile.fullDescription.bodyColor}" class="first-section__body-lenght">
            <span style="color: ${reptile.fullDescription.bodyColor}" class="first-section__length-label">Тело</span>
            <span class="first-section__length-value">${reptile.fullDescription.bodyLength}</span>
          </div>
        </div>
      </div>
      <div class="col-5 first-section__info">
        <div class="first-section__info-item">
          <img
            src="../assets/images/forest.png"
            class="first-section__info-item-image"
          />
          <div class="first-section__info-item-label">${reptile.fullDescription.natureAge}</div>
        </div>
        <div class="first-section__info-item">
          <img
            src="../assets/images/house.png"
            class="first-section__info-item-image"
          />
          <div class="first-section__info-item-label">${reptile.fullDescription.homeAge}</div>
        </div>
        <div class="first-section__info-item">
          <img
            src="../assets/images/gira.png"
            class="first-section__info-item-image"
          />
          <div class="first-section__info-item-label">${reptile.fullDescription.weight}</div>
        </div>
        <div class="first-section__info-item">
          <img
            src="../assets/images/food.png"
            class="first-section__info-item-image"
          />
          <div class="first-section__info-item-label">${reptile.fullDescription.foodType}</div>
        </div>
      </div>
    </div>
    `;
}

function setSecondSection(reptile) {
  const section = document.querySelector('.second-section');
  section.innerHTML = `
    <div class="row">
    <div class="col-6 d-flex align-items-center">
      <img
        src="${reptile.fullDescription.areaImg}"
        alt=""
        class="second-section__img"
      />
    </div>
    <div class="col-6 d-flex flex-column justify-content-center">
      <div class="second-section__header">Место обитания</div>
      <p class="second-section__description">
        ${reptile.fullDescription.areaDescription}
      </p>
    </div>
  </div>
      `;
}

function setThirdSection(reptile) {
  const section = document.querySelector('.third-section');
  section.innerHTML = `
  <div class="third-section__header">Содержание</div>
  <div class="row">
    <div class="col-6 third-section__info">
      <div class="third-section__info-item">
        <img src="../assets/images/terrarium.png" alt="" />
        <div class="line"></div>
        <div class="third-section__info-item-description">
          ${reptile.fullDescription.terrariumDescription}
        </div>
      </div>
      <div class="third-section__info-item">
        <img src="../assets/images/light.png" alt="" />
        <div class="line"></div>
        <div class="third-section__info-item-description">
        ${reptile.fullDescription.lightDescription}
        </div>
      </div>
      <div class="third-section__info-item">
        <img src="../assets/images/temperature.png" alt="" />
        <div class="line"></div>
        <div class="third-section__info-item-description">
        ${reptile.fullDescription.temperatureDescription}
        </div>
      </div>
      <div class="third-section__info-item">
        <img src="../assets/images/night_temperature.png" alt="" />
        <div class="line"></div>
        <div class="third-section__info-item-description">
        ${reptile.fullDescription.nightTemperatureDescription}
        </div>
      </div>
      <div class="third-section__info-item">
        <img src="../assets/images/kaply.png" alt="" />
        <div class="line"></div>
        <div class="third-section__info-item-description">
        ${reptile.fullDescription.humidity}
        </div>
      </div>
      <div class="third-section__info-item">
        <img src="../assets/images/grunt.png" alt="" />
        <div class="line"></div>
        <div class="third-section__info-item-description">
        ${reptile.fullDescription.priming}
        </div>
      </div>
    </div>
    <div
      class="col-6 third-section_dificulty ${getDifficultyColor(
        reptile.fullDescription.difficulty
      )}"
    >
      <div class="third-section_dificulty-points">
      ${getDifficulty(reptile.fullDescription.difficulty)}
      </div>
      <img src="${reptile.fullDescription.maintenanceImg}" alt="" />
    </div>
  </div>
        `;
}

function setFourthSection(reptile) {
  const section = document.querySelector('.fourth-section');
  section.innerHTML = `
  <div class="fourth-section__header">Питание</div>
  <div class="fourth-section__descriptions">
    <div class="fourth-section__description">
    ${reptile.fullDescription.food.descriptions[0]}
    </div>
    <div class="fourth-section__description">
    ${reptile.fullDescription.food.descriptions[1]}
    </div>
    <div class="fourth-section__description">
    ${reptile.fullDescription.food.descriptions[2]}
    </div>
    <div class="fourth-section__description">
    ${reptile.fullDescription.food.descriptions[3]}
    </div>
    <div class="fourth-section__food">
    <img
              src="${reptile.fullDescription.foodImg}"
              class="fourth-section__food-main-image"
            />
      ${getFood(reptile.fullDescription.food.types)}
    </div>
  </div>
        `;
}

function getDifficulty(difficulty) {
  let result = '';
console.log(difficulty);
  for (let i = 0; i < 5; i++) {
    result += `<div class="third-section_dificulty-point ${
      i <= difficulty - 1 ? 'third-section_dificulty-point_filled' : ''
    }"></div>`;
  }

  return result;
}

function getDifficultyColor(difficulty) {
  if (difficulty < 3) {
    return 'third-section_dificulty_green';
  }
  if (difficulty == 3) {
    return 'third-section_dificulty_yellow';
  }
  return 'third-section_dificulty_orange';
}

function getFood(types) {
  return types
    .map(
      (t) => `<img
    src="${t.maskedImg}"
    class="fourth-section__food-image"
  />`
    )
    .join('');
}
