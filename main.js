const URL =
  "https://api.thecatapi.com/v1/images/search?limit=4&api_key=live_jjsliyvCbyuzJAfWopFtDJRE7CTHVL7mI9AhOgI0TAyyVr2abQgPy5oU0mOCvb9F";
const URL_Favourites =
  "https://api.thecatapi.com/v1/favourites?api_key=live_jjsliyvCbyuzJAfWopFtDJRE7CTHVL7mI9AhOgI0TAyyVr2abQgPy5oU0mOCvb9F";
const URL_Delete = (id) => `https://api.thecatapi.com/v1/favourites/${id}?api_key=live_jjsliyvCbyuzJAfWopFtDJRE7CTHVL7mI9AhOgI0TAyyVr2abQgPy5oU0mOCvb9F`;
const img1 = document.getElementById("imagenAleatoria1");
const img2 = document.getElementById("imagenAleatoria2");
const img3 = document.getElementById("imagenAleatoria3");
const img4 = document.getElementById("imagenAleatoria4");
const checkIcon1 = document.getElementById("checkIcon1");
const checkIcon2 = document.getElementById("checkIcon2");
const checkIcon3 = document.getElementById("checkIcon3");
const checkIcon4 = document.getElementById("checkIcon4");
const botonSiguiente = document.getElementById("botonSiguiente");
const spanError = document.getElementById("error");

// la función asincrona imagenAleatoria() hace una solicitud a la API de The Cat API para obtener imágenes aleatorias de gatos y luego establece las URL de las imágenes en elementos HTML en caso de una respuesta exitosa, o muestra un mensaje de error en caso de una respuesta con un estado diferente a 200.
async function imagenAleatoria() {
  const res = await fetch(URL);
  const data = await res.json();
  console.log("imagenAleatoria", data);
  if (res.status !== 200) {
    spanError.innerHTML = "Hubo un error:" + res.status;
  } else {
    img1.src = data[0].url;
    img2.src = data[1].url;
    img3.src = data[2].url;
    img4.src = data[3].url;

    checkIcon1.onclick = () => guardarImagenFavorita(data[0].id);
    checkIcon2.onclick = () => guardarImagenFavorita(data[1].id);
    checkIcon3.onclick = () => guardarImagenFavorita(data[2].id);
    checkIcon4.onclick = () => guardarImagenFavorita(data[3].id);
  }
}
window.addEventListener("load", imagenAleatoria);
botonSiguiente.addEventListener("click", imagenAleatoria);

async function imagenFavorita() {
  const res = await fetch(URL_Favourites);
  const data = await res.json();
  console.log("imagenFavorita", data);
  if (res.status !== 200) {
    spanError.innerText = "Hubo un error:" + res.status + data.message;
  } else {
    data.forEach((gatito) => {
      const section = document.getElementById("sectionImagenFavoritos");
      const article = document.createElement("article");
      const img = document.createElement("img");
      const btn = document.createElement("button");
      const btnText = document.createTextNode("Borrar");

      img.src = gatito.image.url;
      btn.appendChild(btnText);
      article.appendChild(img);
      article.appendChild(btn);
      section.appendChild(article);
    });
  }
}
window.addEventListener("load", imagenFavorita);

async function guardarImagenFavorita(id) {
  const res = await fetch(URL_Delete(id), {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ image_id: id }),
  });
  const data = await res.json();
  console.log("guardar", res);
  if (res.status !== 200) {
    spanError.innerText = "Hubo un error:" + res.status + data.message;
  }
}

async function borrarImagenFavorita(id) {
  const res = await fetch(URL_Favourites, {
    method: "DELETE",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ image_id: id }),
  });
  const data = await res.json();
}