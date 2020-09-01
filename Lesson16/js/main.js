Vue.component('alerta', {
    props: ['tipo', 'posicion'],
    template: `
            <section class="alerta" :class="[tipo, posicion]">
                <p @click="ocultar">Cerrar</p>
                <header class="alerta__header">
                        <slot name="header">Hola</slot>
                </header>
                <div class="alerta__contenido">
                        <slot>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus dictum dui justo, at molestie orci dapibus
                            vitae.
                        </slot>
                </div>
                <footer class="alerta__footer">
                        <slot name="footer">Este es el texto del footer</slot>
                </footer>
            </section>`,
    
    methods: {
        ocultar(){
            this.$emit("ocultar");
        }
    },
});

new Vue({
    el: 'main',
    data:{
        mostrarError: false,
        mostrarAdvertencia: false,
        mostrarOk: false,
    },
});