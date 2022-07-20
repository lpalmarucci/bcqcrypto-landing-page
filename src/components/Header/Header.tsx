import React from 'react'
import Logo from 'assets/img/logo.png'
import { StyledHeader,StyledMenuItems,StyledMenuItem,StyledGroup,StyledLogo } from './style'
const Header: React.FC = () => {
  return (
    <StyledHeader>
        <StyledGroup>
            <StyledLogo src={Logo} alt="Logo"/>
            <StyledMenuItems>
                <StyledMenuItem>Wallet</StyledMenuItem>
                <StyledMenuItem>Exchange</StyledMenuItem>
                <StyledMenuItem>Explorer</StyledMenuItem>
            </StyledMenuItems>
        </StyledGroup>
        <StyledGroup>
            <StyledMenuItems>
                <StyledMenuItem color="#fff">Login</StyledMenuItem>
                <StyledMenuItem type="button">Sign Up</StyledMenuItem>
            </StyledMenuItems>
        </StyledGroup>
    </StyledHeader>
  )
}

export default Header
