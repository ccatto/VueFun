<!-- vue-fun/src/components/layout/Footer.vue -->

<script setup>
import pkg from '../../../package.json'; // '../../package.json'

const version = pkg.version;
</script>

<template>
  <footer class="bg-slate-800 text-center p-4">
    <p class="text-slate-50">
      &copy; 2025 Vue Fun App Built by
      <a href="https://www.chriscatto.com/" target="_blank" rel="noopener noreferrer">
        Chris Catto
      </a>
      to explore Vue&nbsp;<span className="text-center text-sm text-slate-400 dark:text-slate-400">
        (v{{ version }})
      </span>
    </p>
    <br />
    <hr />
  </footer>
</template>
