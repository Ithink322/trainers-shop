/* show and hide border-bottom .header__text-1 and .header__text-2 due to hover on .header__triangle-1 and .header__triangle-2 starts */
let text_1 = document.querySelector(".header__text-1"),
  text_2 = document.querySelector(".header__text-2"),
  flex_1 = document.querySelector(".header__back-submain-flex-1"),
  flex_2 = document.querySelector(".header__back-submain-flex-2");
flex_1.onmouseover = function () {
  text_1.style.borderBottom = "3px solid #f53b49";
};
flex_1.onmouseout = function () {
  text_1.style.borderBottom = "3px solid #2a2c38";
};
flex_2.onmouseover = function () {
  text_2.style.borderBottom = "3px solid #f53b49";
};
flex_2.onmouseout = function () {
  text_2.style.borderBottom = "3px solid #2a2c38";
};
flex_1.onclick = function () {
  text_1.style.borderBottom = "3px solid #f53b49";
};
flex_2.onclick = function () {
  text_2.style.borderBottom = "3px solid #f53b49";
};
/* show and hide border-bottom .header__text-1 and .header__text-2 due to hover on .header__triangle-1 and .header__triangle-2 ends */

/* change styles for .header__btn-dilers and .header__btn-partners starts */
const dilers_btn = document.querySelector(".header__btn-dilers"),
  partners_btn = document.querySelector(".header__btn-partners");
let dilers_text = document.querySelector(".header__text-btn-dilers"),
  partners_text = document.querySelector(".header__text-btn-partners");
dilers_btn.onmouseover = function () {
  dilers_btn.style.background = "#384255";
  dilers_text.style.color = "#ffffff"; /* "#858fa4" */
  partners_btn.style.background = "transparent";
  partners_text.style.color = "#858fa4";
};
dilers_btn.onmouseout = function () {
  dilers_btn.style.background = "transparent";
  dilers_text.style.color = "#858fa4";
  partners_btn.style.background = "#384255";
  partners_text.style.color = "#ffffff";
};
partners_btn.onmouseover = function () {
  partners_btn.style.background = "#384255";
  partners_text.style.color = "#ffffff";
};
/* change styles for .header__btn-dilers and .header__btn-partners ends */
