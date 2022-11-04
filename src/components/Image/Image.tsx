import fadeIn from 'animations/fadeIn';
import FlexContainer from 'components/FlexContainer/FlexContainer';
import { IAninimation } from 'models/Animation';
import React from 'react'
import { RefObject } from 'react';
import { forwardRef } from 'react';
import { StyledImage } from './style';

interface IProps{
    src: string;
    alt: string;
    style?: object;
    animationOptions?: IAninimation;
}

const Image:React.ForwardRefExoticComponent<IProps & React.RefAttributes<HTMLImageElement>> = forwardRef<HTMLImageElement, IProps>(({
    src,
    alt,
    style,
    animationOptions= fadeIn
}, ref) => {
  return (
    <StyledImage 
      ref={ref}
      src={src} 
      alt={alt} 
      draggable={false} 
      onMouseDown={() => false} style={style} 
      {...animationOptions}
    />
  )
})

export default Image
