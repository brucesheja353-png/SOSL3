<script setup>
import { t } from '../langStore.js'
</script>

<template>
  <section class="mt-16 bg-slate-50 py-16">
    <div class="mx-auto max-w-6xl px-6">
      <!-- Hero -->
      <div class="text-center mb-16">
        <p class="text-sm uppercase tracking-[0.4em] text-emerald-600 mb-4">{{ t('nav.destination') }}</p>
        <h1 class="text-4xl md:text-5xl font-bold text-green-900 mb-4">{{ t('destination.title') }}</h1>
        <p class="max-w-2xl mx-auto text-gray-600 text-lg">{{ t('destination.description') }}</p>
      </div>

      <!-- Province Cards Grid -->
      <div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        <!-- Northern Province -->
        <article class="rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition hover:-translate-y-2 bg-white">
          <div class="relative h-56 overflow-hidden">
            <img src="/north.png" alt="Northern Province" class="w-full h-full object-cover">
            <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
          </div>
          <div class="p-6">
            <h2 class="text-2xl font-bold text-green-900 mb-2">{{ t('destination.cards.northern.title') }}</h2>
            <p class="text-gray-600 mb-6">{{ t('destination.cards.northern.copy') }}</p>
            <div class="space-y-2 mb-6">
              <div v-for="highlight in t('provinces.northern.highlights')" :key="highlight" class="flex items-start gap-2 text-sm text-gray-700">
                <span class="text-green-600 font-bold">✓</span>
                <span>{{ highlight }}</span>
              </div>
            </div>
            <a href="/northern" class="inline-block bg-green-600 text-white font-semibold px-6 py-2 rounded-full hover:bg-green-700 transition">View →</a>
          </div>
        </article>

        <!-- Western Province -->
        <article class="rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition hover:-translate-y-2 bg-white">
          <div class="relative h-56 overflow-hidden">
            <img src="/west.png" alt="Western Province" class="w-full h-full object-cover">
            <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
          </div>
          <div class="p-6">
            <h2 class="text-2xl font-bold text-green-900 mb-2">{{ t('destination.cards.western.title') }}</h2>
            <p class="text-gray-600 mb-6">{{ t('destination.cards.western.copy') }}</p>
            <div class="space-y-2 mb-6">
              <div v-for="highlight in t('provinces.western.highlights')" :key="highlight" class="flex items-start gap-2 text-sm text-gray-700">
                <span class="text-blue-600 font-bold">✓</span>
                <span>{{ highlight }}</span>
              </div>
            </div>
            <a href="/western" class="inline-block bg-green-600 text-white font-semibold px-6 py-2 rounded-full hover:bg-green-700 transition">View →</a>
          </div>
        </article>

        <!-- Eastern Province -->
        <article class="rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition hover:-translate-y-2 bg-white">
          <div class="relative h-56 overflow-hidden">
            <img src="/east.png" alt="Eastern Province" class="w-full h-full object-cover">
            <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
          </div>
          <div class="p-6">
            <h2 class="text-2xl font-bold text-green-900 mb-2">{{ t('destination.cards.eastern.title') }}</h2>
            <p class="text-gray-600 mb-6">{{ t('destination.cards.eastern.copy') }}</p>
            <div class="space-y-2 mb-6">
              <div v-for="highlight in t('provinces.eastern.highlights')" :key="highlight" class="flex items-start gap-2 text-sm text-gray-700">
                <span class="text-orange-600 font-bold">✓</span>
                <span>{{ highlight }}</span>
              </div>
            </div>
            <a href="/eastern" class="inline-block bg-green-600 text-white font-semibold px-6 py-2 rounded-full hover:bg-green-700 transition">View →</a>
          </div>
        </article>

        <!-- Southern Province -->
        <article class="rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition hover:-translate-y-2 bg-white">
          <div class="relative h-56 overflow-hidden">
            <img src="/south.png" alt="Southern Province" class="w-full h-full object-cover">
            <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
          </div>
          <div class="p-6">
            <h2 class="text-2xl font-bold text-green-900 mb-2">{{ t('destination.cards.southern.title') }}</h2>
            <p class="text-gray-600 mb-6">{{ t('destination.cards.southern.copy') }}</p>
            <div class="space-y-2 mb-6">
              <div v-for="highlight in t('provinces.southern.highlights')" :key="highlight" class="flex items-start gap-2 text-sm text-gray-700">
                <span class="text-green-600 font-bold">✓</span>
                <span>{{ highlight }}</span>
              </div>
            </div>
            <a href="/southern" class="inline-block bg-green-600 text-white font-semibold px-6 py-2 rounded-full hover:bg-green-700 transition">View →</a>
          </div>
        </article>

        <!-- Kigali City -->
        <article class="rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition hover:-translate-y-2 bg-white md:col-span-2 lg:col-span-1">
          <div class="relative h-56 overflow-hidden">
            <img src="/kigali.png" alt="Kigali City" class="w-full h-full object-cover">
            <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
          </div>
          <div class="p-6">
            <h2 class="text-2xl font-bold text-green-900 mb-2">{{ t('destination.cards.kigali.title') }}</h2>
            <p class="text-gray-600 mb-6">{{ t('destination.cards.kigali.copy') }}</p>
            <div class="space-y-2 mb-6">
              <div v-for="highlight in t('provinces.kigali.highlights')" :key="highlight" class="flex items-start gap-2 text-sm text-gray-700">
                <span class="text-slate-600 font-bold">✓</span>
                <span>{{ highlight }}</span>
              </div>
            </div>
            <a href="/kigali" class="inline-block bg-green-600 text-white font-semibold px-6 py-2 rounded-full hover:bg-green-700 transition">View →</a>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>