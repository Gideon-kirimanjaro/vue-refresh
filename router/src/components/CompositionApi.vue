<template>
  <div>
    <h1>COMPOSITION API BASICS</h1>
    <p ref="p">{{ height }}, {{ weight }}</p>
    <h1>{{ bmi() }}</h1>
    <input type="text" v-model="height" />
    <button @click="handleClick">Click me</button>
    <!-- search Name -->
    <input type="text" v-model="search" />
    <CustomProps :data="searchClub" @childEvent="run" />
  </div>
</template>

<script>
import { ref, computed, watch, watchEffect } from "vue";
import CustomProps from "./CustomProps.vue";
export default {
  name: "CompositionApi",
  components: {
    CustomProps,
  },
  setup() {
    const p = ref(0);
    const search = ref("");
    const height = ref(1.78);
    const weight = ref(70);
    const clubs = ref(["manu", "mancity", "arsenal", "liverpool"]);
    const searchClub = computed(() => {
      return clubs.value.filter((club) => {
        return club.includes(search.value);
      });
    });
    // watch(search, () => {
    //   console.log("WATCH");
    // });
    watchEffect(() => {
      console.log("WATCH", search.value);
    });
    const bmi = () => {
      return weight.value / 1.78 ** 2;
    };
    const handleClick = () => {
      height.value = 1.9;
    };
    const run = () => {
      alert("hello");
    };
    return {
      height,
      weight,
      bmi,
      handleClick,
      p,
      search,
      clubs,
      searchClub,
      run,
    };
  },
  created() {
    console.log("CREATED");
  },
  mounted() {
    console.log("MOUNTED");
  },
};
</script>

<style lang="scss" scoped></style>
