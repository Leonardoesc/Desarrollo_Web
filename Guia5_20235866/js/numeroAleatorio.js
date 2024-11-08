// Generamos un número aleatorio que se encuentre en el rango del 1 al 25
const numeroAleatorio = Math.floor(Math.random() * 25) + 1;
// Creamos una constante que permite identificar el máximo de intentos
const numeroIntentos = 3;
// Guardará el número de intentos que realiza el usuario
let intentos = 1;

function generarNumeroAleatorio() {
    // Definimos una variable para impresión de mensajes
    let mensaje;
    // Utilizamos el DOM para acceder al párrafo creado
    const parrafo = document.querySelector("#idParrafo");

    // Verificamos en qué intento está el usuario
    if (intentos <= numeroIntentos) {
        let numero = prompt(
            "¿Qué número se ha generado (Intento " + intentos + ")?"
        );

        // Convertimos el valor del prompt a número
        numero = parseInt(numero);

        // Verificamos el número aleatorio con el ingresado por el usuario
        if (numero === numeroAleatorio) {
            mensaje = `¡Es sorprendente, pudiste adivinar el número oculto (${numeroAleatorio}). Refresque la página para volver a jugar.`;
        } else if (intentos == numeroIntentos) {
            mensaje = `Su número de intentos ha terminado. 
                El número oculto era: ${numeroAleatorio}. Refresque la página para volver a jugar.`;
        } else {
            // Indicamos si el número es mayor o menor
            if (numero < numeroAleatorio) {
                mensaje = `El número que buscas es mayor que ${numero}. Quedan ${
                    numeroIntentos - intentos
                } intentos.`;
            } else {
                mensaje = `El número que buscas es menor que ${numero}. Quedan ${
                    numeroIntentos - intentos
                } intentos.`;
            }
        }

        // Aumentamos el valor de los intentos
        intentos++;
    } else {
        mensaje = `Su número de intentos ha terminado. 
            El número oculto era: ${numeroAleatorio}. Refresque la página para volver a jugar.`;
    }

    // Actualizamos el contenido del párrafo con el mensaje
    parrafo.innerHTML = mensaje;
}
