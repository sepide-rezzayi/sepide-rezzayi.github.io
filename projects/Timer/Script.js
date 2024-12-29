let inputCounter = document.querySelector("#input-counter"); //input
let startCounter = document.querySelector("#start-counter"); // button
let timerCircle = document.querySelector(".c100");
let startBox = document.querySelector(".start-box");
let timerNum = document.querySelector(".c100 > span");
let lastPercent = "p100";
let originalSeconds, seconds, timerId;

// console.log(errorElement);

startCounter.addEventListener("click", function (e) {
  seconds = parseInt(inputCounter.value);
  if (isNaN(seconds))
    return toggleErrorMessage({
      show: true,
      message: "زمان را به درستی وارد کنید",
    });
  toggleErrorMessage({ show: false });
  toggleStartBox({ show: false });
  toggleLoadingMessage({ show: true });
  toggleTimer({ show: true, seconds });

  originalSeconds = seconds;

  timerId = setInterval(startTimer, 1000);
});

let toggleErrorMessage = ({ show, message }) => {
  let errorElement = document.querySelector("#error-Message");

  if (show) {
    errorElement.classList.add("active");
    errorElement.textContent = message;
  } else {
    errorElement.classList.remove("active");
  }
};

let toggleStartBox = ({ show }) => {
  if (show) {
    startBox.style.display = "block";
    inputCounter.value = "";
  } else {
    startBox.style.display = "none";
  }
};

let toggleLoadingMessage = ({ show }) => {
  let Messageloading = document.querySelector(".message .loading");
  let Messagesuccess = document.querySelector(".success");
  if (show) {
    Messageloading.style.display = "block";
    Messagesuccess.style.display = "none";
  } else {
    Messageloading.style.display = "none";
    Messagesuccess.style.display = "block";
  }
};

let startTimer = () => {
  if (lastPercent) timerCircle.classList.remove(lastPercent);
  if (seconds <= 0) {
    clearInterval(timerId);
    toggleStartBox({ show: true });
    toggleTimer({ show: false });
    toggleLoadingMessage({ show: false });
    return;
  }

  seconds -= 1;
  timerNum.textContent = seconds;
  let percent = (lastPercent = `p${Math.abs(
    Math.floor(
      Math.floor(((originalSeconds - seconds) / originalSeconds) * 100) - 100
    )
  )}`);

  timerCircle.classList.add(percent);
};
let toggleTimer = ({ show, seconds }) => {
  if (show) {
    timerNum.textContent = seconds;
    timerCircle.style.display = "block";
  } else {
    timerCircle.style.display = "none";
  }
};
