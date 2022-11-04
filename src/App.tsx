import React from "react";
import EmailSubscription from "components/EmailSubscription/EmailSubscription";
import FakeSlider from "components/FakeSlider/FakeSlider";
import HeroSection from "components/HeroSection/Hero";
import Header from "./components/Menu/Menu";
import Globe from "assets/img/globe.png";
import Image from "./components/Image/Image";
import Button from "components/Button/Button";
import Advantages from "components/Advantages/Advantages";

const App: React.FC = () => {
  return (
    <>
      <Header />
      <HeroSection
        id="home"
        joinText="Join the our crypto exchange"
        title="Popular way to buy and sell crypto."
        subtitle="Besnik crypto is the community-run technology powering the cryptocurrency, ether and thousands of decentralized applications."
        heroTextChildren={<EmailSubscription />}
        childrenRightSide={<FakeSlider />}
        layout={{
          invert: false,
          right: {
            size: 35,
            backgroundColor: "#5B46F6",
          },
          left: {
            size: 65,
            backgroundColor: "#FFF",
          },
          sticky: true
        }}
      />
      <HeroSection
        id="findout"
        joinText="Join the our crypto exchange"
        title="BCQ crypto lending, trading, and custody for worldwide"
        subtitle="Besnik crypto is the community-run technology powering the cryptocurrency, ether and thousands of decentralized applications."
        heroTextChildren={<Button text="Get it now" variant="secondary" />}
        childrenRightSide={<Image src={Globe} alt="Globe" />}
        layout={{
          padding: true,
          invert: true,
          left: {
            size: 50,
            backgroundColor: "#FFF",
          },
          right: {
            size: 50,
            backgroundColor: "#FFF",
          },
        }}
      />
      <HeroSection
        id="advantages"
        title="We make crypto easy"
        subtitle="Specific cryptocurrencies work and get a bit of  crypto to try out for yourself. Here are a few reasons why you should choose besnik crypto"
        heroTextChildren={<Button text="Learn more" variant="secondary"/>}
        childrenRightSide={<Advantages />}
        layout={{
          padding: true,
          invert: false,
          left: {
            size: 40,
            backgroundColor: "#FFF",
          },
          right: {
            size: 60,
            backgroundColor: "#FFF",
          },
        }}
      />
    </>
  );
};

export default App;
