<template>
  <div class="col" id="grid-container">
    <node
      v-for="(node, id) in nodes"
      :key="id"
      :nodeStyle="node.nodeStyle"
    ></node>
  </div>
</template>

<script>
const COLS = 50;
const ROWS = 40;

import Node from "./Node";

export default {
  name: "Grid",
  data() {
    return {
      nodes: this.makeEmptyGrid(),
    };
  },
  methods: {
    makeEmptyGrid() {
      let arr = new Array();

      for (let y = 0; y < ROWS; y++) {
        for (let x = 0; x < COLS; x++) {
          arr.push({ nodeStyle: "node-not-visited" });
        }
      }

      return arr;
    },
  },
  props: {
    width: Number,
  },
  components: {
    Node,
  },
};
</script>

<style scoped>
#grid-container {
  display: grid;
  width: 100%;
  grid-template-columns: repeat(50, 1vw);
}
</style>
