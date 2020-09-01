Vue.component("elegir-ganador",{
    props: ["listado"],
    // Choose a template in dom for a cleanest VUE CODE
    template: "#elegir-ganador-template",
    methods:{
        elegirGanador(){
            let cantidad = this.participantes.length;
            let indice = Math.floor((Math.random() * cantidad));
            this.ganador = this.participantes[indice-1];
        }
    },

    data(){
        return {

            ganador: false,
            participantes: this.listado 

        }
    },
});
const vm = new Vue({

    el: 'main',
    data:{
        personas:[
            'Juan','Alicia','Pedro','Javier','Marcos'
        ]
    }
});
