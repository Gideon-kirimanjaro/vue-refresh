<template>
  <div>
    <PlayComponent title="Reaction Timer" @parent="childState($event)" />
    <results-component :result="result" />
  </div>
</template>

<script>
import PlayComponent from "./components/PlayComponent.vue";
import ResultsComponent from "./components/ResultsComponent.vue";

export default {
  name: "App",
  components: {
    PlayComponent,
    ResultsComponent,
  },
  data: function () {
    return {
      result: [],
    };
  },
  methods: {
    childState(data) {
      this.result = data;
    },
  },
  // beforeMount() {
  //   alert("beforeMount");
  // },
  // mounted() {
  //   alert("mounted");
  // },
  // beforeCreate() {
  //   alert("beforeCreate");
  // },
  // created() {
  //   alert("Created");
  // },
  // beforeUpdate(){

  // },
  // updated(){

  // }
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
