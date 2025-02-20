import React from 'react';
import { FormControl, FormControlLabel, Radio, RadioGroup } from '@mui/material';

function RadioBtn({ options , groupName }) {
  
  return (
    <FormControl>
      <RadioGroup
        row
        aria-labelledby={`${groupName}-label`}
        name={groupName}
      >
        {options.map((option, index) => (
          <FormControlLabel
            key={index}
            value={option.value }
            control={<Radio />}
            label={option.label}
          />
        ))}
      </RadioGroup>
    </FormControl>
  );
}

export default RadioBtn;