let popup = document.getElementById("popup");

function openPopup() {
  popup.classList.add("open-popup");
}

function closePopup() {
  popup.classList.remove("open-popup");
}

const slider = document.querySelector(".slider");
// I highly recommend downloading and resizing the images to avoid them slowing down your website!
const imagesObject = [
  {
    img: "./images/1.png",
    model: "FERRARI 296 GTS",
    type: "coupe",
  },
  {
    img: "./images/2.png",
    model: "FERRARI SF90",
    type: "coupe",
  },
  {
    img: "./images/1.png",
    model: "FERRARI 296 GTS",
    type: "coupe",
  },
  {
    img: "./images/2.png",
    model: "FERRARI SF90",
    type: "coupe",
  },
  {
    img: "./images/1.png",
    model: "FERRARI 296 GTS",
    type: "coupe",
  },
  {
    img: "./images/2.png",
    model: "FERRARI SF90",
    type: "coupe",
  },
  {
    img: "./images/1.png",
    model: "FERRARI 296 GTS",
    type: "coupe",
  },
  {
    img: "./images/2.png",
    model: "FERRARI SF90",
    type: "coupe",
  },
];

// window.addEventListener("load", initializeSlider());

// function initializeSlider() {
//   let images = "";
//   for (let image in imagesObject) {
//     images += `<div class="slide">
//               <img src="${imagesObject[image].img}"
//                 alt="image">
//               <br><br>
//             </div>`;
//   }
//   slider.innerHTML = images;
// }

const tnslider = tns({
  container: ".slider",
  autoWidth: true,
  gutter: 15,
  items: 3,
  slideBy: "page",
  nav: true,
  speed: 400,
  // controlsContainer: "#controls",
  // prevButton: ".previous",
  // nextButton: ".next",
  controls: false,
});

let slide = document.getElementsByClassName(".slide");

