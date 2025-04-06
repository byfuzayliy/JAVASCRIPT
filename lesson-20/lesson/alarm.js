const stopBtn = document.querySelector(".stop-alarm");
const playBtn = document.querySelector(".play-alarm");
const audio = document.querySelector("audio");

setInterval(() => {
  let date = new Date();
  let time = date.toLocaleTimeString("it-IT");
  console.log(time);
  if (time === "19:47:55") {
    audio.play();
  }
}, 1000);

stopBtn.addEventListener("click", () => {
  audio.pause();
});

playBtn.addEventListener("click", () => {
  audio.play();
});
