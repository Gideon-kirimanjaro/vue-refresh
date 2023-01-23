<template>
  <div>
    {{ id }}
    <p class="someClass" :class="{ less: id < 2 ? true : null }">TEST</p>
    <h2>{{ post.title }}</h2>
    <p>{{ post.body }}</p>
    <select v-model="role">
      <option value="developer">web Developer</option>
      <option value="designer">UI/UX</option></select
    >{{ role }}
    <input
      type="checkbox"
      id="vehicle1"
      name="vehicle1"
      value="Bike"
      v-model="names"
    />
    <label for="vehicle1"> I have a bike</label><br />
    <input
      type="checkbox"
      id="vehicle2"
      name="vehicle2"
      value="Car"
      v-model="names"
    />
    <label for="vehicle2"> I have a car</label><br />
    <input
      type="checkbox"
      id="vehicle3"
      name="vehicle3"
      value="Boat"
      v-model="names"
    />
    <label for="vehicle3"> I have a boat</label><br />
    {{ names }}
    <!-- <button @click="prev">Prev</button>
    <button @click="home">Home</button>
    <button @click="next">next</button> -->
  </div>
</template>

<script>
import getPost from "@/composables/getPost";
import { ref } from "vue";
import { useRouter } from "vue-router";
export default {
  name: "Blog",
  props: ["id"],
  setup({ id }) {
    const { load, post } = getPost(id);
    const router = useRouter();
    const role = ref("designer");
    const names = ref([]);
    console.log(role.value);

    const prev = () => {
      return router.back();
    };
    const home = () => {
      return router.push("/");
    };
    load();
    return { post, prev, home, role, names };
  },
};
</script>

<style scoped>
.someClass {
  color: red;
}
.someClass.less {
  color: green;
}
</style>
