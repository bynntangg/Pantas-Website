/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { ReactNode, useState, useEffect } from "react";
import { motion } from "motion/react";

interface Section3DProps {
  children: ReactNode;
  id?: string;
  className?: string;
}

export default function Section3D({ children, id, className = "" }: Section3DProps) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    // Initialize
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <motion.div
      id={id}
      initial={
        isMobile
          ? { opacity: 0, y: 30 }
          : { 
              opacity: 0, 
              y: 80, 
              rotateX: 12, 
              scale: 0.94,
              z: -100
            }
      }
      whileInView={
        isMobile
          ? { opacity: 1, y: 0 }
          : { 
              opacity: 1, 
              y: 0, 
              rotateX: 0, 
              scale: 1,
              z: 0
            }
      }
      viewport={{ once: true, margin: isMobile ? "-8% 0px" : "-15% 0px -15% 0px" }}
      transition={{ 
        type: "spring", 
        stiffness: 50, 
        damping: 18, 
        mass: 1.2,
        duration: isMobile ? 0.5 : 0.8
      }}
      style={
        isMobile
          ? {}
          : { 
              transformPerspective: 1200, 
              transformStyle: "preserve-3d" 
            }
      }
      className={`relative z-10 w-full origin-top ${className}`}
    >
      {children}
    </motion.div>
  );
}
