import React from 'react'
import Mock1 from 'assets/img/mock-1.png'
import Mock2 from 'assets/img/mock-2.png'
import { StyledFlexWrapper } from './style'
import Image from 'components/Image/Image'

const FakeSlider: React.FC = () => {
  return (
    <StyledFlexWrapper
        direction='row'
    >
        <>
        <Image src={Mock1} alt="Mock 1" />
        <Image src={Mock2} alt="Mock 2" style={{marginTop: "-1em"}} />
        </>
    </StyledFlexWrapper>
  )
}

export default FakeSlider
