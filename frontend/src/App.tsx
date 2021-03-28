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
import { Container } from 'inversify';

type AppProps = {
  container: Container
}

const Display = styled.div`
  display: grid;
  grid-template-columns: min-content 1fr;
`;
function App({container}: AppProps) {
  //todo вывести в отдельный файл
  const Routes = routes.reduce<JSX.Element[]>((carry, route) => {
    if(route.create) {
      carry.push(<Route path={route.create.to} key={route.create.to}><route.create.page {...route.create.props(container)}/></Route>);
    }
    carry.push(<Route path={route.index.to} key={route.index.to}><route.index.page {...route.index.props(container)}/></Route>);
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
