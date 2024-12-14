const apiKey = "3f5a530b4c81126af976a6379b2e5495";
const apiURL =
  "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";
const searchBOX = document.querySelector(".search input");
const searcBTN = document.querySelector(".search button");

async function checkWeather(city) {
  const res = await fetch(apiURL + city + `&appid=${apiKey}`);
  let data = await res.json();
  console.log(data);
}

checkWeather();

document.querySelector(".city").innerHTML = data.name;
document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
document.querySelector(".humidity").innerHTML = data.main.humiditys + "%";
document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";

searcBTN.addEventListener("click", () => {
  checkWeather(searchBOX.value);
});
