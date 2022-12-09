window.addEventListener("DOMContentLoaded", () => {
  const hotelSlider = new Swiper(".hotel-slider", {
    // Optional parameters
    //   direction: "vertical",
    loop: true,

    // If we need pagination
    // pagination: {
    //   el: ".swiper-pagination",
    // },

    // Navigation arrows
    navigation: {
      nextEl: ".hotel-slider__button--next",
      prevEl: ".hotel-slider__button--prev",
    },

    // And if we need scrollbar
    //   scrollbar: {
    //     el: ".swiper-scrollbar",
    //   },
  });

  const reviewsSlider = new Swiper(".reviews-slider", {
    // Optional parameters
    //   direction: "vertical",
    loop: true,

    // If we need pagination
    // pagination: {
    //   el: ".swiper-pagination",
    // },

    // Navigation arrows
    navigation: {
      nextEl: ".reviews-slider__button--next",
      prevEl: ".reviews-slider__button--prev",
    },

    // And if we need scrollbar
    //   scrollbar: {
    //     el: ".swiper-scrollbar",
    //   },
  });

  window.addEventListener("scroll", refreshAOS);

  function refreshAOS() {
    const activities = document.querySelector(".activities");
    const card = activities.querySelector(".card");
    const offset = activities.offsetTop - activities.offsetHeight - 50;
    let count = 0;
    if (window.pageYOffset >= offset && count == 0 && !card.classList.contains("aos-animate")) {
      AOS.refreshHard();
      count++;
    }
  }

  AOS.init();
});
