let div_width = 250,
  margin = 0,
  div = [...document.querySelectorAll(".overflow-news__div")],
  div_1 = document.querySelector(".overflow-news__div-1");
const btn_move_right = document.querySelector(".btn-left"),
  btn_move_left = document.querySelector(".btn-right");
btn_move_right.onclick = function () {
  margin += div_width;
  div_1.style.marginLeft = margin + "px";
};
btn_move_left.onclick = function () {
  margin -= div_width;
  /* margin = Math.max(margin, -div_width * 2); */
  div_1.style.marginLeft = margin + "px";
  console.log("margin:", margin);
  if (margin > -250) {
    for (i = 0; i < div.length; i++) {
      div[i].style.marginLeft = margin + "px";
    }
  } else if (margin < -250) {
    for (i = 0; i < div.length; i++) {
      div[i].style.marginLeft = margin + "px";
    }
  }
};
