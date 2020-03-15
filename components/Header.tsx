import React from "react";
import Link from "next/link";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const LinkStyle = styled.a`
  color: #000;
  padding-right: 10px;
  padding-left: 10px;
  cursor: pointer;

  &:hover {
    color: red;
  }
`;

export const Header: React.FC = () => (
  <Wrapper>
    <Link href="/">
      <LinkStyle>Home</LinkStyle>
    </Link>
    <Link href="/posts/new">
      <LinkStyle>Create new post</LinkStyle>
    </Link>
  </Wrapper>
);
