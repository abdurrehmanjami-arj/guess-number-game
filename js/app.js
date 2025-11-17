(function () {
  const inputNumber = document.querySelector(".input-user");
  const form = document.querySelector("form");
  const submitBtn = document.querySelector(".submit-btn");
  const startGameBtn = document.querySelector(".start-game");
  const guessHint = document.querySelector(".guess-hint");
  const result = document.querySelector(".guess-data");

  let allGuesses = [];
  let randomNumber = Math.round(Math.random() * 100);

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const userInputValue = parseInt(inputNumber.value);
    if (userInputValue === randomNumber) {
      guessHint.innerHTML = "Wow, You Guess the Write Number";
      startGameBtn.disabled = false;
      submitBtn.disabled = true;
    } else if (userInputValue > randomNumber) {
      guessHint.innerHTML = "Too High";
    } else {
      guessHint.innerHTML = "Too Low";
    }
    allGuesses.push(userInputValue);
    result.innerHTML = "Your Guess: " + allGuesses.join(", ");
    form.reset();
  });

  startGameBtn.addEventListener("click", () => {
    allGuesses = [];
    guessHint.innerHTML = "";
    result.innerHTML = "";
    startGameBtn.disabled = true;
    submitBtn.disabled = false;
    randomNumber = Math.round(Math.random() * 100);
  });
});
