<script setup>
// import Home from './views/Home.vue'
import { RouterView } from 'vue-router';
import Navbar from './component/Navbar.vue';
import Footer from './component/footer.vue';
</script>
<template>
  <Navbar/>
  <main class="pt-24">
    <RouterView/>
  </main>
  <Footer/>
</template>