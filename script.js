import reviews from './data.js'
let name = document.querySelector(".card__name");
let job = document.querySelector(".card__job");
let text = document.querySelector(".card__text");
let leftBtn = document.querySelector(".left-btn");
let rightBtn = document.querySelector(".right-btn");
let randomBtn = document.querySelector(".random-btn");

let currentIndex = 0;

window.addEventListener('DOMContentLoaded', (event) => {
  assignContent(currentIndex);
});

function assignContent(index) {
  name.textContent = reviews[index].name
  job.textContent = reviews[index].job
  text.textContent = reviews[index].text
}

function increaseIndex(index) {
  if(index >= reviews.length - 1) {
    return 0;
  } else if (index < 0) {
    return reviews.length -1;
  }
  return index+1;
}

function decreaseIndex(index) {
  if(index <= 0) {
    return reviews.length-1;
  } else if(index >= reviews.length) {
    return reviews.length -1;
  }
  return index-1;
}

leftBtn.addEventListener("click", () => {
  currentIndex = decreaseIndex(currentIndex);
  assignContent(currentIndex);
})

rightBtn.addEventListener("click", () => {
  currentIndex = increaseIndex(currentIndex);
  assignContent(currentIndex);
})

randomBtn.addEventListener("click", (e) => {
  var randomIndex = Math.floor(Math.random()*reviews.length);
  currentIndex = randomIndex;
  assignContent(currentIndex);
})
