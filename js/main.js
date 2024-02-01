// CARTAS
let cards1 =["📜","🗺️","📻","🧤","📋","🗓️","🔒","📂","📉","💎","🎹","📈"]

let cards2 =["📜","🗺️","📻","🧤","📋","🗓️","🔒","📂","📉","💎","🎹","📈"]

let todas_las_tarjetas = cards1.concat(cards2);

function repartir_cartas(){

    let tablero = document.querySelector("#root");

    todas_las_tarjetas.forEach((cada_carta) => {
        let cart = document.createElement("div");
        cart.innerHTML = `<div class="carta">${cada_carta}</div>`;

        tablero.appendChild(cart);
    })
}

repartir_cartas();