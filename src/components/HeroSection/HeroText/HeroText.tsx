import FlexContainer from 'components/FlexContainer/FlexContainer';
import React from 'react'
import { StyledJoinText,StyledHeroTitle,StyledSubTitle, StyledChildrenWrapper } from './style'

interface IProps{    
  joinText?: string;
  title: string;
  subtitle: string;
  children: JSX.Element
}

const HeroText: React.FC<IProps> = ({
    joinText,
    title,
    subtitle,
    children
}) => {
  return (
    <FlexContainer
      direction='column'
      justifyContent='flex-start'
    >
      <>
        {joinText && <StyledJoinText>{joinText}</StyledJoinText>}
        <StyledHeroTitle dangerouslySetInnerHTML={{__html: title}} />
        <StyledSubTitle>{subtitle}</StyledSubTitle>
        <StyledChildrenWrapper>
          {children ? children: null}
        </StyledChildrenWrapper>
      </>
    </FlexContainer>
  )
}

export default HeroText
