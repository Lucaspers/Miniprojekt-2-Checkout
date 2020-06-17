import React from 'react';
import Button from '@material-ui/core/Button';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';

export default class ValidationForm extends React.Component {
    state = {
        formData: {
            name: '',
            lastname: '',
            email: '',
            password: '',
            address: '',
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
                <h4>Customer Information</h4>
                <TextValidator
                    label="Name"
                    onChange={this.handleChange}
                    name="name"
                    value={formData.name}
                    validators={['required']}
                    errorMessages={['this field is required']}
                />
                <br />
               
                <TextValidator
                    label="Last Name"
                    onChange={this.handleChange}
                    name="lastname"
                    value={formData.lastname}
                    validators={['required']}
                    errorMessages={['this field is required']}
                />
                <br />
               
               
                <TextValidator
                    label="Email"
                    onChange={this.handleChange}
                    name="email"
                    value={formData.email}
                    validators={['required', 'isEmail']}
                    errorMessages={['this field is required', 'email is not valid']}
                />
                <br />
                <TextValidator
                    label="Password"
                    onChange={this.handleChange}
                    name="password"
                    value={formData.password}
                    validators={['required']}
                    errorMessages={['this field is required']}
                />
                <br />
                <TextValidator
                    label="Address"
                    onChange={this.handleChange}
                    name="address"
                    value={formData.address}
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
                        || (!submitted && 'Submit')
                    }
                </Button>
            </ValidatorForm>
        );
    }
}