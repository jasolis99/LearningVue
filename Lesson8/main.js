
const vm = new Vue({

    el: 'main',
    data: {
        mensaje: 'Hola Mundo',
        nuevaTarea: null,
        tareas:[{
            titulo: 'Aprender Vue.js',
            completada: false,

        },
        {
            titulo: 'Aprender ES6',
            completada: false,
        },
        {
            titulo: 'Publicar algo todos los dias',
            completada: false,
        } 
    ]
    },

    methods:{
        tareaCompletada(tarea){
            tarea.completada = !tarea.completada
        }
    },

    computed: {

        numeroTareasCompletadas(){
            return this.tareas.filter((tarea)=>tarea.completada);
        }

    
    
    },
});
