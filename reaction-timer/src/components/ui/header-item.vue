<template>
  <div>
    <h1>{{ title }}</h1>
    <button @click="eventHandler" :disabled="toggleBtn">Play</button>
  </div>
</template>

<script>
export default {
  name: "HeaderItem",
  props: ["title"],
  data: function () {
    return {
      toggleBtn: false,
    };
  },
  methods: {
    eventHandler() {
      const setTime = () => {
        return (this.toggleBtn = !this.toggleBtn);
      };

      const randomTime = () => {
        let time = Math.floor(Math.random() * (5000 - 500 + 1) + 500);
        return (time = Math.round(time / 1000) * 1000);
      };

      this.$emit("custom", [setTime(), randomTime()]);
    },
  },
};
</script>

<style lang="scss" scoped></style>
