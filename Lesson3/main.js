
const vm = new Vue({

    el: 'main',
    data: {
        laborales: ['Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes'],
        tareas: [
            {nombre :'Hacer la compra', prioridad: 'baja'},
            {nombre :'Ver carrera MOTOGP', prioridad: 'alta'},
            {nombre :'Ir al gimnasio', prioridad: 'media'},


        ],

        persona : {
            nombre: 'Jorge',
            profesion: 'piloto de MotoGP',
            ciudad: 'Palma de Mallorca',
        },
        

    }

})