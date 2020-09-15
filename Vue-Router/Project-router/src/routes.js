import Home from "./components/Home.vue"
import Contacto from "./components/Contacto.vue"
import Usuario from "./components/Usuario.vue"
import Equipos from "./components/Equipos.vue"
import EquipoJose from "./components/EquipoJose.vue"
import UsuarioBio from "./components/UsuarioBio.vue"
import UsuarioFoto from "./components/UsuarioFoto.vue"
import Error404 from "./components/NoEncuentro.vue"
import {store} from "./store.js"

const bio = resolve => {
    require.ensure(['./components/bio.vue'],()=>{
        resolve(require('./components/bio.vue'));
    })
}
export const routes = [

    {path:"/", name: "home",component:Home},
/*  {path:"/contacto",component:Contacto}, */
    
    //this is part from Vue Router dynamic routes lesson
    {path:"/usuario/:id",component:Usuario}, // :id is the param that we wanna send to this page
    
    /*This path is from Neasted Routes lesson

    {path:"/equipos",component:Equipos,children:[
        {path:"jose",component: EquipoJose},
    ]},*/

    /* This is from Vue Router nested navigation lesson 

    {path:"/equipos/:id",component:Equipos,children:[
        {path:"",component: Usuario,name:"equipo",children:[
           {path:"foto",component:UsuarioFoto,name:"foto"}, 
           {path:"bio",component:UsuarioBio,name:"bio"}, 
        ]},
    ]}*/

    /* This is from vue router named views lesson  */

    {path:"/equipos/:id",component:Equipos,children:[
        {path:"",components:{
            default: Usuario,
            bio: UsuarioBio,
            foto:UsuarioFoto
        },name:"equipo",children:[

        ]},
    ]},

    /* This is from Redirect & alias lesson */

    /* Alias keeps the path in url while if we dont add alias, the path dissapears in url */

    {path:"/prueba", alias:"/aliasprueba",redirect:{name: 'home'},component:Home},

    /* This is from Vue Router passing props */

    /* we create a props object to send props of differents types 

    {path:"/contacto",name: 'contacto',props:{newsletter:true},component:Contacto},*/

    /* This is from Vue Router history mode lesson */

    {path:"*",component:Error404},

    {
        beforeEnter: (to, from, next) => {

            /* this is from Vue Router route guard lesson where we can restrict access to a 
            route */

            console.log("Acceso a contacto");
            next(store.state.auth);
        },
        path:"/contacto",meta:{privado: true},name: 'contacto',props:{newsletter:true},component:Contacto},

        
   {path:"/bio",name:"biografia", component:bio},

];
