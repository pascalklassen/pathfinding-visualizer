<template>
  <div id="app">
    <b-navbar variant="dark" type="dark">
      <b-navbar-brand href="#">Pathfinding Visualizer</b-navbar-brand>
      <b-button-group>
        <b-dropdown variant="outline-light" text="Select Maze"></b-dropdown>
        <b-dropdown
          variant="outline-light"
          text="Select Algorithm"
        ></b-dropdown>
      </b-button-group>
      <b-navbar-nav class="ml-auto">
        <b-nav-item
          href="https://github.com/pascalklassen/pathfinding-visualizer/"
          target="_blank"
        >
          <b-icon icon="github" title="View on GitHub" variant="light"></b-icon>
          GitHub
        </b-nav-item>
      </b-navbar-nav>
    </b-navbar>
    <div class="container"></div>
  </div>
</template>

<script>
//let nodes = [];

/* for (let i = 0; i < 400; i++) {
  nodes.push(new GridNode());
} */

export default {
  name: "App",
  data: function() {
    return {
      nodes: [],
    };
  },
};
</script>

<style scoped></style>
