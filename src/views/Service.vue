<script setup>
import { t } from '../langStore.js'
</script>

<template>
  <section class="mt-16 bg-white py-16">
    <div class="mx-auto max-w-6xl px-6">
      <div class="text-center mb-12">
        <p class="text-sm uppercase tracking-[0.4em] text-emerald-600 mb-4">{{ t('service.title') }}</p>
        <h1 class="text-4xl md:text-5xl font-bold text-green-900 mb-4">{{ t('service.title') }}</h1>
        <p class="max-w-3xl mx-auto text-gray-600">{{ t('service.intro') }}</p>
      </div>

      <div class="grid gap-8 lg:grid-cols-3 mb-12">
        <article class="rounded-3xl border border-slate-200 p-8 shadow-sm hover:shadow-lg transition">
          <h2 class="text-2xl font-semibold text-green-900 mb-4">Safari Adventures</h2>
          <p class="text-slate-600">{{ t('service.cards.safari') }}</p>
        </article>
        <article class="rounded-3xl border border-slate-200 p-8 shadow-sm hover:shadow-lg transition">
          <h2 class="text-2xl font-semibold text-green-900 mb-4">Cultural Tours</h2>
          <p class="text-slate-600">{{ t('service.cards.culture') }}</p>
        </article>
        <article class="rounded-3xl border border-slate-200 p-8 shadow-sm hover:shadow-lg transition">
          <h2 class="text-2xl font-semibold text-green-900 mb-4">Custom Trips</h2>
          <p class="text-slate-600">{{ t('service.cards.custom') }}</p>
        </article>
      </div>

      <div class="grid gap-8 lg:grid-cols-3">
        <div class="rounded-3xl bg-green-50 p-8 text-center shadow-lg">
          <p class="text-4xl font-bold text-green-900 mb-3">24/7</p>
          <p class="text-gray-600">{{ t('service.stats.support') }}</p>
        </div>
        <div class="rounded-3xl bg-green-50 p-8 text-center shadow-lg">
          <p class="text-4xl font-bold text-green-900 mb-3">{{ t('service.stats.sustainable') }}</p>
          <p class="text-gray-600">{{ t('service.stats.sustainable') }}</p>
        </div>
        <div class="rounded-3xl bg-green-50 p-8 text-center shadow-lg">
          <p class="text-4xl font-bold text-green-900 mb-3">{{ t('service.stats.flexible') }}</p>
          <p class="text-gray-600">{{ t('service.stats.flexible') }}</p>
        </div>
      </div>
    </div>
  </section>
</template>