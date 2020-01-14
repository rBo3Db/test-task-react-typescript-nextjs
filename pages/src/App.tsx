import React from 'react';
import styled from 'styled-components';
import OperatorList from './components/OperatorList';
import {GlobalStyle} from './theme/globalStyle';
import operators from '../operators.json';

export function App() {
  return (
    
    <AppWrapper>
      <GlobalStyle />
      <OperatorList operators={operators} />
    </AppWrapper>
    
  );
}

const AppWrapper = styled.div`
  background-color: #222;
  border-radius: 3px;
`;