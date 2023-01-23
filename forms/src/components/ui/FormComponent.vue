<template>
  <div>
    <h3>Form Events</h3>
    <form>
      <div :key="item" v-for="item of data">
        <input type="text" v-model="item.value" />
      </div>
      <div v-if="select.length > 0">
        <select v-model="role">
          <option :key="item" v-for="item of select">
            {{ item.value }}
          </option>
        </select>
      </div>
      <div>
        <input type="checkbox" value="christine" v-model="names" />
        <label for="">Christine</label>
        <input type="checkbox" value="Hilda" v-model="names" />
        <label for="">Christine</label>
      </div>
      <div :key="name" v-for="name of names">
        {{ name }}
      </div>
      <div>
        <label for="">sKILLZ</label>
        <input @keyup="addSkill" v-model="skills" />
        <div :key="skill" v-for="skill in skillset">
          {{ skill.skill }}
          <button @click.prevent="del(skill)">delete</button>
        </div>
      </div>
      <button @click.prevent="clickEvent(item)">Submit</button>
    </form>
    <p>....</p>
    {{ role }}
  </div>
</template>

<script>
export default {
  props: ["data", "select", "choice"],
  data: function () {
    return {
      title: "Form events",
      role: "web developer",
      names: [],
      skills: "",
      skillset: [],
    };
  },
  methods: {
    clickEvent() {
      this.$emit("childEvent");
    },
    addSkill(e) {
      if (e.key === "," && this.skills) {
        this.skillset.push({ key: Math.random(), skill: this.skills });
      }
    },
  },
  updated() {},
};
</script>

<style lang="scss" scoped></style>
