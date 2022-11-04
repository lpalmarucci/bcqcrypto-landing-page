import React, { useEffect, useRef } from 'react'
import Mock1 from 'assets/img/mock-1.png'
import Mock2 from 'assets/img/mock-2.png'
import { StyledFlexWrapper } from './style'
import Image from 'components/Image/Image'
import { useAnimationControls, useInView } from 'framer-motion'
import { RefObject } from 'react'

const FakeSlider: React.FC = () => {

  const ref = useRef(null)
  const isInView = useInView(ref)
  const controlAnimation =  useAnimationControls();

  useEffect(() => {
    if(isInView){
      controlAnimation.start({

        translateX: 0,
        opacity: 1,
      });
    } else{
      controlAnimation.start('hidden')
    }
  }, [isInView])

  const animationOptions= {
    transition: {
      duration: .4, 
      type: "ease"
    },
    initial: "hidden",
    animate: "slide",
    variants:{
      hidden: {
        translateX: 100,
        opacity: 0,
        transform: "translateZ(0) rotateX(0) rotateY(0)",
        transformStyle: 'preserve-3d',
      },
      slide: (n: number) => ({
        translateX: 0,
        opacity: 1,
        transition: {
          delay: n * 0.2,
          staggerDirection: -1
        }
      }),
    },
    whileHover: {
      transform: "translateZ(10px) rotateX(20deg) rotateY(20deg)",
      transition: {duration: .3}
    },
  }
  return (
    <StyledFlexWrapper
        direction='row'
    >
      <Image
        ref={ref}
        src={Mock1} 
        alt="Mock 1" 
        animationOptions={{...animationOptions, custom: 1}}
      />
      <Image 
        src={Mock2} 
        alt="Mock 2" 
        style={{marginTop: "-1em"}} 
        animationOptions={{...animationOptions, custom: 2}}
      />
    </StyledFlexWrapper>
  )
}

export default FakeSlider