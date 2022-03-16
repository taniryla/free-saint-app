import React from 'react';
import styled from 'styled-components';
import { Header } from './Header';

const Content = styled.main`
    max-width: 80rem;
    margin-top: 3rem;
    padding: 0 0rem;
    box-sizing: border-box;
    font-family: estaban;

h1, h2, h3, h4, h5, h6 {
    font-family: yellowtail;
}

`;

export function PageLayout({children, user, setUser}){
    return (
        <>
            <Header user={user} setUser={setUser}/>
            <Content>
                {children}
            </Content>
        </>
    )
}