function alertaDeEleccion(quienElige, eleccion) {
  if (eleccion == 1) {
    alert(quienElige + " ha elegido 🥌");
  } else if (eleccion == 2) {
    alert(quienElige + " ha elegido 📰");
  } else if (eleccion == 3) {
    alert(quienElige + " ha elegido ✂");
  } else {
    alert("Opción no válida, elige entre 1, 2 o 3");
  }
}
// Generar una elección aleatoria para la computadora
function eleccionComputadoraAleatoria(max, min) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
let eleccionJugador = prompt(
  "Elige el número 1 piedra 🥌, 2 papel 📰 o 3 tijera ✂"
).toLowerCase();
// Determinar el ganador
function quienGaneEntre(eleccionJugador, eleccionComputadora) {
  if (eleccionJugador == eleccionComputadora) {
    return "empate 👔";
  } else if (
    (eleccionJugador == 1 && eleccionComputadora == 3) ||
    (eleccionJugador == 2 && eleccionComputadora == 1) ||
    (eleccionJugador == 3 && eleccionComputadora == 2)
  ) {
    return "Ganaste!! 🥇";
  } else {
    return "Perdiste ☹";
  }
}
alertaDeEleccion("Jugador", eleccionJugador);

let eleccionComputadora = eleccionComputadoraAleatoria(3, 1);
alertaDeEleccion("Computadora", eleccionComputadora);

let quienGano = quienGaneEntre(eleccionJugador, eleccionComputadora);
// Mostrar el resultado final
alert(quienGano);
// Preguntar si el jugador quiere jugar de nuevo
let jugarDeNuevo = confirm("¿Quieres jugar de nuevo?");
if (jugarDeNuevo) {
  location.reload(); // Recargar la página para reiniciar el juego
}
