Vue.directive('fijar',{
    bind(el,binding){
        el.style.position = 'fixed';
        el.style.color = "red";

        if(binding.expression){
            el.style.top = binding.expression + "px";
        }

        if(binding.arg){

            let color = "yellow";

            let modificador = Objecto.keys(binding.modifiers);

            if(modificador.length>0){
                color = Object.keys(binding.modifiers)[0];
                console.log(color);
            }

            el.style.backgroundColor = color;
        }
    }


})


new Vue({
    el: '#app',
})