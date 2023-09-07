/* change styles on hover at .container-where-to-buy__, .container-where-to-buy__ starts */
const btn_partners_shops = document.querySelector(
    ".container-where-to-buy__btn-partners-shops"
  ),
  btn_internet_shops = document.querySelector(
    ".container-where-to-buy__btn-internet-shops"
  );
btn_partners_shops.onmouseover = function () {
  this.style.background = "#909CB5";
  this.style.color = "#fff";
};
btn_partners_shops.onmouseout = function () {
  this.style.background = "#fff";
  this.style.color = "#384255";
};
btn_internet_shops.onmouseover = function () {
  this.style.background = "#909CB5";
  this.style.color = "#fff";
};
btn_internet_shops.onmouseout = function () {
  this.style.background = "#fff";
  this.style.color = "#384255";
};
/* change styles on hover at .container-about-company__, .container-our-team__ ends */
/* show and hide certain map .container-where-to-buy__info-map-Moscow-1, .container-where-to-buy__info-map-Moscow-2, .container-where-to-buy__info-map-Novokuznetsk, .container-where-to-buy__info-map-Volgograd-1, .container-where-to-buy__info-map-Volgograd-2, .container-where-to-buy__info-map-Kazan depending on users' click at certain shops' adreess starts */
const btn_list_of_shops = document.querySelector(
    ".container-where-to-buy__btn-list-of-shops-flex"
  ),
  btn_icon_list_of_shops = document.querySelector(
    ".container-where-to-buy__btn-list-of-shops-icon"
  ),
  btn_icon_list_of_shops__activated = document.querySelector(
    ".container-where-to-buy__btn-list-of-shops-icon--activated"
  ),
  menu_list_of_shops = document.querySelector(
    ".container-where-to-buy__list-of-shops-menu"
  );
$(function () {
  let counter = 0;
  $(btn_list_of_shops).click(function () {
    counter++;
    if (counter % 2 !== 0) {
      $(menu_list_of_shops).fadeIn(60);
      $(btn_icon_list_of_shops__activated).css("display", "block");
      $(btn_icon_list_of_shops).css("display", "none");
    } else if (counter % 2 == 0) {
      $(menu_list_of_shops).fadeOut(30);
      $(btn_icon_list_of_shops__activated).css("display", "none");
      $(btn_icon_list_of_shops).css("display", "block");
    }
  });
});
const btn_icon_map = document.querySelector(
    ".container-where-to-buy__btn-shops-on-the-map-icon"
  ),
  btn_icon_map__activated = document.querySelector(
    ".container-where-to-buy__btn-shops-on-the-map-icon--activated"
  ),
  btn_map = document.querySelector(
    ".container-where-to-buy__btn-shops-on-the-map-flex"
  ),
  info_rect = document.querySelector(".container-where-to-buy__info-rect"),
  address_Moscow_1 = document.querySelector(".address-Moscow-1"),
  address_Moscow_2 = document.querySelector(".address-Moscow-2"),
  address_Volgograd_1 = document.querySelector(".address-Volgograd-1"),
  address_Volgograd_2 = document.querySelector(".address-Volgograd-2"),
  address_Kazan = document.querySelector(".address-Kazan"),
  address_Novokuznetsk = document.querySelector(".address-Novokuznetsk"),
  info_map_rect = document.querySelector(
    ".container-where-to-buy__info-map-rect"
  ),
  info_map_rect_x = document.querySelector(
    ".container-where-to-buy__info-map-rect-x"
  ),
  info_map_Moscow_1 = document.querySelector(
    ".container-where-to-buy__info-map-Moscow-1"
  ),
  info_map_Moscow_2 = document.querySelector(
    ".container-where-to-buy__info-map-Moscow-2"
  ),
  info_map_Novokuznetsk = document.querySelector(
    ".container-where-to-buy__info-map-Novokuznetsk"
  ),
  info_map_Volgograd_1 = document.querySelector(
    ".container-where-to-buy__info-map-Volgograd-1"
  ),
  info_map_Volgograd_2 = document.querySelector(
    ".container-where-to-buy__info-map-Volgograd-2"
  ),
  info_map_Kazan = document.querySelector(
    ".container-where-to-buy__info-map-Kazan"
  );
