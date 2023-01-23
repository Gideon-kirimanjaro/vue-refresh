<template>
  <div>
    <!-- <home-component label="A VUE STORE" />-->
    <!-- <cli-component :jobs="jobs" @data="liftedData($event)" /> -->
    <!-- <div>
      {{
        applied.map((item) => {
          return item.title;
        })
      }}
    </div> -->
    <!-- <slot-component>
      <template v-slot:header><h1>A named slot</h1> </template>
      <p>Something works</p>
    </slot-component> -->
    <portals-teleport />
  </div>
</template>

<script>
import PortalsTeleport from "./components/Home/Portals-teleport.vue";
// import "bootstrap/dist/css/bootstrap.css";
// import "bootstrap-vue/dist/bootstrap-vue.css";
// import HomeComponent from "./components/Home/HomeComponent.vue";
// import CliComponent from "./components/Home/CliComponent.vue";
// import SlotComponent from "./components/Home/Slot-Component.vue";
export default {
  name: "App",
  components: { PortalsTeleport },
  data: function () {
    return {
      jobs: [
        { key: 1, title: "Software Engineer", job: "Tech", tag: "tech" },
        { key: 2, title: "Architect", job: "Engineer", tag: "construction" },
      ],
      applied: [],
    };
  },
  methods: {
    liftedData(data) {
      this.applied.push(data);
      console.log(">>>>>>", data);
    },
  },
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
