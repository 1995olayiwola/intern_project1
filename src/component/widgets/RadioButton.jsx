import React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

function RadioButton({ name, label, value, handleChange, options = [] }) {
  return (
    <div>
      <FormControl component='fieldset'>
        <FormLabel component='legend'>{label}</FormLabel>
        <RadioGroup row aria-label={name} name={name}>
          {options.map((rec) => {
            return (
              <FormControlLabel
                key={`radio_${name}_${rec.key}`}
                value={rec.key}
                control={<Radio />}
                label={rec.label}
                checked={value === rec.key}
                onChange={(e) => {
                  handleChange(name, e.target.value);
                }}
              />
            );
          })}
        </RadioGroup>
      </FormControl>
    </div>
  );
}

export default RadioButton;
