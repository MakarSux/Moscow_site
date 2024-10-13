<script setup>

import { RouterView } from 'vue-router';

import HeaderComp from './components/HeaderComp.vue'
import FooterComp from './components/FooterComp.vue'

</script>

<template>
  <header>
    <HeaderComp />
  </header>

  <main>
    <RouterView />
  </main>

  <footer>
    <FooterComp />
  </footer>
</template>

<style lang="scss">

</style>
