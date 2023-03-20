"use strict";
window.addEventListener("load", () => {
  new LocomotiveScroll({
    el: document.querySelector("[data-scroll-container]"),
    smooth: true,
  });
});

function imgSlider(anything) {
  document.querySelector(".hero_image").src = anything;
}

function changeColor(color) {
  const bg = document.querySelector(".hero_section");
  bg.style.background = color;
}

document.addEventListener("DOMContentLoaded", function () {
  const carsLogo = document.querySelectorAll(".car");

  carsLogo.forEach((carLogo) => {
    carLogo.addEventListener("click", function () {
      carsLogo.forEach((otherLogo) => {
        otherLogo.style.opacity = "0.7";
      });
      carLogo.style.opacity = "1";
    });
  });
});
