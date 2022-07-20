import React from 'react'
import { StyledHeroWrapper, StyledSide } from './style'
import HeroText from './HeroText/HeroText';
import EmailSubscription from 'components/EmailSubscription/EmailSubscription';

interface IProps{
  joinText?: string;
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
    }
  }
}

const Hero: React.FC<IProps> = ({
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
  },
  heroTextChildren,
  childrenRightSide,
}): JSX.Element => {

  return (
    <StyledHeroWrapper padding={layout.padding}>
      <StyledSide position={layout.invert ? 'right' : 'left'} {...layout['left']}>
        <HeroText 
          joinText={joinText}
          title={title}
          subtitle={subtitle}
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
