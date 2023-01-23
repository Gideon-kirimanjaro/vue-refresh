<template>
  <div>
    <h2>Async Composition</h2>
    <div :key="post" v-for="post of posts">
      {{ post.body }}
      <router-link :to="{ name: 'blog', params: { id: post.id } }"
        >Read</router-link
      >
    </div>
    <p>{{ errorText }}</p>
  </div>
</template>

<script>
import getPosts from "@/composables/getPosts";
export default {
  name: "AsyncComposition",
  setup() {
    const { loading, errorText, load, posts } = getPosts();
    load();
    console.log("GET", posts);

    return { loading, errorText, load, posts };
  },
};
</script>

<style lang="scss" scoped></style>
