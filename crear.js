var crear = document.getElementById("crear");
crear.addEventListener("click", ()=>{
    var body = document.querySelector("body")
    var enlace = document.createElement("div");
    enlace.innerHTML=`<a href="primeraparte(2).html">next</a>`;
    body.appendChild(enlace);;
});