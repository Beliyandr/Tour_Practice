const btn = document.querySelector(".search__button");
const logo = document.querySelector(".logo");
let timerId,
  i = 0;

// btn.addEventListener("click", () => {
//   //   const timerId = setTimeout(logger, 1000);
//   const timerInterval = setInterval(logger, 500);
// });

// function logger() {
//   if (i === 3) {
//     clearInterval(timerInterval);
//   }
//   console.log("hello");
//   i++;
// }

// let id = setTimeout(function log() {
//   console.log("hello");
//   id = setTimeout(log, 500);
// }, 500);

// clearInterval(interval);
// clearInterval(timerInterval);

logo.addEventListener("click", myAnimation);

function myAnimation() {
  let scale = 0.1;

  const anim = setInterval(frame, 10);
  function frame() {
    if (scale >= 2.2) {
      logo.style.scale = 1;
      clearInterval(anim);
    } else {
      scale += 0.009;
      logo.style.scale = scale;
      console.log(scale);
    }
  }
}
