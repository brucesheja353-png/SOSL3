<script setup>
import { t } from '../langStore.js'
</script>

<template>
  <!-- Hero Section -->
  <section class="relative min-h-96 bg-cover bg-center flex items-center justify-center text-white mt-16" style="background-image: url('https://images.unsplash.com/photo-1516426122078-c23e76319801?w=1200&h=400&fit=crop');">
    <div class="absolute inset-0 bg-black/50"></div>
    <div class="relative text-center px-6 max-w-3xl">
      <h1 class="text-5xl md:text-6xl font-extrabold mb-4">{{ t('provinces.northern.title') }}</h1>
      <p class="text-xl text-emerald-100">{{ t('provinces.northern.subtitle') }}</p>
    </div>
  </section>

  <section class="bg-gradient-to-br from-green-50 to-white py-16">
    <div class="mx-auto max-w-6xl px-6">
      <div class="grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h2 class="text-4xl font-bold text-green-900 mb-8">Key Attractions</h2>
          <div class="space-y-6">
            <div v-for="(highlight, idx) in t('provinces.northern.highlights')" :key="idx" class="flex gap-4">
              <div class="flex-shrink-0">
                <div class="flex h-10 w-10 items-center justify-center rounded-full bg-green-600 text-white font-bold">
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
          <img src="https://images.unsplash.com/photo-1516426122078-c23e76319801?w=600&h=500&fit=crop" alt="Northern Province" class="w-full h-96 object-cover">
        </div>
      </div>
    </div>
  </section>

  <!-- Feature Cards -->
  <section class="bg-white py-16">
    <div class="mx-auto max-w-6xl px-6">
      <h2 class="text-4xl font-bold text-center text-green-900 mb-12">Experiences Awaiting You</h2>
      <div class="grid md:grid-cols-3 gap-8">
        <article class="rounded-xl border-2 border-green-200 overflow-hidden hover:shadow-xl transition hover:scale-105 transform">
          <img src="/gorilla.png" alt="Gorilla Trekking" class="w-full h-48 object-cover">
          <div class="p-6">
            <h3 class="text-2xl font-bold text-green-900 mb-3">Gorilla Trekking</h3>
            <p class="text-gray-600">Experience the breathtaking encounter with mountain gorillas in their natural habitat.</p>
          </div>
        </article>
        <article class="rounded-xl border-2 border-green-200 overflow-hidden hover:shadow-xl transition hover:scale-105 transform">
          <img src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=400&h=250&fit=crop" alt="Coffee Tours" class="w-full h-48 object-cover">
          <div class="p-6">
            <h3 class="text-2xl font-bold text-green-900 mb-3">Coffee Tours</h3>
            <p class="text-gray-600">Discover Rwanda's renowned coffee plantations and learn the art of coffee production.</p>
          </div>
        </article>
        <article class="rounded-xl border-2 border-green-200 overflow-hidden hover:shadow-xl transition hover:scale-105 transform">
          <img src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=250&fit=crop" alt="Mountain Views" class="w-full h-48 object-cover">
          <div class="p-6">
            <h3 class="text-2xl font-bold text-green-900 mb-3">Mountain Adventures</h3>
            <p class="text-gray-600">Hike scenic mountain trails with panoramic views of Rwanda's volcanic landscapes.</p>
          </div>
        </article>
      </div>
    </div>
  </section>

  <!-- CTA Section -->
  <section class="bg-green-700 text-white py-12">
    <div class="mx-auto max-w-4xl text-center px-6">
      <h2 class="text-4xl font-bold mb-6">Ready to Explore the Northern Province?</h2>
      <a href="/contact" class="inline-block bg-yellow-400 text-green-900 font-bold px-8 py-4 rounded-full hover:bg-yellow-300 transition">Plan Your Adventure</a>
    </div>
  </section>
</template>