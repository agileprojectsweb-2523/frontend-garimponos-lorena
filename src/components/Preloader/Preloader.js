'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './Preloader.module.css';

const containerVariants = {
  visible: { 
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  },
  exit: {
    y: '-100%', // Sobe igual uma folha de papel
    transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] }
  }
};

const letterVariants = {
  hidden: { y: 50, opacity: 0, rotate: 10 },
  visible: { 
    y: 0, 
    opacity: 1, 
    rotate: 0,
    transition: { type: "spring", stiffness: 200 }
  }
};

const scriptVariants = {
  hidden: { scale: 0, rotate: -20, opacity: 0 },
  visible: { 
    scale: 1, 
    rotate: -10, 
    opacity: 1,
    transition: { 
      delay: 0.8, // Espera o Garimpo aparecer
      type: "spring", 
      stiffness: 150, 
      damping: 10 
    }
  }
};

export default function Preloader() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2800); // Tempo um pouco maior para apreciar a animação

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence mode="wait">
      {isLoading && (
        <motion.div 
          className={styles.container}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          
          <div className={styles.contentWrapper}>
            {/* GARIMPO (Letras de Bloco) */}
            <div className={styles.blockText}>
              {['G', 'A', 'R', 'I', 'M', 'P', 'O'].map((char, i) => (
                <motion.span key={i} variants={letterVariants}>
                  {char}
                </motion.span>
              ))}
            </div>

            {/* .NÓS (Super Cursiva Desenhada) */}
            <motion.div 
              className={styles.scriptText}
              variants={scriptVariants}
            >
              .nós
              
              {/* Doodle de Coração */}
              <svg className={styles.heartDoodle} viewBox="0 0 100 100" width="60">
                <motion.path 
                  d="M50 80 Q5 50 25 20 Q40 5 50 30 Q60 5 75 20 Q95 50 50 80 Z" 
                  fill="none" 
                  stroke="#fff" 
                  strokeWidth="3"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ delay: 1.5, duration: 0.5 }}
                />
              </svg>
            </motion.div>
          </div>

        </motion.div>
      )}
    </AnimatePresence>
  );
}