import { useSelector } from "react-redux";
import { selectAllPost } from "./postsSlice";

const PostList = () => {
  const posts = useSelector(selectAllPost);

  const renderedPosts = posts.map((post) => (
    <article
      key={post.id}
      style={{ border: "1px solid black", margin: "5px", padding: "5px" }}
    >
      <h2>{post.title}</h2>
      <p>
        {post.content.substring(0, 100)}
        {post.content.length > 100 && "..."}
      </p>
    </article>
  ));

  return (
    <section>
      {/* <h1>Posts</h1> */}
      {posts.length === 0 ? <p>No posts available.</p> : renderedPosts}
    </section>
  );
};

export default PostList;
