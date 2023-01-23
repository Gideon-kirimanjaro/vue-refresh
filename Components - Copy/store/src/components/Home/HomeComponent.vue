<template>
  <div>
    <button v-on:click="toggleBooks = !toggleBooks">
      {{ toggleBooks == true ? "hide books" : "show books" }}
    </button>

    <BooksComponent v-if="toggleBooks" :books="filteredBooks" />
    <button v-on:click="changeTitle('Kitu')">Change title</button>
    <!-- mouse events -->
    <div>
      <button @mouseover="testEvent($event, 5)">Mouse Events</button>
    </div>
    <!-- v-bind -->
    <a v-bind:href="url">Portfolio</a>
  </div>
</template>

<script>
import BooksComponent from "./BooksComponent.vue";
export default {
  name: "HomeComponent",
  components: {
    BooksComponent,
  },
  props: ["label"],
  data: () => {
    return {
      url: "www.gideonkirimanjaro.com",
      title: "Ego is the enemy",
      toggleBooks: false,
      books: [
        { key: 1, title: "Ego is the Enemy", isFav: true },
        { key: 2, title: "Atomic Habits", isFav: false },
      ],
    };
  },
  methods: {
    changeTitle(kitu) {
      this.title = kitu;
    },
    testEvent(e, data) {
      if (data) {
        console.log(">>data", e, data);
      }
    },
  },
  computed: {
    filteredBooks() {
      return this.books.filter((book) => {
        return book.isFav;
      });
    },
  },
};
</script>

<style scoped></style>
