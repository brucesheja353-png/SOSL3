<script setup>
import { t } from '../langStore.js'
</script>

<template>
  <!-- Hero Section -->
  <section class="relative min-h-96 bg-cover bg-center flex items-center justify-center text-white mt-16" style="background-image: url('/west.png');">
    <div class="absolute inset-0 bg-black/50"></div>
    <div class="relative text-center px-6 max-w-3xl">
      <h1 class="text-5xl md:text-6xl font-extrabold mb-4">{{ t('provinces.western.title') }}</h1>
      <p class="text-xl text-emerald-100">{{ t('provinces.western.subtitle') }}</p>
    </div>
  </section>

  <section class="bg-gradient-to-br from-green-50 to-white py-16">
    <div class="mx-auto max-w-6xl px-6">
      <div class="grid md:grid-cols-2 gap-8 items-center">
        <div class="rounded-lg overflow-hidden shadow-xl order-2 md:order-1">
          <img src="/west.png" alt="Western Province" class="w-full h-96 object-cover">
        </div>
        <div class="order-1 md:order-2">
          <h2 class="text-4xl font-bold text-green-900 mb-8">Key Attractions</h2>
          <div class="space-y-6">
            <div v-for="(highlight, idx) in t('provinces.western.highlights')" :key="idx" class="flex gap-4">
              <div class="flex-shrink-0">
                <div class="flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 text-white font-bold">
                  {{ idx + 1 }}
                </div>
              </div>
              <div>
                <p class="text-lg font-semibold text-green-900">{{ highlight }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Feature Cards -->
  <section class="bg-white py-16">
    <div class="mx-auto max-w-6xl px-6">
      <h2 class="text-4xl font-bold text-center text-green-900 mb-12">Memorable Experiences</h2>
      <div class="grid md:grid-cols-3 gap-8">
        <article class="rounded-xl border-2 border-blue-200 overflow-hidden hover:shadow-xl transition hover:scale-105 transform">
          <img src="/lake kivu.png" alt="Lake Kivu" class="w-full h-48 object-cover">
          <div class="p-6">
            <h3 class="text-2xl font-bold text-green-900 mb-3">Lake Kivu Relaxation</h3>
            <p class="text-gray-600">Enjoy pristine beaches, boat tours, and stunning sunset views on Africa's second-largest freshwater lake.</p>
          </div>
        </article>
        <article class="rounded-xl border-2 border-blue-200 overflow-hidden hover:shadow-xl transition hover:scale-105 transform">
          <img src="/nyungwe.png" alt="Rainforest" class="w-full h-48 object-cover">
          <div class="p-6">
            <h3 class="text-2xl font-bold text-green-900 mb-3">Nyungwe Rainforest</h3>
            <p class="text-gray-600">Trek through ancient rainforests to spot chimpanzees and experience pristine nature.</p>
          </div>
        </article>
        <article class="rounded-xl border-2 border-blue-200 overflow-hidden hover:shadow-xl transition hover:scale-105 transform">
          <img src="/tea.png" alt="Tea Plantations" class="w-full h-48 object-cover">
          <div class="p-6">
            <h3 class="text-2xl font-bold text-green-900 mb-3">Tea Plantations</h3>
            <p class="text-gray-600">Tour sprawling tea estates with green rolling hills and learn about Rwanda's tea production.</p>
          </div>
        </article>
      </div>
    </div>
  </section>

  <!-- CTA Section -->
  <section class="bg-green-900 text-white py-12">
    <div class="mx-auto max-w-4xl text-center px-6">
      <h2 class="text-4xl font-bold mb-6">Discover the Magic of the Western Province</h2>
      <a href="/contact" class="inline-block bg-yellow-400 text-green-900 font-bold px-8 py-4 rounded-full hover:bg-yellow-300 transition">Start Your Journey</a>
    </div>
  </section>
</template>