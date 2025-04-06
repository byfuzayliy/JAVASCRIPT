// console.log(navigator);

// navigator.geolocation.getCurrentPosition(({ coords }) => {
//   console.log(coords.latitude);
//   console.log(coords.longitude);
// });

// let battery = navigator.getBattery();

// battery.then((batteryObject) => {
//   console.log(batteryObject);
// });

let copyBtn = document.querySelector(".copy-btn");
let pasteBtn = document.querySelector(".paste-btn");
let text = document.querySelector(".text");

pasteBtn.addEventListener("click", () => {
  navigator.clipboard.readText().then((res) => {
    text.innerHTML += res;
  });
});

copyBtn.addEventListener("click", () => {
  navigator.clipboard.writeText(text.innerHTML);
});
