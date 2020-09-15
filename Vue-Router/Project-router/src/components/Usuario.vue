<template>
    <div>
        <!-- <h1>Usuario {{ id }}</h1> One way to access at id param-->
        <h1>El identificador es {{$route.params.id}}</h1> <!-- Another way -->

        <!-- This is from Vue Router nested navigation lesson -->

       <!--  <router-link :to="'/equipos/'+ $route.params.id + '/foto'"> Foto de perfil</router-link>
        <router-link :to="'/equipos/'+ $route.params.id + '/bio'"> Bio de perfil</router-link> -->
        

        <!--  This is from Named Routes lesson 
        <router-link :to="{name:'bio', params:{id:$route.params.id}}"> Bio de perfil</router-link>

        <router-link :to="{name:'foto', params:{id:$route.params.id}}"> Foto de perfil</router-link>-->

        <pre v-text="username"></pre>
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    data() {
        return {
            //this is part from Vue Router dynamic routes lesson
            id: this.$route.params.id, //params from routes are in $route. Dont confuse with $router

            username: null,
        }
    },
    watch: {
        '$route'(to){
            this.id = to.params.id; // this react for a change in a param
        },

        '$route': 'obtenerUsername',
    },

    created() {
        /* this is from data fetching lesson */
        this.obtenerUsername();
    },
    methods: {
        obtenerUsername(){
            setTimeout(() => {
                this.username = this.$route.params.id + Math.floor(Math.random()*1000);
            }, 2000);
        }
    },
    beforeRouteEnter (to, from, next) {
        console.info('Antes de entrar');
        next((vm)=>console.log(vm));
    },


    befoRouteUpdate(to,from,next){
        console.info('Antes de cambiar la ruta sobre el mismo componente');
        console.log(this);

    },

    beforeRouteLeave (to, from, next) {
        console.info("Antes de salir");
        next();
    },

}
</script>