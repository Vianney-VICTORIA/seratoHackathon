<template>
  <div id="serato">
    <div class="wrapperLibrary">
      <SeratoLibrary />
    </div>
    <div class="wrapperCanvas">
      <div v-for="(item, index) in layoutAreaItems" :key="index">
        <p>{{item}}</p>
      </div>
      <SeratoController />
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import SeratoLibrary from '@/components/SeratoLibrary.vue';
import SeratoController from '@/components/SeratoController.vue';

export default {
  name: 'Serato',
  components: {
    SeratoLibrary,
    SeratoController,
  },
  computed: {
    layoutAreaItems() {
      return this.$store.state.layoutArea;
    },
  },
};
</script>

<style lang="scss">

.wrapperLibrary{
  display: inline-block;
  border: 1px solid aquamarine;
  height: 80vh;
  min-height: 80vh;
  max-height: 80vh;
  width:10vw;
  margin-right: 15px;
  position: relative;
  top: 0;
  overflow: scroll;
}

.wrapperCanvas{
  display: inline-block;
  border: 1px solid coral;
  height: 80vh;
  min-height: 80vh;
  max-height: 80vh;
  width:80vw;
  position: relative;
  top: 0;
  overflow: scroll;
}


</style>
