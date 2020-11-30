var swiperV = new Swiper(".swiper-container-v", {
  initialSlide: 2,
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

var swiper = new Swiper(".swiper-container-h", {
  initialSlide: 1,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
    navigationHide: true,
  },
});
