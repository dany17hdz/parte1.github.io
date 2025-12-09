var uno = document.getElementById("uno")
var dos = document.getElementById("dos")
var verificar = document.getElementById("verificar")

var unotrue = "objetivo"
var dostrue = "claro"

verificar.addEventListener("click", ()=>{
    if(uno.value.toLowerCase() === unotrue && dos.value.toLowerCase() === dostrue){
        window.location.href="segundaparte(2).html"
    }else{
        document.write("mira todo esta mas claro que el agua por favor no te rindas")
    }
})

