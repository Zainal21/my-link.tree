import { motion } from "framer-motion";
import React from "react";

interface AnimateProps {
  children?: React.ReactNode;
}

export const Animate: React.FC<AnimateProps> = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.div>
  );
};
