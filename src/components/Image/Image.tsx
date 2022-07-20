import React from 'react'
import { StyledImage } from './style';

interface IProps{
    src: string;
    alt: string;
    style?: object;
}

const Image: React.FC<IProps> = ({
    src,
    alt,
    style
}) => {
  return (
    <StyledImage src={src} alt={alt} draggable={false} onMouseDown={() => false} style={style}/>
  )
}

export default Image
