<script setup>
import { t } from '../langStore.js'

const landscapeImage = new URL('../assets/Land of a thousand.jpg', import.meta.url).href
const wildlifeImage = new URL('../assets/Rwanda Leopard.jpg', import.meta.url).href
const cityImage = new URL('../assets/City.jpg', import.meta.url).href
const cultureImage = new URL('../assets/Traditional.jpg', import.meta.url).href
</script>

<template>
  <section class="mt-16 bg-slate-50 py-16">
    <div class="mx-auto max-w-6xl px-6">
      <div class="text-center mb-12">
        <p class="text-sm uppercase tracking-[0.4em] text-emerald-600 mb-4">{{ t('nav.photos') }}</p>
        <h1 class="text-4xl md:text-5xl font-bold text-green-900 mb-4">{{ t('photo.title') }}</h1>
        <p class="max-w-2xl mx-auto text-gray-600">{{ t('photo.subtitle') }}</p>
      </div>

      <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <article class="overflow-hidden rounded-3xl bg-white shadow-lg transition hover:scale-[1.02]">
          <img :src="landscapeImage" alt="Rwanda rolling hills" class="h-72 w-full object-cover">
          <div class="p-6">
            <h2 class="text-2xl font-semibold text-green-900 mb-3">Rwanda Landscapes</h2>
            <p class="text-gray-600">A beautiful view of Rwanda’s rolling hills, lakes, and verdant countryside.</p>
          </div>
        </article>
        <article class="overflow-hidden rounded-3xl bg-white shadow-lg transition hover:scale-[1.02]">
          <img :src="wildlifeImage" alt="Rwanda wildlife" class="h-72 w-full object-cover">
          <div class="p-6">
            <h2 class="text-2xl font-semibold text-green-900 mb-3">Wildlife</h2>
            <p class="text-gray-600">Capture moments with gorillas, chimpanzees, and other wildlife in Rwanda’s protected parks.</p>
          </div>
        </article>
        <article class="overflow-hidden rounded-3xl bg-white shadow-lg transition hover:scale-[1.02]">
          <img :src="cityImage" alt="Rwanda city life" class="h-72 w-full object-cover">
          <div class="p-6">
            <h2 class="text-2xl font-semibold text-green-900 mb-3">Cultural Life</h2>
            <p class="text-gray-600">Colorful portraits of local traditions, markets, and community celebrations.</p>
          </div>
        </article>
      </div>

      <div class="mt-12 grid gap-6 lg:grid-cols-2">
        <article class="rounded-3xl bg-green-900 text-white p-10 shadow-xl">
          <h2 class="text-3xl font-bold mb-4">Gallery Story</h2>
          <p class="text-gray-200 leading-8">{{ t('photo.text') }}</p>
        </article>
        <article class="overflow-hidden rounded-3xl bg-white shadow-xl">
          <img :src="cultureImage" alt="Rwandan cultural scene" class="h-full w-full object-cover">
        </article>
      </div>
    </div>
  </section>
</template>