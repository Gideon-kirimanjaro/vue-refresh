<template>
  <div>
    <header-item title="Reaction Timer" @custom="liftedData($event)" />
  </div>
</template>

<script>
import headerItem from "./ui/header-item.vue";
export default {
  components: {
    headerItem,
  },
  methods: {
    liftedData(data) {
      this.$emit("parent", data);
    },
  },
};
</script>

<style lang="scss" scoped></style>
