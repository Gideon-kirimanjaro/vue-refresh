<template>
  <div>
    <!-- <home-component label="A VUE STORE" /> -->
    <cli-component />
  </div>
</template>

<script>
// import "bootstrap/dist/css/bootstrap.css";
// import "bootstrap-vue/dist/bootstrap-vue.css";
// import HomeComponent from "./components/Home/HomeComponent.vue";
import CliComponent from "./components/Home/CliComponent.vue";

export default {
  name: "App",
  components: { CliComponent },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
