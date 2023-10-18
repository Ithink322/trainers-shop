const btn_1 = document.querySelector(
    ".container-privacy-policy__advertise-btn-back-to-the-previous-page"
  ),
  btn_2 = document.querySelector(
    ".container-privacy-policy__btn-back-to-the-previous-page"
  );
btn_1.onclick = function () {
  history.back(-1);
};
btn_2.onclick = function () {
  history.back(-1);
};
