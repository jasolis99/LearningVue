Vue.component("mis-tareas",{
    // props: ["usuarios"], in case that you wanna use for multiple variables
    template: '<ul><li v-for = "usuario in usuarios">{{usuario.name.first}}</li></ul>',

    //this is the a way to create a reusablest component in VUE without do anything in html file

    mounted() {
        axios.get("https://randomuser.me/api/?results=50")
            .then((respuesta)=>{
                this.usuarios = respuesta.data.results;
                console.log(respuesta);
            })
    },
    data(){
        return {

            usuarios:[],

        }
    },
});
const vm = new Vue({

    el: 'main',
    // mounted() {
    //     axios.get("https://randomuser.me/api/?results=50")
    //         .then((respuesta)=>{
    //             this.usuariosAjax = respuesta.data.results;
    //             console.log(respuesta);
    //         })
    // },
    // data: {
    //     usuariosAjax:[],
    //    usuariosLocales:[
    //        {
    //            name:{
    //                first: "Jose"
    //            }
        
    //         },
    //         {
    //             name:{
    //                 first: "Alberto"
    //             }
    //         }
    //     ]
    // },
});
