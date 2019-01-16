<template>
  <div>
    <v-navigation-drawer
      v-model="drawer"
      hide-overlay
      stateless
    >
      <v-toolbar flat class="transparent">
        <v-list class="pa-0">
          <v-list-tile avatar>
            <v-list-tile-avatar>
              <img src="https://randomuser.me/api/portraits/men/85.jpg">
            </v-list-tile-avatar>

            <v-list-tile-content>
              <v-list-tile-title>John Smith</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list>
      </v-toolbar>

      <v-list class="pt-0" dense>
        <v-divider></v-divider>

        <v-list-tile
          v-for="item in items"
          :key="item.title"
        >
          <v-list-tile-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-tile-action>

          <v-list-tile-content>
            <v-list-tile-title>{{ item.title }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <form
        id="libraryForm"
        @submit="submitItemToLayout"
        >
      <div class="wrapperElmt" v-for="seratocomponent in seratocomponents ">
        <input class="css-checkbox" type="checkbox" :id="seratocomponent.name" v-model="itemComponents" :value="seratocomponent.id">
        <label class="css-label" :for="seratocomponent.name" :style="{ backgroundImage: 'url(' + seratocomponent.src + ')' }" ></label>
      </div>
      <input type="submit" class="submit-button" placeholder="Submit">
    </form>
  </div>
</template>

<script type="text/ecmascript-6">

import seratocomponents from '../assets/seratocomponents';

export default {

  name: 'SeratoLibrary',
  data() {
    return {
      seratocomponents,
      itemComponents: [],
      drawer: true,
      items: [
        { title: 'Home', icon: 'dashboard' },
        { title: 'About', icon: 'question_answer' }
      ],
      mini: true,
      right: null
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
  display: none;
}

.css-label{
  padding-left: 20px;
  display: flex;
  width: 50px;
  height: 50px;
  background-repeat: no-repeat;
  background-size: contain;
}

input[type=checkbox]:checked + label {
  background-position: 0 0;
  border: 3px solid red;
}

</style>
