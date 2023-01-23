import { ref } from "vue";
const getPosts = () => {
  const loading = ref(false);
  const errorText = ref("");
  const posts = ref([]);
  const load = async () => {
    try {
      const data = await fetch("https://jsonplaceholder.typicode.com/posts");
      posts.value = await data.json();

      if (!data.ok) {
        throw Error("There is an error");
      }
    } catch (error) {
      errorText.value = error.message;
      console.log("err", errorText.value);
    }
  };

  return { loading, errorText, load, posts };
};
export default getPosts;
