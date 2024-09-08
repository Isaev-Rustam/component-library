import styled from 'styled-components';
import { BorderRadiusKeys, BorderWidthKeys, ColorKeys } from '../../themes';
import { ReactNode } from 'react';

// Интерфейс для пропсов кнопки
export interface StyledButtonProps {
  size?: 'small' | 'medium' | 'large';
  $borderRadius?: BorderRadiusKeys;
  $borderWidth?: BorderWidthKeys;
  $borderColor?: ColorKeys;
  $backgroundColor?: ColorKeys;
  $textColor?: ColorKeys;
  $hoverColor?: ColorKeys;
  $activeColor?: ColorKeys;
  $disabledColor?: ColorKeys;
  children?: ReactNode;
}

// Стиль для размеров кнопки
const sizeStyles = {
  small: `
    padding: 0.25rem 0.5rem;
    font-size: 0.75rem;
  `,
  medium: `
    padding: 0.5rem 1rem;
    font-size: 1rem;
  `,
  large: `
    padding: 0.75rem 1.5rem;
    font-size: 1.25rem;
  `,
};

export const StyledButton = styled.button<StyledButtonProps>`
  background: ${({ theme, $backgroundColor = 'primary-color' }) =>
    theme.colors[$backgroundColor]};
  color: ${({ theme, $textColor = 'text-color' }) => theme.colors[$textColor]};
  border: ${({ theme, $borderWidth = 'thin', $borderColor = 'border-color' }) =>
    `${theme.borderWidth[$borderWidth]} solid ${theme.colors[$borderColor]}`};
  border-radius: ${({ theme, $borderRadius = 'medium' }) =>
    theme.borderRadius[$borderRadius]};
  cursor: pointer;
  ${({ size = 'medium' }) => sizeStyles[size]}

  &:hover {
    background: ${({ theme, $hoverColor = 'hover-color' }) =>
      theme.colors[$hoverColor]};
  }

  &:active {
    background: ${({ theme, $activeColor = 'active-color' }) =>
      theme.colors[$activeColor]};
  }

  &:disabled {
    background: ${({ theme, $disabledColor = 'disabled-color' }) =>
      theme.colors[$disabledColor]};
    color: ${({ theme }) => theme.colors['secondary-text-color']};
    cursor: not-allowed;
  }
`;
