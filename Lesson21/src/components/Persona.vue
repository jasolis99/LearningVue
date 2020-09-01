<template>
    <div>
        <template v-if="persona">
            <h1 v-text="datosPersona.nombre"></h1>
            <p v-text="datosPersona.correoe"></p>
            <img :src="datosPersona.foto">
        </template>
        <template v-else>
            <p>Cargando...</p>
        </template>
    </div>
</template>

<script>
    import axios from 'axios';
    export default {
        
        mounted() {
            axios.get('https://randomuser.me/api/')
                .then((respuesta)=>{
                    this.persona = respuesta.data.results[0];
                })
        },
        data() {
            return {
                persona: null,
            }
        },
        computed: {
            datosPersona(){
                return{
                    nombre: this.persona.name.first,
                    foto: this.persona.picture.large,
                    correoe: this.persona.email,
                }
            }
        },


    }
</script>

<style>
</style>
