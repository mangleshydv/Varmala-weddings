/*=== Javascript function indexing hear===========

  01. menuToggle
  02. mobileMenu
  03. stickyHeader
  04. countVal
  05. wowActive
  06. jarallaxInit
  07. splitText
  08. swiperActive
  09. videoActivation
  10. datePicker
  11. mesonaryTab
  12. magnificPopup
  13. imgHover
  14. galleryBlockActive
  15. containerResize
  16. counterUp
  17. preloader
  18. backToTopInit

==================================================*/

(function ($) {
  "use strict";
  let device_width = window.innerWidth;

  var rtsJs = {
    m: function (e) {
      rtsJs.d();
      rtsJs.methods();
    },
    d: function (e) {
      (this._window = $(window)),
        (this._document = $(document)),
        (this._body = $("body")),
        (this._html = $("html"));
    },
    methods: function (e) {
      rtsJs.menuToggle();
      rtsJs.mobileMenu();
      rtsJs.stickyHeader();
      rtsJs.countVal();
      rtsJs.wowActive();
      rtsJs.jarallaxInit();
      rtsJs.splitText();
      rtsJs.swiperActive();
      rtsJs.videoActivation();
      rtsJs.datePicker();
      rtsJs.mesonaryTab();
      rtsJs.magnificPopup();
      rtsJs.imgHover();
      rtsJs.galleryBlockActive();
      rtsJs.containerResize();
      rtsJs.counterUp();
      rtsJs.preloader();
      rtsJs.backToTopInit();
    },
    menuToggle: function () {
      $(".menu-toggle").on("click", function () {
        var sidebar = $(".rts-offcanvas-menu");
        var overlay = $(".rts-offcanvas-overlay");
        var icon = $(this).find("i");

        sidebar.toggleClass("active");
        overlay.toggleClass("active");

        if (sidebar.hasClass("active")) {
          icon.removeClass("fa-bars-staggered").addClass("rts-close-toggle");
        } else {
          icon.removeClass("rts-close-toggle").addClass("fa-bars-staggered");
        }
      });

      $(".rts-offcanvas-overlay, .rts-close-toggle").on("click", function () {
        $(".rts-offcanvas-menu").removeClass("active");
        $(".rts-offcanvas-overlay").removeClass("active");
        $(".menu-toggle i")
          .removeClass("rts-close-toggle")
          .addClass("fa-bars-staggered");
      });
    },
    mobileMenu: function () {
      // Click on menu text to toggle submenu
      $(".mobile-menu-main .has-dropdown > a").on("click", function (e) {
        e.preventDefault(); // Prevent default link behavior

        const parentLi = $(this).closest("li");

        // Toggle active class for rotation & highlight
        parentLi.toggleClass("active");

        // Toggle the submenu
        parentLi.find("> .sub-menu").slideToggle(300);

        // Close other open submenus
        parentLi
          .siblings(".has-dropdown")
          .removeClass("active")
          .find("> .sub-menu")
          .slideUp(300);
      });
    },
    stickyHeader: function (e) {
      function checkSticky() {
        if ($(window).scrollTop() > 100) {
          $(".header--sticky").addClass("sticky");
        } else {
          $(".header--sticky").removeClass("sticky");
        }
      }
      // Scroll event
      $(window).on("scroll", checkSticky);
      // Page load / reload event
      $(window).on("load", checkSticky);
      // For browsers that restore scroll position
      setTimeout(checkSticky, 50);
    },
   countVal: function () {
    // Plus button
    $(".user-count .plus")
      .off("click")
      .on("click", function () {
        let input = $(this).siblings(".userVal");
        let count = parseInt(input.val(), 10) || 0; // radix added
        input.val(count + 1);
      });

    // Minus button
    $(".user-count .minus")
      .off("click")
      .on("click", function () {
        let input = $(this).siblings(".userVal");
        let count = parseInt(input.val(), 10) || 0; // radix added
        if (count > 0) {
          input.val(count - 1);
        }
      });
  },
    wowActive: function () {
      new WOW().init();
    },
    jarallaxInit: function (e) {
      $(document).ready(function () {
        // Function to detect if the device is mobile
        function isMobileDevice() {
          return /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
            navigator.userAgent
          );
        }
        // Initialize jarallax only if it's not a mobile device
        if (!isMobileDevice()) {
          $(".jarallax").jarallax();
        } else {
          console.log("Jarallax skipped on mobile devices");
        }
      });
    },
    splitText: function (e) {
      if ($(".rts-slide-anim").length) {
        let animatedTextElements = document.querySelectorAll(".rts-slide-anim");

        animatedTextElements.forEach((element) => {
          //Reset if needed
          if (element.animation) {
            element.animation.progress(1).kill();
            element.split.revert();
          }

          element.split = new SplitText(element, {
            type: "lines,words,chars",
            linesClass: "split-line",
          });
          gsap.set(element, { perspective: 400 });

          gsap.set(element.split.chars, {
            opacity: 0,
            x: "50",
          });

          element.animation = gsap.to(element.split.chars, {
            scrollTrigger: { trigger: element, start: "top 95%" },
            x: "0",
            y: "0",
            rotateX: "0",
            opacity: 1,
            duration: 1,
            ease: Back.easeOut,
            stagger: 0.02,
          });
        });
      }
    },
    swiperActive: function () {
      $(document).ready(function () {
        // Initialize Banner Background Slider
        var bgSwiper = new Swiper(".banner-slider-active", {
          slidesPerView: 1,
          spaceBetween: 0,
          loop: true,
          effect: "fade",
          speed: 1000,
          autoplay: {
            delay: 5000,
            disableOnInteraction: false,
          },
        });

        // Initialize Main Banner Slider
        var bannerSwiper = new Swiper(".banner-slider-active2", {
          slidesPerView: 1,
          spaceBetween: 0,
          loop: true,
          effect: "fade",
          speed: 1000,
          autoplay: {
            delay: 5000,
            disableOnInteraction: false,
          },
          navigation: {
            nextEl: ".rts-banner-next",
            prevEl: ".rts-banner-prev",
          },
          pagination: {
            el: ".swiper-pagination",
            clickable: true,
          },
        });

        // Link the two sliders to control each other
        bgSwiper.controller.control = bannerSwiper;
        bannerSwiper.controller.control = bgSwiper;
      });

      $(document).ready(function () {
        var swiper = new Swiper(".banner-slider-showcase", {
          slidesPerView: 1,
          spaceBetween: 0,
          loop: true,
          effect: "fade",
          speed: 1000,
          autoplay: {
            delay: 5000,
            disableOnInteraction: false,
          },
        });
      });

      $(document).ready(function () {
        var swiper = new Swiper(".banner-slider-offcanvas", {
          slidesPerView: 1,
          spaceBetween: 0,
          loop: true,
          effect: "fade",
          speed: 1000,
          autoplay: {
            delay: 5000,
            disableOnInteraction: false,
          },
        });
      });

      $(document).ready(function () {
        // Initialize Swiper
        var swiper = new Swiper(".rts-blog-slider", {
          slidesPerView: 3,
          spaceBetween: 30,
          loop: true,
          navigation: {
            nextEl: ".rts-blog-next",
            prevEl: ".rts-blog-prev",
          },
          breakpoints: {
            0: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1200: { slidesPerView: 3 },
          },
          on: {
            init: function () {
              updateFraction(this);
            },
            slideChange: function () {
              updateFraction(this);
            },
          },
        });

        // Update the current/total fraction text
        function updateFraction(swiper) {
          let current = (swiper.realIndex + 1).toString().padStart(2, "0");
          let total = (swiper.slides.length - swiper.loopedSlides * 2)
            .toString()
            .padStart(2, "0");

          $(".rts-fragtion-btn .current").text(current);
          $(".rts-fragtion-btn .total").text(total);
        }
      });

      $(document).ready(function () {
        var swiper = new Swiper(".rts-blog-slider-side", {
          slidesPerView: 2,
          spaceBetween: 30,
          loop: true,
          navigation: {
            nextEl: ".rts-blog-next",
            prevEl: ".rts-blog-prev",
          },
          breakpoints: {
            0: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1200: {
              slidesPerView: 3,
            },
          },
          on: {
            init: function () {
              updateFraction(this);
            },
            slideChange: function () {
              updateFraction(this);
            },
          },
        });

        // Only update current/total text
        function updateFraction(swiper) {
          let current = (swiper.realIndex + 1).toString().padStart(2, "0");
          let total = (swiper.slides.length - swiper.loopedSlides * 2)
            .toString()
            .padStart(2, "0");

          // Update the fraction text only
          $(".rts-fragtion-btn .current").text(current);
          $(".rts-fragtion-btn .total").text(total);
        }
      });

      $(document).ready(function () {
        var swiper = new Swiper(".rts-testi-slider", {
          slidesPerView: 4,
          spaceBetween: 0,
          centeredSlides: true,
          loop: true,
          speed: 1000,
          autoplay: {
            delay: 2000,
            disableOnInteraction: false,
          },
          navigation: {
            nextEl: ".rts-testi-next",
            prevEl: ".rts-testi-prev",
          },
          breakpoints: {
            0: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            992: {
              slidesPerView: 3,
            },
            1200: {
              slidesPerView: 4,
            },
          },
          on: {
            init: function () {
              updateFraction(this);
            },
            slideChange: function () {
              updateFraction(this);
            },
          },
        });

        function updateFraction(swiper) {
          let current = (swiper.realIndex + 1).toString().padStart(2, "0");
          let total = (swiper.slides.length - swiper.loopedSlides * 2)
            .toString()
            .padStart(2, "0");

          // Update the fraction text only
          $(".rts-fragtion-btn3 .current").text(current);
          $(".rts-fragtion-btn3 .total").text(total);
        }
      });

      $(document).ready(function () {
        var swiper = new Swiper(".rts-testi-slider-two", {
          slidesPerView: 2,
          spaceBetween: 30,
          loop: true,
          speed: 1000,
          autoplay: {
            delay: 2000,
            disableOnInteraction: false,
          },
          navigation: {
            nextEl: ".rts-testi-next",
            prevEl: ".rts-testi-prev",
          },
          breakpoints: {
            0: {
              slidesPerView: 1,
            },
            1200: {
              slidesPerView: 2,
            },
          },
          on: {
            init: function () {
              updateFraction(this);
            },
            slideChange: function () {
              updateFraction(this);
            },
          },
        });

        // Only update current/total text
        function updateFraction(swiper) {
          let current = (swiper.realIndex + 1).toString().padStart(2, "0");
          let total = (swiper.slides.length - swiper.loopedSlides * 2)
            .toString()
            .padStart(2, "0");

          // Update the fraction text only
          $(".rts-fragtion-btn2 .current").text(current);
          $(".rts-fragtion-btn2 .total").text(total);
        }
      });

      $(document).ready(function () {
        var swiper = new Swiper(".rts-breadcrumbs-slider-active", {
          slidesPerView: 1,
          loop: true,
          speed: 1000,
          autoplay: {
            delay: 2500,
            disableOnInteraction: false,
          },
          simulateTouch: true,
        });
      });
    },
    videoActivation: function (e) {
      $(document).ready(function () {
        $(".popup-youtube, .popup-video").magnificPopup({
          disableOn: 700,
          type: "iframe",
          mainClass: "mfp-fade",
          removalDelay: 160,
          preloader: false,
          fixedContentPos: false,
        });
      });
    },
    datePicker: function () {
      // Ensure DOM is ready
      $(document).ready(function () {
        $(".datepicker09").datepicker();
      });
    },
    mesonaryTab: function () {
      $(window).on("load", function () {
        var $grid = $(".rts-gallery-wrapper").isotope({
          itemSelector: ".element-item",
          layoutMode: "fitRows",
        });

        $(".filters-button-group").on("click", "button", function () {
          var filterValue = $(this).attr("data-filter");

          // If the value is "*", use it as is; otherwise prepend "." for class selector
          var isoFilter = filterValue === "*" ? "*" : "." + filterValue;

          $grid.isotope({ filter: isoFilter });

          // Update active button
          $(this).siblings(".is-checked").removeClass("is-checked");
          $(this).addClass("is-checked");
        });
      });
    },
    magnificPopup: function () {
      /* magnificPopup img view */
      $(document).ready(function () {
        $(".gallery-image").magnificPopup({
          type: "image",
          gallery: {
            enabled: true,
          },
        });
      });
    },
    imgHover: function () {
      $(document).ready(function () {
        const $wrapper = $("#mainImgWrapper");
        const $mainImg = $("#mainImg");

        $(".single-item").each(function () {
          const $item = $(this);
          const bgImg = $item.find(".bg-img").attr("src");

          $item.on("mouseenter", function () {
            $wrapper.css("opacity", "0");

            setTimeout(function () {
              $mainImg.attr("src", bgImg);
              $wrapper.css("opacity", "1");
            }, 300);
          });

          $item.on("mouseleave", function () {});
        });
      });
    },
    imgHover: function () {
  $(document).ready(function () {
    const $wrapper = $("#mainImgWrapper");
    const $mainImg = $("#mainImg");

    $(".single-item").on("mouseenter", function () {
      const $item = $(this);
      const bgImg = $item.find(".bg-img").attr("src");

      $(".single-item").removeClass("active");

      $item.addClass("active");

      $wrapper.css("opacity", "0");

      setTimeout(function () {
        $mainImg.attr("src", bgImg);
        $wrapper.css("opacity", "1");
      }, 300);
    });
  });
}
,
    galleryBlockActive: function () {
      const projectBlocks = document.querySelectorAll(".rts-gallery-block");

      projectBlocks.forEach((block) => {
        block.addEventListener("mouseover", function () {
          // Remove active from all blocks
          projectBlocks.forEach((b) => b.classList.remove("active"));

          // Add active to the clicked block
          this.classList.add("active");
        });
      });
    },
    containerResize: function () {
      $(document).ready(function () {
        gsap.registerPlugin(ScrollTrigger);

        var $videoArea = $(".rts-video-wrapper");

        // Initial scale 80%
        gsap.set($videoArea, { scale: 0.8 });

        // Scroll-triggered scale from 0.8 -> 1
        gsap.to($videoArea, {
          scale: 1,
          ease: "power1.out",
          scrollTrigger: {
            trigger: $videoArea,
            start: "top bottom",
            end: "top top",
            scrub: true,
            markers: false, // set true to debug
          },
        });
      });
    },
    counterUp: function (e) {
      $(".counter").counterUp({
        delay: 10,
        time: 1500,
      });
      $(".counter");
    },
    preloader: function () {
      window.addEventListener("load", function () {
        document.querySelector("body").classList.add("loaded");
      });
    },
    backToTopInit: function () {
      var path = document.getElementById("wave-path");
      var waveHeight = 10; // wave amplitude
      var waveLength = 100; // wave wavelength
      var speed = 0.05; // wave speed
      var phase = 0;

      var $wrap = $(".progress-wrap");

      // Initially hide button
      $wrap.hide();

      $(window).on("scroll", function () {
        var scroll = $(window).scrollTop();

        // Show button only after scrolling down 100px
        if (scroll > 100) {
          $wrap.fadeIn();
        } else {
          $wrap.fadeOut();
        }
      });

      // Click to scroll top
      $wrap.on("click", function () {
        $("html, body").animate({ scrollTop: 0 }, 500);
      });
    },
  };

  rtsJs.m();

  document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll("[data-bg-src]").forEach(function (el) {
      const bg = el.getAttribute("data-bg-src");
      if (bg) {
        el.style.backgroundImage = `url(${bg})`;
        el.style.backgroundSize = "cover"; // Optional
        el.style.backgroundPosition = "center"; // Optional
        el.style.backgroundRepeat = "no-repeat"; // Optional
      }
    });
  });
})(jQuery, window);
