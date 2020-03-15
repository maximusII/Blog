import React from 'react';
import { Header } from './Header';
import styled from 'styled-components';

const Wrapper = styled.div`
    margin: 0;
    margin-right: 10px;
    width: 100%;
    overflow: hidden;
`;

export const Layout: React.FC = props => {
    return (
        <Wrapper>
            <Header />
            {props.children}
        </Wrapper>
    );
};
