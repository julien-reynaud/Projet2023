



function change_to_meteo() {
  document.getElementById("affiche_meteo").style.display = "grid";
  document.getElementById("affiche_market").style.display = "none";
  document.getElementById("affiche_quetes").style.display = "none";
  document.getElementById("meteo").style.backgroundColor = "#FEFAE0";
  document.getElementById("market").style.backgroundColor = "#E9EDC9";
  document.getElementById("quetes").style.backgroundColor = "#E9EDC9";

}

function change_to_market() {
  document.getElementById("affiche_meteo").style.display = "none";
  document.getElementById("affiche_market").style.display = "block";
  document.getElementById("affiche_quetes").style.display = "none";
  document.getElementById("meteo").style.backgroundColor = "#E9EDC9";
  document.getElementById("market").style.backgroundColor = "#FEFAE0";
  document.getElementById("quetes").style.backgroundColor = "#E9EDC9";
}

function change_to_quetes() {
  document.getElementById("affiche_meteo").style.display = "none";
  document.getElementById("affiche_market").style.display = "none";
  document.getElementById("affiche_quetes").style.display = "block";
  document.getElementById("meteo").style.backgroundColor = "#E9EDC9";
  document.getElementById("market").style.backgroundColor = "#E9EDC9";
  document.getElementById("quetes").style.backgroundColor = "#FEFAE0";
}
