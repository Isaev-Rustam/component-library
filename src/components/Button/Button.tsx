import { FC } from 'react';
import { StyledButton, StyledButtonProps } from './Button.styles';
import React from 'react';

interface ButtonProps extends StyledButtonProps {
  onClick?: () => void;
  disabled?: boolean;
}

const Button: FC<ButtonProps> = ({
  onClick,
  children,
  size = 'medium',
  disabled = false,
  ...props
}) => {
  return (
    <StyledButton onClick={onClick} size={size} disabled={disabled} {...props}>
      {children}
    </StyledButton>
  );
};

export default Button;
