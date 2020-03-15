import React from "react";
import { NextPage, NextPageContext } from "next";
import { Layout } from "../components/MyLayout";
import Link from "next/link";
import * as Fetcher from "../helpers/fetcher";
import styled from "styled-components";

const Title = styled.h1`
  text-align: center;
  color: red;
`;

const Index: NextPage<Context> = props => {
  return (
    <Layout>
      <Title>Latest Posts</Title>
      <ul>
        {props.posts.map(post => (
          <li key={post.id}>
            <Link href="/posts/[id]" as={`/posts/${post.id}`}>
              <a>{post.title}</a>
            </Link>
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

Index.getInitialProps = async Context => {
  return Fetcher.get();
};

export default Index;
