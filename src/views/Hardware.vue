<template>
  <div id="hardware">
    <vue-draggable-resizable v-for="component in seratocomponents.inputs" :resizable="true">
        <div class="card-header">
            <div class="item-component-img" v-bind:style="{ backgroundImage: 'url(' + component.src + ')' }" v-bind:alt="component.name"></div>
        </div>
    </vue-draggable-resizable>
  </div>
</template>

<script type="text/ecmascript-6">
import Vue from 'vue';
import VueDraggableResizable from 'vue-draggable-resizable';
import seratocomponents from '../assets/seratocomponents.js';
Vue.component('vue-draggable-resizable', VueDraggableResizable);

export default {
  name: 'hardware',
    components: {
      VueDraggableResizable
    },
    methods: {
      onResize: function (x, y, width, height) {
        this.x = x
        this.y = y
        this.width = width
        this.height = height
      },
      onDrag: function (x, y) {
        this.x = x
        this.y = y
      },
    },
    data () {
      return {
        seratocomponents,
        width: 0,
        height: 0,
        x: 0,
        y: 0
      }
  },
};
</script>
<style>
  .item-component-img{
    height: 50px;
    background-repeat: no-repeat;
    background-size: cover;
    display: block;
  }
</style>
