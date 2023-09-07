/* show and hide border-bottom .header__text-1 and .header__text-2 due to hover on .header__triangle-1 and .header__triangle-2 starts */
const triangle_header_border_bottom_1 = document.querySelector(
    ".header__triangle-1"
  ),
  triangle_header_border_bottom_2 = document.querySelector(
    ".header__triangle-2"
  );
let text_header_border_bottom_1 = document.querySelector(".header__text-1"),
  text_header_border_bottom_2 = document.querySelector(".header__text-2");
triangle_header_border_bottom_1.onmouseover = function () {
  text_header_border_bottom_1.style.borderBottom = "3px solid #f53b49";
};
triangle_header_border_bottom_1.onmouseout = function () {
  text_header_border_bottom_1.style.borderBottom = "3px solid #2a2c38";
};
triangle_header_border_bottom_2.onmouseover = function () {
  text_header_border_bottom_2.style.borderBottom = "3px solid #f53b49";
};
triangle_header_border_bottom_2.onmouseout = function () {
  text_header_border_bottom_2.style.borderBottom = "3px solid #2a2c38";
};
text_header_border_bottom_1.onmouseover = function () {
  text_header_border_bottom_1.style.borderBottom = "3px solid #f53b49";
};
text_header_border_bottom_1.onmouseout = function () {
  text_header_border_bottom_1.style.borderBottom = "3px solid #2a2c38";
};
text_header_border_bottom_2.onmouseover = function () {
  text_header_border_bottom_2.style.borderBottom = "3px solid #f53b49";
};
text_header_border_bottom_2.onmouseout = function () {
  text_header_border_bottom_2.style.borderBottom = "3px solid #2a2c38";
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

/* open and close .burger-menu and .for-clubs-menu .choose-city-menu .order-a-call__menu .support-from-expert-menu .login-menu stars .password-recovery-menu */
$(function () {
  $(".header__burger-btn").click(function () {
    $(".burger-menu").fadeIn(120);
  });
});
$(function () {
  $(".burger-menu__x").click(function () {
    $(".burger-menu").fadeOut(100);
  });
});
$(function () {
  $(".burger-menu__btn-for-house").click(function () {
    $(".for-house-menu").fadeIn(0);
    $(".burger-menu").fadeOut(0);
  });
});
$(function () {
  $(".for-house-menu__x").click(function () {
    $(".for-house-menu").fadeOut(100);
  });
});
$(function () {
  $(".for-house-menu__btn-back").click(function () {
    $(".for-house-menu").fadeOut(0);
    $(".burger-menu").fadeIn(0);
  });
});
$(function () {
  $(".burger-menu__btn-for-clubs").click(function () {
    $(".for-clubs-menu").fadeIn(0);
    $(".burger-menu").fadeOut(0);
  });
});
$(function () {
  $(".for-clubs-menu__x").click(function () {
    $(".for-clubs-menu").fadeOut(100);
  });
});
$(function () {
  $(".for-clubs-menu__btn-back").click(function () {
    $(".for-clubs-menu").fadeOut(0);
    $(".burger-menu").fadeIn(0);
  });
});
$(function () {
  $(
    ".burger-menu__city-text, .burger-menu__city-triangle, .header__city, .header__city-triangle"
  ).click(function () {
    $(".choose-city-menu, .choose-city-menu__shadow").fadeIn(0);
  });
});
$(function () {
  $(".choose-city-menu__x").click(function () {
    $(".choose-city-menu, .choose-city-menu__shadow").fadeOut(100);
  });
});
$(function () {
  $(
    ".burger-menu__order-a-call-text, .for-house-menu__order-a-call-text, .for-clubs-menu__order-a-call-text, .header__text-order-a-call"
  ).click(function () {
    $(".order-a-call__shadow").fadeIn(0);
    $(".order-a-call__menu").fadeIn(120);
  });
});
$(function () {
  $(".footer__text-order-call").click(function () {
    $(".order-a-call__shadow").fadeIn(0);
    $(".order-a-call__menu").fadeIn(120);
    $("html, body")
      .delay(400)
      .animate(
        {
          scrollTop: $(".order-a-call__menu").offset().top,
        },
        900
      );
  });
});
$(function () {
  $(".order-a-call__x").click(function () {
    $(".order-a-call__shadow, .order-a-call__menu").fadeOut(100);
  });
});
$(function () {
  $(".burger-menu__text-support, .header__support-title").click(function () {
    $(".support-from-expert-menu, .support-from-expert-menu__shadow").fadeIn(0);
    $(".support-from-expert-menu__shadow").fadeIn(0);
  });
});
$(function () {
  $(".support-from-expert-menu__x").click(function () {
    $(".support-from-expert-menu, .support-from-expert-menu__shadow").fadeOut(
      100
    );
  });
});
$(function () {
  $(
    ".burger-menu__personal-account-text, .burger-menu__personal-account-img, .header__text-personal-account, .header__img-personal-account"
  ).click(function () {
    $(".login-menu, .login-menu__shadow").fadeIn(120);
  });
});
$(function () {
  $(".login-menu__x").click(function () {
    $(".login-menu, .login-menu__shadow").fadeOut(100);
  });
});
$(function () {
  $(".login-menu__text-forget-the-password").click(function () {
    $(".password-recovery-menu, .password-recovery-menu__shadow").fadeIn(120);
  });
});
$(function () {
  $(".password-recovery-menu__x").click(function () {
    $(".password-recovery-menu, .password-recovery-menu__shadow").fadeOut(100);
  });
});
/* open and close .burger-menu and .for-clubs-menu .choose-city-menu .order-a-call__menu .support-from-expert-menu .login-menu ends .password-recovery-menu */

/* disable input text starts */
$(document).ready(function () {
  $(
    ".order-a-call__input-telephone, .support-from-expert-menu__input-telephone"
  ).bind("change keyup input click", function () {
    if (this.value.match(/[^0-9\(\)\-\+]/g)) {
      this.value = this.value.replace(/[^0-9\(\)\-\+]/g, "");
    }
  });
});
/* disable input text ends */

/* hide and show password in .login-menu__input-password starts */
$(function () {
  $(".login-menu__btn-open-eye-input-password").click(function () {
    $(".login-menu__btn-open-eye-input-password").css("display", "none");
    $(".login-menu__btn-close-eye-input-password").css("display", "block");
    $(".login-menu__input-password").attr("type", "password");
  });
});
$(function () {
  $(".login-menu__btn-close-eye-input-password").click(function () {
    $(".login-menu__btn-close-eye-input-password").css("display", "none");
    $(".login-menu__btn-open-eye-input-password").css("display", "block");
    $(".login-menu__input-password").attr("type", "text");
  });
});
/* hide and show password in .login-menu__input-password ends */

/* change styles .login-menu__btn-customer .login-menu__btn-authorized-dealer starts */
let login_menu_btn_customer = document.querySelector(
  ".login-menu__btn-customer"
);
let login_menu_text_customer = document.querySelector(
  ".login-menu__text-customer"
);
let login_menu_btn_authorized_dealer = document.querySelector(
  ".login-menu__btn-authorized-dealer"
);
let login_menu_text_authorized_dealer = document.querySelector(
  ".login-menu__text-authorized-dealer"
);
login_menu_btn_customer.onmouseover = function () {
  login_menu_btn_customer.style.background = "transparent";
  login_menu_btn_customer.style.border = "1px solid rgba(144, 156, 181, 0.7)";
  login_menu_text_customer.style.color = "#384255";
  login_menu_btn_authorized_dealer.style.background = "#384255";
  login_menu_btn_authorized_dealer.style.border = "none";
  login_menu_text_authorized_dealer.style.color = "#ffffff";
};
login_menu_btn_customer.onmouseout = function () {
  login_menu_btn_customer.style.background = "#384255";
  login_menu_btn_customer.style.border = "none";
  login_menu_text_customer.style.color = "#ffffff";
  login_menu_btn_authorized_dealer.style.background = "transparent";
  login_menu_btn_authorized_dealer.style.border =
    "1px solid rgba(144, 156, 181, 0.7)";
  login_menu_text_authorized_dealer.style.color = "#384255";
};
login_menu_btn_authorized_dealer.onmouseout = function () {
  login_menu_btn_authorized_dealer.style.background = "transparent";
  login_menu_btn_authorized_dealer.style.border =
    "1px solid rgba(144, 156, 181, 0.7)";
  login_menu_text_authorized_dealer.style.color = "#384255";
  login_menu_btn_customer.style.background = "#384255";
  login_menu_btn_customer.style.border = "none";
  login_menu_text_customer.style.color = "#ffffff";
};
login_menu_btn_authorized_dealer.onmouseover = function () {
  login_menu_btn_authorized_dealer.style.background = "#384255";
  login_menu_btn_authorized_dealer.style.border = "none";
  login_menu_text_authorized_dealer.style.color = "#ffffff";
  login_menu_btn_customer.style.background = "transparent";
  login_menu_btn_customer.style.border = "1px solid rgba(144, 156, 181, 0.7)";
  login_menu_text_customer.style.color = "#384255";
};
/* change styles .login-menu__btn-customer .login-menu__btn-authorized-dealer ends */

/* check that user enter his email in .password-recovery-menu__input-email starts */
let text_input_email = document.querySelector(
  ".password-recovery-menu__input-email"
);
let text_enter_your_email = document.querySelector(
  ".password-recovery-menu__text-enter-your-email-pls"
);
text_input_email.addEventListener("input", function () {
  let count = 0;
  count = text_input_email.value.split("@").length - 1;
  console.log("count:", count);
  if (count === 1) {
    text_enter_your_email.style.display = "none";
    $(function () {
      $(".password-recovery-menu__btn").click(function () {
        $(
          ".recovery-password-instructions, .recovery-password-instructions__shadow"
        ).fadeIn(0);
        setTimeout(function () {
          $(
            ".recovery-password-instructions, .recovery-password-instructions__shadow"
          ).fadeOut(400);
        }, 12000);
        $(".password-recovery-menu, .password-recovery-menu__shadow").fadeOut(
          100
        );
      });
    });
  } else {
    text_enter_your_email.style.display = "block";
  }
});
/* check that user enter his email in .password-recovery-menu__input-email ends */
