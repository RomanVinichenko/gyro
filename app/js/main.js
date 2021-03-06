$(function () {
  $(".products__slider").slick({
    prevArrow:
      '<button class="slider-btn slider-btn__left"><svg width="10" height="18" viewBox="0 0 10 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.21839 1L1 9L9.21839 17"></svg></button>',
    nextArrow:
      '<button class="slider-btn slider-btn__right"><svg width="10" height="18" viewBox="0 0 10 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.78161 17L9 9L0.78161 1"></svg></button>',
  });
  $(".questions__item-title").on("click", function () {
    $(".questions__item").removeClass("questions__item--active");
    $(this).parent().addClass("questions__item--active");
  });

  $(".menu__btn").on("click", function () {
    $(".menu__list").toggleClass("menu__list--active");
  });
  $(".menu__list-link").on("click", function () {
    $(".menu__list--active").removeClass("menu__list--active");
  });
});

const tl = gsap.timline();

tl.fromto(".top", { x: "-100%", y: "+100%" }, { y: 0 });
tl.fromto(".products", { x: "-100%" }, { y: "-200%" });
tl.fromto(".benefits", { x: "-400%", y: "-300%" });

const main = document.querySelector(".main");

ScrollTrigger.create({
  Animation: tl,
  trigger: ".container",
  start: "top top",
  end: () => main.offsetwidth / 2,
  scrub: true,
  pin: true,
});
