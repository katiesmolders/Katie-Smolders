// hier komt je code
// console.log("Hallo wereld!");
let mijnHamburger = document.querySelector("#hamburger");
let mijnNav = document.querySelector("nav");
mijnHamburger.addEventListener("click", function() {
  mijnNav.classList.toggle("zichtbaar");
})

let paneel1 = document.querySelector(".paneel1");
let paneel2 = document.querySelector(".paneel2");
let honderdVw = window.innerWidth;
let honderdVh = window.innerHeight;

window.addEventListener("scroll", function() {
      scrollPositiePx = window.pageYOffset;
      // paneel 1 komt binnen
      paneel1Pos = -(honderdVw - scrollPositiePx*3.5);
      if (paneel1Pos <= 0) {
            paneel1.style.right = paneel1Pos + "px";
      } else {
            paneel1.style.right = 0;
      }
      });

      let eersteLink = document.querySelectorAll(".eerstePag a")[12];
      let eersteDiv = document.querySelector(".eerstePag");
      let tweedeDiv = document.querySelector(".tweedePag");

      eersteLink.addEventListener("click",function() {
            console.log("test");
            eersteDiv.style.transform = "translate(-100vw,0)";
            document.querySelector(".tweedePag").style.display = "block";
            });
