import { motion } from "framer-motion";
import styled from "styled-components";

export const StyledCardWrapper = styled(motion.div)`
    width: clamp(250px, 100%, 320px);
    display: grid;
    grid-template-columns: 40px 1fr;
    column-gap: 12px;
    justify-items: center;
    align-content: center;
`

export const StyledTextWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: space-between;
    gap: 18px;
`

export const StyledTitle = styled.h3`
    font-weight: 600;
    font-size: 22px;
    color: #1D2D3F;
    line-height: 27px;
`

export const StyledText = styled.p`
    font-weight: 400;
    font-size: 16px;
    line-height: 26px;
    color: #848484;
`