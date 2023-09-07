/* scroll page to .grid-brands__title when user clicked on .text-brands-burger-clicked or .text-brands-footer-clicked starts */
$(function () {
  $(".text-brands-burger-clicked, .header__brands-title").click(function () {
    $("html, body")
      .delay(400)
      .animate(
        {
          scrollTop: $(".grid-brands__title").offset().top,
        },
        900
      );
  });
});
$(function () {
  $(".text-brands-footer-clicked").click(function () {
    $("html, body")
      .delay(400)
      .animate(
        {
          scrollTop: $(".grid-brands__title").offset().top,
        },
        900
      );
  });
});
/* scroll page to .grid-brands__title when user clicked on .text-brands-burger-clicked or .text-brands-footer-clicked ends */
