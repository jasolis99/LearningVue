<template>
    <div>
        <h2>Las Tareas por hacer</h2>
        <button @click="tachado = true">Tachar</button>
        <button @click="tachado = false">Destachar</button>
        <ul>
            <li v-for="tarea in tareasPendientes">
                <a href="#" @click="actualizarTarea(tarea)" v-text="tarea.nombre"></a>
            </li>
        </ul>
        <h2>Tareas finalizadas</h2>
        <li v-for="tarea in tareasFinalizadas">
            <a :class="{[$style.tachado] :tachado}" href="#" @click="actualizarTarea(tarea)" v-text="tarea.nombre"></a>
        </li>
    </div>
</template>
<script>
    export default {
        data(){
            return {
                tareas: [
                    {nombre: 'Aprender Vue.js', completado: false},
                    {nombre: 'Grabar el módulo de Vuex', completado: false},
                    {nombre: 'Responder comentarios (de una vez)', completado: false},
                    {nombre: 'Salir a correr para despejarme', completado: false},
                    {nombre: 'Diseñar el módulo de Firebase', completado: false},
                    {nombre: 'Diseñar el ejercicio final', completado: false},
                    {nombre: 'Tomarme unas vacaciones', completado: false},
                ],
                finalizadas: [],
                tachado : false,
            }
        },
        methods: {
            actualizarTarea(tarea) {
                tarea.completado = !tarea.completado;
            }
        },
        computed: {
            tareasPendientes() {
                return this.tareas.filter((tarea) => !tarea.completado);
            },
            tareasFinalizadas() {
                return this.tareas.filter((tarea) => tarea.completado);
            }
        }
    }
</script>

/*Scoped: apply when you wanna use your style only in the component */
/*Modules: allows to apply style depending on the state of a variable*/

<style scoped module>
    .tachado{
        text-decoration: line-through;
    }
    li a{
        color: red;
        text-decoration: none;
    }
</style>
