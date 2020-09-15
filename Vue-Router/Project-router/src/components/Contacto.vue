<template>
    <div>
    <h1>Contacto</h1>
    <p>Llámame y hablamos si quieres un rato</p>
    <!-- <button @click="volverHome()">Volver a casa</button> -->

    <!--  This is from Vue Router passing props   -->
    <h5>{{newsletter}}</h5>

    <h1>{{numero}}</h1>
    <template v-if="newsletter">
        <form action="">
            <h3>Newsletter</h3>
            <label for="correoe">Correo-e</label>
            <input type="email" placeholder="Tu correo-e" id="correoe">
        </form>
    </template>
    </div>
</template>


<script>
export default {

    data() {
        return {
            
            numero: null,
        }
    },
    created() {

        //this is from Vue Router programmatic navigation lesson

        //setTimeout(()=>this.$router.push("/"),200) //Back to home automatically once vue instance is created
    },
    methods: {

        //this is from Vue Router programmatic navigation lesson
        volverHome(){
           // this.$router.push("/"); //Back to home page
           this.$router.push("/",()=>console.log("Ruta cambiada")) //back to home page leaving a message in console
        }
    },
    props:['newsletter'],

    /* this is from data fetching lesson */
    beforeRouteEnter (to, from, next) {
        console.log("Antes de entrar en la ruta");
        setTimeout(() => {
            next((vm)=>{
                vm.numero = Math.floor(Math.random()*1000);
            })
        }, 2000);
    }


        
    
}
</script>