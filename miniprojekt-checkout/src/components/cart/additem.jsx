import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


export const addItemToCart = (cartItems, cartItemToAdd) => {
    const existingCartItem = cartItems.find(
      cartItem => cartItem.id === cartItemToAdd.id
    );
  
    if (existingCartItem) {
      return cartItems.map(cartItem =>
        cartItem.id === cartItemToAdd.id
          ? { ...cartItem, quantity: cartItem.quantity + 1 }
          : cartItem
      );
    }
  
    return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
  };




const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
});

const ProductCard = (props) => {
  const classes = useStyles();
  const {id, img, title, description, price} = props;
  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia src={img}
          component="img"
          alt="Contemplative Reptile"
          height="310"
          width='auto'
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {description}
          </Typography>
          <Typography gutterBottom variant="h6" component="h2">
            {price} Kr
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Köp
        </Button>
      </CardActions>
    </Card>
  );
}

export default ProductCard;