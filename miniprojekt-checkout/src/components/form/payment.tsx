import React from 'react';
import Button from '@material-ui/core/Button';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';




export default class CreditCard extends React.Component {
    state = {
        formData: {
            name: '',
            cardnumber: '',
            valid: '',
            cvv: '',
           
        },
        submitted: false,
    }

    handleChange = (event) => {
        const { formData } = this.state;
        formData[event.target.name] = event.target.value;
        this.setState({ formData });
    }

    handleSubmit = () => {
        this.setState({ submitted: true }, () => {
            setTimeout(() => this.setState({ submitted: false }), 5000);
           
         

        });
    }


  
    render() {
        const { formData, submitted } = this.state;
        return (
            <ValidatorForm
                ref="form"
                onSubmit={this.handleSubmit}
            >
               
                <TextValidator
                    label="Name on Card"
                    onChange={this.handleChange}
                    name="name"
                    value={formData.name}
                    validators={['required']}
                    errorMessages={['this field is required']}
                />
                <br />
               
                <TextValidator
                    label="Card Number"
                    onChange={this.handleChange}
                    name="cardnumber"
                    value={formData.cardnumber}
                    validators={['required']}
                    errorMessages={['this field is required']}
                />
                <br />
               
                <TextValidator
                    label="Valid untill"
                    onChange={this.handleChange}
                    name="valid"
                    value={formData.valid}
                    validators={['required']}
                    errorMessages={['this field is required']}
                />
                <br />
                <TextValidator
                    label="CVV"
                    onChange={this.handleChange}
                    name="cvv"
                    value={formData.cvv}
                    validators={['required']}
                    errorMessages={['this field is required']}
                />

                <br />
               
               
                <Button
                    color="primary"
                    variant="contained"
                    type="submit"
                    disabled={submitted}
                    
                >
                
                    {
                        (submitted && 'Your form is submitted!')
                        || (!submitted && 'Betala')
                    }
                </Button>
              

            </ValidatorForm>
        );
    }
}