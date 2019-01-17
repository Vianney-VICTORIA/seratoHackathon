<template>
  <div>
    <v-navigation-drawer
      stateless
      value="true"
    >
      <v-list>
        <v-list-tile>
          <v-list-tile-action>
            <v-icon>layers</v-icon>
          </v-list-tile-action>
          <v-list-tile-title>Library</v-list-tile-title>
        </v-list-tile>

        <v-list-group
          prepend-icon="settings_input_component"
          :value="false"
        >
          <v-list-tile slot="activator">
            <v-list-tile-title>Back Parts</v-list-tile-title>
          </v-list-tile>

          <v-list-group
            no-action
            sub-group
            :value="false"
          >
            <v-list-tile slot="activator">
              <v-list-tile-title>Inputs</v-list-tile-title>
            </v-list-tile>
            <div v-for="(inputs, j) in seratocomponentsLibrary[0]"
              :key="j"
            >
              <v-list-tile
                v-for="(input, i) in inputs"
                :key="i"
                @click="submitItemToLayout(input.id)"
                :id="input.id"
              >
                <v-list-tile-avatar>
                  <img :src="input.src">
                </v-list-tile-avatar>
                  <v-list-tile-title v-text="input.name"></v-list-tile-title>
              </v-list-tile>
            </div>
          </v-list-group>
          <v-list-group
            no-action
            sub-group
            :value="false"
          >
            <v-list-tile slot="activator">
              <v-list-tile-title>Outputs</v-list-tile-title>
            </v-list-tile>
            <div v-for="outputs in seratocomponentsLibrary[1]">
              <v-list-tile
                v-for="(output, i) in outputs"
                @click="submitItemToLayout(output.id)"
                :id="output.id"
              >
                <v-list-tile-avatar>
                  <img :src="output.src">
                </v-list-tile-avatar>
                <v-list-tile-title v-text="output.name"></v-list-tile-title>
              </v-list-tile>
            </div>
          </v-list-group>
        </v-list-group>
        <v-list-group
          prepend-icon="adjust"
          :value="false"
        >
          <v-list-tile slot="activator">
            <v-list-tile-title>Front Panel</v-list-tile-title>
          </v-list-tile>

          <v-list-group
            no-action
            sub-group
            :value="false"
          >
            <v-list-tile slot="activator">
              <v-list-tile-title>Bases</v-list-tile-title>
            </v-list-tile>
            <div v-for="bases in seratocomponentsLibrary[2]">
              <v-list-tile
                v-for="base in bases"
                @click="submitItemToLayout(base.id)"
                :id="base.id"
              >
                <v-list-tile-avatar>
                  <img :src="base.src">
                </v-list-tile-avatar>
                <v-list-tile-title v-text="base.name"></v-list-tile-title>
              </v-list-tile>
            </div>
          </v-list-group>

          <v-list-group
            no-action
            sub-group
            :value="false"
          >
            <v-list-tile slot="activator">
              <v-list-tile-title>Buttons</v-list-tile-title>
            </v-list-tile>
            <div v-for="buttons in seratocomponentsLibrary[3]">
              <v-list-tile
                v-for="button in buttons"
                @click="submitItemToLayout(button.id)"
                :id="button.id"
              >
                <v-list-tile-avatar>
                  <img :src="button.src">
                </v-list-tile-avatar>
                <v-list-tile-title v-text="button.name"></v-list-tile-title>
              </v-list-tile>
            </div>
          </v-list-group>

          <v-list-group
            no-action
            sub-group
            :value="false"
          >
            <v-list-tile slot="activator">
              <v-list-tile-title>Controllers</v-list-tile-title>
            </v-list-tile>
            <div v-for="controls in seratocomponentsLibrary[4]">
              <v-list-tile
                v-for="control in controls"
                @click="submitItemToLayout(control.id)"
                :id="control.id"
              >
                <v-list-tile-avatar>
                  <img :src="control.src">
                </v-list-tile-avatar>
                <v-list-tile-title v-text="control.name"></v-list-tile-title>
              </v-list-tile>
            </div>
          </v-list-group>

          <v-list-group
            no-action
            sub-group
            :value="false"
          >
            <v-list-tile slot="activator">
              <v-list-tile-title>Pads</v-list-tile-title>
            </v-list-tile>
            <div v-for="pads in seratocomponentsLibrary[5]">
              <v-list-tile
                v-for="pad in pads"
                @click="submitItemToLayout(pad.id)"
                :id="pad.id"
              >
                <v-list-tile-avatar>
                  <img :src="pad.src">
                </v-list-tile-avatar>
                <v-list-tile-title v-text="pad.name"></v-list-tile-title>
              </v-list-tile>
            </div>
          </v-list-group>

          <v-list-group
            no-action
            sub-group
            :value="false"
          >
            <v-list-tile slot="activator">
              <v-list-tile-title>FX Tabs</v-list-tile-title>
            </v-list-tile>
            <div v-for="fxTabs in seratocomponentsLibrary[6]">
              <v-list-tile
                v-for="fxTab in fxTabs"
                @click="submitItemToLayout(fxTab.id)"
                :id="fxTab.id"
              >
                <v-list-tile-avatar>
                  <img :src="fxTab.src">
                </v-list-tile-avatar>
                <v-list-tile-title v-text="fxTab.name"></v-list-tile-title>
              </v-list-tile>
            </div>
          </v-list-group>

          <v-list-group
            no-action
            sub-group
            :value="false"
          >
            <v-list-tile slot="activator">
              <v-list-tile-title>Vinyls</v-list-tile-title>
            </v-list-tile>
            <div v-for="vinyls in seratocomponentsLibrary[7]">
              <v-list-tile
                v-for="vinyl in vinyls"
                @click="submitItemToLayout(vinyl.id)"
                :id="vinyl.id"
              >
                <v-list-tile-avatar>
                  <img :src="vinyl.src">
                </v-list-tile-avatar>
                <v-list-tile-title v-text="vinyl.name"></v-list-tile-title>
              </v-list-tile>
            </div>
          </v-list-group>

          <v-list-group
            no-action
            sub-group
            :value="false"
          >
            <v-list-tile slot="activator">
              <v-list-tile-title>Screens</v-list-tile-title>
            </v-list-tile>
            <div v-for="screens in seratocomponentsLibrary[8]">
              <v-list-tile
                v-for="screen in screens"
                @click="submitItemToLayout(screen.id)"
                :id="screen.id"
              >
                <v-list-tile-avatar>
                  <img :src="screen.src">
                </v-list-tile-avatar>
                <v-list-tile-title v-text="screen.name"></v-list-tile-title>
              </v-list-tile>
            </div>
          </v-list-group>

          <v-list-group
            no-action
            sub-group
            :value="false"
          >
            <v-list-tile slot="activator">
              <v-list-tile-title>Faders</v-list-tile-title>
            </v-list-tile>
            <div v-for="faders in seratocomponentsLibrary[9]">
              <v-list-tile
                v-for="fader in faders"
                @click="submitItemToLayout(fader.id)"
                :id="fader.id"
              >
                <v-list-tile-avatar>
                  <img :src="fader.src">
                </v-list-tile-avatar>
                <v-list-tile-title v-text="fader.name"></v-list-tile-title>
              </v-list-tile>
            </div>
          </v-list-group>

        </v-list-group>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script type="text/ecmascript-6">

import seratocomponents from '../assets/seratocomponents';
import seratocomponentsLibrary from '../assets/seratocomponentsLibrary';


export default {

  name: 'SeratoLibrary',
  data() {
    return {
      seratocomponents,
      seratocomponentsLibrary,
      itemComponents: [],
      drawer: true,
    };
  },
  methods: {
    submitItemToLayout(id) {
      this.itemComponents = [];
      this.itemComponents.push(id);
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
