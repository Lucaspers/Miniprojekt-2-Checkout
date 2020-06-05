import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  AppBar, Toolbar, IconButton, Typography, Drawer, Button
}  from "@material-ui/core";


const aboutStyle = makeStyles((theme) => ({
  root: {
    position:"fixed",
    display:"flex",
    background:"green", 
    height:"7rem",
    justify:"space-between",
    align:"center",
    flexGrow: 1,
    width:"100%",
    marginTop: "-20px",
    
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));


export default function aboutPage() {

  const classes = aboutStyle();
  
  return (
    <div className={classes.root} >
      <Typography variant="h6" className={classes.title} >               
          <h1>About Us</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci ipsum numquam recusandae veritatis optio labore vitae assumenda explicabo odio, suscipit molestiae perferendis aperiam ad consequatur doloremque et laudantium corrupti molestias.</p>
          <p>Click here to find out more on our Github pages</p>
          <a href="https://github.com/Lucaspers/Miniprojekt-2-Checkout"><h1>Github</h1></a>
      </Typography>
    </div>
  );
}