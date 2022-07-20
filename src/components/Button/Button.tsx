import React from 'react'
import { StyledButton } from './style';

interface IProps{
    text: string;
    variant?: string;
    callback?: () => void;
}

const Button: React.FC<IProps> = ({
    text,
    variant,
    callback
}) => {
  return (
    <StyledButton
        type="button"
        onClick={callback}
        variant={variant}
    >
        {text}
    </StyledButton>
  )
}

export default Button
