import React, {useRef, useState} from "react";
import Logo from "assets/img/logo.png";
import {
  StyledHeader,
  StyledMenuItems,
  StyledMenuItem,
  StyledGroup,
  StyledLogo, StyledBlob,
} from "./style";
import Button from "components/Button/Button";
import useMediaQuery from "hooks/useMediaQuery";
import Mobile from "./Mobile/Mobile";

interface BlobStyle{
  left: number;
  width: number;
  height: number;
}

const Header: React.FC = () => {
  const isDesktop = useMediaQuery("(min-width: 768px)");

  const menuWrapperRef = useRef<HTMLDivElement>(null);
  const [blobStyle, setBlobStyle] = useState<BlobStyle>({left: 0, width: 0, height: 0});

  const moveBlob = (e: React.MouseEvent<HTMLElement>) => {
    const {left, width, height} = e.currentTarget.getBoundingClientRect()
    let menuItemsWrapper = menuWrapperRef.current?.getBoundingClientRect();
    document.querySelectorAll(".menu-item").forEach((menuItem: Element) => {
      menuItem.classList.remove('active')
    })
    e.currentTarget.classList.add('active');

    setBlobStyle(() => ({
      left: left - (menuItemsWrapper?.left || 0) - 12,
      width: width + 24,
      height: height + 8
    }));
  }

  return (
    <StyledHeader>
      {isDesktop ? (
        <React.Fragment>
          <StyledGroup>
            <StyledLogo src={Logo} alt="Logo" />
            <StyledMenuItems ref={menuWrapperRef}>
              <StyledMenuItem hoverAnimation={false} onClick={moveBlob} className="menu-item">Home</StyledMenuItem>
              <StyledMenuItem hoverAnimation={false} onClick={moveBlob} className="menu-item">Wallet</StyledMenuItem>
              <StyledMenuItem hoverAnimation={false} onClick={moveBlob} className="menu-item">Exchange</StyledMenuItem>
              <StyledMenuItem hoverAnimation={false} onClick={moveBlob} className="menu-item">Explorer</StyledMenuItem>
              <StyledBlob className={"blob"} style={blobStyle}/>
            </StyledMenuItems>
          </StyledGroup>
          <StyledGroup>
            <StyledMenuItems>
              <StyledMenuItem color="#fff">
                <Button text="Login" variant="outlined" />
              </StyledMenuItem>
              <StyledMenuItem>
                <Button text="Sign up" variant="transparent" color="#353535" />
              </StyledMenuItem>
            </StyledMenuItems>
          </StyledGroup>
        </React.Fragment>
      ) : (
        <Mobile />
      )}
    </StyledHeader>
  );
};

export default Header;
