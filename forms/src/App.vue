<template>
  <FormComponent :data="data" :select="select" :choice="choice" />
  <p>{{ choice }}</p>
</template>

<script>
import FormComponent from "./components/ui/FormComponent.vue";

export default {
  name: "App",
  data: function () {
    return {
      data: [
        {
          key: 1,
          value: "firstNamerrr",
        },
        {
          key: 2,
          value: "password",
        },
      ],
      select: [
        {
          key: 1,
          value: "webDeveloper",
        },
        {
          key: 2,
          value: "Data Scientist",
        },
      ],
      choice: "",
      names: [],
    };
  },
  methods: {
    click() {},
  },
  components: { FormComponent },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
