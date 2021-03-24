import React, { useContext } from 'react';
import './App.css';
import { Sidebar } from 'components/sidebar/Sidebar';
import {routes} from 'router/router';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import styled from 'styled-components';

const Display = styled.div`
  display: flex;
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
        <div>
          <Switch>
            {Routes}
          </Switch>
        </div>
      </Display>
    </Router>
  );
}

export default App;
