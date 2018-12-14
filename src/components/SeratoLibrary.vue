<template>
  <div>
    <h3>Inputs</h3>
    <div class="wrapperComponent">
      <div class="item-component" v-for="input in seratocomponents.inputs" >
        <div>
          <div class="item-component-img" v-bind:style="{ backgroundImage: 'url(' + input.src + ')' }" v-bind:alt="input.name"></div>
        </div>
      </div>
    </div>
    <h3>Outputs</h3>
    <div class="wrapperComponent">
      <div class="item-component" v-for="output in seratocomponents.outputs">
        <div>
          <div class="item-component-img" v-bind:style="{ backgroundImage: 'url(' + output.src + ')' }" v-bind:alt="output.name"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import seratocomponents from '../assets/seratocomponents.js';

export default {
  name: 'SeratoLibrary',
  data() {
    return {
      seratocomponents,
    };
  },
  mounted() {

  },
  methods: {
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
