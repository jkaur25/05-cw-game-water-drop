let score = 0;
const scoreDisplay = document.getElementById("score");
const feedback = document.getElementById("feedback");
const playAgainBtn = document.getElementById("play-again");
const drops = document.querySelectorAll(".drop");

function resetGame() {
  score = 0;
  scoreDisplay.textContent = score;
  feedback.textContent = "";
}

drops.forEach((drop, index) => {
  drop.addEventListener("click", () => {
    if (drop.classList.contains("bad")) {
      feedback.textContent = "Oops! That was polluted water!";
    } else {
      score++;
      scoreDisplay.textContent = score;
      feedback.textContent = "";
    }
  });
});

playAgainBtn.addEventListener("click", resetGame);
