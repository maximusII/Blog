import React from "react";
import { useRouter } from "next/router";
import { NextPage, NextPageContext } from "next";
import { Layout } from "../../components/MyLayout";
import * as Fetcher from "../../helpers/fetcher";

const Post: NextPage<Context> = props => {
  const router = useRouter();
  return (
    <Layout>
      <ul>
        {props.posts
          .filter(
            (post: { [key: string]: string | number }) =>
              post.id === +router.query.id
          )
          .map((post: { [key: string]: string | number }) => (
            <li key={post.id}>
              <p>{post.title}</p>
              <p>{post.body}</p>
            </li>
          ))}
      </ul>
    </Layout>
  );
};

interface Context extends NextPageContext {
  posts: Array<{ [key: string]: string | number }>;
}

Post.getInitialProps = async Context => {
  return Fetcher.get();
};

export default Post;
