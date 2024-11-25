const logo = document.querySelectorAll("#logo path");
let slides = document.querySelector("#slides");
let imgslides = document.querySelectorAll(".slide");
let timeout = 4000;
let current = -1;

let slider = setTimeout(fadeNextSlide, timeout);

for(let i = 0; i<logo.length; i++) {
    console.log(`Letter ${i} is ${logo[i].getTotalLength()}`);
}

function fadeNextSlide() {
  for (let i = 0; i < imgslides.length; i++) {
    imgslides[i].style.opacity = 0;
  }

  if (current !== imgslides.length - 1) {
    current++;
  } else {
    current = 0;
  }
  imgslides[current].style.opacity = 1;
  slider = setTimeout(fadeNextSlide, timeout);
}

function fadePrevSlide() {
  for (let i = 0; i < imgslides.length; i++) {
    imgslides[i].style.opacity = 0;
  }
  if (current == 0) {
    current = imgslides.length - 1;
  } else {
    current--;
  }
  imgslides[current].style.opacity = 1;
  slider = setTimeout(fadeNextSlide, timeout);
}