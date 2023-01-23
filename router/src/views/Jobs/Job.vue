<template>
  <div v-if="jobs !== []">
    <div :key="job.id" v-for="job of jobs">
      <p>This is a single job</p>
      {{ job.title }}
    </div>
  </div>
  <div v-if="loading">
    <h2>Loading Job...</h2>
  </div>
</template>

<script>
export default {
  props: ["id"],
  data: function () {
    return {
      jobs: [],
      loading: false,
    };
  },
  mounted() {
    try {
      this.loading = true;
      setTimeout(() => {
        const res = fetch(
          `https://jsonplaceholder.typicode.com/posts/${this.id}`
        )
          .then((response) => response.json())
          .then((data) => {
            this.jobs.push(data);
          })
          .then((this.loading = false));
      }, 3000);
    } catch (error) {
      console.log(error);
    }
  },
};
</script>

<style lang="scss" scoped></style>
