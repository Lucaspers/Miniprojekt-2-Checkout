import React from 'react';
import './App.css';
import {Route} from 'react-router-dom'

import HomePage from './pages/Home';
import AboutPage from './pages/About';


function App() {
  return (
    <div>
     <Route exact path='/' component={HomePage} />
     <Route  path='/about' component={AboutPage} />
    </div>
  );
}

export default App;
