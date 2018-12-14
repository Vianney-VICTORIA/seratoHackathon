<template>
  <div class="wrapperComponent">
    <h3>Inputs</h3>
    <ul v-for="input in seratocomponents.inputs">
      <div v-draggable="draggableValue">
        <div :ref="handleId">
            <img :src="input.src" v-bind:alt="input.name">
        </div>
      </div>
    </ul>
    <h3>Outputs</h3>
    <ul v-for="output in seratocomponents.outputs">
      <div v-draggable="draggableValue">
        <div :ref="handleId">
          <img :src="output.src" v-bind:alt="output.name">
        </div>
      </div>
    </ul>
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
