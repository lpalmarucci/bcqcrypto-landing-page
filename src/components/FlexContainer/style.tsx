import { motion } from "framer-motion";
import styled from "styled-components";

interface IFlexProps{
    justifycontent?: string;
    alignitems?: string;
    gap?: string;
    direction?: string;
}

export const StyledFlex = styled(motion.div)<IFlexProps>`
    display: flex;
    flex-direction: ${props => props.direction ? props.direction : 'row'};
    justify-content: ${props => props.justifycontent ? props.justifycontent : 'flex-start'};
    align-items: ${props => props.alignitems ? props.alignitems : 'center'};
    gap: ${props => props.gap ? props.gap : '0'};

    @media (max-width: 768px){
        padding: 2em;
    }
`