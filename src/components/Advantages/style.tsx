import { motion } from "framer-motion";
import styled from "styled-components";

export const StyledGridWrapper = styled(motion.div)`
    width: 100%;
    height: 350px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    justify-items: center;
    align-content: space-between;
`