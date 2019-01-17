<template>
  <div>
    <v-layout row wrap>
      <v-flex xs3>
        <SeratoLibrary />
      </v-flex>
      <v-flex xs9 class="text-xs-right">
        <v-card dark color="background" class="cardContainer">
          <div v-for="items in layoutAreaItems">
            <div v-for="item in items">
              <vue-draggable-resizable :parent="false"  :draggable="true" v-if="seratocomponents[item]" >
                <div class="item-component-img" :style="{ backgroundImage: 'url(' + seratocomponents[item].src + ')' }"></div>
                <div class="removeItem"></div>
                <div class="changeBackground"></div>
              </vue-draggable-resizable>
            </div>
          </div>
        </v-card>
        <v-btn fab dark small color="purple">
          <v-icon dark >folder_shared</v-icon>
        </v-btn>
        <v-btn fab dark small color="purple">
          <v-icon dark >android</v-icon>
        </v-btn>
        <v-btn fab dark small color="purple">
          <v-icon dark >save</v-icon>
        </v-btn>
      </v-flex>
    </v-layout>
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
.cardContainer{
  height: 80vh;
}
.item-component-img{
  height: 100%;
  width: 100%;
  background-repeat: no-repeat;
  background-size: contain;
  display: block;
}


</style>
