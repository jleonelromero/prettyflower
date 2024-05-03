function actualizarContador() {
    const fechaFin = new Date('May 28, 2024 15:17:00').getTime();
    const ahora = new Date().getTime();
    const diferencia = fechaFin - ahora;

    if (diferencia < 0) {
        document.getElementById('contador').innerHTML = "LLego el dia.";
        clearInterval(intervalo);
        return;
    }

    const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
    const horas = Math.floor((diferencia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutos = Math.floor((diferencia % (1000 * 60 * 60)) / (1000 * 60));
    const segundos = Math.floor((diferencia % (1000 * 60)) / 1000);

    document.getElementById('contador').innerHTML = 
        dias + " días " + horas + " horas " + minutos + " minutos " + segundos + " segundos ";
}

let intervalo = setInterval(actualizarContador, 1000);