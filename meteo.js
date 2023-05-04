function kelvin_to_celsius(temp) {
  return (temp = temp - 273.1).toFixed(2) + "°C";
}

const key="5ea75dbd783a69124434e60d6e087ec4";
let city = "Lille"



function request() {
    console.log(city);

  fetch(
    "https://api.openweathermap.org/data/2.5/weather?q=" +
      city +
      "&appid="+key+""
  )
    .then((response) => response.json())
    .then((response2) => {
      document.querySelector("h1").innerHTML = kelvin_to_celsius(
        response2.main.temp
      ); //température

      switch (
        response2.weather[0].main //plusieurs cas du temps
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

setInterval(request, 1000); //boucle
