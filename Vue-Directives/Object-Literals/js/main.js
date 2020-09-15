Vue.directive('fijar',{
    bind(el,binding){
        el.style.position = 'fixed';
        el.style.color = binding.value.color;

        el.style.top = binding.value.top;
    }


})


new Vue({
    el: '#app',
})