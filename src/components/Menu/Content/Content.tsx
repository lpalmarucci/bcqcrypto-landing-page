import { StyledWrapper } from "./style";
import { StyledFlex } from "components/FlexContainer/style";
import React from "react";
import { AnimatePresence } from "framer-motion";

export const Content = () => {
  return (
    <StyledFlex
      direction="column"
      justifycontent="center"
      alignitems="center"
      initial={{
        left: "50%",
        top: "50%",
        translateX: "-50%",
        translateY: "-50%",
        position: "fixed",
        height: "100vh",
        width: "100vw",
        opacity: 0,
        backgroundColor: "#5B46F6",
      }}
      animate={{
        opacity: 1,
      }}
      exit={{
        opacity: 0,
      }}
      transition={{
        type: "ease",
        duration: 0.3,
        delay: 0.2,
      }}
      style={{
        zIndex: 100,
      }}
    >
      <StyledWrapper>ciao</StyledWrapper>
    </StyledFlex>
  );
};
