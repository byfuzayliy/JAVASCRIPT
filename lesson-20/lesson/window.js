// var a = 20;

// let b = 30;

// function hello() {
//   console.log("Hello");
// }

// console.log(window);

// console.log(window.a);
// window.hello();

// console.log(a);
// hello();

// console.log(innerWidth, innerHeight);
// console.log(outerWidth, outerHeight);

// console.log(screen.width);
// console.log(screen.height);

// console.log(screen.availWidth);
// console.log(screen.availHeight);

const openWindowBtn = document.querySelector(".open-window-btn");
const closeWindowBtn = document.querySelector(".close-window-btn");
let newWindow;

openWindowBtn.addEventListener("click", function () {
  newWindow = open(
    "https://najottalim.uz",
    "Najot Ta'lim",
    "width=500,height=300"
  );
});

closeWindowBtn.addEventListener("click", function () {
  newWindow.close();
});
