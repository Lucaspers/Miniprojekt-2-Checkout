import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';



const useStyles = makeStyles((theme) => ({
  root: {
    '& > * + *': {
      marginLeft: theme.spacing(2),
    },
  },
}));

export default function SwishPaypal() {
  const classes = useStyles();
  const preventDefault = (event) => event.preventDefault();

  return (
    <Typography className={classes.root}>
    
      <Link href="#" onClick={preventDefault}>
        <li>Tryck här för att betala med Swish</li>
      </Link>
    
      <Link href="#" onClick={preventDefault}>
        <li>Tryck här för att betala med Paypal</li>
      </Link>
   
    </Typography>
  );
}


