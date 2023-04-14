const URL = "https://api.thecatapi.com/v1/images/search";
const img = document.getElementById("imagenAleatoria");

fetch(URL)
  .then((res) => res.json())
  .then((data) => {
    img.src = data[0].url;
  });