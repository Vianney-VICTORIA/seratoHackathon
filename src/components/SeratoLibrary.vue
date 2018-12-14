<template>

  <div class="wrapperComponent">
    <h2 v-bind:class="seratocomponents.input[0].src">Component Library</h2>
    <div v-draggable="draggableValue">
      <div :ref="handleId">
        <img :src="seratocomponents.input[0].src" alt="move">
      </div>
      drag and drop using handler
    </div>
  </div>

</template>

<script type="text/ecmascript-6">
import seratocomponents from '../assets/seratocomponents.js';
import { Draggable } from 'draggable-vue-directive';

export default {
  name: 'SeratoLibrary',
  directives: {
    Draggable,
  },
  data() {
    return {
      seratocomponents,
      handleId: "handle-id",
      draggableValue: {},
    };
  },
  mounted() {
    this.draggableValue.handle = this.$refs[this.handleId];
    this.draggableValue.onPositionChange = this.onPosChanged;
  },
  methods: {
    onPosChanged: function (pos) {
      console.log('left corner', pos.x);
      console.log('top corner', pos.y);
    },
  },
};
</script>

<style>

</style>
