document.addEventListener("DOMContentLoaded", function () {
  /* when user clicked on .container-index__news-title-2 slider for news changes on slider for blog and vice-versa starts */
  const text_news = document.querySelector(".container-index__news-title-1"),
    text_blog = document.querySelector(".container-index__news-title-2"),
    slider_news = $(".container-index__overflow-news-slider-overflow"),
    slider_blog = $(".container-index__overflow-blog-slider-overflow"),
    arrow_left_news = document.querySelector(".slider-news__btn-left"),
    arrow_left_blog = document.querySelector(".slider-blog__btn-left");
  if (window.innerWidth < 1440) {
    text_blog.onclick = function () {
      slider_news.fadeOut(0);
      slider_blog.fadeIn(180);
      text_blog.classList.remove(
        "container-index__news-blog-hover-change-titles-2-1"
      );
      text_blog.classList.add(
        "container-index__news-blog-hover-change-titles-1-2"
      );
      text_news.classList.remove(
        "container-index__news-blog-hover-change-titles-1-2"
      );
      text_news.classList.add(
        "container-index__news-blog-hover-change-titles-2-1"
      );
    };
    text_news.onclick = function () {
      slider_news.fadeIn(180);
      slider_blog.fadeOut(0);
      text_blog.classList.remove(
        "container-index__news-blog-hover-change-titles-1-2"
      );
      text_blog.classList.add(
        "container-index__news-blog-hover-change-titles-2-1"
      );
      text_news.classList.remove(
        "container-index__news-blog-hover-change-titles-2-1"
      );
      text_news.classList.add(
        "container-index__news-blog-hover-change-titles-1-2"
      );
    };
    text_blog.onmouseover = function () {
      slider_news.fadeOut(0);
      slider_blog.fadeIn(180);
      text_blog.classList.remove(
        "container-index__news-blog-hover-change-titles-2-1"
      );
      text_blog.classList.add(
        "container-index__news-blog-hover-change-titles-1-2"
      );
      text_news.classList.remove(
        "container-index__news-blog-hover-change-titles-1-2"
      );
      text_news.classList.add(
        "container-index__news-blog-hover-change-titles-2-1"
      );
    };
    text_news.onmouseover = function () {
      slider_news.fadeIn(180);
      slider_blog.fadeOut(0);
      text_blog.classList.remove(
        "container-index__news-blog-hover-change-titles-1-2"
      );
      text_blog.classList.add(
        "container-index__news-blog-hover-change-titles-2-1"
      );
      text_news.classList.remove(
        "container-index__news-blog-hover-change-titles-2-1"
      );
      text_news.classList.add(
        "container-index__news-blog-hover-change-titles-1-2"
      );
    };
  } else if (window.innerWidth >= 1440 && window.innerWidth < 1920) {
    text_blog.onclick = function () {
      slider_news.fadeOut(0);
      slider_blog.fadeIn(180);
      text_blog.classList.remove(
        "container-index__news-blog-hover-change-titles-2-1"
      );
      text_blog.classList.add(
        "container-index__news-blog-hover-change-titles-1-2"
      );
      text_news.classList.remove(
        "container-index__news-blog-hover-change-titles-1-2"
      );
      text_news.classList.add(
        "container-index__news-blog-hover-change-titles-2-1"
      );
      arrow_left_blog.style.display = "block";
      arrow_left_news.style.display = "none";
    };
    text_news.onclick = function () {
      slider_news.fadeIn(180);
      slider_blog.fadeOut(0);
      text_blog.classList.remove(
        "container-index__news-blog-hover-change-titles-1-2"
      );
      text_blog.classList.add(
        "container-index__news-blog-hover-change-titles-2-1"
      );
      text_news.classList.remove(
        "container-index__news-blog-hover-change-titles-2-1"
      );
      text_news.classList.add(
        "container-index__news-blog-hover-change-titles-1-2"
      );
      arrow_left_blog.style.display = "none";
      arrow_left_news.style.display = "block";
    };
    text_blog.onmouseover = function () {
      slider_news.fadeOut(0);
      slider_blog.fadeIn(180);
      text_blog.classList.remove(
        "container-index__news-blog-hover-change-titles-2-1"
      );
      text_blog.classList.add(
        "container-index__news-blog-hover-change-titles-1-2"
      );
      text_news.classList.remove(
        "container-index__news-blog-hover-change-titles-1-2"
      );
      text_news.classList.add(
        "container-index__news-blog-hover-change-titles-2-1"
      );
      arrow_left_blog.style.display = "block";
      arrow_left_news.style.display = "none";
    };
    text_news.onmouseover = function () {
      slider_news.fadeIn(180);
      slider_blog.fadeOut(0);
      text_blog.classList.remove(
        "container-index__news-blog-hover-change-titles-1-2"
      );
      text_blog.classList.add(
        "container-index__news-blog-hover-change-titles-2-1"
      );
      text_news.classList.remove(
        "container-index__news-blog-hover-change-titles-2-1"
      );
      text_news.classList.add(
        "container-index__news-blog-hover-change-titles-1-2"
      );
      arrow_left_blog.style.display = "none";
      arrow_left_news.style.display = "block";
    };
  }
  if (window.innerWidth >= 1920) {
    text_blog.onclick = function () {
      slider_news.fadeOut(0);
      slider_blog.fadeIn(180);
      text_blog.classList.remove(
        "container-index__news-blog-hover-change-titles-2-1"
      );
      text_blog.classList.add(
        "container-index__news-blog-hover-change-titles-1-2"
      );
      text_news.classList.remove(
        "container-index__news-blog-hover-change-titles-1-2"
      );
      text_news.classList.add(
        "container-index__news-blog-hover-change-titles-2-1"
      );
      arrow_left_blog.style.display = "none";
      arrow_left_news.style.display = "none";
    };
    text_news.onclick = function () {
      slider_news.fadeIn(180);
      slider_blog.fadeOut(0);
      text_blog.classList.remove(
        "container-index__news-blog-hover-change-titles-1-2"
      );
      text_blog.classList.add(
        "container-index__news-blog-hover-change-titles-2-1"
      );
      text_news.classList.remove(
        "container-index__news-blog-hover-change-titles-2-1"
      );
      text_news.classList.add(
        "container-index__news-blog-hover-change-titles-1-2"
      );
      arrow_left_blog.style.display = "none";
      arrow_left_news.style.display = "none";
    };
    text_blog.onmouseover = function () {
      slider_news.fadeOut(0);
      slider_blog.fadeIn(180);
      text_blog.classList.remove(
        "container-index__news-blog-hover-change-titles-2-1"
      );
      text_blog.classList.add(
        "container-index__news-blog-hover-change-titles-1-2"
      );
      text_news.classList.remove(
        "container-index__news-blog-hover-change-titles-1-2"
      );
      text_news.classList.add(
        "container-index__news-blog-hover-change-titles-2-1"
      );
      arrow_left_blog.style.display = "none";
      arrow_left_news.style.display = "none";
    };
    text_news.onmouseover = function () {
      slider_news.fadeIn(180);
      slider_blog.fadeOut(0);
      text_blog.classList.remove(
        "container-index__news-blog-hover-change-titles-1-2"
      );
      text_blog.classList.add(
        "container-index__news-blog-hover-change-titles-2-1"
      );
      text_news.classList.remove(
        "container-index__news-blog-hover-change-titles-2-1"
      );
      text_news.classList.add(
        "container-index__news-blog-hover-change-titles-1-2"
      );
      arrow_left_blog.style.display = "none";
      arrow_left_news.style.display = "none";
    };
  }
  /* when user clicked on .container-index__news-title-2 slider for news changes on slider for blog and vice-versa ends */
  if (!(window.innerWidth >= 1920)) {
    /* touchscreen for .container-index__overflow-news-slider-overflow starts */
    let slider = document.querySelector(
        ".container-index__overflow-news-slider-overflow"
      ),
      sliderContainer = document.querySelector(
        ".container-index__news-divs-flex"
      ),
      slides = document.querySelectorAll(".container-index__news-div");
    let gap = window.getComputedStyle(
      document.querySelector(".container-index__news-div-flex")
    );
    let flex_gap = parseInt(gap.getPropertyValue("gap"));
    let slideWidth = slides[0].offsetWidth + flex_gap;
    let currentIndex = 0;
    sliderContainer.style.transform = "translateX(0)";

    slider.addEventListener("touchstart", handleTouchStart, false);
    slider.addEventListener("touchmove", handleTouchMove, false);

    let startX = null;

    function handleTouchStart(event) {
      startX = event.touches[0].clientX;
    }

    function handleTouchMove(event) {
      if (!startX) {
        return;
      }

      let currentX = event.touches[0].clientX;
      let diffX = startX - currentX;

      if (diffX > 0 && currentIndex < slides.length - 1) {
        currentIndex++;
        startX = null;
        moveSlider();
      } else if (diffX < 0 && currentIndex > 0) {
        currentIndex--;
        startX = null;
        moveSlider();
      }
    }

    function moveSlider() {
      let translateX = -currentIndex * slideWidth;
      sliderContainer.style.transform = "translateX(" + translateX + "px)";
    }
    /* touchscreen for .container-index__overflow-news-slider-overflow ends */

    /* carousel with arrow from 1440px to 1920px for .container-index__overflow-news-slider-overflow starts */
    const arrow_left = document.querySelector(".slider-news__btn-left");
    let currentPos = 0;
    arrow_left.addEventListener("click", () => {
      currentPos -= slideWidth;
      if (currentPos > 0) {
        currentPos = -slideWidth * (slides.length - 1);
      }
      if (currentPos < -slideWidth * (slides.length - 1)) {
        currentPos = 0;
      }
      sliderContainer.style.transform = "translateX(" + currentPos + "px)";
    });
    /* carousel with arrow from 1440px to 1920px .container-index__overflow-news-slider-overflow ends */

    /* touchscreen for .container-index__overflow-blog-slider-overflow starts */
    let slider_style = document.querySelector(
      ".container-index__overflow-blog-slider-overflow"
    );
    let observer = new MutationObserver(function (mutations) {
      mutations.forEach(function (mutation) {
        if (mutation.attributeName === "style") {
          let bl_slider_get_styles = window.getComputedStyle(slider_style);
          if (bl_slider_get_styles.display === "block") {
            let bl_slider = document.querySelector(
                ".container-index__overflow-blog-slider-overflow"
              ),
              bl_sliderContainer = document.querySelector(
                ".container-index__blog-divs-flex"
              ),
              bl_slides = document.querySelectorAll(
                ".container-index__blog-div"
              );
            let bl_gap = window.getComputedStyle(
              document.querySelector(".container-index__blog-div-flex")
            );
            let bl_flex_gap = parseInt(bl_gap.getPropertyValue("gap"));
            let bl_slideWidth = bl_slides[0].offsetWidth + bl_flex_gap;
            let bl_currentIndex = 0;
            bl_sliderContainer.style.transform = "translateX(0)";

            bl_slider.addEventListener(
              "touchstart",
              bl_handleTouchStart,
              false
            );
            bl_slider.addEventListener("touchmove", bl_handleTouchMove, false);

            let bl_startX = null;

            function bl_handleTouchStart(event) {
              bl_startX = event.touches[0].clientX;
            }

            function bl_handleTouchMove(event) {
              if (!bl_startX) {
                return;
              }

              let bl_currentX = event.touches[0].clientX;
              let bl_diffX = bl_startX - bl_currentX;

              if (bl_diffX > 0 && bl_currentIndex < bl_slides.length - 1) {
                bl_currentIndex++;
                bl_startX = null;
                bl_moveSlider();
              } else if (bl_diffX < 0 && bl_currentIndex > 0) {
                bl_currentIndex--;
                bl_startX = null;
                bl_moveSlider();
              }
            }

            function bl_moveSlider() {
              let bl_translateX = -bl_currentIndex * bl_slideWidth;
              bl_sliderContainer.style.transform =
                "translateX(" + bl_translateX + "px)";
            }
            /* touchscreen for .container-index__overflow-blog-slider-overflow ends */

            /* carousel with arrow from 1440px to 1920px for .container-index__overflow-blog-slider-overflow starts */
            const bl_arrow_left = document.querySelector(
              ".slider-blog__btn-left"
            );
            let bl_currentPos = 0;
            bl_arrow_left.addEventListener("click", () => {
              bl_currentPos -= bl_slideWidth;
              if (bl_currentPos > 0) {
                bl_currentPos = -bl_slideWidth * (bl_slides.length - 1);
              }
              if (bl_currentPos < -bl_slideWidth * (bl_slides.length - 1)) {
                bl_currentPos = 0;
              }
              bl_sliderContainer.style.transform =
                "translateX(" + bl_currentPos + "px)";
            });
            /* carousel with arrow from 1440px to 1920px .container-index__overflow-blog-slider-overflow ends */
          }
        }
      });
    });
    observer.observe(slider_style, { attributes: true });
    if (window.innerWidth < 768) {
      /* The appearance of .news-touch-circle from 320px starts */
      let news_circle = document.querySelector(".news-touch-circle");
      slider.addEventListener("touchstart", function (event) {
        let slider_news = slider.getBoundingClientRect();
        x = event.touches[0].clientX - slider_news.left - 15;
        y = event.touches[0].clientY - slider_news.top + 30;
        news_circle.style.left = x + "px";
        news_circle.style.top = y + "px";
        news_circle.style.transform = "scale(1)";
        news_circle.style.display = "block";

        setTimeout(function () {
          news_circle.style.transform = "scale(2)"; // Увеличиваем размер круга
          news_circle.style.opacity = "80%"; // Устанавливаем прозрачность круга
        }, 10);
      });
      slider.addEventListener("touchmove", function (e) {
        let slider_news = slider.getBoundingClientRect();
        x = e.touches[0].clientX - slider_news.left - 15;
        y = e.touches[0].clientY - slider_news.top + 30;
        news_circle.style.left = x + "px";
        news_circle.style.top = y + "px";
        news_circle.style.transform = "scale(1)";
      });
      slider.addEventListener("touchend", function () {
        news_circle.style.transform = "scale(0.9)";
        news_circle.style.display = "none";
      });
      /* The appearance of .news-touch-circle from 320px ends */

      /* The appearance of .blog-touch-circle from 320px starts */
      let blog_slider = document.querySelector(
          ".container-index__overflow-blog-slider-overflow"
        ),
        blog_circle = document.querySelector(".blog-touch-circle");
      blog_slider.addEventListener("touchstart", function (event) {
        let sliderBlog = blog_slider.getBoundingClientRect();
        x = event.touches[0].clientX - sliderBlog.left - 15;
        y = event.touches[0].clientY - sliderBlog.top + 30;
        blog_circle.style.left = x + "px";
        blog_circle.style.top = y + "px";
        blog_circle.style.transform = "scale(1)";
        blog_circle.style.display = "block";

        setTimeout(function () {
          blog_circle.style.transform = "scale(2)"; // Увеличиваем размер круга
          blog_circle.style.opacity = "80%"; // Устанавливаем прозрачность круга
        }, 10);
      });
      blog_slider.addEventListener("touchmove", function (e) {
        let sliderBlog = blog_slider.getBoundingClientRect();
        x = e.touches[0].clientX - sliderBlog.left - 15;
        y = e.touches[0].clientY - sliderBlog.top + 30;
        blog_circle.style.left = x + "px";
        blog_circle.style.top = y + "px";
        blog_circle.style.transform = "scale(1)";
      });
      blog_slider.addEventListener("touchend", function () {
        blog_circle.style.transform = "scale(0.9)";
        blog_circle.style.display = "none";
      });
      /* The appearance of .blog-touch-circle from 320px ends */
    }
    if (window.innerWidth >= 768) {
      /* The appearance of .news-touch-circle from 768px starts */
      let news_circle = document.querySelector(".news-touch-circle");
      slider.addEventListener("touchstart", function (event) {
        let slider_news = slider.getBoundingClientRect();
        x = event.touches[0].clientX - slider_news.left - 15;
        y = event.touches[0].clientY - slider_news.top + 50;
        news_circle.style.left = x + "px";
        news_circle.style.top = y + "px";
        news_circle.style.transform = "scale(1)";
        news_circle.style.display = "block";

        setTimeout(function () {
          news_circle.style.transform = "scale(2)"; // Увеличиваем размер круга
          news_circle.style.opacity = "80%"; // Устанавливаем прозрачность круга
        }, 10);
      });
      slider.addEventListener("touchmove", function (e) {
        let slider_news = slider.getBoundingClientRect();
        x = e.touches[0].clientX - slider_news.left - 15;
        y = e.touches[0].clientY - slider_news.top + 50;
        news_circle.style.left = x + "px";
        news_circle.style.top = y + "px";
        news_circle.style.transform = "scale(1)";
      });
      slider.addEventListener("touchend", function () {
        news_circle.style.transform = "scale(0.9)";
        news_circle.style.display = "none";
      });
      /* The appearance of .news-touch-circle from 768px ends */

      /* The appearance of .blog-touch-circle from 768px starts */
      let blog_slider = document.querySelector(
          ".container-index__overflow-blog-slider-overflow"
        ),
        blog_circle = document.querySelector(".blog-touch-circle");
      blog_slider.addEventListener("touchstart", function (event) {
        let sliderBlog = blog_slider.getBoundingClientRect();
        x = event.touches[0].clientX - sliderBlog.left - 15;
        y = event.touches[0].clientY - sliderBlog.top + 50;
        blog_circle.style.left = x + "px";
        blog_circle.style.top = y + "px";
        blog_circle.style.transform = "scale(1)";
        blog_circle.style.display = "block";

        setTimeout(function () {
          blog_circle.style.transform = "scale(2)"; // Увеличиваем размер круга
          blog_circle.style.opacity = "80%"; // Устанавливаем прозрачность круга
        }, 10);
      });
      blog_slider.addEventListener("touchmove", function (e) {
        let sliderBlog = blog_slider.getBoundingClientRect();
        x = e.touches[0].clientX - sliderBlog.left - 15;
        y = e.touches[0].clientY - sliderBlog.top + 50;
        blog_circle.style.left = x + "px";
        blog_circle.style.top = y + "px";
        blog_circle.style.transform = "scale(1)";
      });
      blog_slider.addEventListener("touchend", function () {
        blog_circle.style.transform = "scale(0.9)";
        blog_circle.style.display = "none";
      });
      /* The appearance of .blog-touch-circle from 768px ends */
    }
  }
});
