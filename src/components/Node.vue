<template>
  <div :class="nodeStyle"></div>
</template>

<script>
export default {
  name: "Node",
  props: {
    nodeStyle: String,
  },
};
</script>

<style scoped>
.node-not-visited {
  display: inline-grid;
  width: 1vw;
  height: 1vw;
  background-color: aquamarine;
  border: 0.1px solid gray;
}

.node-not-visited:hover {
  background-color: rgb(0, 0, 0);
}
</style>
