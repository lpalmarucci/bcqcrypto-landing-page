import styled from "styled-components";

interface IFlexProps{
    justifyContent?: string;
    alignItems?: string;
    gap?: string;
    direction?: string;
}

export const StyledFlex = styled.div<IFlexProps>`
    display: flex;
    flex-direction: ${props => props.direction ? props.direction : 'row'};
    justify-content: ${props => props.justifyContent ? props.justifyContent : 'flex-start'};
    align-items: ${props => props.justifyContent ? props.justifyContent : 'center'};
    gap: ${props => props.gap ? props.gap : '0'};
`