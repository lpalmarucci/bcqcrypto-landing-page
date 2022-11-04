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
      justifycontent={justifyContent}
      alignitems={alignItems}
      gap={gap}
      viewport={{
        once: true,
        amount: 'all'
      }}
      initial={{
        opacity: 0,
        transform: "translateY(10px)"
      }}
      transition={{
        duration: .5,
        type:"ease"
      }}
      whileInView={{
        opacity: 1,
        transform: "translateY(0px)"
      }}
    >
        {children}
    </StyledFlex>
  )
}

export default FlexContainer
