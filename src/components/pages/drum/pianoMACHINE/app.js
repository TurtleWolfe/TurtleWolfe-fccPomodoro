// // const form = document.querySelector("form");
// const taskInput = document.getElementById("task");
// const heading = document.querySelector("h2");
// // const select = document.querySelector("select");
// const body = document.querySelector("body");
// // Clear input
// // taskInput.value = "";

// // Focus
// // taskInput.addEventListener('focus', runEvent);
// // Blur
// // taskInput.addEventListener('blur', runEvent);
// // Input
// // taskInput.addEventListener('input', runEvent);
// // Change
// // select.addEventListener('change', runEvent);

// let globalVolume = 1;
// window.SetVolume = function(val) {
//   var player = document.getElementsByTagName("audio");
//   console.log("Before: " + player.volume);
//   player.volume = val / 100;
//   globalVolume = player.volume;
//   console.log("After: " + player.volume);
// };
// function runEvent(e) {
//   const keyName = event.key;
//   //audio.volume = globalVolume; // trying to apply this audio volume to note below

//   // alert("keypress event\n\n" + "key: " + keyName);
//   console.log(`EVENT TYPE: ${e.type}`);
//   console.log(e.target.value);
//   console.log(keyName);
//   heading.value = "";
//   heading.innerText = keyName;
//   // Get input value
//   // console.log(taskInput.value);
//   // e.preventDefault();
// }

function removeTransition(e) {
  if (e.propertyName !== "transform") return;
  e.target.classList.remove("playing");
}

const players = document.querySelectorAll("audio");
const volumeControl = document.getElementById("accent-control");
let globalVolume = 1;

volumeControl.addEventListener("change", function () {
  globalVolume = volumeControl.value / 100;

  players.forEach(function (player) {
    player.volume = globalVolume;
  });
});

function playSound(e) {
  //   const note = document.querySelector(`[data-sound-id="${keyName}"]`).play();
  const keyName = e.key;
  const audio = document.querySelector(`audio[data-sound-id="${keyName}"]`);
  const key = document.querySelector(`div[data-sound-id="${keyName}"]`);
  if (!audio) return;

  key.classList.add("playing");
  audio.currentTime = 0;
  audio.play();
}
// // Keypress
// //taskInput.addEventListener("keypress", runEvent);
// body.addEventListener("keypress", runEvent);
const keys = Array.from(document.querySelectorAll(".key"));
keys.forEach(key => key.addEventListener("transitionend", removeTransition));
window.addEventListener("keypress", playSound);
