<template>
  <div>
    <template v-if="wannaRegister">
      <h2>Register</h2>
      <form @submit.prevent="register">
        <input v-model="usuario" type="text" placeholder="Usuario" />
        <input v-model="contrasena" type="password" placeholder="Contraseña" />
        <input type="submit" value="Acceder" />
      </form>
      <a @click="wannaRegister = false">I have an account</a>
    </template>
    <template v-else>
      <h2>Login</h2>
      <form @submit.prevent="login">
        <input v-model="usuario" type="text" placeholder="Usuario" />
        <input v-model="contrasena" type="password" placeholder="Contraseña" />
        <input type="submit" value="Acceder" />
      </form>
      <a @click="wannaRegister = true">Wanna Register?</a>
    </template>
  </div>
</template>

<script>
import firebase from "firebase";
export default {
  data() {
    return {
      usuario: "",
      contrasena: "",
      wannaRegister: false,
    };
  },
  methods: {
    login() {
      firebase
        .auth()
        .signInWithEmailAndPassword(this.usuario, this.contrasena)
        .then(
          (user) => this.$router.replace("Home"),
          (error) => console.log(error)
        );
    },
    register() {
      firebase
        .auth()
        .createUserWithEmailAndPassword(this.usuario, this.contrasena)
        .then(
          (user) => this.$router.replace("Login"),
          (error) => console.log(error)
        );
    },
  },
};
</script>

