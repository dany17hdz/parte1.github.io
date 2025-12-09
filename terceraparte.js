var btton = document.getElementById("button");
var textotrue = 12;
var creado = false;

btton.addEventListener("click", () => {

    if(creado)return;
    var texto1 = document.getElementById("uno").value;

    if (parseInt(texto1) === textotrue) {
        var p = document.createElement("p")
        var body = document.querySelector("body");
        p.innerHTML=`<p>
        ¿en una recta cual es el siguiente número ala derecha despúes de el cero? <br><input type="number" id="pass1"><button id="button2">verificar</button>
        </p>`
        body.appendChild(p);










        var fecha = 1
        var button2 = document.getElementById("button2")
        button2.addEventListener("click", ()=>{
            var pass1 = parseInt(document.getElementById("pass1").value); 
            if(pass1 === fecha){
                var p2 = document.createElement("p")
                p2.innerHTML=`<p>
                ¿cuantas patas son de dos palomas? <br><input type="number" id="pass2"><button id="button3">verificar</button>
                </p>`
                body.appendChild(p2);





                var fecha2 = 4
                var button3 = document.getElementById("button3")
                button3.addEventListener("click", ()=>{
                    var pass2 = parseInt(document.getElementById("pass2").value); 
                    if(pass2 === fecha2){
                        var p3 = document.createElement("p")
                        p3.innerHTML=`<p>
                        ¿cunato es 3 elevado ala 2? <br><input type="number" id="pass3"><button id="button4">verificar</button>
                        </p>`
                        body.appendChild(p3);








                        var fecha3 = 9
                        var button4 = document.getElementById("button4")
                        button4.addEventListener("click", ()=>{
                            var pass3 = parseInt(document.getElementById("pass3").value); 
                            if(pass3 === fecha3){
                                var p4 = document.createElement("p")
                                p4.innerHTML=`<p>
                                ¿cunato es 2 * 1? <br><input type="number" id="pass4"><button id="button5">verificar</button>
                                </p>`
                                body.appendChild(p4);






                        var ressss = 2
                        var button5 = document.getElementById("button5")
                        button5.addEventListener("click", ()=>{
                            var pass4 = parseInt(document.getElementById("pass4").value); 
                            if(pass4 === ressss){
                                var p5 = document.createElement("div")
                                p5.innerHTML=`<p>
                                el resulatdo esta cerca, pero necesito que pongas mucha atencian por favor y si estas listo para ver mas allá  puedes pasar al siguiente acertijo <a href="terceraparte(2).html">ir al siguiente</a> tal vez la respuesta sea 12 o tal vez  94 no lo se y tu? lo sabes? solo te dire que nuetros país <b>México</b> es rico en muchas cosas lo sabias?</p>`
                                body.appendChild(p5);

                                
                            }else{

                            alert("valor incorrecto")

                            }
                        })












                                
                            }else{

                            alert("valor incorrecto")

                            }
                        })










                    }else{

                    alert("valor incorrecto")

                    }
                })












            }else{

            alert("valor incorrecto")

            }
        })










    } else {
        location.reload(true);
    }

    creado=true
});






