const URL = "https://api.thecatapi.com/v1/images/search";
const img = document.getElementById("imagenAleatoria");
const botonSiguiente = document.getElementById("botonSiguiente");

const obtenerImagenAleatoria = () => {
fetch(URL)
  .then((res) => res.json())
  .then((data) => {
    img.src = data[0].url;
  });
}

  botonSiguiente.addEventListener("click", obtenerImagenAleatoria);