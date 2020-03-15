import React from "react";
import { Header } from "./Header";
import styled from "styled-components";

const Wrapper = styled.div`
  margin: 20px;
  padding: 20px;
  border: 10px solid red;
`;

export const Layout: React.FC = props => {
  return (
    <Wrapper>
      <Header />
      {props.children}
    </Wrapper>
  );
};
