Vue.component("empleados-component",{
    props:{
        nombre:{
            type: String,
            default: "Jose Alberto"
        },
        correo: String,
        imagen: String,
        localizacion: Object

    },
    template: "#empleados-template"
    
});
const vm = new Vue({

    el: 'main',
    mounted() {
        this.obtenerEmpleados();
    },
    data:{
        empleados : [], 
    },
    methods:{
        obtenerEmpleados(){

            axios.get('https://randomuser.me/api/?results=50')
            .then((usuarios)=>{
                this.empleados = usuarios.data.results;
                console.log(this.empleados)
            })

        }

    }
});
