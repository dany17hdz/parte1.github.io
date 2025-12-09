var evento = document.getElementById("evento");
var importante = document.getElementById("inportante"); // asegúrate que el id en HTML sea igual
var buttonn = document.getElementById("button");

var fecha = 1492;
var eventotrue = "descubrimiento de america";
var importantetrue = "cristobal colon";

buttonn.addEventListener("click", () => {
    var año = parseInt(document.getElementById("año").value); // se obtiene el valor al hacer click
    if (año === fecha &&
        evento.value.trim().toLowerCase() === eventotrue &&
        importante.value.trim().toLowerCase() === importantetrue) {
        window.location.href="cuartaparte.html"
    } else {
        alert("Incorrecto");
    }
});
