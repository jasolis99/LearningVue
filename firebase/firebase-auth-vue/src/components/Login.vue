<template>
  <div>
    <h2>Login</h2>
    <form @submit.prevent="login">
      <input v-model="usuario" type="text" placeholder="Usuario" />
      <input v-model="contrasena" type="password" placeholder="Contraseña" />
      <input type="submit" value="Acceder" />
    </form>
  </div>
</template>

<script>
import firebase from 'firebase';
export default {
  data() {
    return {
      usuario: "",
      contrasena: "",
    };
  },
  methods: {
    login() {
      firebase
        .auth()
        .signInWithEmailAndPassword(this.usuario, this.contrasena)
        .then((user)=>this.$router.replace('Home'), (error)=>console.log(error));
    },
  },
};
</script>

