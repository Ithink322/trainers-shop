/* change styles on hover at .container-our-team__btn-about-company, .container-our-team__btn-our-projects, .container-our-team__btn-where-to-buy starts */
const btn_about_company = document.querySelector(
    ".container-our-team__btn-about-company"
  ),
  btn_our_projects = document.querySelector(
    ".container-our-team__btn-our-projects"
  ),
  btn_where_to_buy = document.querySelector(
    ".container-our-team__btn-where-to-buy"
  );
btn_about_company.onmouseover = function () {
  btn_about_company.style.background = "#f53b49";
  btn_about_company.style.color = "#fff";
};
btn_about_company.onmouseout = function () {
  btn_about_company.style.background = "#fff";
  btn_about_company.style.color = "#000";
};
btn_our_projects.onmouseover = function () {
  btn_our_projects.style.background = "#f53b49";
  btn_our_projects.style.color = "#fff";
};
btn_our_projects.onmouseout = function () {
  btn_our_projects.style.background = "#fff";
  btn_our_projects.style.color = "#000";
};
btn_where_to_buy.onmouseover = function () {
  btn_where_to_buy.style.background = "#f53b49";
  btn_where_to_buy.style.color = "#fff";
};
btn_where_to_buy.onmouseout = function () {
  btn_where_to_buy.style.background = "#fff";
  btn_where_to_buy.style.color = "#000";
};
/* change styles on hover at .container-our-team__btn-about-company, .container-our-team__btn-our-projects, .container-our-team__btn-where-to-buy ends */
