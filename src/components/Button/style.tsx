import styled from "styled-components";

export const StyledButton = styled.button<{ variant?: string; color?: string }>`
  color: #fff;
  ${(props) => {
    switch (props.variant) {
      case "primary":
        return `
                    background-color: var(--blue-primary);
                    &:hover{
                        box-shadow: 0px 3px 20px rgba(91, 70, 246, .6);
                    }
                    color: ${props.color};
                `;
      case "secondary":
        return `
                    background-color: var(--blue-secondary);
                    &:hover{
                        box-shadow: 0px 3px 20px rgba(70, 140, 246, .6);
                    }
                    color: ${props.color};
                `;
      case "transparent":
        return `
                    color: ${props.color};
                    box-shadow: none;
                `;
        case "outlined":
            return `
                background-color: var(----blue-primary);
                &:hover{
                    background-color: rgba(220,220,200, .3);
                }
            `;
      default:
        return;
    }
  }};
  border-radius: 8px;
  border: none;
  padding: 1em 2em;
  cursor: pointer;
  transition: all 0.5s;
`;
