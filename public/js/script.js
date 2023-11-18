function counter() {
  let countdown = 3;

  let timerDiv = document.getElementById("timer");

  let timer = setInterval(function () {
    timerDiv.innerHTML = `Voltando à home em ${countdown}`;
    countdown--;
    if (countdown === 0) {
      clearInterval(timer);
      window.location.href = "./"
    }
  }, 1000);
}