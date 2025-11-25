'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './MarketingPopup.module.css';

// Configuração do Modal (Simulando o que viria de um CMS)
const POPUP_DATA = {
  image: "/hero/1.jpeg", // Imagem dentro de /public/hero
  title: "MYSTERY BOX",
  discount: "DESBLOQUEIE 20%",
  description: "Assine nossa newsletter e concorra a uma Mystery Box com itens exclusivos da Season 01."
};


export default function MarketingPopup() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const hasSeenPopup = localStorage.getItem('streetvibe_popup_image_seen');

    if (!hasSeenPopup) {
      const timer = setTimeout(() => {
        setIsOpen(true);
      }, 4000); // 4 segundos de delay
      return () => clearTimeout(timer);
    }
  }, []);

  const handleClose = () => {
    setIsOpen(false);
    localStorage.setItem('streetvibe_popup_image_seen', 'true');
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div 
          className={styles.overlay}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={(e) => e.target === e.currentTarget && handleClose()}
        >
          <motion.div 
            className={styles.modal}
            initial={{ y: 100, opacity: 0, scale: 0.9 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={{ y: 100, opacity: 0, scale: 0.9 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
          >
            {/* Botão Fechar (Agora fica fora ou no canto) */}
            <button onClick={handleClose} className={styles.closeBtn}>✕</button>

            {/* LADO DA IMAGEM */}
            <div className={styles.imageCol}>
              <div className={styles.imgOverlay}></div>
              <img src={POPUP_DATA.image} alt="Campaign" />
              <div className={styles.imageTag}>LIMITED TIME</div>
            </div>

            {/* LADO DO CONTEÚDO */}
            <div className={styles.contentCol}>
              <h2 className={styles.title}>
                {POPUP_DATA.title} <br />
                <span className={styles.highlight}>{POPUP_DATA.discount}</span>
              </h2>
              
              <p className={styles.text}>
                {POPUP_DATA.description}
              </p>

              <form className={styles.form} onSubmit={(e) => { e.preventDefault(); handleClose(); }}>
                <div className={styles.inputWrapper}>
                  <input type="email" placeholder="SEU E-MAIL" required />
                </div>
                <button type="submit">QUERO PARTICIPAR</button>
              </form>
              
              <button onClick={handleClose} className={styles.skipBtn}>
                Não, obrigado.
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}