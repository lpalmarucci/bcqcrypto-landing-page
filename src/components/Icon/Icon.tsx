import React from 'react'
import { StyledIcon } from './style';

interface IProps{
    src: string;
    alt: string;
}

const Icon: React.FC<IProps> = ({
    src,
    alt
}) => {
  return (
    <StyledIcon src={src} alt={alt}/>
  )
}

export default Icon
