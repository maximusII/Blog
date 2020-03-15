import React, { useState } from 'react';
import { Layout } from '../../components/MyLayout';
import * as Fetcher from '../../helpers/fetcher';
import styled from 'styled-components';

const Title = styled.h1`
    font-family: roboto;
    text-align: center;
    display: block;
    margin-top: 50px;
`;

const Input = styled.input`
    font-size: 18px;
    padding: 10px;
    margin: 10px;
    background: papayawhip;
    border: none;
    border-radius: 3px;
    width: 400px;
`;

const Textarea = styled.textarea`
    font-size: 18px;
    padding: 10px;
    margin: 10px;
    background: papayawhip;
    border: none;
    border-radius: 3px;
    width: 400px;
    height: 100px;
    resize: none;
`;

const Button = styled(Input)`
    cursor: pointer;
    color: blue;
    width: 100px;
`;

const Form = styled.form`
    padding: 10px;
    margin: 10px;
    border: none;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;

export const New: React.FC = () => {
    const [newPost, setNewPost] = useState<{
        title: string;
        body: string;
    }>({
        title: '',
        body: '',
    });

    function handleSubmit(event: React.FormEvent) {
        const { title, body } = newPost;
        event.preventDefault();
        if (!title || !body) {
            return setNewPost({ title: '', body: '' });
        }
        Fetcher.post(title, body);
        setNewPost({ title: '', body: '' });
    }

    function handleChange(event: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) {
        if (event.target.name === 'title') {
            setNewPost({ title: event.target.value, body: newPost.body });
        } else if (event.target.name === 'body') {
            setNewPost({ title: newPost.title, body: event.target.value });
        }
    }

    return (
        <Layout>
            <Title>Fill the form below</Title>
            <Form onSubmit={handleSubmit}>
                <label>
                    <Input type="text" name="title" placeholder="Title" value={newPost.title} onChange={handleChange} />
                </label>
                <label>
                    <Textarea name="body" placeholder="Post" value={newPost.body} onChange={handleChange} />
                </label>
                <Button type="submit" value="Send" />
            </Form>
        </Layout>
    );
};

export default New;
