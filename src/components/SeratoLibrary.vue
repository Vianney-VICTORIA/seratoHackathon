<template>
  <div>
    <h3>Inputs</h3>
    <div class="wrapperComponent">
      <div class="item-component" v-for="input in seratocomponents.inputs">
        <div v-draggable="draggableValue">
          <div :ref="handleId">
            <div class="item-component-img" v-bind:style="{ backgroundImage: 'url(' + input.src + ')' }" v-bind:alt="input.name"></div>
          </div>
        </div>
      </div>
    </div>
    <h3>Outputs</h3>
    <div class="wrapperComponent">
      <div class="item-component" v-for="output in seratocomponents.outputs">
        <div v-draggable="draggableValue">
          <div :ref="handleId">
            <div class="item-component-img" v-bind:style="{ backgroundImage: 'url(' + output.src + ')' }" v-bind:alt="output.name"></div>
          </div>
        </div>
      </div>
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
h3{
  display: block;
}
.wrapperComponent{
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  flex-wrap: wrap;
  height: 100%;
  width: 100%;
}
.item-component{
  width: 50px;
  height: 50px;
  margin-bottom: 5px;
}
.item-component-img{
  width: 50px;
  height: 50px;
  background-size: cover;
  background-position: center;
  z-index: 99999;
}
</style>
