import React, { useState } from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import Routes from './Routes';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import CartIcon from '../../resources/icons/cart-icon.component';
import CartDropDown from '../cart-dropdown/cart-dropdown.component';
import MenuIcon from '@material-ui/icons/Menu';
import { ProductConsumer } from '../../context';
import { Link } from "react-router-dom";

import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Drawer,
  MenuList,
  MenuItem,
  ListItemText,
  Button,
 } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),     
    },
    title: {
      flexGrow: 1,    
    },
    drawer: {
      width: 'auto'      
    },

    fullList: {
      width: '150px',
      top: "65px",
      background: '#fafafa',      
      transition: 'all 0,35 ease-in-out'
    },
  }),
);

function NavigationBar(props:any){   

  const classes = useStyles();
  const [visible, setVisible] = useState(false);

  // Hooks for open and hide sidebar
  const [isOpen, setIsOpen] = useState(false);
  const toggleDrawer = (open: boolean) => (
    event: React.KeyboardEvent | React.MouseEvent,
  ) => {
    if (
      event.type === 'keydown' &&
      ((event as React.KeyboardEvent).key === 'Tab' ||
        (event as React.KeyboardEvent).key === 'Shift')
    ) {
      return;
    }

    setIsOpen(open);
  };
   
  const activeRoute = (routeName: any) => {
    return props.location.pathname === routeName ? true : false;
  }
  return (

    <ProductConsumer>
    {(value:any) => {


      return (
    <div>
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu" onClick={toggleDrawer(true)}>
            
              <MenuIcon />
            </IconButton>
            
            <Typography variant="h6" className={classes.title}>
              
            <Link style={{ textDecoration: 'none', color: 'white' }} to="/">
              FILMS STORE
            </Link>
            </Typography>
            

            {/* Hooks for hide and show Cart dropdown */}

            <div onClick={()=> setVisible(!visible)}>              
            <CartIcon />
            </div>
            
            { visible && <CartDropDown />}   
           
             <div>               
             </div>
            <Button color="inherit">Login</Button>            
          </Toolbar>
        </AppBar>
      </div>
      

        {/* Navigation between pages */}
      <Drawer  
      open={isOpen} 
      onClose={toggleDrawer(false)}
      classes={{ paper: classes.fullList }}
      >
        <div        
          role="presentation"
          onClick={toggleDrawer(false)}
          onKeyDown={toggleDrawer(false)}
          style= {{ top: '65px'}}
        >
         { <MenuList>
            {Routes.map((prop, key) => {
              return (
                <NavLink to={prop.path} style={{ textDecoration: 'none' }} key={key}>
                  <MenuItem selected={activeRoute(prop.path)}>
                    <ListItemText primary={prop.sidebarName} />
                  </MenuItem>
                </NavLink>
              );
            })}          
          </MenuList>}
        </div>
      </Drawer>     
    </div>
    )
     }}

     </ProductConsumer>
  );
};

export default withRouter(NavigationBar);
