// Programa para activar las cartas al hacer clic en ellas
let todas_las_cartas = document.querySelectorAll(".carta_tracera");

// foreach sobre todas las cartas
todas_las_cartas.forEach((cada_div) => {

    /* Función al realizar clic en una carta */
    cada_div.addEventListener("click", () => {
        
        /* Contar la cantidad de cartas descubiertas */
        let cartas_descubiertas = document.querySelectorAll(".activar");
        let total_descubiertas = cartas_descubiertas.length;
        
        // Si hay menos de 2 cartas descubiertas, se activa la carta clicada
        if (total_descubiertas < 2) {
            cada_div.classList.add("activar");
            cartas_descubiertas = document.querySelectorAll(".activar");
            
            // Si hay una carta descubierta, se desactivan después de 1 segundo
            if (total_descubiertas == 1) {
                // Se utiliza setTimeout para esperar un segundo antes de desactivar las cartas
                setTimeout(() => {
                    cartas_descubiertas.forEach((cada_carta_descubierta) => {
                        cada_carta_descubierta.classList.remove("activar");
                    });
                }, 1000);    
            }
        } else {
            /* Imprimir mensaje si ya hay 2 cartas descubiertas */
            console.log("Dos cartas descubiertas");
        }
    });
});