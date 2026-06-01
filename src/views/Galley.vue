<script setup>
import { t } from '../langStore.js'
</script>

<template>
  <section class="mt-16 bg-slate-50 py-16">
    <div class="mx-auto max-w-6xl px-6">
      <div class="text-center mb-12">
        <p class="text-sm uppercase tracking-[0.4em] text-emerald-600 mb-4">{{ t('gallery.title') }}</p>
        <h1 class="text-4xl md:text-5xl font-bold text-green-900 mb-4">{{ t('gallery.title') }}</h1>
        <p class="max-w-2xl mx-auto text-gray-600">{{ t('gallery.subtitle') }}</p>
      </div>

      <div class="grid gap-8 lg:grid-cols-2 mb-12">
        <article class="rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition hover:-translate-y-2">
          <img src="https://images.unsplash.com/photo-1517602302552-471fe67acf66?w=800&h=500&fit=crop" alt="Photo gallery" class="w-full h-96 object-cover">
          <div class="bg-white p-8">
            <h2 class="text-3xl font-bold text-green-900 mb-3">{{ t('nav.photos') }}</h2>
            <p class="text-gray-600 mb-6">{{ t('photo.subtitle') }}</p>
            <a href="/photo" class="inline-block bg-green-600 text-white font-semibold px-6 py-3 rounded-full hover:bg-green-700 transition">View Gallery →</a>
          </div>
        </article>

        <article class="rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition hover:-translate-y-2">
          <img src="https://images.unsplash.com/photo-1493558103817-58b2924bce98?w=800&h=500&fit=crop" alt="Video gallery" class="w-full h-96 object-cover">
          <div class="bg-white p-8">
            <h2 class="text-3xl font-bold text-green-900 mb-3">{{ t('nav.videos') }}</h2>
            <p class="text-gray-600 mb-6">{{ t('videos.subtitle') }}</p>
            <a href="/videos" class="inline-block bg-green-600 text-white font-semibold px-6 py-3 rounded-full hover:bg-green-700 transition">Watch Videos →</a>
          </div>
        </article>
      </div>

      <div class="border-t border-gray-300 pt-12">
        <h2 class="text-3xl font-bold text-center text-green-900 mb-12">{{ t('gallery.title') }} - Explore by Province</h2>
        <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <article class="rounded-xl border-2 border-green-200 overflow-hidden hover:shadow-lg transition">
            <img src="https://images.unsplash.com/photo-1516426122078-c23e76319801?w=500&h=300&fit=crop" alt="Northern" class="w-full h-48 object-cover">
            <div class="p-6">
              <h3 class="text-xl font-bold text-green-900 mb-2">{{ t('provinces.northern.title') }}</h3>
              <p class="text-gray-600 mb-4">{{ t('provinces.northern.subtitle') }}</p>
              <a href="/northern" class="text-green-600 font-semibold hover:text-green-800">Explore →</a>
            </div>
          </article>

          <article class="rounded-xl border-2 border-blue-200 overflow-hidden hover:shadow-lg transition">
            <img src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=500&h=300&fit=crop" alt="Western" class="w-full h-48 object-cover">
            <div class="p-6">
              <h3 class="text-xl font-bold text-green-900 mb-2">{{ t('provinces.western.title') }}</h3>
              <p class="text-gray-600 mb-4">{{ t('provinces.western.subtitle') }}</p>
              <a href="/western" class="text-green-600 font-semibold hover:text-green-800">Explore →</a>
            </div>
          </article>

          <article class="rounded-xl border-2 border-orange-200 overflow-hidden hover:shadow-lg transition">
            <img src="https://images.unsplash.com/photo-1489749798305-4fea3ba63d60?w=500&h=300&fit=crop" alt="Eastern" class="w-full h-48 object-cover">
            <div class="p-6">
              <h3 class="text-xl font-bold text-green-900 mb-2">{{ t('provinces.eastern.title') }}</h3>
              <p class="text-gray-600 mb-4">{{ t('provinces.eastern.subtitle') }}</p>
              <a href="/eastern" class="text-green-600 font-semibold hover:text-green-800">Explore →</a>
            </div>
          </article>

          <article class="rounded-xl border-2 border-green-200 overflow-hidden hover:shadow-lg transition">
            <img src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=500&h=300&fit=crop" alt="Southern" class="w-full h-48 object-cover">
            <div class="p-6">
              <h3 class="text-xl font-bold text-green-900 mb-2">{{ t('provinces.southern.title') }}</h3>
              <p class="text-gray-600 mb-4">{{ t('provinces.southern.subtitle') }}</p>
              <a href="/southern" class="text-green-600 font-semibold hover:text-green-800">Explore →</a>
            </div>
          </article>

          <article class="rounded-xl border-2 border-slate-200 overflow-hidden hover:shadow-lg transition lg:col-span-2">
            <img src="https://images.unsplash.com/photo-1470770841072-f978cf4d019e?w=500&h=300&fit=crop" alt="Kigali" class="w-full h-48 object-cover">
            <div class="p-6">
              <h3 class="text-xl font-bold text-green-900 mb-2">{{ t('provinces.kigali.title') }}</h3>
              <p class="text-gray-600 mb-4">{{ t('provinces.kigali.subtitle') }}</p>
              <a href="/kigali" class="text-green-600 font-semibold hover:text-green-800">Explore →</a>
            </div>
          </article>
        </div>
      </div>
    </div>
  </section>
</template>