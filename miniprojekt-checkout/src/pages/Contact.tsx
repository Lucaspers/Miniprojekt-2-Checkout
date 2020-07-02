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
          <h1 className={classes.centerTitle}>Contact Us</h1>
          <p  className={(classes.textMargin, classes.centerTitle)}>Tel:00001115555</p>
          <p className={(classes.textMargin, classes.centerTitle)}>Email:films@flimstore.com</p>
      </Typography>
    </div>
  );
}