$(function () {
  $(address_Moscow_1).click(function () {
    $([info_map_rect, info_map_Moscow_1, btn_icon_map__activated]).each(
      function () {
        $(this).css({ display: "block" });
      }
    );
    info_map_rect.dataset.act = "activated";
    $(btn_map).css("gap", "0rem");
    $([
      info_map_Moscow_2,
      info_map_Novokuznetsk,
      info_map_Volgograd_1,
      info_map_Volgograd_2,
      info_map_Kazan,
      info_rect,
      btn_icon_map,
    ]).each(function () {
      $(this).css({ display: "none" });
    });
  });
});
$(function () {
  $(address_Moscow_2).click(function () {
    $([info_map_rect, info_map_Moscow_2, btn_icon_map__activated]).each(
      function () {
        $(this).css({ display: "block" });
      }
    );
    info_map_rect.dataset.act = "activated";
    $(btn_map).css("gap", "0rem");
    $([
      info_map_Moscow_1,
      info_map_Novokuznetsk,
      info_map_Volgograd_1,
      info_map_Volgograd_2,
      info_map_Kazan,
      info_rect,
      btn_icon_map,
    ]).each(function () {
      $(this).css({ display: "none" });
    });
  });
});
$(function () {
  $(address_Novokuznetsk).click(function () {
    $([info_map_rect, info_map_Novokuznetsk, btn_icon_map__activated]).each(
      function () {
        $(this).css({ display: "block" });
      }
    );
    info_map_rect.dataset.act = "activated";
    $(btn_map).css("gap", "0rem");
    $([
      info_map_Moscow_1,
      info_map_Moscow_2,
      info_map_Volgograd_1,
      info_map_Volgograd_2,
      info_map_Kazan,
      info_rect,
      btn_icon_map,
    ]).each(function () {
      $(this).css({ display: "none" });
    });
  });
});
$(function () {
  $(address_Volgograd_1).click(function () {
    $([info_map_rect, info_map_Volgograd_1, btn_icon_map__activated]).each(
      function () {
        $(this).css({ display: "block" });
      }
    );
    info_map_rect.dataset.act = "activated";
    $(btn_map).css("gap", "0rem");
    $([
      info_map_Moscow_1,
      info_map_Moscow_2,
      info_map_Novokuznetsk,
      info_map_Volgograd_2,
      info_map_Kazan,
      info_rect,
      btn_icon_map,
    ]).each(function () {
      $(this).css({ display: "none" });
    });
  });
});
$(function () {
  $(address_Volgograd_2).click(function () {
    $([info_map_rect, info_map_Volgograd_2, btn_icon_map__activated]).each(
      function () {
        $(this).css({ display: "block" });
      }
    );
    info_map_rect.dataset.act = "activated";
    $(btn_map).css("gap", "0rem");
    $([
      info_map_Moscow_1,
      info_map_Moscow_2,
      info_map_Novokuznetsk,
      info_map_Volgograd_1,
      info_map_Kazan,
      info_rect,
      btn_icon_map,
    ]).each(function () {
      $(this).css({ display: "none" });
    });
  });
});
$(function () {
  $(address_Kazan).click(function () {
    $([info_map_rect, info_map_Kazan, btn_icon_map__activated]).each(
      function () {
        $(this).css({ display: "block" });
      }
    );
    info_map_rect.dataset.act = "activated";
    $(btn_map).css("gap", "0rem");
    $([
      info_map_Moscow_1,
      info_map_Moscow_2,
      info_map_Novokuznetsk,
      info_map_Volgograd_1,
      info_map_Volgograd_2,
      info_rect,
      btn_icon_map,
    ]).each(function () {
      $(this).css({ display: "none" });
    });
  });
});
$(function () {
  $(info_map_rect_x).click(function () {
    $(info_map_rect).css("display", "none");
    info_map_rect.dataset.act = "disabled";
    $(info_rect).css("display", "block");
    $(btn_map).css("gap", "0.35rem");
    $(btn_icon_map__activated).css("display", "none");
    $(btn_icon_map).css("display", "block");
  });
});
/* show and hide certain map .container-where-to-buy__info-map-Moscow-1, .container-where-to-buy__info-map-Moscow-2, .container-where-to-buy__info-map-Novokuznetsk, .container-where-to-buy__info-map-Volgograd-1, .container-where-to-buy__info-map-Volgograd-2, .container-where-to-buy__info-map-Kazan depending on users' click at certain shops' adreess ends */
/* scroll page to .container-where-to-buy__info-map-rect if .container-where-to-buy__info-map-rect has property 'display: none' and user clicked on .container-where-to-buy__btn-shops-on-the-map-flex starts */
window.addEventListener("click", function (e) {
  if (e.target.hasAttribute("address")) {
    let display_value = window
      .getComputedStyle(info_map_rect)
      .getPropertyValue("display");
    if (display_value === "block") {
      console.log("block");
      function scrollToElement() {
        info_map_rect.scrollIntoView({ behavior: "smooth" });
      }
      btn_map.addEventListener("click", scrollToElement);
    } else {
      return false;
    }
  }
});
/* scroll page to .container-where-to-buy__info-map-rect if .container-where-to-buy__info-map-rect has property 'display: none' and user clicked on .container-where-to-buy__btn-shops-on-the-map-flex ends */
