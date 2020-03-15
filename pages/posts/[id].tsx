import React from 'react';
import { useRouter } from 'next/router';
import { NextPage, NextPageContext } from 'next';
import { Layout } from '../../components/MyLayout';
import * as Fetcher from '../../helpers/fetcher';
import styled from 'styled-components';

const Title = styled.p`
    font-weight: bold;
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

const Post: NextPage<Context> = props => {
    const router = useRouter();
    return (
        <Layout>
            <StyledWrapperUL>
                {props.posts
                    .filter((post: { [key: string]: string | number }) => post.id === +router.query.id)
                    .map((post: { [key: string]: string | number }) => (
                        <StyledWrapperLI key={post.id}>
                            <Title>{post.title}</Title>
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

Post.getInitialProps = async Context => {
    return Fetcher.get();
};

export default Post;
