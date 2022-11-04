import React from 'react'
import { StyledButton } from './style';

interface IProps{
    text: string;
    variant?: string;
    color?: string;
    callback?: () => void;
}

const Button: React.FC<IProps> = ({
    text,
    variant,
    color,
    callback
}) => {
  return (
    <StyledButton
        type="button"
        onClick={callback}
        variant={variant}
        color={color}
    >
        {text}
    </StyledButton>
  )
}

export default Button
