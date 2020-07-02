import React from 'react';
import CreditCard from './payment';


export default class ValidationForm extends React.Component {


    render() {
        
        const mystyle = {
            margin: "-20px",
            padding: "10px",  
          };
        
        return (
        
           <div style={mystyle}>

                <CreditCard />
        
                <br />

            </div>
        );
    }
}