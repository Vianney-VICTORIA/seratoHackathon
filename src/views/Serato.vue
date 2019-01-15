<template>
  <div id="serato">
    <div class="wrapperLibrary">
      <SeratoLibrary />
    </div>
    <div class="wrapperCanvas">
      <div v-for="items in layoutAreaItems">
        <div v-for="item in items">
          <div v-if="seratocomponents[item]">
            <div class="css-label" :for="seratocomponents[item].id" :style="{ backgroundImage: 'url(' + seratocomponents[item].src + ')' }" ></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import SeratoLibrary from '@/components/SeratoLibrary.vue';
import seratocomponents from '../assets/seratocomponents';

export default {
  name: 'Serato',
  components: {
    SeratoLibrary,
  },
  computed: {
    layoutAreaItems() {
      return this.$store.state.layoutArea;
    },
  },
  data () {
    return {
      seratocomponents
    }
  }
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
