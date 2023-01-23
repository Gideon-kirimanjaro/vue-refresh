<template>
  <div :key="club" v-for="club of data">
    <ul>
      <li>{{ club }}</li>
      <button @click="remove">Toa</button>
    </ul>
  </div>
</template>

<script>
import { computed, onMounted, onUpdated } from "@vue/runtime-core";
export default {
  name: "CustomProps",
  props: ["data"],
  setup({ data }) {
    onMounted(() => {
      console.log("onmounted");
    });
    onUpdated(() => {
      console.log("onupdated");
    });
    const updated = computed(() => {});
    const remove = () => {
      return this.$emit("childEvent");
    };
    console.log("toa", updated);
    return {
      remove,
      updated,
    };
  },
};
</script>

<style lang="scss" scoped></style>
