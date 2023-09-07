/* change styles on hover at .container-about-company__btn-our-team, .container-about-company__btn-our-projects, .container-about-company__btn-where-to-buy starts */
const btn_our_team = document.querySelector(
    ".container-about-company__btn-our-team"
  ),
  btn_our_projects = document.querySelector(
    ".container-about-company__btn-our-projects"
  ),
  btn_where_to_buy = document.querySelector(
    ".container-about-company__btn-where-to-buy"
  );
btn_our_team.onmouseover = function () {
  btn_our_team.style.background = "#f53b49";
  btn_our_team.style.color = "#fff";
};
btn_our_team.onmouseout = function () {
  btn_our_team.style.background = "#fff";
  btn_our_team.style.color = "#000";
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
/* change styles on hover at .container-about-company__btn-our-team, .container-about-company__btn-our-projects, .container-about-company__btn-where-to-buy ends */
