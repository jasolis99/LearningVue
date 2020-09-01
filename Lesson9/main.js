
const vm = new Vue({

    el: 'main',
    mounted() {
        this.cargarUsuario();
    },
    data: {
        personas:[],
    },

    methods:{
        cargarUsuario(){
            this.$http.get('https://randomuser.me/api/?results=50')
                .then((usuarios)=>{
                    this.personas = usuarios.body.results;
                })
        }
    },
});
