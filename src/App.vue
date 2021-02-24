<template>
  <div id="app">
    <b-navbar toggleable="lg" variant="dark" type="dark">
      <b-navbar-brand href="#">Pathfinding Visualizer</b-navbar-brand>
      <b-button-group>
        <b-dropdown variant="outline-light" text="Select Maze"></b-dropdown>
        <b-dropdown variant="outline-light" text="Select Algorithm"></b-dropdown>
      </b-button-group>
    </b-navbar>
    <div class="container">
      <b-jumbotron header="Prototype" lead="This is still a prototype!">
        <p>For more information click the button below</p>
        <b-button variant="outline-success">More Info</b-button>
      </b-jumbotron>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
}
</script>

<style>
</style>
