'use client';

import { motion } from 'framer-motion';
import styles from './Marquee.module.css';

export default function Marquee() {
  // Duplicamos o conteúdo para garantir o loop infinito sem buracos
  // Mistura de frases da Lorena com a identidade da marca
  const marqueeContent = (
    <>
      <span className={styles.bold}>GARIMPO.NOS</span>
      <span className={styles.separator}>✦</span>
      
      <span className={styles.script}>Moda com Propósito</span>
      <span className={styles.separator}>✦</span>
      
      <span className={styles.bold}>TÔ DE OLHO</span>
      <span className={styles.separator}>✦</span>
      
      <span className={styles.script}>Junte-se à Nós!</span>
      <span className={styles.separator}>✦</span>
      
      <span className={styles.bold}>AMEIII</span>
      <span className={styles.separator}>✦</span>
      
      <span className={styles.outline}>SECOND HAND & OUTLET</span>
      <span className={styles.separator}>✦</span>
    </>
  );

  return (
    <div className={styles.marqueeContainer}>
      {/* Track deslizando para a esquerda */}
      <div className={styles.track}>
        <motion.div
          className={styles.content}
          animate={{ x: [0, -1000] }} // Ajuste fino dependendo da largura do texto
          transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
        >
          {marqueeContent}
          {marqueeContent}
          {marqueeContent}
          {marqueeContent}
        </motion.div>
      </div>
    </div>
  );
}