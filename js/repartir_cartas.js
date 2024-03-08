import { cards1, cards2 } from "./data_cartas.js";

// Concatenar ambas listas de cartas
let todas_las_tarjetas = cards1.concat(cards2);

// Función para repartir las cartas en el tablero HTML
function repartir_cartas() {
    let tablero = document.querySelector(".tablero");
    
    // Iterar sobre todas las cartas y crear elementos HTML para cada una
    todas_las_tarjetas.forEach((cada_carta) => {
        let carta = document.createElement('div');
        carta.classList.add("carta_tracera");
        carta.innerHTML = `<div class="carta">${cada_carta}</div>`;

        tablero.appendChild(carta); // Añadir la carta al tablero
    });
}

// Llamar a la función para repartir las cartas
repartir_cartas();