export const mixin = {
    name: 'app',
    created() {
      this.saludar();
    },
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

      saludar(){
        alert("Hola desde el mixin");
      }
    },
}