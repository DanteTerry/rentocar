"use strict";

const images = [
  "/img/lambo.png",
  "/img/mclearn.png",
  "/img/kg.png",
  "/img/bmw3.png",
  "/img/mercedes.png",
  "/img/prsh.png",
  "/img/mstng.png",
];

const headerImg = document.querySelector(".hero_image");

let currentIndex = 0;

function imgSlider(anything) {
  document.querySelector(".hero_image").src = anything;
}

function changeColor(color) {
  const bg = document.querySelector(".hero_section");
  bg.style.background = color;
}
