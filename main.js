let edad = 51;
let boton = document.querySelector("button");
function cuentaAtras() {
  boton.disabled = true;
  setInterval(() => {
    if (edad > 0) {
      edad--;
      document.querySelector("h1").textContent = edad;
    } else document.querySelector("img").style.height = "400px";
  }, 1000);
}
