function kelvin_to_celsius(temp) {
  return (temp = temp - 273.1).toFixed(2) + "°C";
}

const key = "5ea75dbd783a69124434e60d6e087ec4";
let city = "Paris";

let hour=0;

function request() {
  console.log(city);
  hour++;
  console.log(hour);
  fetch(
    "https://api.openweathermap.org/data/2.5/forecast?q=" +
      city +
      "&appid=" +
      key +
      ""
  )
    .then((response) => response.json())
    .then((response2) => {
      console.log(response2.list[hour].dt_txt);
      document.querySelector("h2").innerHTML=response2.list[hour].dt_txt;

      console.log(response2.list[hour].main.temp);
      document.querySelector("h1").innerHTML = kelvin_to_celsius(
        response2.list[hour].main.temp
      ); //température

      switch (
        response2.list[hour].weather[0].main //plusieurs cas du temps
      ) {
        case "Clouds":
          document.querySelector("img").src = "nuages.png";
          break;
        case "Clear":
          document.querySelector("img").src = "sun.png";
          break;
      }
    });
}

setInterval(request, 2000); //boucle
