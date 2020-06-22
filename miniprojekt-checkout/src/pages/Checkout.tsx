import React from 'react';
import CartItem from '../components/Cartcheckout/checkoutCartItem';
import ValiationForm from '../components/form/form';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';


export default function CheckoutPage() {

  

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="md" >
        <Typography component="div" style={{ backgroundColor: '#cfe8fc', height: '100' }}>
        

        <div ><CartItem /></div>
        
        <div ><ValiationForm/></div>
        
        
        </Typography>

      </Container>
    </React.Fragment>
  );
}
    
          
       
