/* go back to the previous psge if user click on .container-rect-brand__btn-back-to-previous-page starts */
const btn = document.querySelector(
  ".container-rect-brand__btn-back-to-previous-page"
);
btn.onclick = function () {
  history.back(-1);
};
/* go back to the previous psge if user click on .container-rect-brand__btn-back-to-previous-page ends */
