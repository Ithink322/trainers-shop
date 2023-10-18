/* change styles on hover at .container-our-projects__btn-about-company, .container-about-projects__btn-our-team, .container-our-projects__btn-where-to-buy starts */
const btn_about_company = document.querySelector(
    ".container-our-projects__btn-about-company"
  ),
  btn_our_team = document.querySelector(
    ".container-our-projects__btn-our-team"
  ),
  btn_where_to_buy = document.querySelector(
    ".container-our-projects__btn-where-to-buy"
  );
btn_about_company.onmouseover = function () {
  this.style.background = "#f53b49";
  this.style.color = "#fff";
};
btn_about_company.onmouseout = function () {
  this.style.background = "#fff";
  this.style.color = "#000";
};
btn_our_team.onmouseover = function () {
  this.style.background = "#f53b49";
  this.style.color = "#fff";
};
btn_our_team.onmouseout = function () {
  this.style.background = "#fff";
  this.style.color = "#000";
};
btn_where_to_buy.onmouseover = function () {
  this.style.background = "#f53b49";
  this.style.color = "#fff";
};
btn_where_to_buy.onmouseout = function () {
  this.style.background = "#fff";
  this.style.color = "#000";
};
/* change styles on hover at .container-our-projects__btn-about-company, .container-about-projects__btn-our-team, .container-our-projects__btn-where-to-buy ends */
