const bg = document.querySelector('.bg');
const loadText = document.querySelector('.loading-text');

let load = 0;

let int = setInterval(blurring, 30);
function blurring() {
  load++;

  if (load > 99) {
    clearInterval(int);
  }

  loadText.innerText = `${load}%`;
  loadText.style.opacity = 1 - load * 0.01; // 1 0.99 100 0.0
  bg.style.filter = `blur(${30 - load * 0.3}px)`;
}
