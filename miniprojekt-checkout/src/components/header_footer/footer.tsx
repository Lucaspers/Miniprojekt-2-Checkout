import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import { Typography}  from "@material-ui/core";

const footerStyle = makeStyles((theme) => ({
    root: {      
      flexGrow: 1,
      background: "black",
      height: "25px",    
      position: "fixed",
      width: "100%",
      bottom: 0,
    },
   
    title: {
      flexGrow: 1,
      color: "#fff",
      fontSize: "10px",
      textAlign:"center",
      alignItems:"center",
    },
  }));
  
  export default function ButtonAppBar() {
    const classes = footerStyle();
  
    return (
      <div className={classes.root}>
        <Typography variant="h6" className={classes.title} >
        Copyright Reserved
        </Typography>         
      </div>
    );
  }
  


