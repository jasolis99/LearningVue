/* Global mixin */

import Vue from 'vue';

Vue.mixin({
    created() {
      this.saludar(this.$options.nombre);
    },
    methods: {
      saludar(nombre){
        alert('Hola desde ' + nombre);
      }
    },

})

//Local mixin
export const mixin = {
    name: 'app',
    data () {
      return {
        tecnologias: [
          {nombre: "Vue JS"},
          {nombre: "Firebase"},
          {nombre: "ES6"},
          {nombre: "JavaScript"}
        ],
        nuevasTecnologias: null,
      }
    },
     methods: {
      agregarTecnologia(){
          this.tecnologias.unshift({nombre:this.nuevasTecnologias});
          this.nuevasTecnologias = null;
      },
    },
}