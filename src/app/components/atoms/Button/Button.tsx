import React from 'react';
import { Button as MuiButton } from '@mui/material';

interface ButtonProps {
  label: string;
  variant?: 'contained' | 'outlined' | 'text';
  size?: 'small' | 'medium' | 'large';
  disabled?: boolean;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Button: React.FC<ButtonProps> = ({
  label,
  variant,
  disabled,
  ...props
}) => {
  return (
    <MuiButton disabled={disabled} variant={variant || 'contained'} {...props}>
      {label}
    </MuiButton>
  );
};

export default Button;
