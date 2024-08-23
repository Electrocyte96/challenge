const textoarea = document.querySelector(".texto-area");
const mensajeSalida = document.querySelector(".mensaje-salida");

function botonEncriptar(){
    const encriptado = encriptar(textoarea.value);
    mensajeSalida.value = encriptado;
    textoarea.value = "";
    mensajeSalida.style.backgroundImage = "none";
}

function botonDesEncriptar(){
    const encriptado = desencriptar(mensajeSalida.value);
    mensajeSalida.value = encriptado;
    textoarea.value = "";
}

function encriptar(textoEncriptado){
    let matrizEncripcion = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    textoEncriptado = textoEncriptado.toLowerCase()
    for (let i = 0; i<matrizEncripcion.length; i++){
        if (textoEncriptado.includes(matrizEncripcion[i][0])) {
            textoEncriptado = textoEncriptado.replaceAll(matrizEncripcion[i][0], matrizEncripcion[i][1])
        }
    } 
    return textoEncriptado;
}

function desencriptar(textoDesEncriptado){
    let matrizEncripcion = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    textoDesEncriptado = textoDesEncriptado.toLowerCase()
    for (let i = 0; i<matrizEncripcion.length; i++){
        if (textoDesEncriptado.includes(matrizEncripcion[i][1])) {
            textoDesEncriptado = textoDesEncriptado.replaceAll(matrizEncripcion[i][1], matrizEncripcion[i][0])
        }
    } 
    return textoDesEncriptado;
}