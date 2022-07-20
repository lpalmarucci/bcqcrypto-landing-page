import React from 'react';
import EmailSubscription from 'components/EmailSubscription/EmailSubscription';
import FakeSlider from 'components/FakeSlider/FakeSlider';
import HeroSection from 'components/HeroSection/Hero';
import Header from './components/Header/Header';
import Globe from 'assets/img/globe.png'
import Image from './components/Image/Image'
import Button from 'components/Button/Button';

const App: React.FC =() => {
  return (
    <>
      <Header />
      <HeroSection
        joinText='Join the our crypto exchange'
        title='Popular way to buy <br /> and sell crypto.' 
        subtitle='Besnik crypto is the community-run technology powering the cryptocurrency, ether and thousands of decentralized applications.'
        heroTextChildren={<EmailSubscription />}
        childrenRightSide={<FakeSlider />}
        layout={{
          invert: false,
          right: {
            size: 35,
            backgroundColor: '#5B46F6'
          },
          left: {
            size: 65,
            backgroundColor: '#FFF'
          }
        }}
      />
      <HeroSection
        joinText='Join the our crypto exchange'
        title='Popular way to buy <br /> and sell crypto.' 
        subtitle='Besnik crypto is the community-run technology powering the cryptocurrency, ether and thousands of decentralized applications.'
        heroTextChildren={<Button text="Get it now" variant='secondary' />}
        childrenRightSide={<Image src={Globe} alt="Globe"/>}
        layout={{
          padding: true,
          invert: true,
          left: {
            size: 50,
            backgroundColor: '#FFF'
          },
          right: {
            size: 50,
            backgroundColor: '#FFF'
          }
        }}
      />
    </>
  );
}

export default App;
