<template>
    <!--This template is from Neasted Routes lesson-->
    <div>
       <h1>Nuestro equipo:</h1>
       <router-view></router-view>
        <!-- This is from vue router named views lesson -->
        <router-view name="bio"></router-view>
        <router-view name="foto"></router-view>
    </div>
</template>