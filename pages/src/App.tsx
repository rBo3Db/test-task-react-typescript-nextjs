 /* tslint:disable-next-line */
import React from 'react';
 /* tslint:disable-next-line */
import styled from 'styled-components';
// import { HashRouter as Router, Route, Switch} from 'react-router-dom';
import OperatorList from './components/OperatorList';
import NotFound from './components/NotFound';
import {GlobalStyle} from './theme/globalStyle';
import operators from '../operators.json';

/* tslint:disable:typedef */
export function App() {
  return (
    
    <AppWrapper>
      <GlobalStyle />
      <OperatorList operators={operators} />
    </AppWrapper>
    
  );
}

{/* <PostLink exact={true} path="/" render={() => <OperatorList operators={props.operators} />} />
{/* <PostLink path="/payPage/:name" render={properties => <PayPage {...properties}/>} />
<PostLink component={NotFound} /> */}
// export default App; */}

const AppWrapper = styled.div`
  background-color: #222;
  border-radius: 3px;`