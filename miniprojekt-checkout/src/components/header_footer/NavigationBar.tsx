import React, { useState, ReactNode } from 'react';

import { NavLink, withRouter } from 'react-router-dom';
import Routes from './Routes';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import CartDropDown from '../cart-dropdown/cart-dropdown.component';
import CartIcon from '../../resources/icons/cart-icon.component';
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
import MenuIcon from '@material-ui/icons/Menu';


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
      width: 120,
    },
    fullList: {
      width: 'auto',
    },
  }),
);

const NavigationBar: React.FC = (props: any) => {
  const classes = useStyles();
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
    <div>
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu" onClick={toggleDrawer(true)}>
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              TECH STORE
            </Typography>
          
            <CartIcon/>
            <CartDropDown />
            <Button color="inherit">Login</Button>
            
          </Toolbar>
        </AppBar>
      </div>
      <Drawer open={isOpen} onClose={toggleDrawer(false)}>
        <div
          className={classes.fullList}
          role="presentation"
          onClick={toggleDrawer(false)}
          onKeyDown={toggleDrawer(false)}
        >
          <MenuList>
            {Routes.map((prop, key) => {
              return (
                <NavLink to={prop.path} style={{ textDecoration: 'none' }} key={key}>
                  <MenuItem selected={activeRoute(prop.path)}>
                    <ListItemText primary={prop.sidebarName} />
                  </MenuItem>
                </NavLink>
              );
            })}
          
          </MenuList>
        </div>
      </Drawer>
    
     
    </div>
  );
};

/* interface hidden {
  cart: ReactNode;
  // any other props that come into the component
}

const mapStateToProps = ({ cart }: hidden) => (
  <Button >{cart}</Button>
); */

/* let user = Users.find(user => user.id === query);
for this:

let mapStateToProps = state((currentUser: any) => user.id === query); 
// use "any" or someother interface to type this argument


const mapStateToProps = state => (currentUser: state.user.current }); */

interface IProps {
  children: ReactNode;
  // any other props that come into the component
}

const Button1 = ({ children, ...props }: IProps) => (
  <Button {...props}>{children}</Button>
);


export default withRouter(NavigationBar);