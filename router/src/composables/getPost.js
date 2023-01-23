import { ref } from "vue";
const getPost = (id) => {
  const post = ref("test");
  const load = async () => {
    try {
      const data = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${id}`
      );

      post.value = await data.json();

      if (!data.ok) {
        throw Error("There is an error");
      }
    } catch (error) {}
  };

  return { load, post };
};
export default getPost;
