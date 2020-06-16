<template>
  <div id="app">
    <FabricJSDemo />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import FabricJSDemo from "./components/FabricJSDemo.vue";

@Component({
  components: {
    FabricJSDemo
  }
})
export default class App extends Vue {}
</script>

<style></style>
