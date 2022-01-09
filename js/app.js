// slider
function initSlider() {
  $(".food-slider").slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    autoplay: true,
    slidesToScroll: 1,
    prevArrow: ".pre-btn",
    nextArrow: ".next-btn",
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });
}

$(document).on("ready", function () {
  initSlider();
});

// for home burger menu button

let trigger = document.querySelector(".nav-trigger");
let scale = document.querySelector(".site-content-wrapper");
trigger.addEventListener("click", function () {
  scale.classList.toggle("scale");
});

// countdown timer

setInterval(() => {
  let destTime = new Date("May 3, 2022 00:00:00").getTime();
  let now = new Date().getTime();
  let diff = destTime - now;
  let days = Math.floor(diff / (1000 * 60 * 60 * 24));
  let hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((diff % (1000 * 60)) / 1000);

  let d = document.getElementById("days");
  let h = document.getElementById("hours");
  let m = document.getElementById("minutes");
  let s = document.getElementById("seconds");
  d.innerHTML = days;
  h.innerHTML = hours;
  m.innerHTML = minutes;
  s.innerHTML = seconds;
}, 1000);
