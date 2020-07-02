import React from "react";
import { Link } from "react-router-dom";
import { ProductConsumer } from "../context/context";
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import ButtonBase from '@material-ui/core/ButtonBase';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,    
    },   
    paper: {
      padding: theme.spacing(2),
      margin: 'auto',
      maxWidth: 700,
    },
    image: {
      width: 350,
      height: 350,
    },
    img: {
      margin: 'auto',
      display: 'block',
      maxWidth: '100%',
      maxHeight: '100%',
    },
  }),
);


export default function SingleProductPage() {
  const classes = useStyles();

  return (
    
      <ProductConsumer>
        {value => {
          const { singleProduct, addToCart} = value;       
          const {            
            description,
            id,
            price,
            title,
            img
          } = singleProduct;
          return (
            <div className={classes.root}>
             <Paper className={classes.paper}>
             <Grid container spacing={2}>         
             <Grid item style={{ margin: 'auto'}}>
             <ButtonBase className={classes.image}>
              <img className={classes.img} alt="complex" src={`../${img}`} />
            </ButtonBase>
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography gutterBottom variant="subtitle1" style={{ paddingTop: '30px'}}>
                  {title}
                </Typography>
                <Typography variant="body2" gutterBottom>
                  {description}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  ID:{id}
                </Typography>
              </Grid>
              <Grid item xs style={{ display: 'flex', justifyContent: 'space-between'}}>  

                <Typography variant="body2" style={{ cursor: 'pointer' }} onClick={() => addToCart(id)}>
                        Add to cart
                </Typography>
                <Typography variant="body2" style={{ cursor: 'pointer', textDecoration: 'none' }} >
                <Link
                        to="/"                     
                        style={{ margin: "0.75rem" , textDecoration: 'none' }}>
                        Back Home
                </Link>               
                </Typography>
              </Grid>
            </Grid>
            <Grid item>
              <Typography variant="subtitle1" style={{ paddingTop: '30px'}}>{price} kr</Typography>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </div>            
          );
        }}
      </ProductConsumer>  
  );
}
