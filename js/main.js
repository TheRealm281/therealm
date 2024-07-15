const textos = ["Servidor de Mancos", "Al admin todo le robam", "Jo", "50% pagado por warfredone", "MINAYIOO", "-100, -500 🗣️🔥", "Ahhh ese Johnny", "Date cuenta", "JOOOOOOOOOOOOOOOOOOO"];
let indiceActual = 0;

function cambiarTexto() {
    document.getElementById("splash").textContent = textos[indiceActual];
    indiceActual = (indiceActual + 1) % textos.length;
}

cambiarTexto(); 
setInterval(cambiarTexto, 5000); 
