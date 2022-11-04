import FlexContainer from 'components/FlexContainer/FlexContainer';
import React from 'react'
import { StyledJoinText,StyledHeroTitle,StyledSubTitle, StyledChildrenWrapper } from './style'

interface IProps{    
  joinText?: string;
  title: string;
  subtitle: string;
  children: JSX.Element,
  sticky: boolean,
}

const HeroText: React.FC<IProps> = ({
    joinText,
    title,
    subtitle,
    children,
    sticky
}) => {
  const style: React.CSSProperties = sticky ? {
    position: 'sticky',
    top: '120px'
  } : {};
  return (
    <FlexContainer
      direction='column'
      justifyContent='center'
      alignItems='flex-start'
      styles={style}
    >
      <>
        {joinText && <StyledJoinText>{joinText}</StyledJoinText>}
        <StyledHeroTitle>{title}</StyledHeroTitle>
        <StyledSubTitle>{subtitle}</StyledSubTitle>
        <StyledChildrenWrapper>
          {children ? children: null}
        </StyledChildrenWrapper>
      </>
    </FlexContainer>
  )
}

export default HeroText
