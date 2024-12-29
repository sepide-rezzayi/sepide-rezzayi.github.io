let inputCounter = document.querySelector("#input-counter"); //input
let startCounter = document.querySelector("#start-counter"); // button
let errorElement = document.querySelector("#error-Message");
let timerCircle = document.querySelector(".c100");
let boxTime = document.querySelector(".start-box");
let timerNum = document.querySelector(".c100 > span");
let Messageloading = document.querySelector(".message .loading");
let Messagesuccess = document.querySelector(".success");
// console.log(errorElement);

startCounter.addEventListener("click", function (e) {
  let seconds = parseInt(inputCounter.value);
  if (isNaN(seconds)) {
    errorElement.textContent = "زمان را به درستی وارد کنید";
    errorElement.classList.add("active");
    return; //این "return" اجازه نمیده که بقیه کد ها اجرا بشن
  }
  errorElement.classList.remove("active");
  timerCircle.style.display = "block";
  boxTime.style.display = "none";
  timerNum.textContent = seconds;
  Messageloading.style.display = "block";

  let originalSeconds = seconds;
  let lastPercent = "p100";
  let timerId = setInterval(() => {
    if (lastPercent) timerCircle.classList.remove(lastPercent);
    if (seconds <= 0) {
      clearInterval(timerId);
      boxTime.style.display = "block";
      timerCircle.style.display = "none";
      Messageloading.style.display = "none";
      Messagesuccess.style.display = "block";
      inputCounter.value = "";
      return;
    }

    seconds -= 1;
    let percent = Math.abs(
      Math.floor(
        Math.floor(((originalSeconds - seconds) / originalSeconds) * 100) - 100
      )
    );
    lastPercent = `p${percent}`;
    timerCircle.classList.add(`p${percent}`);
    timerNum.textContent = seconds;
  }, 1000);
});
