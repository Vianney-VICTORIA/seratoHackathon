<template>
  <div class="wrapperComponent">
    <h2 v-bind:class="seratocomponents.input[0].name">Component Library</h2>
  </div>
</template>

<script>

import seratocomponents from '../assets/data/seratocomponents.js';

export default {
  name: 'SeratoLibrary',
  data() {
    return {
      seratocomponents,
    }
  }
};

</script>

<style>

</style>
