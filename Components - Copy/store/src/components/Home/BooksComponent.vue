<template>
  <div>
    <p>List of books</p>
    <ul :key="book" v-for="book of books">
      <li>{{ book.title }}</li>
      <!-- <p :style="book.isFav ? 'color:green' : 'color:red'">F</p> -->
      <div :class="{ fav: book.isFav, notFav: book.isFav === false }"></div>
      <button @click="toggleFav(book)">Toggle favourite</button>
    </ul>
  </div>
</template>

<script>
export default {
  name: "BooksComponent",
  props: ["books"],
  methods: {
    toggleFav(book) {
      book.isFav = !book.isFav;
    },
  },
};
</script>

<style scoped>
.fav {
  height: 200px;
  width: 200px;
  background-color: green;
}
.favTrue {
  height: 200px;
  width: 200px;
  background-color: green;
}
.notFav {
  height: 200px;
  width: 200px;
  background-color: red;
}
</style>
