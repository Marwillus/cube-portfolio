var swiperH = new Swiper(".swiper-container-h", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  speed: 800,
  initialSlide: 1,
  // effect: "cube",
  // effect: "flip",
  /*   cubeEffect: {
    shadow: false,
    slideShadows: true,
    shadowOffset: 20,
    shadowScale: 0.94,
  }, */
});
var swiperV = new Swiper(".swiper-container-v", {
  direction: "vertical",
  mousewheel: true,
  nested: true,
  loop: true,
  speed: 800,
  effect: "cube",
  cubeEffect: {
    shadow: true,
    slideShadows: true,
    shadowOffset: 100,
    shadowScale: 0.9,
  },
  //Menubuttons with Text
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    renderBullet: function (index, className) {
      var names = ["home", "about", "projects", "contact"];
      return '<span class="' + className + '">' + names[index] + "</span>";
    },
  },
});
