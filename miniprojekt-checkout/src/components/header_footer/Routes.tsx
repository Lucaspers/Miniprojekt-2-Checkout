
import React from 'react';
import HomePage from './../../pages/Home';
import AboutPage from './../../pages/About';
import CartPage from './../../pages/Cart';
import ProductsPage from './../../pages/ProductsPage';
import ContactPage from './../../pages/Contact';
import DefaultPage from './../../pages/Default';
import SingleProductPage from './../../pages/SingleProduct';


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


const SingleProduct: React.FC = () => {
  return (
    <h1>
      <SingleProductPage />   
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
    id:4,
    path: '/about',
    sidebarName: 'About',
    component: About
  },
  
  {
    id:5,
    path: '/contact',
    sidebarName: 'Contact',
    component: Contact
  },
  
    
];

export default Routes;
