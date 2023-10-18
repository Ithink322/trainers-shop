const btnContactsMoscow = document.querySelector(
    ".container-contacts__contacts-in-moscow-btn"
  ),
  btnContactsNovokuznetsk = document.querySelector(
    ".container-contacts__contacts-in-Novokuznetsk-btn"
  );
let addressInfoRect = document.querySelector(
    ".container-contacts__info-address"
  ),
  numberInfoRect = document.querySelector(".container-contacts__info-number"),
  addressAdditionInfo = document.querySelector(
    ".container-contacts__office-info-address"
  ),
  mapAdditionInfo = document.querySelector(".iframe-map-office-info"),
  number1AdditionInfo = document.querySelector(
    ".container-contacts__sales-department-number"
  ),
  number2AdditionInfo = document.querySelector(
    ".container-contacts__accountants-office-number"
  ),
  number3AdditionInfo = document.querySelector(
    ".container-contacts__customer-service-number"
  ),
  continerStorages = document.querySelector(
    ".container-contacts__store-rects-flex"
  );
btnContactsNovokuznetsk.onclick = function () {
  this.style.background = "#f53b49";
  this.style.color = "#fff";
  btnContactsMoscow.style.background = "#fff";
  btnContactsMoscow.style.color = "#384255";
  addressInfoRect.innerText =
    "Центральный район, Новокузнецк, Кемеровская область — Кузбасс, 654007";
  let childParagraph = numberInfoRect.childNodes; // Получаем все дочерние элементы <p>
  // Проходимся по каждому дочернему элементу
  for (let i = 0; i < childParagraph.length; i++) {
    let child = childParagraph[i];
    // Проверяем, является ли дочерний элемент текстовым узлом
    if (child.nodeType === Node.TEXT_NODE) {
      // Заменяем текст внутри текстового узла
      child.nodeValue = "+7 (951) 077-66-32 ";
    }
  }
  addressAdditionInfo.innerText =
    "Центральный район, г. Новокузнецк, дом 43, офис 6";
  mapAdditionInfo.className =
    "container-contacts__office-info-map-Novokuznetsk iframe-map-office-info";
  mapAdditionInfo.src =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d150958.01847412335!2d87.0412415365987!3d53.758885797163096!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x42d0c0f96c44ee5b%3A0x9ef9b40d25cc3156!2sWellFitness!5e0!3m2!1sru!2sru!4v1693845291299!5m2!1sru!2sru";
  let chd1number = number1AdditionInfo.childNodes;
  for (let i = 0; i < chd1number.length; i++) {
    let chd1 = chd1number[i];
    if (chd1.nodeType === Node.TEXT_NODE) {
      chd1.nodeValue = "+7 (951) 077-66-32 ";
    }
  }
  let chd2number = number2AdditionInfo.childNodes;
  for (let i = 0; i < chd2number.length; i++) {
    let chd2 = chd2number[i];
    if (chd2.nodeType === Node.TEXT_NODE) {
      chd2.nodeValue = "+7 (951) 077-66-32 ";
    }
  }
  let chd3number = number3AdditionInfo.childNodes;
  for (let i = 0; i < chd3number.length; i++) {
    let chd3 = chd3number[i];
    if (chd3.nodeType === Node.TEXT_NODE) {
      chd3.nodeValue = "+7 (951) 077-66-32 ";
    }
  }
  continerStorages.innerHTML = `<div class="container-contacts__store-rects-flex">
  <div class="container-contacts__store-rect-flex">
    <p class="container-contacts__store-rect-title">Склад, Новокузнецк</p>
    <p class="container-contacts__store-rect-address">Центральный район, Новокузнецк, Кемеровская область — Кузбасс, 654007</p>
    <p class="container-contacts__store-rect-number">+7 (951) 077-66-32 <abbr>доб. 1</abbr></p>
  </div>
</div>`;
};
btnContactsMoscow.onclick = function () {
  this.style.background = "#f53b49";
  this.style.color = "#fff";
  btnContactsNovokuznetsk.style.background = "#fff";
  btnContactsNovokuznetsk.style.color = "#384255";
  addressInfoRect.innerText =
    "Москва, ТРК VEGAS Крокус Сити, м. Мякинино, ул. Международная 12, 66 км МКАД";
  let childParagraph = numberInfoRect.childNodes; // Получаем все дочерние элементы <p>
  // Проходимся по каждому дочернему элементу
  for (let i = 0; i < childParagraph.length; i++) {
    let child = childParagraph[i];
    // Проверяем, является ли дочерний элемент текстовым узлом
    if (child.nodeType === Node.TEXT_NODE) {
      // Заменяем текст внутри текстового узла
      child.nodeValue = "+7 (499) 677-56-32 ";
    }
  }
  let chd1number = number1AdditionInfo.childNodes;
  for (let i = 0; i < chd1number.length; i++) {
    let chd1 = chd1number[i];
    if (chd1.nodeType === Node.TEXT_NODE) {
      chd1.nodeValue = "+7 (499) 677-56-32 ";
    }
  }
  let chd2number = number2AdditionInfo.childNodes;
  for (let i = 0; i < chd2number.length; i++) {
    let chd2 = chd2number[i];
    if (chd2.nodeType === Node.TEXT_NODE) {
      chd2.nodeValue = "+7 (499) 677-56-32 ";
    }
  }
  let chd3number = number3AdditionInfo.childNodes;
  for (let i = 0; i < chd3number.length; i++) {
    let chd3 = chd3number[i];
    if (chd3.nodeType === Node.TEXT_NODE) {
      chd3.nodeValue = "+7 (499) 677-56-32 ";
    }
  }
  addressAdditionInfo.innerText =
    "Москва ул. Маршала Прошлякова 30 офис 407 БЦ Зенит Плаза";
  mapAdditionInfo.className =
    "container-contacts__office-info-map-Moscow iframe-map-office-info";
  mapAdditionInfo.src =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d143422.70148564517!2d37.08366394042968!3d55.82831145750417!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x414ab301fb000001%3A0x9068f0941ddde7c2!2sWellFitness!5e0!3m2!1sru!2sru!4v1693844739686!5m2!1sru!2sru";
  continerStorages.innerHTML = `<div class="container-contacts__store-rects-flex">
  <div class="container-contacts__store-rect-flex">
    <p class="container-contacts__store-rect-title">Склад, Москва</p>
    <p class="container-contacts__store-rect-address">Московская область,
      Красногорский р-н, пос. Гольево,
      Трест Мособлинжстрой #1</p>
    <p class="container-contacts__store-rect-number">+7 (499) 677-56-32 <abbr>доб. 1</abbr></p>
  </div>
  <div class="container-contacts__store-rect-flex">
    <p class="container-contacts__store-rect-title">Дополнительный склад, Москва</p>
    <p class="container-contacts__store-rect-address">г. Москва, ул. Промышленная 11А</p>
    <p class="container-contacts__store-rect-number">+7 (499) 677-56-32 доб. 1</p>
  </div>
</div>`;
};
