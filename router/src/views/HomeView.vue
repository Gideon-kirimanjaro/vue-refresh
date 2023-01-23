<template>
  <div class="home">
    <!-- <composition-api /> -->
    <async-composition />
  </div>
</template>

<script>
// @ is an alias to /src

import CompositionApi from "@/components/CompositionApi.vue";
import AsyncComposition from "@/components/AsyncComposition.vue";
export default {
  name: "HomeView",
  components: {
    CompositionApi,
    AsyncComposition,
  },
};
</script>

AsyncComposition
