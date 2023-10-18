/* show .footer__text-success due to click on .footer__btn-telegram starts */
const btn_telegram = document.querySelector(".footer-container__btn-telegram");
let text = document.querySelector(".footer-container__text-success");
btn_telegram.onclick = function () {
  text.style.display = "block";
};
/* show .footer__text-success due to click on .footer__btn-telegram ends */

/* change styles for .footer__btn-dilers and .footer__btn-partners starts */
const footer__dilers_btn = document.querySelector(
    ".footer-container__btn-dilers"
  ),
  footer__partners_btn = document.querySelector(
    ".footer-container__btn-partners"
  );
let footer__dilers_text = document.querySelector(
    ".footer-container__text-btn-dilers"
  ),
  footer__partners_text = document.querySelector(
    ".footer-container__text-btn-partners"
  );
footer__dilers_btn.onmouseover = function () {
  footer__dilers_btn.style.background = "#384255";
  footer__dilers_btn.style.border = "none";
  footer__dilers_text.style.color = "#ffffff";
  footer__partners_btn.style.background = "transparent";
  footer__partners_btn.style.border = "1px solid rgba(144, 156, 181, 0.5)";
  footer__partners_text.style.color = "#858fa4";
};
footer__dilers_btn.onmouseout = function () {
  footer__dilers_btn.style.background = "transparent";
  footer__dilers_btn.style.border = "1px solid rgba(144, 156, 181, 0.5)";
  footer__dilers_text.style.color = "#858fa4";
  footer__partners_btn.style.background = "#384255";
  footer__partners_btn.style.border = "none";
  footer__partners_text.style.color = "#ffffff";
};
footer__partners_btn.onmouseover = function () {
  footer__partners_btn.style.background = "transparent";
  footer__partners_btn.style.border = "1px solid rgba(144, 156, 181, 0.5)";
  footer__partners_text.style.color = "#858fa4";
  footer__dilers_btn.style.background = "#384255";
  footer__dilers_btn.style.border = "none";
  footer__dilers_text.style.color = "#ffffff";
};
footer__partners_btn.onmouseout = function () {
  footer__partners_btn.style.background = "#384255";
  footer__partners_btn.style.border = "none";
  footer__partners_text.style.color = "#ffffff";
  footer__dilers_btn.style.background = "transparent";
  footer__dilers_btn.style.border = "1px solid rgba(144, 156, 181, 0.5)";
  footer__dilers_text.style.color = "#858fa4";
};
/* change styles for .footer__btn-dilers and .footer__btn-partners ends */
