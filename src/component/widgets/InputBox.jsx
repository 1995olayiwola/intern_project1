import React from 'react';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';

/**
 *
 * @param {variant} outlined | filled | standard
 * @returns
 */
function InputBox({
  name,
  label,
  value,
  handleChange,
  disabled,
  type = 'text',
  id,
  helperText,
  error = false,
  variant = 'outlined',
  start = null,
  end = null,
}) {
  return (
    <div>
      <TextField
        fullWidth
        type={type}
        label={label}
        name={name}
        value={value}
        id={id}
        variant={variant}
        onChange={handleChange}
        disabled={disabled}
        helperText={helperText}
        error={error}
        InputProps={{
          startAdornment: start ? (
            <InputAdornment position='start'>{start}</InputAdornment>
          ) : null,
          endAdornment: end ? (
            <InputAdornment position='end'>{end}</InputAdornment>
          ) : null,
        }}
      />
    </div>
  );
}

export default InputBox;
