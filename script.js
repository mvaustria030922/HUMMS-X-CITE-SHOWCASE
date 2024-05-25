// JavaScript code here
const arrows = document.querySelectorAll(".arrow");
const movieLists = document.querySelectorAll(".movie-list");

arrows.forEach((arrow, i) => {
  const itemNumber = movieLists[i].querySelectorAll("img").length;
  let clickCounter = 0;
  arrow.addEventListener("click", () => {
    const ratio = Math.floor(window.innerWidth / 270);
    clickCounter++;
    if (itemNumber - (1 + clickCounter) + (1 - ratio) >= 0) {
      movieLists[i].style.transform = `translateX(${
        movieLists[i].computedStyleMap().get("transform")[0].x.value - 650
      }px)`;
    } else {
      movieLists[i].style.transform = "translateX(0)";
      clickCounter = 0;
    }
  });

  console.log(Math.floor(window.innerWidth / 270));
});

// TOGGLE
const toggle = document.querySelector('.toggle');
const toggleBall = document.querySelector('.toggle-ball');

toggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode'); // Toggle dark mode class on body
    toggleBall.classList.toggle('active'); // Move the toggle ball
});

// Video "Let's Go" button
function gotoLink (link){
  console.log(link.value);
  window.open(link.value);
};

