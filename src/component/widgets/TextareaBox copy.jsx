import React from 'react';
import TextField from '@mui/material/TextField';

function TextareaBox({
  name,
  label,
  value,
  handleChange,
  disabled,
  rows = 4,
  helperText,
  error = false,
}) {
  return (
    <div>
      <TextField
        fullWidth
        label={label}
        name={name}
        value={value}
        onChange={(e) => {
          handleChange(e.target.name, e.target.value);
        }}
        disabled={disabled}
        multiline
        rows={rows}
        helperText={helperText}
        error={error}
      />
    </div>
  );
}

export default TextareaBox;
