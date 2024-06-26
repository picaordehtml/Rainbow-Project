/*function WelcomeMsg(msg){
  alert(msg);
  var name=prompt("¿Cómo te llamas?");
}*/    

/*function muestraFecha(){
  document.getElementById("prueba").innerHTML=Date();
}*/ 

var cosas = ["La crema cremosa", "las alertas de bebés robados", "la cama nube..."];

function favoritos(){
    document.getElementById("laLista").innerHTML = cosas;
}

function mascosas(){
  var pruebita = prompt("¿Qué otras cosas te gustan de los USA?");
  cosas [cosas.length]=pruebita;

  document.getElementById("laLista").innerHTML=cosas;
}

function fotoRandom(){
  var opciones = ['houston-rainbow.png', 'museo-houston.png', 'nasa.png'];
  random='images/'+opciones[Math.floor(Math.random()*opciones.length)];
  img=document.querySelector("#houston-rainbow")
  img.setAttribute("src",random)
  img.setAttribute("alt", "")
}