import React from 'react'
import { StyledHeroWrapper, StyledSide } from './style'
import HeroText from './HeroText/HeroText';

interface IProps{
  joinText?: string;
  id: string;
  title: string;
  subtitle: string;
  heroTextChildren: JSX.Element,
  childrenRightSide: JSX.Element,
  layout: {
    padding?: boolean;
    invert?: boolean;
    left?: {
      size: number;
      backgroundColor: string;
    },
    right?: {
      size: number;
      backgroundColor: string;
    },
    sticky?: boolean
  }
}

const Hero: React.FC<IProps> = ({
  id,
  joinText,
  title,
  subtitle,
  layout = {
    padding: false,
    invert: false,
    left: {
      size: 50,
      backgroundColor: '#FFF'
    },
    right: {
      size: 50,
      backgroundColor: '#FFF'
    },
    sticky: false
  },
  heroTextChildren,
  childrenRightSide,
}): JSX.Element => {
  return (
    <StyledHeroWrapper 
      padding={layout.padding}
    >
      <StyledSide position={layout.invert ? 'right' : 'left'} {...layout['left']} id={id} sticky={layout.sticky}>
        <HeroText 
          joinText={joinText}
          title={title}
          subtitle={subtitle}
          sticky={!!layout.sticky}
        >
          {heroTextChildren}
        </HeroText>
      </StyledSide>
      <StyledSide  position={layout.invert ? 'left' : 'right'} {...layout['right']}>
        {childrenRightSide}
      </StyledSide>
    </StyledHeroWrapper>
  )
}

export default Hero
