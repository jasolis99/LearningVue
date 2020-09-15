<template>
    <div>
         <h1>Home</h1>
         <p>Bienvenido a casa</p>
         <router-link :to="'/equipos/' + id">Equipo</router-link>
         <h5>Nombre de usuario para probar la ruta</h5>
         <input type="text" v-model="id" placeholder="nombre de usuario">
    </div>
</template>

<script>
export default {
    data() {
        return {
            id: 'jose',
        }
    },
}
</script>