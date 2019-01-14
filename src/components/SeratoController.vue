<template>
  <div>
    <div class="wrapperElmt">
    </div>
  </div>
</template>

<script>
export default {
  name: 'SeratoController',
  data: function () {
    return {
      itemComponent: [],
    };
  },
  computed: {
    layoutAreaItems() {
      return this.$store.state.layoutArea;
    },
  },
};
</script>

<style>

</style>
