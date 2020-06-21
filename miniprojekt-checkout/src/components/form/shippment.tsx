import React from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';


export default function ShippmentGroup() {
  const [value, setValue] = React.useState('PostNord');

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <FormControl component="fieldset">
      <RadioGroup aria-label="shippment" name="shipment1" value={value} onChange={handleChange}>
        <FormControlLabel value="PostNord" control={<Radio />} label="PostNord- 45 Kr. fräkt inom 48 timmar" />
        <FormControlLabel value="DHL" control={<Radio />} label="DHL- 80 Kr. fräkt inom 24 timmar" />
        <FormControlLabel value="Express Delivery" control={<Radio />} label=" Express Delivery- 120 Kr. fräkt inom 12 timmar" />
      </RadioGroup>
    </FormControl>
  );
}