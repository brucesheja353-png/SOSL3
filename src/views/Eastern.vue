<script setup>
import { t } from '../langStore.js'
</script>

<template>
  <!-- Hero Section -->
  <section class="relative min-h-96 bg-cover bg-center flex items-center justify-center text-white mt-16" style="background-image: url('https://images.unsplash.com/photo-1489749798305-4fea3ba63d60?w=1200&h=400&fit=crop');">
    <div class="absolute inset-0 bg-black/50"></div>
    <div class="relative text-center px-6 max-w-3xl">
      <h1 class="text-5xl md:text-6xl font-extrabold mb-4">{{ t('provinces.eastern.title') }}</h1>
      <p class="text-xl text-emerald-100">{{ t('provinces.eastern.subtitle') }}</p>
    </div>
  </section>

  <!-- Highlights Section with Location Display -->
  <section class="bg-gradient-to-br from-orange-50 to-white py-16">
    <div class="mx-auto max-w-6xl px-6">
      <div class="grid md:grid-cols-2 gap-8 items-center">
        <!-- Left: Location Info -->
        <div>
          <h2 class="text-4xl font-bold text-green-900 mb-8">Key Attractions</h2>
          <div class="space-y-6">
            <div v-for="(highlight, idx) in t('provinces.eastern.highlights')" :key="idx" class="flex gap-4">
              <div class="flex-shrink-0">
                <div class="flex h-10 w-10 items-center justify-center rounded-full bg-orange-600 text-white font-bold">
                  {{ idx + 1 }}
                </div>
              </div>
              <div>
                <p class="text-lg font-semibold text-green-900">{{ highlight }}</p>
              </div>
            </div>
          </div>
        </div>
        <!-- Right: Image -->
        <div class="rounded-lg overflow-hidden shadow-xl">
          <img src="https://images.unsplash.com/photo-1489749798305-4fea3ba63d60?w=600&h=500&fit=crop" alt="Eastern Province" class="w-full h-96 object-cover">
        </div>
      </div>
    </div>
  </section>

  <!-- Feature Cards -->
  <section class="bg-white py-16">
    <div class="mx-auto max-w-6xl px-6">
      <h2 class="text-4xl font-bold text-center text-green-900 mb-12">Wildlife & Culture</h2>
      <div class="grid md:grid-cols-3 gap-8">
        <article class="rounded-xl border-2 border-orange-200 overflow-hidden hover:shadow-xl transition hover:scale-105 transform">
          <img src="https://images.unsplash.com/photo-1516426122078-c23e76319801?w=400&h=250&fit=crop" alt="Akagera Safari" class="w-full h-48 object-cover">
          <div class="p-6">
            <h3 class="text-2xl font-bold text-green-900 mb-3">Akagera Safari</h3>
            <p class="text-gray-600">Experience thrilling wildlife safaris spotting the Big Five in Rwanda's largest national park.</p>
          </div>
        </article>
        <article class="rounded-xl border-2 border-orange-200 overflow-hidden hover:shadow-xl transition hover:scale-105 transform">
          <img src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=400&h=250&fit=crop" alt="Lake Ihema" class="w-full h-48 object-cover">
          <div class="p-6">
            <h3 class="text-2xl font-bold text-green-900 mb-3">Lake Ihema Adventures</h3>
            <p class="text-gray-600">Enjoy boat trips, birdwatching, and fishing on Rwanda's beautiful lakeside.</p>
          </div>
        </article>
        <article class="rounded-xl border-2 border-orange-200 overflow-hidden hover:shadow-xl transition hover:scale-105 transform">
          <img src="https://images.unsplash.com/photo-1470618888830-62b690d6b5ca?w=400&h=250&fit=crop" alt="Local Villages" class="w-full h-48 object-cover">
          <div class="p-6">
            <h3 class="text-2xl font-bold text-green-900 mb-3">Village Culture</h3>
            <p class="text-gray-600">Connect with local communities and experience authentic Rwandan traditions and hospitality.</p>
          </div>
        </article>
      </div>
    </div>
  </section>

  <!-- CTA Section -->
  <section class="bg-orange-700 text-white py-12">
    <div class="mx-auto max-w-4xl text-center px-6">
      <h2 class="text-4xl font-bold mb-6">Experience Safari Excellence in the East</h2>
      <a href="/contact" class="inline-block bg-yellow-400 text-green-900 font-bold px-8 py-4 rounded-full hover:bg-yellow-300 transition">Book Your Safari</a>
    </div>
  </section>
</template>