import React, { useRef, useState } from "react";
import Logo from "assets/img/logo.png";
import { StyledGroup, StyledLogo } from "../style";
import { AnimatePresence, motion, useCycle } from "framer-motion";
import { Content } from "../Content/Content";
import { useDimensions } from "hooks/useDimensions";

const Mobile: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef(null);
  const { height } = useDimensions(containerRef);

  const draw = {
    hidden: { pathLength: 0 },
    normal: (x: number) => ({
      delay: x * 0.2,
      pathLength: 1,
      opacity: 1,
      stroke: "#FFF",
    }),
    close: (x: number) => {
      if (x == 2) {
        return { opacity: 1, pathLength: 0 };
      }

      return {
        pathLength: 1,
        opacity: 1,
        originX: "8%",
        rotate: x === 1 ? "45deg" : "-45deg",
        transition: {
          delay: 0.4,
        },
      };
    },
  };

  const sidebar = {
    open: (height = 1000) => ({
      clipPath: `circle(${height * 2 + 200}px at 35px 35px)`,
      transition: {
        type: "spring",
        stiffness: 20,
        restDelta: 2,
      },
    }),
    closed: {
      clipPath: "circle(30px at 35px 35px)",
      transition: {
        delay: 0.5,
        type: "spring",
        stiffness: 400,
        damping: 40,
      },
    },
  };

  return (
    <AnimatePresence>
      <StyledGroup>
        <StyledLogo src={Logo} alt="Logo" />
        <motion.nav
          initial={false}
          animate={`${isOpen ? "open" : "closed"}`}
          custom={height}
          ref={containerRef}
          style={{
            position: "relative",
            padding: "20px",
          }}
        >
          <motion.div
            className="menuMobileBackground"
            initial={false}
            animate={`${isOpen ? "open" : "closed"}`}
            variants={sidebar}
          />
          <motion.svg
            fill="#FFF"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 30 30"
            width="30px"
            height="30px"
            onClick={() => setIsOpen((isOpen) => !isOpen)}
            initial={false}
            animate={`${isOpen ? "close" : "normal"}`}
            style={{
              zIndex: 100,
            }}
          >
            <motion.line
              x1="0"
              x2="30"
              y1="5"
              y2="5"
              height={5}
              width={30}
              variants={draw}
              custom={1}
            />
            <motion.line
              x1="0"
              x2="30"
              y1="14"
              y2="14"
              height={5}
              width={30}
              variants={draw}
              custom={2}
            />
            <motion.line
              x1="0"
              x2="30"
              y1="23"
              y2="23"
              height={5}
              width={30}
              variants={draw}
              custom={3}
            />
          </motion.svg>
        </motion.nav>
      </StyledGroup>
    </AnimatePresence>
  );
};

export default Mobile;
