
const vm = new Vue({

    el: 'main',
    data: {
        mensaje: 'Hola Mundo',
        nuevaTarea: null,
        tareas:[{
            titulo: 'Aprender Vue.js',
            prioridad: true,
            antiguedad: 23,

        },
        {
            titulo: 'Aprender ES6',
            prioridad: false,
            antiguedad: 135,
        },
        {
            titulo: 'Publicar algo todos los dias',
            prioridad: true,
            antiguedad: 378,
        } 
    ]
    },

    methods:{
        agregarTarea(){

            // console.log('Funciona')
            // this, makes references to Vue instance
            this.tareas.unshift(this.nuevaTarea);
            this.nuevaTarea = null;


        }
    },

    computed: {
        mensajeAlReves(){
            return this.mensaje.split('').reverse().join('');
        },

    //    tareasConPrioridad(){
    //       return this.tareasConPrioridad.filter(function(tarea){
    //         return tarea.prioridad;
    //         });
    //      },   
    //  }
        tareasConPrioridad(){
           return this.tareas.filter((tarea) => tarea.prioridad);
        },

        tareasPorAntiguedad(){
            return this.tareas.sort((a, b) => b.antiguedad - a.antiguedad);
        }
    
    
    
    
    },
});
