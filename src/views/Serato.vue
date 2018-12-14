<template>
  <div id="serato">
    <h1>UX Tool to design Hardware</h1>

    <div v-draggable="draggableValue">
      <div :ref="handleId">
        <img src="" alt="move">
      </div>
      drag and drop using handler
    </div>
  </div>
</template>


<script type="text/ecmascript-6">
  import { Draggable } from 'draggable-vue-directive'
  export default {
    directives: {
      Draggable
    },
    data() {
      return {
        handleId: "handle-id",
        draggableValue: {}
    }
    },
    mounted() {
      this.draggableValue.handle = this.$refs[this.handleId];
      this.draggableValue.onPositionChange = this.onPosChanged;
    },
    methods: {
      onPosChanged: function(pos) {
        // console.log("left corner", pos.x);
        // console.log("top corner", pos.y);
      }
    }
  }
</script>

<style>

</style>
