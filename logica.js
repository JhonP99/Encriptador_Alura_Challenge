/*  Esta funcion se encarga de seleccionar el mensaje procesado, 
    cortarlo y almacenarlo en el portapapeles*/
function cortar(){
    let texto = document.getElementById("mensaje2");
    texto.select();
    document.execCommand("cut");

}

/*  las condiciones para encriptar son las siguientes;
    la letra "a" pasará a ser "ai" 
    la letra "e" pasará a ser "enter" 
    la letra "i" pasará a ser "imes" 
    la letra "o" pasará a ser "ober" 
    la letra "u" pasará a ser "ufat" 
    */

function encriptar(){
    var mensaje="";
    let texto = document.getElementById("mensaje").value; //obtiene el mensaje a procesar
    mensaje = texto.replace(/e/g, "enter");
    mensaje = mensaje.replace(/i/g, "imes");
    mensaje = mensaje.replace(/a/g, "ai");
    mensaje = mensaje.replace(/o/g, "ober");
    mensaje = mensaje.replace(/u/g, "ufat");     
    document.getElementById("mensaje2").value = mensaje; //escribe el resultado
    document.getElementById("mensaje").value = "";  //limpia el campo donde se escribio el mensaje
        
}


function desencriptar(){
    var mensaje = "";
    let texto = document.getElementById("mensaje").value; //obtiene el mensaje a procesar
    mensaje=texto.replace(/enter/g, "e")
    mensaje=mensaje.replace(/imes/g, "i")
    mensaje= mensaje.replace(/ai/g, "a");
    mensaje=mensaje.replace(/ober/g, "o")
    mensaje=mensaje.replace(/ufat/g, "u")
    document.getElementById("mensaje2").value = mensaje; //escribe el resultado
    document.getElementById("mensaje").value = ""; //limpia el campo donde se escribio el mensaje
} 