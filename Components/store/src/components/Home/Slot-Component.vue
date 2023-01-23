<template>
  <div id="slot">
    <slot></slot>
    <div id="header">
      <slot name="header"></slot>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
#slot {
  background-color: red;
}
#header {
  background-color: green;
}
</style>
