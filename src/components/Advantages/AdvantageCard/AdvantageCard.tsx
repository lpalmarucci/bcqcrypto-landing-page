import Icon from 'components/Icon/Icon'
import React from 'react'
import { IAdvantage } from '../model/Advantage'
import { StyledCardWrapper, StyledText, StyledTextWrapper, StyledTitle } from './style'

const AdvantageCard: React.FC<IAdvantage>= ({
    icon,
    title,
    text
}) => {

  const cardVariant = {
    hidden: { opacity: 0, transform: 'scale(1.15)' },
    show: { 
      opacity: 1, 
      transform: 'scale(1)',
      whileInView:{
        opacity: 1,
        transform: "translateY(0px)"
      } 
    }
  }

  return (
    <StyledCardWrapper
      variants={cardVariant}
      viewport={{
        once: true,
        amount: "all"
      }}
    >
      <Icon src={icon} alt={Icon.toString()} />
      <StyledTextWrapper>
        <StyledTitle>{title}</StyledTitle>
        <StyledText>{text}</StyledText>
      </StyledTextWrapper>
    </StyledCardWrapper>
  )
}

export default AdvantageCard
