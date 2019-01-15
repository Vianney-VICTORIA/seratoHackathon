<template>
  <div>
    <form
        id="libraryForm"
        @submit="submitItemToLayout"
        >
      <div class="wrapperElmt" v-for="seratocomponent in seratocomponents ">
        <label class="css-label" :for="seratocomponent.name" :style="{ backgroundImage: 'url(' + seratocomponent.src + ')' }" ></label>
        <input class="css-checkbox" type="checkbox" :id="seratocomponent.name" v-model="itemComponents" :value="seratocomponent.id">
      </div>
      <input type="submit" class="submit-button" placeholder="Submit">
    </form>

  </div>
</template>

<script type="text/ecmascript-6">

import seratocomponents from '../assets/seratocomponents';

export default {

  name: 'SeratoLibrary',
  data () {
    return {
      seratocomponents,
      itemComponents: [],
    };
  },
  methods: {
    submitItemToLayout() {
      this.$store.commit('addLayerToLayout', this.itemComponents);
    },
  },

};
</script>

<style>

input[type=checkbox] {
  display: block;
}

.css-label{
  padding-left: 20px;
  display: flex;
  width: 50px;
  height: 50px;
  background-repeat: no-repeat;
  background-size: contain;
}

input[type=checkbox].css-checkbox:checked + label.css-label {
  background-position: 0 0;
  border: 3px solid #2FBCDF;
}

</style>
