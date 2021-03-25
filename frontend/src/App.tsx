import React from 'react';
import './App.css';
import { Sidebar } from 'components/sidebar/Sidebar';
import {routes} from 'router/router';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import styled from 'styled-components';
import { PageContainer } from 'components/containers/PageContainer';

const Display = styled.div`
  display: grid;
  grid-template-columns: min-content 1fr;
`;
function App() {
  const Routes = routes.reduce<JSX.Element[]>((carry, route) => {
    if(route.create) {
      carry.push(<Route path={route.create.to} key={route.create.to}><route.create.page/></Route>);
    }
    carry.push(<Route path={route.index.to} key={route.index.to}><route.index.page/></Route>);
    return carry;
  }, []);
  return (
    <Router>
      <Display>
        <Sidebar />
        <Switch>
          <PageContainer>
            {Routes}
          </PageContainer>
        </Switch>
      </Display>
    </Router>
  );
}

export default App;
