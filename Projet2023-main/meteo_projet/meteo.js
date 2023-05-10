function kelvin_to_celsius(temp) {
  return (temp = temp - 273.1).toFixed(0) + "°C";
}

var city = "Lille";

function changeTheVariable(ville) {
  city = ville;
}

const key = "5ea75dbd783a69124434e60d6e087ec4";

let hour = 0;

function seconds_to_ms(seconds) {
  var minutes;
  return (minutes = seconds * 1000);
}

request();

setInterval(request, seconds_to_ms(100)); //boucle

function request() {
  if (hour <= 40) {
    hour++;
  } else {
    hour = 0;
  }

  console.log("l'heure est " + hour);

  fetch(
    "https://api.openweathermap.org/data/2.5/forecast?q=" +
      city +
      "&appid=" +
      key +
      ""
  )
    .then((response) => response.json())
    .then((response2) => {
      console.log(response2);
      let date =
        response2.list[hour].dt_txt[11] + response2.list[hour].dt_txt[12] + "h";
      console.log(date);

      document.querySelector(".date").innerHTML = date; //date et heure

      console.log(response2.list[hour].main.temp);
      document.querySelector("h1").innerHTML = kelvin_to_celsius(
        response2.list[hour].main.temp
      ); //température

      console.log(hour);

      for (let i = 1; i <= 8; i++) {
        document.querySelector("#prev"+i).innerHTML = kelvin_to_celsius(response2.list[hour + i].main.temp);
      }//affichage des prévisions
    });
}
