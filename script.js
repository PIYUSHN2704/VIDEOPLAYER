const video = document.getElementById("video");
const play = document.getElementById("play");
const pause = document.getElementById("pause");
const bar = document.getElementById("bar");
const timeStamp = document.getElementById("timeStamp");

/*
Event Listners
*/

video.addEventListener("click", () => {
  if (video.paused) {
    video.play();
  } else {
    video.pause();
  }
});

play.addEventListener("click", () => {
  video.play();
  updateRange();
});

pause.addEventListener("click", () => {
  video.pause();
});

video.addEventListener("timeupdate", () => {
  bar.value = Math.floor((video.currentTime / video.duration) * 100);
  console.log(bar.value);

  timeStamp.innerHTML = `${video.currentTime / 60}${video.currentTime % 60}`;
});
