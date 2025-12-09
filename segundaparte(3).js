var contraseña = document.getElementById("contraseña");
var contraseñatrue = "white2025"
var button = document.getElementById("button").addEventListener("click", ()=>{
if(contraseña.value.toLowerCase() === contraseñatrue){
    window.location.href="terceraparte.html"
}else{
    window.location.href="meme.html"
}
})
