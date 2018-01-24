
const vm = new Vue({

    el: 'main',
    data: {
        nuevaTarea: null,
        tareas: [
            'Aprender Vue.js',
            'Aprender ES6',
            'Publicar algo todos los dias',
        ]
        

    },

    methods:{
        agregarTarea(){

            // console.log('Funciona')
            // this, hace referencia a la instancia Vue
            this.tareas.unshift(this.nuevaTarea);
            this.nuevaTarea = null;


        }
    }

})