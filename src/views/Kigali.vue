<script setup>
import { t } from '../langStore.js'
</script>

<template>
  <!-- Hero Section -->
  <section class="relative min-h-96 bg-cover bg-center flex items-center justify-center text-white mt-16" style="background-image: url('/kigali.png');">
    <div class="absolute inset-0 bg-black/55"></div>
    <div class="relative text-center px-6 max-w-3xl">
      <h1 class="text-5xl md:text-6xl font-extrabold mb-4">{{ t('provinces.kigali.title') }}</h1>
      <p class="text-xl text-emerald-100">{{ t('provinces.kigali.subtitle') }}</p>
    </div>
  </section>

  <!-- Highlights Section with Location Display -->
  <section class="bg-gradient-to-br from-slate-50 to-white py-16">
    <div class="mx-auto max-w-6xl px-6">
      <div class="grid md:grid-cols-2 gap-8 items-center">
        <!-- Left: Image -->
        <div class="rounded-lg overflow-hidden shadow-xl">
          <img src="/kigali.png" alt="Kigali City" class="w-full h-96 object-cover">
        </div>
        <!-- Right: Location Info -->
        <div>
          <h2 class="text-4xl font-bold text-green-900 mb-8">City Highlights</h2>
          <div class="space-y-6">
            <div v-for="(highlight, idx) in t('provinces.kigali.highlights')" :key="idx" class="flex gap-4">
              <div class="flex-shrink-0">
                <div class="flex h-10 w-10 items-center justify-center rounded-full bg-slate-700 text-white font-bold">
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
      <h2 class="text-4xl font-bold text-center text-green-900 mb-12">Urban Experiences</h2>
      <div class="grid md:grid-cols-3 gap-8">
        <article class="rounded-xl border-2 border-slate-200 overflow-hidden hover:shadow-xl transition hover:scale-105 transform">
          <img src="/genocide.png" alt="Kigali Genocide Memorial" class="w-full h-48 object-cover">
          <div class="p-6">
            <h3 class="text-2xl font-bold text-green-900 mb-3">Kigali Genocide Memorial</h3>
            <p class="text-gray-600">Visit Rwanda’s most powerful memorial and learn about the city’s history and resilience.</p>
          </div>
        </article>
        <article class="rounded-xl border-2 border-slate-200 overflow-hidden hover:shadow-xl transition hover:scale-105 transform">
          <img src="/market.png" alt="Markets" class="w-full h-48 object-cover">
          <div class="p-6">
            <h3 class="text-2xl font-bold text-green-900 mb-3">Local Markets</h3>
            <p class="text-gray-600">Explore vibrant markets, art galleries, and Kigali’s rich street food culture.</p>
          </div>
        </article>
        <article class="rounded-xl border-2 border-slate-200 overflow-hidden hover:shadow-xl transition hover:scale-105 transform">
          <img src="/tour.png" alt="City Tours" class="w-full h-48 object-cover">
          <div class="p-6">
            <h3 class="text-2xl font-bold text-green-900 mb-3">City Tours</h3>
            <p class="text-gray-600">Enjoy curated city tours to discover Kigali’s architecture, dining scene, and attractions.</p>
          </div>
        </article>
      </div>
    </div>
  </section>

  <!-- CTA Section -->
  <section class="bg-green-900 text-white py-12">
    <div class="mx-auto max-w-4xl text-center px-6">
      <h2 class="text-4xl font-bold mb-6">Explore Kigali’s Best Sites</h2>
      <a href="/contact" class="inline-block bg-yellow-400 text-green-900 font-bold px-8 py-4 rounded-full hover:bg-yellow-300 transition">Contact Our Team</a>
    </div>
  </section>
</template>