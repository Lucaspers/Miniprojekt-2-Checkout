import React from 'react';
import './App.css';

import { Switch, Route } from 'react-router-dom';
import Routes from './components/header_footer/Routes';
import Fotter from './components/header_footer/footer';
import NavigationBar from './components/header_footer/NavigationBar';


const App: React.FC = () => {
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

export default App;





/* function App() {
  return (   
    
    <div>   
      <div>
    <Route  path='/' component={Header} />
    </div>

    <div>
    <Route exact path='/' component={HomePage} />
    <Route  path='/About' component={AboutPage} />
    <Route  path='/Cart' component={CartPage} />
    <Route  path='/Checkout' component={CheckoutPage} />
    <Route  path='/Contact' component={ContactPage} />
    <Route  path='/About' component={DefaultPage} />
    <Route  path='/Single' component={SingleProductPage} />   
    </div>
    
    <div>   
    <Route  path='/' component={Footer} />  
    </div>

    </div>
   
  );
}

export default App;
 */
