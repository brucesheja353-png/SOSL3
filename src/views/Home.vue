<script setup></script>
<template>
  <section class="relative min-h-screen bg-cover bg-center flex items-center justify-center text-white" style="background-image: url('/Hills.jpg');">
    <div class="absolute inset-0 bg-black/60"></div>
    <div class="relative max-w-4xl text-center px-6 py-24">
      <p class="text-sm uppercase tracking-[0.4em] text-emerald-300 mb-4">Discover Rwanda</p>
      <h1 class="text-5xl md:text-6xl font-extrabold leading-tight mb-6">Explore the beauty of a thousand hills</h1>
      <p class="max-w-2xl mx-auto text-lg text-emerald-200 mb-10">From misty mountains to vibrant culture, Rwanda offers unforgettable safaris, inspiring heritage journeys, and authentic local experiences.</p>
      <div class="flex flex-col sm:flex-row justify-center gap-4">
        <a href="/contact" class="inline-flex items-center justify-center rounded-full bg-emerald-500 px-8 py-3 text-sm font-semibold uppercase tracking-wide text-white shadow-lg transition hover:bg-emerald-400">Book a tour</a>
        <a href="/about" class="inline-flex items-center justify-center rounded-full border border-white/30 bg-white/10 px-8 py-3 text-sm font-semibold uppercase tracking-wide text-white transition hover:bg-white/20">Learn more</a>
      </div>
    </div>
  </section>

  <section class="bg-white py-16">
    <div class="mx-auto max-w-6xl px-6">
      <div class="grid gap-8 lg:grid-cols-3">
        <article class="rounded-3xl border border-slate-200 p-8 shadow-sm hover:shadow-lg transition">
          <h2 class="text-2xl font-semibold mb-4 text-slate-900">Wildlife Safaris</h2>
          <p class="text-slate-600">Track mountain gorillas, visit Akagera National Park, and see the Big Five in Rwanda’s stunning conservation reserves.</p>
        </article>
        <article class="rounded-3xl border border-slate-200 p-8 shadow-sm hover:shadow-lg transition">
          <h2 class="text-2xl font-semibold mb-4 text-slate-900">Cultural Journeys</h2>
          <p class="text-slate-600">Connect with local communities, explore traditional villages, and experience the rhythms of Rwanda’s music, crafts, and cuisine.</p>
        </article>
        <article class="rounded-3xl border border-slate-200 p-8 shadow-sm hover:shadow-lg transition">
          <h2 class="text-2xl font-semibold mb-4 text-slate-900">Adventure & Nature</h2>
          <p class="text-slate-600">Hike the Volcanoes, kayak across lakes, and discover lush landscapes that make Rwanda one of Africa’s most beautiful destinations.</p>
        </article>
      </div>
    </div>
  </section>
</template>