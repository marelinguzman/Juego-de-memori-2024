// CARTAS
let cards1 =["📜","🗺️","📻","🧤","📋","🗓️","🔒","📂","📉","💎","🎹","📈"]

let cards2 =["📜","🗺️","📻","🧤","📋","🗓️","🔒","📂","📉","💎","🎹","📈"]

let todas_las_tarjetas = cards1.concat(cards2);

function repartir_cartas(){

    let tablero = document.querySelector("#root");
    todas_las_tarjetas.forEach((cada_carta) => {
        let carta = document.createElement("div");
        carta.classList.add("carta_trasera")
        carta.innerHTML = `<div class="carta_frontal">${cada_carta}</div>`;
        tablero.appendChild(carta);
    })
}

repartir_cartas();