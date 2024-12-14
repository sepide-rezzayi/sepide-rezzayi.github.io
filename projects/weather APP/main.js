const apiKey = "3f5a530b4c81126af976a6379b2e5495";
const apiURL =
  "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBOX = document.querySelector(".search input");
const searchBTN = document.querySelector(".search button");

async function checkWeather(city) {
  const res = await fetch(apiURL + city + `&appid=${apiKey}`);
  const data = await res.json();

  if (res.ok) {
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML =
      Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";
  } else {
    alert("City not found. Please try again.");
  }
}

searchBTN.addEventListener("click", () => {
  const city = searchBOX.value.trim();
  if (city) {
    checkWeather(city);
  } else {
    alert("Please enter a city name.");
  }
});
