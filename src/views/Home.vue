<script setup>
import logo from "../assets/logo.png";
import School from "../assets/School.jpg";
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
  <!-- School Image -->
  <div class="mt-8 flex items-end justify-end gap-4 p-4"></div>
   <img :src="School" alt="SOS School Image" class="w-[700px] h-[400px] rounded-xl object-cover shadow-lg"/>
   <section class="flex items-start justify-start gap-4 mt-6 p-4">
     <h2 class="font-bold text-2xl text-blue-700">About Our School</h2>
     <p class="text-gray-600">
       SOS Technical High School is dedicated to providing excellent technical education and training to prepare students for successful careers in the field of technology.
     </p>   
   </section>
   </template>

    