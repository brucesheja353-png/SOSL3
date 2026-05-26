<script setup>
import logo from '../assets/logo.png';
</script>
<template>
    <div class="flex items-center justify-center gap-4 mt-6">
    <!-- logo -->
    <img :src="logo" alt="SOS logo" class="w-40 h-24 object-contain" />
    <!-- title -->
    <h1 class="font-bold text-4xl text-blue-400">Welcome To SOS Technical High School</h1>
    <!-- Navigation Links -->


    <div class="flex items-end justify-end gap-4 p-4">
      <nav>
        <router-link to="/" class="text-black font-bold text-lg hover:text-blue-500 transition-colors duration-300">Home</router-link>
        <router-link to="/About" class="text-black font-bold text-lg hover:text-blue-500 transition-colors duration-300 ml-4">About</router-link>
       
      </nav>
 
    </div>

  </div>
</template> 

    <section class="flex items-start justify-start gap-4 mt-6 p-4"></section>
      <!-- ABOUT SOS HIGH SCHOOL -->
      <h1>Shaping Rwanda's Technical Future since 2005</h1>
        <p>
            SOS Technical High School, established in 2005, has been at the forefront of technical education in Rwanda, providing quality training and education to prepare students for the demands of the modern workforce.
        </p>    