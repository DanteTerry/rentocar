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

// rendering select option dynamically

const selectBrand = document.querySelector(".vehicle");
const selectModal = document.querySelector("#modal");
const formImg = document.querySelector(".selected_imgs");

selectBrand.addEventListener("change", function () {
  const selectedValue = selectBrand.value;

  if (selectedValue === "lamborghini") {
    selectModal.innerHTML = `
    <option class="options" value="choose" selected>SELECT MODAL</option>
    <option class="options" value="lamborghiniaventador">Lamborghini Aventador</option>
    <option class="options" value="lamborghinihuracan">Lamborghini Huracan</option>
    <option class="options" value="urus">Lamborghini Urus</option>
    <option class="options" value="sian">Lamborghini Sian</option>
    <option class="options" value="lamborghinicountach">Lamborghini Countach</option>`;
    selectModal.addEventListener("change", function () {
      const selectedModal = selectModal.value;

      if (selectedModal === "lamborghiniaventador") {
        formImg.src = "/img/blue-lamborghini-aventador-car.png";
      } else if (selectedModal === "lamborghinihuracan") {
        formImg.src = "/img/lamborghinihuracan.png";
      } else if (selectedModal === "urus") {
        formImg.src = "/img/urus.png";
      } else if (selectedModal === "sian") {
        formImg.src = "/img/sian.png";
      } else if (selectedModal === "lamborghinicountach") {
        formImg.src = "/img/lamboCoun.png";
      }
    });
  } else if (selectedValue === "ferrari") {
    selectModal.innerHTML = `
    <option class="options" value="choose" selected>SELECT MODAL</option>
    <option class="options" value="ferrari488">Ferrari 488 GTB</option>
    <option class="options" value="ferrari812">Ferrari 812 Superfast</option>
    <option class="options" value="ferrariF8">Ferrari F8 Tributo</option>
    <option class="options" value="ferrarilaFerrari">Ferrari LaFerrari</option>
    <option class="options" value="frerrariroma">Ferrari Roma</option>`;
  } else if (selectedValue === "ford") {
    selectModal.innerHTML = `
    <option class="options" value="choose" selected>SELECT MODAL</option>
    <option class="options" value="FordGT">Ford GT</option>
    <option class="options" value="mustang">Ford Mustang GT</option>
    <option class="options" value="shelby">Ford Shelby GT350</option>
    <option class="options" value="mach1">Ford Mustang Mach 1</option>
    <option class="options" value="GT500">Ford Mustang Shelby GT500</option>`;
    selectModal.addEventListener("change", function () {
      const selectedModal = selectModal.value;

      if (selectedModal === "FordGT") {
        formImg.src = "/img/fordgt.png";
      } else if (selectedModal === "mustang") {
        formImg.src = "/img/mustanggt.png";
      } else if (selectedModal === "shelby") {
        formImg.src = "/img/350.png";
      } else if (selectedModal === "GT500") {
        formImg.src = "/img/gt500.png";
      } else if (selectedModal === "mach1") {
        formImg.src = "/img/mach 1.png";
      }
    });
  } else if (selectedValue === "porsche") {
    selectModal.innerHTML = `
    <option class="options" value="choose" selected>SELECT MODAL</option>
    <option class="options" value="911">Porsche 911 GT3</option>
    <option class="options" value="GT2">Porsche 911 GT2 RS</option>
    <option class="options" value="718">Porsche 718 Cayman GT4</option>
    <option class="options" value="718spyder">Porsche 718 Spyder</option>
    <option class="options" value="panamera">Porsche Panamera Turbo S </option>`;
  } else if (selectedValue === "mclaren") {
    selectModal.innerHTML = `
    <option class="options" value="choose" selected>SELECT MODAL</option>
    <option class="options" value="p1">McLaren P1</option>
    <option class="options" value="720s">McLaren 720S</option>
    <option class="options" value="570s">McLaren 570S</option>
    <option class="options" value="senna">McLaren Senna</option>
    <option class="options" value="mcLarengt">McLaren GT</option>`;
  } else if (selectedValue === "mercedes") {
    selectModal.innerHTML = `
    <option class="options" value="choose" selected>SELECT MODAL</option>
    <option class="options" value="sclass">Mercedes-Benz S-Class</option>
    <option class="options" value="amggt">Mercedes-Benz AMG GT</option>
    <option class="options" value="gclass">Mercedes-Benz G-Class</option>
    <option class="options" value="cls">Mercedes-Benz CLS-Class</option>
    <option class="options" value="eclass">Mercedes-Benz E-Class</option>`;
  } else if (selectedValue === "rolls-royce") {
    selectModal.innerHTML = `
    <option class="options" value="choose" selected>SELECT MODAL</option>
    <option class="options" value="phantom">Rolls-Royce Phantom</option>
    <option class="options" value="ghost">Rolls-Royce Ghost</option>
    <option class="options" value="wraith">Rolls-Royce Wraith</option>
    <option class="options" value="dawn">Rolls-Royce Dawn</option>
    <option class="options" value="cullinan">Rolls-Royce Cullinan</option>`;
  }
});
