import React from 'react';
import styled from 'styled-components';
import OperatorList from './components/OperatorList';
import GlobalStyle from './theme/globalStyle';
import operators from '../operators.json';

export default function App() {
  
    return (
    <Main>
      <H1>Оплати Телефон, друг</H1>
      <AppWrapper>
        <GlobalStyle />
        <OperatorList operators={operators} />
      </AppWrapper>
    </Main>   
    );
}

const AppWrapper = styled.div`
  background-color: #222;
  border-radius: 3px;
`;
const H1 = styled.h1`
@media (min-width: 500px) {
  color: white;
}
@media (max-width: 500px) {
  display: none;
}

`
const Main = styled.main`
width: 100%;
@media (min-width: 414px) {
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: row;
}
`