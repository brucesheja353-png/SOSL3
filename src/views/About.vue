<script setup>
import { t } from '../langStore.js'
</script>

<template>
  <section class="relative bg-[url('/src/assets/Traditional.jpg')] bg-cover bg-center text-white min-h-[70vh] flex items-center mt-16">
    <div class="absolute inset-0 bg-black/60"></div>
    <div class="relative mx-auto max-w-6xl px-6 py-24">
      <div class="max-w-3xl">
        <p class="text-sm uppercase tracking-[0.35em] text-emerald-300 mb-4">{{ t('about.label') }}</p>
        <h1 class="text-4xl md:text-5xl font-bold mb-6">{{ t('about.title') }}</h1>
        <p class="text-lg text-slate-200 max-w-2xl">{{ t('about.description') }}</p>
      </div>
    </div>
  </section>

  <section class="bg-slate-50 py-16">
    <div class="mx-auto max-w-6xl px-6">
      <div class="grid gap-12 lg:grid-cols-2 items-center">
        <div>
          <h2 class="text-3xl font-bold text-slate-900 mb-4">{{ t('about.why') }}</h2>
          <p class="text-slate-600 mb-6">{{ t('about.whyDescription') }}</p>
          <div class="space-y-4">
            <div class="rounded-3xl bg-white p-6 shadow-sm">
              <h3 class="font-semibold text-slate-900 mb-2">Itinerary</h3>
              <p class="text-slate-600">{{ t('about.reasons.itinerary') }}</p>
            </div>
            <div class="rounded-3xl bg-white p-6 shadow-sm">
              <h3 class="font-semibold text-slate-900 mb-2">Expertise</h3>
              <p class="text-slate-600">{{ t('about.reasons.expertise') }}</p>
            </div>
            <div class="rounded-3xl bg-white p-6 shadow-sm">
              <h3 class="font-semibold text-slate-900 mb-2">Responsible</h3>
              <p class="text-slate-600">{{ t('about.reasons.responsible') }}</p>
            </div>
          </div>
        </div>
        <div class="grid gap-6 sm:grid-cols-2">
          <div class="overflow-hidden rounded-3xl shadow-lg">
            <img src="/src/assets/Rwanda Leopard.jpg" alt="Rwanda leopard" class="h-full w-full object-cover" />
          </div>
          <div class="overflow-hidden rounded-3xl shadow-lg">
            <img src="/src/assets/Land of a thousand.jpg" alt="Land of a thousand hills" class="h-full w-full object-cover" />
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="bg-white py-16">
    <div class="mx-auto max-w-6xl px-6">
      <div class="grid gap-8 lg:grid-cols-3 text-center">
        <div class="rounded-3xl bg-emerald-500/10 p-10">
          <p class="text-5xl font-bold text-emerald-600">12+</p>
          <p class="mt-3 text-slate-600">{{ t('about.stats.experience') }}</p>
        </div>
        <div class="rounded-3xl bg-emerald-500/10 p-10">
          <p class="text-5xl font-bold text-emerald-600">50+</p>
          <p class="mt-3 text-slate-600">{{ t('about.stats.tours') }}</p>
        </div>
        <div class="rounded-3xl bg-emerald-500/10 p-10">
          <p class="text-5xl font-bold text-emerald-600">100%</p>
          <p class="mt-3 text-slate-600">{{ t('about.stats.guided') }}</p>
        </div>
      </div>
    </div>
  </section>
</template>