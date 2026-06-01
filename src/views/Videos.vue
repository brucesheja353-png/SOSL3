<script setup>
import { t } from '../langStore.js'
</script>

<template>
  <section class="mt-16 bg-slate-50 py-16">
    <div class="mx-auto max-w-6xl px-6">
      <div class="text-center mb-12">
        <p class="text-sm uppercase tracking-[0.4em] text-emerald-600 mb-4">{{ t('nav.videos') }}</p>
        <h1 class="text-4xl md:text-5xl font-bold text-green-900 mb-4">{{ t('videos.title') }}</h1>
        <p class="max-w-2xl mx-auto text-gray-600">{{ t('videos.subtitle') }}</p>
      </div>

      <div class="grid gap-8 lg:grid-cols-3">
        <article class="rounded-3xl bg-white overflow-hidden shadow-lg transition hover:-translate-y-2 hover:shadow-2xl">
          <div class="relative h-72 overflow-hidden bg-black">
            <img src="https://images.unsplash.com/photo-1517602302552-471fe67acf66?w=900&h=700&fit=crop" alt="Gorilla Trekking Video" class="h-full w-full object-cover opacity-90">
            <div class="absolute inset-0 bg-black/25"></div>
            <div class="absolute inset-0 flex items-center justify-center">
              <div class="rounded-full bg-white/90 p-4 text-green-900">
                ▶
              </div>
            </div>
          </div>
          <div class="p-6">
            <h2 class="text-2xl font-bold text-green-900 mb-3">{{ t('videos.cards.gorillas.title') }}</h2>
            <p class="text-gray-600">{{ t('videos.cards.gorillas.description') }}</p>
          </div>
        </article>

        <article class="rounded-3xl bg-white overflow-hidden shadow-lg transition hover:-translate-y-2 hover:shadow-2xl">
          <div class="relative h-72 overflow-hidden bg-black">
            <img src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=900&h=700&fit=crop" alt="Lake Kivu Video" class="h-full w-full object-cover opacity-90">
            <div class="absolute inset-0 bg-black/25"></div>
            <div class="absolute inset-0 flex items-center justify-center">
              <div class="rounded-full bg-white/90 p-4 text-green-900">
                ▶
              </div>
            </div>
          </div>
          <div class="p-6">
            <h2 class="text-2xl font-bold text-green-900 mb-3">{{ t('videos.cards.lake.title') }}</h2>
            <p class="text-gray-600">{{ t('videos.cards.lake.description') }}</p>
          </div>
        </article>

        <article class="rounded-3xl bg-white overflow-hidden shadow-lg transition hover:-translate-y-2 hover:shadow-2xl">
          <div class="relative h-72 overflow-hidden bg-black">
            <img src="https://images.unsplash.com/photo-1494526585095-c41746248156?w=900&h=700&fit=crop" alt="Culture Video" class="h-full w-full object-cover opacity-90">
            <div class="absolute inset-0 bg-black/25"></div>
            <div class="absolute inset-0 flex items-center justify-center">
              <div class="rounded-full bg-white/90 p-4 text-green-900">
                ▶
              </div>
            </div>
          </div>
          <div class="p-6">
            <h2 class="text-2xl font-bold text-green-900 mb-3">{{ t('videos.cards.culture.title') }}</h2>
            <p class="text-gray-600">{{ t('videos.cards.culture.description') }}</p>
          </div>
        </article>
      </div>

      <div class="mt-12 rounded-3xl bg-green-900 p-12 text-white shadow-xl">
        <h2 class="text-3xl font-bold mb-4">Explore Rwanda through Video</h2>
        <p class="max-w-3xl text-lg leading-8">Watch stories of mountain gorillas, lakeside retreats, and the cultural heartbeat of Rwanda. Each video brings the country’s landscapes, heritage, and people to life.</p>
      </div>
    </div>
  </section>
</template>