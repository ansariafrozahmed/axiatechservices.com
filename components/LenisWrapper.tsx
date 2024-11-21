import ReactLenis from "lenis/react";
import React, { ReactNode } from "react";

interface LenisWrapperProps {
  children: ReactNode;
}

const LenisWrapper: React.FC<LenisWrapperProps> = ({ children }) => {
  return <ReactLenis root>{children}</ReactLenis>;
};

export default LenisWrapper;
