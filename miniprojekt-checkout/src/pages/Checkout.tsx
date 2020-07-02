import React from 'react';
import CartItem from '../components/Cartcheckout/checkoutCartItem';
import ValiationForm from '../components/form/form';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

        
        const useStyles = makeStyles((theme: Theme) =>
          createStyles({
            root: {
              flexGrow: 1,
            },
            paper: {
              padding: theme.spacing(2),
              textAlign: 'center',
              color: theme.palette.text.secondary,
            },
          }),
        );
        export default function CheckoutPage() {
       
          const classes = useStyles();
        
          return (
            <div className={classes.root}>
              <Grid container spacing={2}>
                
                <Grid item xs={12} sm={6}>
                  <Paper className={classes.paper}><CartItem /></Paper>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Paper className={classes.paper}><ValiationForm/></Paper>
                </Grid>
                
              </Grid>
            </div>
          );
        }
