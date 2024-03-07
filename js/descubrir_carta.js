/* DESCUBRIR CARTA */
let todas_las_cartad = document.querySelectorAll(".carta_trasera");

    /* Itera sobre cada carta trasera */
    todas_las_cartad.forEach((cada_div)=>{
        /* Agrega un event listener para el evento "click" a cada carta trasera */
        cada_div.addEventListener("click", ()=>{

            /* CANTIDAD DE CARTAS DESCUBIERTAS */

            /* Selecciona todas las cartas que están actualmente activas (descubiertas)*/
            let cartas_descubiertas = document.querySelectorAll(".activar");
            /* Obtiene el número total de cartas descubiertas */
            let total_descubiertas = cartas_descubiertas.length;

            /* Comprueba si hay menos de 2 cartas descubiertas */
            if(total_descubiertas<2){
                /* Agrega la clase "activar" a la carta que el usuario ha hecho clic */
                cada_div.classList.add("activar");
                /* Actualiza la lista de cartas descubiertas después de agregar una nueva */
                cartas_descubiertas = document.querySelectorAll(".activar");
                
                /* Imprime en la consola las cartas descubiertas */
                console.log(cartas_descubiertas);
                /* Verifica si hay exactamente una carta descubierta */
                if (total_descubiertas == 1){
                    /* Espera 1000 milisegundos (1 segundo) antes de ejecutar la siguiente función */
                    setTimeout(()=>{
                        /* Itera sobre cada carta descubierta y elimina la clase "activar" */
                        cartas_descubiertas.forEach((cada_carta_descubierta)=>{
                            cada_carta_descubierta.classList.remove("activar");
                        })
                    }, 1000); /* El tiempo de espera es 1 segundo */ 
                }

            }

        });
});