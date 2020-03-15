import React from 'react';
import { NextPage, NextPageContext } from 'next';
import { Layout } from '../components/MyLayout';
import Link from 'next/link';
import * as Fetcher from '../helpers/fetcher';
import styled from 'styled-components';

const Title = styled.h1`
    font-family: roboto;
    text-align: center;
    display: block;
    margin-top: 50px;
`;

const LinkStyle = styled.a`
    color: blue;
    padding-right: 10px;
    padding-left: 10px;
    cursor: pointer;
    font-weight: bold;
    &:hover {
        color: red;
    }
`;

const StyledWrapperUL = styled.ul`
    text-align: center;
    list-style-type: none;
    padding: 0;
`;

const StyledWrapperLI = styled.li`
    padding: 10px;
    text-align: center;
    border-radius: 5px;
    margin: 55px auto;
    box-shadow: 5px 10px 5px rgba(0, 0, 0, 0.1);
    width: 70%;
    overflow-wrap: break-word;
`;

const Index: NextPage<Context> = props => {
    return (
        <Layout>
            <Title>Latest Posts</Title>
            <StyledWrapperUL>
                {props.posts.map(post => (
                    <StyledWrapperLI key={post.id}>
                        <Link href="/posts/[id]" as={`/posts/${post.id}`}>
                            <LinkStyle>{post.title}</LinkStyle>
                        </Link>
                        <p>{post.body}</p>
                    </StyledWrapperLI>
                ))}
            </StyledWrapperUL>
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
