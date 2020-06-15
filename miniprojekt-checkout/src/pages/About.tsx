import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Typography}  from "@material-ui/core";



const aboutStyle = makeStyles((theme) => ({
  root: {
    position:"fixed",
    display:"flex",
    background:"#B6EEFC", 
    height:"7rem",
    justify:"space-between",
    align:"center",
    flexGrow: 1,
    width:"100%",
    marginTop: "-22px",
    
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },

  centerTitle: {
    display:"flex",
    justifyContent:"center",
  },

  textMargin: {
    display:"flex",
    margin: "20px",
  },
}));


export default function aboutPage() {

  const classes = aboutStyle();
  
  return (
    <div className={classes.root} >
      <Typography variant="h6" className={classes.title} >               
          <h1 className={classes.centerTitle}>About Us</h1>
          <p className={classes.textMargin}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci ipsum numquam recusandae veritatis optio labore vitae assumenda explicabo odio, suscipit molestiae perferendis aperiam ad consequatur doloremque et laudantium corrupti molestias.</p>
          <p className={(classes.textMargin, classes.centerTitle)}>Click here to find out more on our Github pages</p>
          <a className={classes.centerTitle} href="https://github.com/Lucaspers/Miniprojekt-2-Checkout"><h1>Github</h1></a>
      </Typography>
    </div>
  );
}