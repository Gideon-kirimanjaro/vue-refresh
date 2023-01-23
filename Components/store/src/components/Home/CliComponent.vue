<template>
  <div>
    <h1>cli</h1>
    <p>{{ test }}</p>
    <input type="text" ref="name" />
    <button @click="testRef">test</button>

    <div
      class="card"
      :key="job"
      v-for="job of jobs"
      :class="{ tech: job.tag === 'tech' }"
    >
      <h3>{{ job.title }}</h3>
      <h3>{{ job.job }}</h3>
      <button @click="liftData(job)">toggle</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "cli-component",
  props: ["jobs"],
  data: function () {
    return {
      test: "Kirim",
    };
  },
  methods: {
    testRef() {
      console.log(">>", this.$refs.name);
      this.$refs.name.classList.add("inp");
    },
    liftData(job) {
      this.$emit("data", job);
    },
  },
};
</script>

<style scoped>
.inp {
  border: 2px solid red;
}
.card {
  height: 200px;
  width: 200px;
}
.card.tech {
  height: 200px;
  width: 200px;
  background-color: green;
}
.cardT.construction {
  height: 200px;
  width: 200px;
  background-color: rgb(243, 133, 7);
}
</style>
