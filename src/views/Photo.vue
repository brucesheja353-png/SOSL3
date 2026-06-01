<script setup>
import { t } from '../langStore.js'
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
          <img src="https://images.unsplash.com/photo-1517602302552-471fe67acf66?w=900&h=700&fit=crop" alt="Rwanda landscape" class="h-72 w-full object-cover">
          <div class="p-6">
            <h2 class="text-2xl font-semibold text-green-900 mb-3">Rwanda Landscapes</h2>
            <p class="text-gray-600">A beautiful view of Rwanda’s rolling hills, lakes, and verdant countryside.</p>
          </div>
        </article>
        <article class="overflow-hidden rounded-3xl bg-white shadow-lg transition hover:scale-[1.02]">
          <img src="https://images.unsplash.com/photo-1519677100203-a0e668c92439?w=900&h=700&fit=crop" alt="Gorillas" class="h-72 w-full object-cover">
          <div class="p-6">
            <h2 class="text-2xl font-semibold text-green-900 mb-3">Wildlife</h2>
            <p class="text-gray-600">Capture moments with gorillas, chimpanzees, and other wildlife in Rwanda’s protected parks.</p>
          </div>
        </article>
        <article class="overflow-hidden rounded-3xl bg-white shadow-lg transition hover:scale-[1.02]">
          <img src="https://images.unsplash.com/photo-1483683804023-6ccdb62f86ef?w=900&h=700&fit=crop" alt="Culture" class="h-72 w-full object-cover">
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
          <img src="https://images.unsplash.com/photo-1493558103817-58b2924bce98?w=900&h=700&fit=crop" alt="Sunset" class="h-full w-full object-cover">
        </article>
      </div>
    </div>
  </section>
</template>