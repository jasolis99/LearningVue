<template>
  <div id="app">
    <h1>Aprender en 2020-21</h1>
    <form @submit.prevent="agregarTecnologia">
      <input v-model="nuevasTecnologias" placeholder="Introduce la tecnología" type="text">
    </form>
    <ul>
      <li style="display:block" v-for="tecnologia in tecnologias">{{tecnologia.nombre}}</li>
    </ul>
  </div>
</template>

<script>
import {mixin} from './mixin.js';
export default {
  created() {
    this.saludar();
  },
  mixins: [mixin],
  methods: {
    /* If we have to methods with the same name, the first to execute will be the method that is in mixing, then it will be executed
    what is in component */
    saludar(){
      alert("Hola desde el componente");
    }
  },
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
