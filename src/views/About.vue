<template>
  <section class="relative bg-[url('/src/assets/Traditional.jpg')] bg-cover bg-center text-white min-h-[70vh] flex items-center">
    <div class="absolute inset-0 bg-black/60"></div>
    <div class="relative mx-auto max-w-6xl px-6 py-24">
      <div class="max-w-3xl">
        <p class="text-sm uppercase tracking-[0.35em] text-emerald-300 mb-4">About Us</p>
        <h1 class="text-4xl md:text-5xl font-bold mb-6">Your gateway to authentic Rwanda experiences</h1>
        <p class="text-lg text-slate-200 max-w-2xl">We are a tourism team dedicated to crafting immersive journeys across Rwanda. From gorilla trekking and national parks to cultural villages and city escapes, our goal is to make every visit unforgettable.</p>
      </div>
    </div>
  </section>

  <section class="bg-slate-50 py-16">
    <div class="mx-auto max-w-6xl px-6">
      <div class="grid gap-12 lg:grid-cols-2 items-center">
        <div>
          <h2 class="text-3xl font-bold text-slate-900 mb-4">Why choose Rwanda?</h2>
          <p class="text-slate-600 mb-6">Rwanda blends abundant wildlife, rich cultural heritage, and safe, welcoming hospitality. We guide travelers to the best sights while designing seamless experiences for every group.</p>
          <div class="space-y-4">
            <div class="rounded-3xl bg-white p-6 shadow-sm">
              <h3 class="font-semibold text-slate-900 mb-2">Personalized itineraries</h3>
              <p class="text-slate-600">We design each tour around your interests, pace, and budget.</p>
            </div>
            <div class="rounded-3xl bg-white p-6 shadow-sm">
              <h3 class="font-semibold text-slate-900 mb-2">Local expertise</h3>
              <p class="text-slate-600">Our guides are born and raised here, with insider knowledge of Rwanda’s landscapes and stories.</p>
            </div>
            <div class="rounded-3xl bg-white p-6 shadow-sm">
              <h3 class="font-semibold text-slate-900 mb-2">Responsible travel</h3>
              <p class="text-slate-600">We support conservation, community-led projects, and sustainable tourism initiatives.</p>
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
          <p class="mt-3 text-slate-600">Years of experience</p>
        </div>
        <div class="rounded-3xl bg-emerald-500/10 p-10">
          <p class="text-5xl font-bold text-emerald-600">50+</p>
          <p class="mt-3 text-slate-600">Curated tour options</p>
        </div>
        <div class="rounded-3xl bg-emerald-500/10 p-10">
          <p class="text-5xl font-bold text-emerald-600">100%</p>
          <p class="mt-3 text-slate-600">Local-guided adventures</p>
        </div>
      </div>
    </div>
  </section>
</template>