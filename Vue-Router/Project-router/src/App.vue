<template>
  <div>
    <h1>Routes con Vue CLI</h1>

      <!-- We use 'exact' when both routes links to the same root and we wanna treat them like if they were in different roots
           We use the tag property for 
      
      -->
    <button @click="cambiar">Cambiar Auth</button>
    <router-link to="/" active-class="activado" tag="li" exact><a>Home</a></router-link>
    <router-link to="/contacto" active-class="activado" tag="li" ><a>Contacto</a></router-link>
    <router-link to="/usuario/77" active-class="activado" tag="li" ><a>Usuario77</a></router-link>
    <router-link to="/usuario/99" active-class="activado" tag="li" ><a>Usuario99</a></router-link>
    <router-link to="/equipos/prueba" active-class="activado" tag="li" ><a>Equipos</a></router-link>

    <!-- this is from scroll behavior lesson -->
    <router-link :to="{path:'/bio', hash:'#parrafo'}" ><a>Biografia</a></router-link>
    <hr>
    <router-view></router-view>
  </div>
</template>

<script>

import {mapMutations} from 'vuex';

export default {
  methods: mapMutations(["cambiar"]),
}
</script>

<style>
.activado{
  color:red,
}
  /* .router-link-active{
    color: red;
  } */
  
</style>