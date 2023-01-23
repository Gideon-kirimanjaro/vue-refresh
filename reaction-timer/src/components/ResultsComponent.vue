<template>
  <div>
    <div @click="clickDiv" class="screen" v-if="toggleScreen">
      <h2>Your delay is {{ delay }}</h2>
    </div>
    <!-- <div class="outcome" v-else></div> -->
  </div>
</template>
<script>
export default {
  props: ["result"],
  data: function () {
    return {
      toggleScreen: false,
      bool: null,
      delay: null,
    };
  },
  methods: {
    clickDiv() {
      this.toggleScreen = false;
    },
  },
  mounted() {},
  updated() {
    const arr = this.result.map((item) => {
      return item;
    });
    const [bool, delay] = arr;
    this.bool = bool;
    this.delay = delay;
    setTimeout(() => {
      return (this.toggleScreen = this.bool);
    }, this.delay);
  },
  unmounted() {
    console.log("UNMOUNTED");
  },
};
</script>

<style scoped>
.screen {
  background-color: green;
  height: 200px;
  width: 200px;
}
.outcome {
  background-color: red;
  height: 200px;
  width: 200px;
}
</style>
