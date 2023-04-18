//la constante URL almacena la URL de la API a la cual se realizará la petición para obtener una imagen aleatoria de gato.
const URL = "https://api.thecatapi.com/v1/images/search?limit=4&api_key=live_jjsliyvCbyuzJAfWopFtDJRE7CTHVL7mI9AhOgI0TAyyVr2abQgPy5oU0mOCvb9F";
//es una variable que obtiene el elemento HTML con el id "imagenAleatoria". Este elemento se utilizará para mostrar la imagen obtenida de la API.
const img1 = document.getElementById("imagenAleatoria1");
const img2 = document.getElementById("imagenAleatoria2");
const img3 = document.getElementById("imagenAleatoria3");
const img4 = document.getElementById("imagenAleatoria4");
//es una variable que obtiene el elemento HTML con el id "botonSiguiente". Este elemento representa un botón que se utilizará para solicitar una nueva imagen aleatoria de gato.
const botonSiguiente = document.getElementById("botonSiguiente");
// //esta constante sera usada para aplicar el metodo toggle y para la funcion que guardara las fotos en favorito
// const checkIcon = document.getElementById("checkIcon");



//la función obtenerImagenAleatoria es una función de flecha que se encarga de realizar la petición a la API utilizando la función fetch de JavaScript. La petición obtendrá la respuesta en formato JSON, la cual será procesada en la segunda promesa utilizando el método .json(). El resultado obtenido se asigna a la propiedad src del elemento img, lo que actualizará la imagen mostrada en la página con la URL de la imagen obtenida de la API.
const obtenerImagenAleatoria = () => {
fetch(URL)
  .then((res) => res.json())
  .then((data) => {
    console.log(data)
    img1.src = data[0].url;
    img2.src = data[1].url;
    img3.src = data[2].url;
    img4.src = data[3].url;
  });
}
//se utiliza window.addEventListener('load', obtenerImagenAleatoria) para agregar un evento de carga a la ventana (window) que llama a la función obtenerImagenAleatoria() cuando la página se carga por primera vez. Esto asegura que la función se ejecutará automáticamente cuando la página esté completamente cargada.
window.addEventListener('load', obtenerImagenAleatoria);
//el evento de click del botón "botonSiguiente" está siendo escuchado mediante botonSiguiente.addEventListener("click", obtenerImagenAleatoria). Esto significa que cada vez que el botón sea clickeado, se ejecutará la función obtenerImagenAleatoria, la cual obtendrá y mostrará una nueva imagen aleatoria de gato de la API en el elemento img.
botonSiguiente.addEventListener("click", obtenerImagenAleatoria);

// function toggleCheckIcon(){
//   const checkIconActive = checkIcon.classList.contains('active');
//   if(!checkIconActive){
//     checkIcon.classList.add('active');}
//   else {
//     checkIcon.classList.remove('active');
//   }
// }

// checkIcon.addEventListener("click", toggleCheckIcon());