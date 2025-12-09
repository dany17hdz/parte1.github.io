var llave = document.getElementById("key");

var keytrue="abismos"

var buttonn = document.querySelector("button");

buttonn.addEventListener("click", ()=>{

    if(llave.value.toLowerCase() ===keytrue){
       var des=prompt("efectivamente es la respuesta pero seguro que vas por el camino correcto? si/no?")
        if(des.toLowerCase() ==="si"){
            window.location.href="quintaparte.html"
        }else{
            alert("buenos si estas dudando talvez algo pueda esatr escondido o tal vez no no lo se recuerda todas mis palabras atte:dany")
        }
    }else{
        window.location.href="meme.html"
    }

})
