<template>
  <div>
    <h3>Inputs</h3>
    <dnd-grid-container
      :layout.sync="layout"
      :cellSize="cellSize"
      :maxColumnCount="maxColumnCount"
      :maxRowCount="maxRowCount"
      :margin="margin"
      :bubbleUp="bubbleUp"
    >
      <dnd-grid-box
        boxId="settings"
        dragSelector="div.card-header"
      >
        <div class="card demo-box">
          <div class="card-header">
            Settings
          </div>
          <div class="card-body">
            <div class="form-group row">
              <label for="settings-margin-input" class="col-sm-4 col-form-label">Margin</label>
              <div class="col-sm-8">
                <input class="form-control" type="number" v-model.number="margin" id="settings-margin-input">
              </div>
            </div>
            <div class="form-group row">
              <label for="settings-grid-size-w-input" class="col-sm-4 col-form-label">Cell Size</label>
              <div class="col-sm-4">
                <input class="form-control" type="number" v-model.number="cellSize.w" id="settings-grid-size-w-input">
              </div>
              <div class="col-sm-4">
                <input class="form-control" type="number" v-model.number="cellSize.h">
              </div>
            </div>
            <div class="form-group row">
              <label for="settings-bubble-up-input" class="col-sm-4 col-form-label">Bubble Up</label>
              <div class="col-sm-8">
                <input type="checkbox" v-model="bubbleUp" id="settings-bubble-up-input">
              </div>
            </div>
            <button class="btn btn-success" @click="boxCount++">Add Box</button>
            <button class="btn btn-danger" @click="boxCount = Math.max(0, boxCount-1)">Remove Box</button>
          </div>
        </div>
      </dnd-grid-box>
      <dnd-grid-box
        v-for="number in seratocomponents.inputs"
        :boxId="number.id"
        :key="number.id"
        dragSelector="div.card-header"
      >
        <div class="card demo-box">
          <div class="card-header">
            <div class="item-component-img" v-bind:style="{ backgroundImage: 'url(' + number.src + ')' }" v-bind:alt="number.name"></div>
          </div>
        </div>
      </dnd-grid-box>
    </dnd-grid-container>
  </div>
</template>

<script type="text/ecmascript-6">
import { Container, Box } from '@dattn/dnd-grid';
import seratocomponents from '../assets/seratocomponents.js';

export default {
  components: {
    DndGridContainer: Container,
    DndGridBox: Box
  },

  data () {
    return {
      seratocomponents,
      cellSize: {
        w: 100,
        h: 100
      },
      dragableItems: [],
      maxColumnCount: 10,
      maxRowCount: Infinity,
      bubbleUp: false,
      margin: 5,
      boxCount: 4,
      layout: [
        {
          id: 'settings',
          hidden: false,
          pinned: false,
          position: {
            x: 0,
            y: 0,
            w: 4,
            h: 3
          }
        },
        {
          id: 1,
          hidden: false,
          pinned: false,
          position: {
            x: 4,
            y: 0,
            w: 2,
            h: 1
          }
        },
        {
          id: 2,
          hidden: false,
          pinned: false,
          position: {
            x: 6,
            y: 0,
            w: 1,
            h: 2
          }
        },
        {
          id: 3,
          hidden: false,
          pinned: false,
          position: {
            x: 4,
            y: 1,
            w: 2,
            h: 3
          }
        },
        {
          id: 4,
          hidden: false,
          pinned: false,
          position: {
            x: 6,
            y: 2,
            w: 3,
            h: 1
          }
        }
      ]
    }
  },

  computed: {
    layoutWithoutSettings () {
      return this.layout.filter((box) => {
        return box.id !== 'settings'
      })
    }
  },

  methods: {
    onLayoutUpdate (evt) {
      this.layout = evt.layout;
      console.log(evt);
    },

  },
  watch: {
    handler(evt){
      console.log(evt);

    }
  }
};
</script>

<style>
.item-component-img{
  height: 50px;
}

</style>
