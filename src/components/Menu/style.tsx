import styled from "styled-components";

export const StyledHeader = styled.header`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2em 8em;
  position: absolute;
  top: 0;
  left: 0;

  @media (max-width: 1024px) {
    padding: 2em 4em;
  }
`;
export const StyledLogo = styled.img`
  margin-right: 4em;
  cursor: pointer;
`;
export const StyledGroup = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;

  > * {
    cursor: pointer;
  }

  @media (max-width: 1024px) {
    width: 100%;
  }
`;

export const StyledMenuItems = styled.div.attrs(({ref}) => ({ref}))`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2em;
  position: relative;
`;

export const StyledMenuItem = styled.nav<{
  type?: string;
  hoverAnimation?: boolean;
}>`
  color: ${(props) => (props.color ? props.color : `#353535`)};
  font-size: 16px;
  font-weight: 300;
  line-height: 30px;
  cursor: pointer;
  transition: all 0.3s;
  user-select: none;
  position: relative;
  overflow: hidden;
  z-index: 2;

  ${(props) =>
    props.type &&
    props.type === "button" &&
    `
        background-color: #fff;
        border-radius: 8px;
        padding: .8em 2em;
        &:active {
          transform: scale(0.85);
          color: #fff !important;
        }
    `}

  ${(props) =>
    props.hoverAnimation &&
    `
        &::after{
            content: '';
            height: 1px;
            width: 100%;
            background: linear-gradient(45deg, #353535, #353535);
            background-position: 0% 100%;
            transition: all .3s ease-out;
            position: absolute;
            bottom: 0px;
            left: -100%;
        }
    
        &:hover::after{
            left: 0;
        }
    
    `}

    @media (max-width: 1024px) {
      display: none;
    }
  
  &.active{
    color: #fff !important;
  }
`;

export const StyledBlob = styled.div`
  background-color: var(--blue-primary);   
  width: 100px;
  height: calc(100% + 6px); 
  border-radius: 10px;
  transition: all .3s;
  position: absolute;
  z-index: 1;
`