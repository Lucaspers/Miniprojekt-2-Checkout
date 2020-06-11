import React from 'react';
import HomePage from './../../pages/Home';
import AboutPage from './../../pages/About';
import ContactPage from './../../pages/Contact';
import CheckoutPage from './../../pages/Checkout';

const Home: React.FC = () => {
  return (
    <h1>     
      <HomePage />
    </h1>
  );
};

const About: React.FC = () => {
  return (
    <h1>
      <AboutPage />
    </h1>
  );
};


const Contact: React.FC = () => {
  return (    
    <h1>
      <ContactPage />
    </h1>
  );
};

const Checkout: React.FC = () => {
  return (    
    <h1>
      <CheckoutPage />
    </h1>
  );
};



const Routes = [
  {
    id:1,
    path: '/',
    sidebarName: 'Home',
    component: Home
  },
  {
    id:2,
    path: '/about',
    sidebarName: 'About',
    component: About
  },
  
  {
    id:3,
    path: '/contact',
    sidebarName: 'Contact',
    component: Contact
  },

  {
    id:4,
    path: '/Checkout',
    sidebarName: 'Checkout',    
    component: Checkout
  },
 
];

export default Routes;
