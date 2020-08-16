var siteHeader = document.getElementById("siteHeader");
var slackersLogo = document.getElementById("slackersLogo");
var nav = document.getElementById("navUL");
var navBtn = document.getElementById("navBtn");
var scrollBtn = document.getElementById("scrollBtn");
var scrollbarW = (window.innerWidth - document.body.clientWidth);
var scrollbarWString = scrollbarW.toString();
var largeDevices = 950;

// reveal mobile menu on click & hide scroll btn
function mobileMenu() {
  if (nav.style.display === "flex") {
    document.body.style.overflow = "initial";
    nav.style.display = "none";
    nav.style.height = "0";
    navBtn.style.marginRight = "0";
    scrollBtn.style.zIndex = "initial";
  } else {
    document.body.style.overflow ="hidden";
    nav.style.display = "flex";
    nav.style.height = "100%";
    navBtn.style.marginRight = scrollbarWString + "px";
    scrollBtn.style.zIndex = "-1";
  }
}
// animate x for mobile menu on click
function mobileMenuAnimate(x) {
  x.classList.toggle("mobile-animate");
}

// allow resize even when in mobile menu
window.addEventListener("resize", mobileMenuResize);
function mobileMenuResize() {
  if (window.outerWidth >= largeDevices) {
    document.body.style.overflow = "initial";
  }
}

 window.onscroll = function() {
   stickyScrollBtn();
 };

// sticky scroll btn
function stickyScrollBtn() {
  if (window.pageYOffset >= window.innerHeight && window.pageYOffset >= 600) {
    scrollBtn.style.display = "flex";
  } else {
    scrollBtn.style.display = "none";
  }
}

// scroll to top on click
function scrollToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}




// location slick slider
  $(document).ready(function() {

    $('.locations-slider').slick({
      dots: true,
      draggable: false,
      infinite: true,
      centerMode: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2500,
      focusOnSelect: true,
      centerPadding: "4em",
      swipeToSlide: true,
      pauseOnHover: false,
      pauseOnFocus: false,
      appendArrows: $(".locations-slider"),
      prevArrow: '<a href="#" class="location-arrows slick-prev">&lt;</button>',
      nextArrow: '<a href="#" class="location-arrows slick-next">&gt;</button>',
      appendDots: $(".locations-section"),
      responsive: [
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            centerMode: true,
            centerPadding: "3em"
          }
        },
        {
          breakpoint: 550,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            centerMode: true,
            centerPadding: "0"
          }
        }
      ]
    });

  });