import { StyledFlex } from './style'
import React from 'react'

interface IProps{
  direction?: string;
  justifyContent?: string;
  alignItems?: string;
  gap?: string;
  children: JSX.Element
}

const FlexContainer: React.FC<IProps> = ({ 
  direction,
  justifyContent,
  alignItems,
  gap,
  children
}) => {
  return (
    <StyledFlex
      direction={direction}
      justifyContent={justifyContent}
      alignItems={alignItems}
      gap={gap}
    >
        {children}
    </StyledFlex>
  )
}

export default FlexContainer
