import { useState } from "react";
import { useDispatch } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";

import { addPost } from "./postsSlice";

const AddPostForm = () => {
  const dispatch = useDispatch();

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const onTitleChanged = (e: React.ChangeEvent<HTMLInputElement>) =>
    setTitle(e.target.value);
  const onContentChanged = (e: React.ChangeEvent<HTMLInputElement>) =>
    setContent(e.target.value);

  interface Post {
    id: string;
    title: string;
    content: string;
  }
  const onSavePostClicked = () => {
    if (title && content) {
      dispatch(
        addPost({
          id: nanoid(),
          title,
          content,
        } as Post)
      );
    }
  };

  return (
    <section style={{ margin: "20px" }}>
      <h2>Post Form</h2>
      <form>
        <label>Post Title:</label>
        <input type="text" value={title} onChange={onTitleChanged} />
        <br />
        <label>Post Content:</label>
        <input type="text" value={content} onChange={onContentChanged} />
        <br />
        <button type="button" onClick={onSavePostClicked}>
          Add Post
        </button>
      </form>
    </section>
  );
};

export default AddPostForm;
