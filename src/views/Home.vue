<script setup>
import { t } from '../langStore.js'
</script>
<template>
  <section class="relative min-h-screen bg-cover bg-center flex items-center justify-center text-white" style="background-image: url('/Hills.jpg');">
    <div class="absolute inset-0 bg-black/60"></div>
    <div class="relative max-w-4xl text-center px-6 py-24">
      <p class="text-sm uppercase tracking-[0.4em] text-emerald-300 mb-4">{{ t('home.tagline') }}</p>
      <h1 class="text-5xl md:text-6xl font-extrabold leading-tight mb-6">{{ t('home.title') }}</h1>
      <p class="max-w-2xl mx-auto text-lg text-emerald-200 mb-10">{{ t('home.description') }}</p>
      <div class="flex flex-col sm:flex-row justify-center gap-4">
        <a href="/contact" class="inline-flex items-center justify-center rounded-full bg-emerald-500 px-8 py-3 text-sm font-semibold uppercase tracking-wide text-white shadow-lg transition hover:bg-emerald-400">{{ t('home.book') }}</a>
        <a href="/about" class="inline-flex items-center justify-center rounded-full border border-white/30 bg-white/10 px-8 py-3 text-sm font-semibold uppercase tracking-wide text-white transition hover:bg-white/20">{{ t('home.learn') }}</a>
      </div>
    </div>
  </section>

  <section class="bg-white py-16">
    <div class="mx-auto max-w-6xl px-6">
      <div class="grid gap-8 lg:grid-cols-3">
        <article class="rounded-3xl border border-slate-200 p-8 shadow-sm hover:shadow-lg transition">
          <h2 class="text-2xl font-semibold mb-4 text-slate-900">Safari</h2>
          <p class="text-slate-600">{{ t('home.cards.safari') }}</p>
        </article>
        <article class="rounded-3xl border border-slate-200 p-8 shadow-sm hover:shadow-lg transition">
          <h2 class="text-2xl font-semibold mb-4 text-slate-900">Culture</h2>
          <p class="text-slate-600">{{ t('home.cards.culture') }}</p>
        </article>
        <article class="rounded-3xl border border-slate-200 p-8 shadow-sm hover:shadow-lg transition">
          <h2 class="text-2xl font-semibold mb-4 text-slate-900">Adventure</h2>
          <p class="text-slate-600">{{ t('home.cards.adventure') }}</p>
        </article>
      </div>
    </div>
  </section>
</template>