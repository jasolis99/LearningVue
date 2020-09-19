
//good method if you use vue-resource in your code and you want to change to axios

Vue.prototype.$http = axios;

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

            //VUE-RESOURCE

            /*this.$http.get('https://randomuser.me/api/?results=50')
                .then((usuarios)=>{
                    this.personas = usuarios.body.results;
                })*/

            //  a little difference between axios and vue-resource is the object
            // returned. Axios data array are in data.results. Vue-resource data array are in
            // body.results

            //AXIOS

            axios.get('https://randomuser.me/api/?results=50')
                .then((usuarios)=>{
                    this.personas = usuarios.data.results;
                })
        }
    },
});
