import React, { useState } from "react";
import { Layout } from "../../components/MyLayout";
import * as Fetcher from "../../helpers/fetcher";
import styled from "styled-components";

const Title = styled.h1`
  text-align: center;
  color: red;
`;

export const New: React.FC = () => {
  const [newPost, setNewPost] = useState<{
    title: string;
    body: string;
  }>({
    title: "",
    body: ""
  });

  function handleSubmit(event: React.FormEvent) {
    const { title, body } = newPost;
    event.preventDefault();
    if (!title || !body) {
      return setNewPost({ title: "", body: "" });
    }
    Fetcher.post(title, body);
    setNewPost({ title: "", body: "" });
  }

  function handleChange(
    event:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) {
    if (event.target.name === "title") {
      setNewPost({ title: event.target.value, body: newPost.body });
    } else if (event.target.name === "body") {
      setNewPost({ title: newPost.title, body: event.target.value });
    }
  }

  return (
    <Layout>
      <Title>Fill the form below</Title>
      <form onSubmit={handleSubmit}>
        <label>
          Title
          <input
            type="text"
            name="title"
            value={newPost.title}
            onChange={handleChange}
          />
        </label>
        <label>
          Post
          <textarea name="body" value={newPost.body} onChange={handleChange} />
        </label>
        <input type="submit" value="Send" />
      </form>
    </Layout>
  );
};

export default New;
