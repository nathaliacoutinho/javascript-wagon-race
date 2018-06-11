// document.addEventListener("keyup", event => console.log(event));
document.addEventListener("keyup", (event) => {
  if (event.keyCode === 81) {
    const carPosition = document.querySelector("#player1_race .active");
    const nextPosition = carPosition.nextElementSibling;
    if (nextPosition.classList.contains("finished")) {
      confirm("MARIO WINS!!! Restart the game?");
      window.location.reload();
      return false;
    }
    nextPosition.classList.add("active");
    carPosition.classList.remove("active");
  } else if (event.keyCode === 80) {
    const carPosition = document.querySelector("#player2_race .active");
    const nextPosition = carPosition.nextElementSibling;
    if (nextPosition.classList.contains("finished")) {
      confirm("Peach WINS!!! Restart the game?");
      window.location.reload();
      return false;
    }
    nextPosition.classList.add("active");
    carPosition.classList.remove("active");
  }
  return "GAME";
});
