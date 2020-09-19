
const vm = new Vue({

    el: 'main',
    data: {
        buscar: "",
        minimo: 0,
        juegos:[{
            titulo: 'MOTOGP 20',
            puntuacion: 5,

        },
        {
            titulo: 'FIFA 20',
            puntuacion: 7,
        },
        {
            titulo: 'Call of Duty Black Ops Cold War',
            prioridad: 10,
        } 
    ]
    },

    computed: {
        puntuacionAlta(){
            return this.juegos.filter((juego)=>juego.puntuacion>=this.minimo);
        },
        buscarJuego(){
           return this.juegos.filter((juego) => juego.titulo.includes(this.buscar));
        }, 
    },
});
