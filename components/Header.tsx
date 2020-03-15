import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';

const StyledWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid #909090;
    position: fixed;
    text-align: center;
    width: 98%;
    background-color: #fff;
    margin-top: -10px;
`;

const StyledLink = styled.a`
    font-family: roboto;
    color: #5b4eb1;
    padding: 10px;
    cursor: pointer;

    &:hover {
        color: #000;
    }
`;

export const Header: React.FC = () => (
    <StyledWrapper>
        <Link href="/">
            <StyledLink>Home</StyledLink>
        </Link>
        <Link href="/posts/new">
            <StyledLink>Create new post</StyledLink>
        </Link>
    </StyledWrapper>
);
