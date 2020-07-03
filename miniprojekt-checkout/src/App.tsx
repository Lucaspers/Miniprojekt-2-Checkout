import React, { Component } from 'react';
import './App.css';

import { Switch, Route } from 'react-router-dom';
import Routes from './components/header_footer/Routes';
import Fotter from './components/header_footer/footer';
import NavigationBar from './components/header_footer/NavigationBar';

class App extends Component {
render () {

  return (
    <div>
      <NavigationBar />
      <Switch>
        {Routes.map((route: any) => (
          <Route exact path={route.path} key={route.path}>
            <route.component />
          </Route>
        ))}
      </Switch>
      <Route  path='/' component={Fotter} />  
  
      </div>

  );
}
}
export default App;
