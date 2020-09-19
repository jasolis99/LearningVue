
const vm = new Vue({

    el: 'main',
    data: {
        mensaje: "Probando Instancias"
    },

    methods: {
        alReves(){
            this.mensaje = this.mensaje.split('').reverse().join('');
            vm1.mensaje = this.mensaje;
        }
    },
});

const vm1 = new Vue({

    el:"#app",
    data:{
        mensaje: "Instancia 2",
    }
});