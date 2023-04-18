const URL = "https://api.thecatapi.com/v1/images/search?limit=4&api_key=live_jjsliyvCbyuzJAfWopFtDJRE7CTHVL7mI9AhOgI0TAyyVr2abQgPy5oU0mOCvb9F";
const URL_Favorites = "https://api.thecatapi.com/v1/favourites?limit=4&api_key=live_jjsliyvCbyuzJAfWopFtDJRE7CTHVL7mI9AhOgI0TAyyVr2abQgPy5oU0mOCvb9F";
const img1 = document.getElementById("imagenAleatoria1");
const img2 = document.getElementById("imagenAleatoria2");
const img3 = document.getElementById("imagenAleatoria3");
const img4 = document.getElementById("imagenAleatoria4");
const botonSiguiente = document.getElementById("botonSiguiente");



const obtenerImagenAleatoria = () => {
fetch(URL)
  .then((res) => res.json())
  .then((data) => {
    
    console.log('Imagen Aleatoria', data)
    img1.src = data[0].url;
    img2.src = data[1].url;
    img3.src = data[2].url;
    img4.src = data[3].url;
  });
}

const imagenesFavoritas = () => {
  fetch(URL_Favorites)
    .then((res) => res.json())
    .then((data) => {
      console.log('Favoritos', data)
    });
  }

window.addEventListener('load', obtenerImagenAleatoria);
window.addEventListener('load', imagenesFavoritas); 
botonSiguiente.addEventListener("click", obtenerImagenAleatoria); 