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

interface CursorStyle{
  left: number;
  width: any;
}

//padding of cursor
const blobPadding = 20;

const Header: React.FC = () => {
  const isDesktop = useMediaQuery("(min-width: 1024px)");

  const menuWrapperRef = useRef<HTMLDivElement>(null);
  const [cursorStyle, setCursorStyle] = useState<CursorStyle>({left: -blobPadding / 2, width: 0});

  const animateBlob = (e: React.MouseEvent<HTMLElement>) => {
    const {left, width} = e.currentTarget.getBoundingClientRect()
    let menuItemsWrapper = menuWrapperRef.current?.getBoundingClientRect();
    document.querySelectorAll(".menu-item").forEach((menuItem: Element) => {
      menuItem.classList.remove('active')
    })
    e.currentTarget.classList.add('active');
    setCursorStyle({
      left: left - (menuItemsWrapper?.left || 0) - (blobPadding / 2),
      width: width + blobPadding
    });
  }


  return (
    <StyledHeader>
      {isDesktop ? (
        <React.Fragment>
          <StyledGroup>
            <StyledLogo src={Logo} alt="Logo" />
            <StyledMenuItems ref={menuWrapperRef}>
              <StyledMenuItem hoverAnimation={false} onClick={animateBlob} className="menu-item" href="#home">Home</StyledMenuItem>
              <StyledMenuItem hoverAnimation={false} onClick={animateBlob} className="menu-item" href="#findout">Find out</StyledMenuItem>
              <StyledMenuItem hoverAnimation={false} onClick={animateBlob} className="menu-item" href="#advantages">Advantages</StyledMenuItem>
              <StyledMenuItem hoverAnimation={false} onClick={animateBlob} className="menu-item" href="#none">Explorer</StyledMenuItem>
              <StyledBlob style={cursorStyle}/>
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
