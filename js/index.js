/* scroll page to .container-brands when user clicked on .text-brands-burger-clicked or .footer-container__text-brands-clicked starts */
$(function () {
  $(
    ".text-brands-burger-clicked, .header__brands-title, .footer-container__text-brands-clicked"
  ).click(function () {
    $("html, body")
      .delay(400)
      .animate(
        {
          scrollTop: $(".container-brands").offset().top,
        },
        900
      );
  });
});
/* scroll page to .container-brands when user clicked on .text-brands-burger-clicked or .footer-container__text-brands-clicked ends */

/* open a new html page when user click on one of the div brands tags starts */
let storageOfLinks = {
  "container-brands_brand-1.html": document.querySelector(
    ".container-brands__rect-brand-1"
  ),
  "container-brands_brand-2.html": document.querySelector(
    ".container-brands__rect-brand-2"
  ),
  "container-brands_brand-3.html": document.querySelector(
    ".container-brands__rect-brand-3"
  ),
  "container-brands_brand-4.html": document.querySelector(
    ".container-brands__rect-brand-4"
  ),
  "container-brands_brand-5.html": document.querySelector(
    ".container-brands__rect-brand-5"
  ),
  "container-brands_brand-6.html": document.querySelector(
    ".container-brands__rect-brand-6"
  ),
  "container-brands_brand-7.html": document.querySelector(
    ".container-brands__rect-brand-7"
  ),
  "container-brands_brand-8.html": document.querySelector(
    ".container-brands__rect-brand-8"
  ),
  "container-brands_brand-9.html": document.querySelector(
    ".container-brands__rect-brand-9"
  ),
  "container-brands_brand-10.html": document.querySelector(
    ".container-brands__rect-brand-10"
  ),
  "container-brands_brand-11.html": document.querySelector(
    ".container-brands__rect-brand-11"
  ),
  "container-brands_brand-12.html": document.querySelector(
    ".container-brands__rect-brand-12"
  ),
  "container-brands_brand-13.html": document.querySelector(
    ".container-brands__rect-brand-13"
  ),
  "container-brands_brand-14.html": document.querySelector(
    ".container-brands__rect-brand-14"
  ),
  "container-brands_brand-15.html": document.querySelector(
    ".container-brands__rect-brand-15"
  ),
};
for (let key in storageOfLinks) {
  if (storageOfLinks.hasOwnProperty(key)) {
    let val = storageOfLinks[key];
    val.addEventListener("click", function () {
      window.location.href = key;
    });
  }
}
/* open a new html page when user click on one of the div brands tags ends */
