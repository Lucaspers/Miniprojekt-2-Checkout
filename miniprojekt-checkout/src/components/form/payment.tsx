import React from "react";
import Button from '@material-ui/core/Button';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import { ProductConsumer } from "../../context/context";
import SwishPaypal from './paymentSwishPaypal';
import ShippmentGroup from './shippment';

export default function CreditCard() {
   
 const valueRef = React.useRef();
        return (

        <ProductConsumer>
        {value => {
        const { formData, submitted, handleSubmit, handleChange } = value;
       
        return (
          
            <ValidatorForm
            
            ref={valueRef}
            onSubmit={handleSubmit}

        >
           <h4>Dina Uppgifter</h4>
                <TextValidator
                    label="Name"
                    onChange={handleChange}
                    name="name"
                    value={formData.name}
                    validators={['required']}
                    errorMessages={['this field is required']}
                />
                <br />
               
                <TextValidator
                    label="Last Name"
                    onChange={handleChange}
                    name="lastname"
                    value={formData.lastname}
                    validators={['required']}
                    errorMessages={['this field is required']}
                />
                <br />
               
               
                <TextValidator
                    label="Email"
                    onChange={handleChange}
                    name="email"
                    value={formData.email}
                    validators={['required', 'isEmail']}
                    errorMessages={['this field is required', 'email is not valid']}
                />
                <br />
                <TextValidator
                    label="Password"
                    onChange={handleChange}
                    name="password"
                    value={formData.password}
                    validators={['required']}
                    errorMessages={['this field is required']}
                />
                <br />
                <TextValidator
                    label="Address"
                    onChange={handleChange}
                    name="address"
                    value={formData.address}
                    validators={['required']}
                    errorMessages={['this field is required']}
                />
                <hr/>
                 
                <h4>Frakt</h4>

                
                <ShippmentGroup />
                <hr/>
               
                <h4>Betala med Swish eller Paypal</h4>
                
                <SwishPaypal />

                
                <h4>Betala med Kort</h4>
                
            <TextValidator
                label="Name on Card"
                onChange={handleChange}
                name="name"
                value={formData.name}
                validators={['required']}
                errorMessages={['this field is required']}
            />
            <br />
           
            <TextValidator
                label="Card Number"
                onChange={handleChange}
                name="cardnumber"
                value={formData.cardnumber}
                validators={['required']}
                errorMessages={['this field is required']}
            />
            <br />
           
            <TextValidator
                label="Valid untill"
                onChange={handleChange}
                name="valid"
                value={formData.valid}
                validators={['required']}
                errorMessages={['this field is required']}
            />
            <br />
            <TextValidator
                label="CVV"
                onChange={handleChange}
                name="cvv"
                value={formData.cvv}
                validators={['required']}
                errorMessages={['this field is required']}
            />

            <br />

            <hr/>
          
          <br />
            <Button
                    color="primary"
                    variant="contained"
                    type="submit"
                    disabled={submitted} 
                >
               
                {
                        (submitted && 'Beställning gick!')
                        || (!submitted && 'Slutförköp')
                    }

                </Button>         
          
           
        </ValidatorForm>
           
             
               
           );
        }}
      </ProductConsumer>
      
    );
   
  }
