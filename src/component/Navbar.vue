<script setup>
import { locale } from '../langStore.js'
import { t, setLocale, getLocaleLabel } from '../langStore.js'

const changeLanguage = (lang) => {
  setLocale(lang)
}
</script>

<template>
<nav class="bg-green-800 text-white px-8 py-4 flex items-center justify-between shadow-lg fixed w-full top-0 z-40">
    <div class="flex items-center gap-6">
        <img src="/visitrwanda.png" alt="visitrwanda" class="h-10"/>
        <span class="text-xl font-bold hidden sm:inline">TEMBERA</span>
    </div>
    
<ul class="flex gap-8 text-sm font-medium">
    <li><a href="/" class="hover:text-yellow-300 transition">{{ t('nav.home') }}</a></li>
    <li><a href="/about" class="hover:text-yellow-300 transition">{{ t('nav.about') }}</a></li>
    <li><a href="/service" class="hover:text-yellow-300 transition">{{ t('nav.service') }}</a></li>
    <li class="relative group">
       <a href="/gallery" class="hover:text-yellow-300 transition">{{ t('nav.gallery') }}<span>▼</span></a>
       <ul class="invisible group-hover:visible opacity-0 group-hover:opacity-100 absolute bg-white text-green-900 rounded shadow w-48 top-full left-0 z-50 transition">
        <li><a href="/photo" class="block px-4 py-2 hover:bg-green-200 text-green-900">{{ t('nav.photos') }}</a></li>
        <li><a href="/videos" class="block px-4 py-2 hover:bg-green-200 text-green-900">{{ t('nav.videos') }}</a></li>
       </ul>
    </li>
    <li class="relative group">
     <a href="/destination" class="hover:text-yellow-300 transition">{{ t('nav.destination') }}<span>▼</span></a>
     <ul class="invisible group-hover:visible opacity-0 group-hover:opacity-100 absolute bg-white text-green-900 rounded shadow w-48 top-full left-0 z-50 transition">
      <li><a href="/northern" class="block px-4 py-2 hover:bg-green-200 text-green-900">{{ t('nav.northern') }}</a></li>
      <li><a href="/western" class="block px-4 py-2 hover:bg-green-200 text-green-900">{{ t('nav.western') }}</a></li>
      <li><a href="/eastern" class="block px-4 py-2 hover:bg-green-200 text-green-900">{{ t('nav.eastern') }}</a></li>
      <li><a href="/southern" class="block px-4 py-2 hover:bg-green-200 text-green-900">{{ t('nav.southern') }}</a></li>
      <li><a href="/kigali" class="block px-4 py-2 hover:bg-green-200 text-green-900">{{ t('nav.kigali') }}</a></li>   
     </ul>
    </li>
    <li><a href="/contact" class="hover:text-yellow-300 transition">{{ t('nav.contact') }}</a></li>
</ul>

<!-- Language Switcher -->
<div class="flex gap-2">
  <button @click="changeLanguage('en')" :class="locale === 'en' ? 'bg-yellow-400 text-green-900' : 'bg-green-700 hover:bg-green-600'" class="px-3 py-1 rounded font-semibold text-xs transition">EN</button>
  <button @click="changeLanguage('fr')" :class="locale === 'fr' ? 'bg-yellow-400 text-green-900' : 'bg-green-700 hover:bg-green-600'" class="px-3 py-1 rounded font-semibold text-xs transition">FR</button>
  <button @click="changeLanguage('rw')" :class="locale === 'rw' ? 'bg-yellow-400 text-green-900' : 'bg-green-700 hover:bg-green-600'" class="px-3 py-1 rounded font-semibold text-xs transition">KIN</button>
</div>
</nav>
    
</template>