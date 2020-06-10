import React from "react";
import { ProductConsumer } from "../../context";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


export default function Product({ product }) {
  const useStyles = makeStyles({
    root: {
      maxWidth: 345,
    },
  });

  return (
    <ProductConsumer>      
      {value => {
        const { addToCart } = value;
        
        return (                    
              <Card >
                <CardActionArea>               
                  <CardMedia src={product.img}                  
                    component="img"
                    alt="Contemplative Reptile"
                    height="310"
                    width='auto'
                    title="Contemplative Reptile"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      {product.title}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                      {product.description}
                    </Typography>
                    <Typography gutterBottom variant="h6" component="h2">
                      {product.price} Kr
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Button size="small" color="primary"
                   className="icon"
                   onClick={() => addToCart(product.id)}
                  >
                    Köp
                  </Button>
                </CardActions>
              </Card>
            );
          }      
      }
      </ProductConsumer>
       );
      }