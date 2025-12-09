var contraseña = document.getElementById("contraseña");
var contraseñatrue = "white2009"
var button = document.getElementById("button").addEventListener("click", ()=>{
if(contraseña.value.toLowerCase() === contraseñatrue.toLowerCase()){
    window.location.href="primeraparte.html"
}else{
    window.location.href="meme.html"
}
})
