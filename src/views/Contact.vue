<script setup>
import { t } from '../langStore.js'
</script>

<template>
  <section class="bg-slate-950 text-white py-20 px-6 mt-16">
    <div class="mx-auto max-w-6xl">
      <div class="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] items-center">
        <div>
          <p class="text-sm uppercase tracking-[0.35em] text-emerald-300 mb-4">{{ t('contact.intro') }}</p>
          <h1 class="text-4xl md:text-5xl font-bold mb-6">{{ t('contact.intro') }}</h1>
          <p class="max-w-2xl text-slate-300 mb-8">{{ t('contact.description') }}</p>
        </div>
        <div class="rounded-3xl bg-white/10 p-8 backdrop-blur-lg border border-white/10 shadow-2xl">
          <div class="space-y-5">
            <div>
              <h2 class="text-xl font-semibold text-white">{{ t('contact.emailTitle') }}</h2>
              <p class="text-slate-300">brucesheja353@gmail.com</p>
            </div>
            <div>
              <h2 class="text-xl font-semibold text-white">{{ t('contact.phoneTitle') }}</h2>
              <p class="text-slate-300">+250 788 123 456</p>
            </div>
            <div>
              <h2 class="text-xl font-semibold text-white">{{ t('contact.officeTitle') }}</h2>
              <p class="text-slate-300">Kigali, Rwanda</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="bg-white py-16 px-6">
    <div class="mx-auto max-w-6xl">
      <div class="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <div class="rounded-3xl bg-slate-950 p-8 text-white shadow-xl">
          <h2 class="text-3xl font-bold mb-6">Let's talk details</h2>
          <p class="text-slate-300 mb-8">Tell us about your travel plans and we’ll recommend the best experiences for your stay.</p>
          <div class="space-y-6">
            <div class="rounded-3xl bg-slate-900 p-6">
              <h3 class="font-semibold mb-2">{{ t('contact.hoursTitle') }}</h3>
              <p class="text-slate-400">Mon - Fri: 9:00 AM – 6:00 PM</p>
            </div>
            <div class="rounded-3xl bg-slate-900 p-6">
              <h3 class="font-semibold mb-2">{{ t('contact.responseTitle') }}</h3>
              <p class="text-slate-400">We usually reply within 24 hours.</p>
            </div>
            <div class="rounded-3xl bg-slate-900 p-6">
              <h3 class="font-semibold mb-2">{{ t('contact.quoteTitle') }}</h3>
              <p class="text-slate-400">Ask for family, couple, or group packages.</p>
            </div>
          </div>
        </div>
        <form class="rounded-3xl bg-slate-50 p-8 shadow-xl">
          <div class="grid gap-6">
            <div>
              <label class="block text-sm font-medium text-slate-700 mb-2" for="name">{{ t('contact.name') }}</label>
              <input id="name" type="text" :placeholder="t('contact.name')" class="w-full rounded-3xl border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none transition focus:border-emerald-500" />
            </div>
            <div>
              <label class="block text-sm font-medium text-slate-700 mb-2" for="email">{{ t('contact.email') }}</label>
              <input id="email" type="email" :placeholder="t('contact.email')" class="w-full rounded-3xl border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none transition focus:border-emerald-500" />
            </div>
            <div>
              <label class="block text-sm font-medium text-slate-700 mb-2" for="message">Message</label>
              <textarea id="message" rows="6" :placeholder="t('contact.messagePlaceholder')" class="w-full rounded-3xl border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none transition focus:border-emerald-500"></textarea>
            </div>
            <button type="submit" class="inline-flex w-full justify-center rounded-full bg-emerald-600 px-6 py-3 text-sm font-semibold uppercase tracking-wide text-white transition hover:bg-emerald-500">Send message</button>
          </div>
        </form>
      </div>
    </div>
  </section>
</template>