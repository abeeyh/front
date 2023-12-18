import React from 'react';
import { TextField } from '@mui/material';

interface InputProps {
  label: string;
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  variant?: 'outlined' | 'filled' | 'standard';
  type?: 'text' | 'password' | 'number' | 'email' | 'search' | 'tel' | 'url';
  helper?: string;
}

const Input: React.FC<InputProps> = ({
  label,
  value,
  onChange,
  variant,
  type,
  helper,
  ...props
}) => {
  return (
    <TextField
      fullWidth
      label={label}
      value={value}
      onChange={onChange}
      variant={variant || 'outlined'}
      type={type || 'text'}
      helperText={helper}
      {...props}
    />
  );
};

export default Input;
