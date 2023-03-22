"use strict";
window.addEventListener("load", () => {
  new LocomotiveScroll({
    el: document.querySelector("[data-scroll-container]"),
    smooth: true,
  });
});

// changing the header images
function imgSlider(anything) {
  document.querySelector(".hero_image").src = anything;
}

// changing color of header
function changeColor(color) {
  const bg = document.querySelector(".hero_section");
  bg.style.background = color;
}

// chaning car logo opacity
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

// open and close book modal
const close = document.querySelector(".close");
const modal = document.querySelector(".overlay");
const openModal = document.querySelector(".openForm");
openModal.addEventListener("click", function (e) {
  e.preventDefault;
  modal.classList.remove("hidden");
});

close.addEventListener("click", function (e) {
  e.preventDefault;
  modal.classList.add("hidden");
});

// default select element
window.onload = function () {
  document.querySelector(".vehicle").selectedIndex = 0;
};
