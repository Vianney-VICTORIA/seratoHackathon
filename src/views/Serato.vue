<template>
  <div id="serato">
    <div class="wrapperLibrary">
      <SeratoLibrary />
    </div>
    <div class="wrapperCanvas">
      <div v-for="items in layoutAreaItems">
        <div v-for="item in items">
          <vue-draggable-resizable :parent="false"  :draggable="true" v-if="seratocomponents[item]" >
            <div class="item-component-img" :style="{ backgroundImage: 'url(' + seratocomponents[item].src + ')' }"></div>
            <div class="removeItem"></div>
            <div class="changeBackground"></div>
          </vue-draggable-resizable>
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import Vue from 'vue';
import SeratoLibrary from '@/components/SeratoLibrary.vue';
import VueDraggableResizable from 'vue-draggable-resizable';
import seratocomponents from '../assets/seratocomponents';

Vue.component('vue-draggable-resizable', VueDraggableResizable);


export default {
  name: 'Serato',
  components: {
    SeratoLibrary,
    VueDraggableResizable,
  },
  computed: {
    layoutAreaItems() {
      return this.$store.state.layoutArea;
    },
  },
  data() {
    return {
      seratocomponents,
    };
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

.item-component-img{
  height: 100%;
  width: 100%;
  background-repeat: no-repeat;
  background-size: contain;
  display: block;
}


</style>
