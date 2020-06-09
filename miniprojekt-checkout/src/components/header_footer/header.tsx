import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import {
    AppBar, Toolbar, IconButton, Typography, Drawer, Button
}  from "@material-ui/core";

const headerStyle = makeStyles((theme) => ({
    root: {
      position:"fixed",
      display:"flex",
      background:"#212121", 
      height:"5rem",
      justify:"space-between",
      align:"center",
      flexGrow: 1,
      width:"100%"
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  }));
  
  export default function ButtonAppBar() {
    const classes = headerStyle();
    
    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>            
            <div>      
          
            </div>                     
            <Typography variant="h6" className={classes.title} >               
              TECH STORE
            </Typography>
            <ShoppingCartIcon/>
            <Button color="inherit">Login</Button>
           
          </Toolbar>
        </AppBar>
      </div>
    );
  }
  


