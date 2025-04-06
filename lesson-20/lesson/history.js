console.log(history);

const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");

nextBtn.addEventListener("click", () => {
  // history.forward();
  // history.go(1);
  // history.pushState({}, "", "url.html");
});

prevBtn.addEventListener("click", () => {
  // history.back();
  // history.go(-1);
  history.pushState({}, "", "url.html");
});
