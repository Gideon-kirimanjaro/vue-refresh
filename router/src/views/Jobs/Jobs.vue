<template>
  <div>
    <div v-if="kazi !== []">
      <p>List of jobs</p>
      <div :key="job.id" v-for="job of kazi">
        <router-link :to="{ name: 'job', params: { id: job.id } }"
          ><h3>{{ job.title }}</h3>
          <p>Salary: {{ job.body }}</p>
        </router-link>
      </div>
      <button @click="back">Back</button>
      <button @click="forward">Forward</button>
    </div>
    <div v-if="loading">
      <h1>Loading Jobs</h1>
    </div>
  </div>
</template>

<script>
export default {
  name: "Jobs",
  data: function () {
    return {
      kazi: [],
      loading: false,
    };
  },
  methods: {
    back() {
      this.$router.go(-1);
    },
    forward() {
      this.$router.go(1);
    },
  },
  mounted() {
    try {
      this.loading = true;
      setTimeout(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts`)
          .then((response) => response.json())
          .then((data) => {
            this.kazi43 = data;
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
