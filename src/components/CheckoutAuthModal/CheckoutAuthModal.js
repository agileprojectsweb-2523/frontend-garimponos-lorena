'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useAuth } from '@/context/AuthContext';
import styles from './CheckoutAuthModal.module.css';

export default function CheckoutAuthModal({ isOpen, onClose }) {
  const [isLoginView, setIsLoginView] = useState(true);
  const { login } = useAuth();

  if (!isOpen) return null;

  const handleAuth = (e) => {
    e.preventDefault();
    // Simula autenticação e fecha o modal
    login("member@streetvibe.com");
    onClose();
  };

  return (
    <motion.div 
      className={styles.backdrop}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div 
        className={`${styles.modalContainer} ${!isLoginView ? styles.activePanel : ''}`}
        initial={{ scale: 0.9, y: 50 }}
        animate={{ scale: 1, y: 0 }}
      >
        
        {/* --- FORMULÁRIO DE CADASTRO (SIGN UP) --- */}
        <div className={`${styles.formContainer} ${styles.signUpContainer}`}>
          <form className={styles.form} onSubmit={handleAuth}>
            <h1 className={styles.title}>JOIN THE CULT</h1>
            <div className={styles.socialContainer}>
              <button type="button" className={styles.socialBtn}>G</button>
              <button type="button" className={styles.socialBtn}></button>
            </div>
            <span className={styles.divider}>or register with email</span>
            <input type="text" placeholder="NAME" className={styles.input} required />
            <input type="email" placeholder="EMAIL" className={styles.input} required />
            <input type="password" placeholder="PASSWORD" className={styles.input} required />
            <button type="submit" className={styles.actionBtn}>CREATE ACCOUNT</button>
          </form>
        </div>

        {/* --- FORMULÁRIO DE LOGIN (SIGN IN) --- */}
        <div className={`${styles.formContainer} ${styles.signInContainer}`}>
          <form className={styles.form} onSubmit={handleAuth}>
            <h1 className={styles.title}>WELCOME BACK</h1>
            <div className={styles.socialContainer}>
              <button type="button" className={styles.socialBtn}>G</button>
              <button type="button" className={styles.socialBtn}></button>
            </div>
            <span className={styles.divider}>or login with email</span>
            <input type="email" placeholder="EMAIL" className={styles.input} required />
            <input type="password" placeholder="PASSWORD" className={styles.input} required />
            <a href="#" className={styles.forgotPass}>Forgot password?</a>
            <button type="submit" className={styles.actionBtn}>LOG IN</button>
          </form>
        </div>

        {/* --- OVERLAY DESLIZANTE --- */}
        <div className={styles.overlayContainer}>
          <div className={styles.overlay}>
            
            {/* Lado Esquerdo (Para ir pro Login) */}
            <div className={`${styles.overlayPanel} ${styles.overlayLeft}`}>
              <h1 className={styles.overlayTitle}>ALREADY A MEMBER?</h1>
              <p className={styles.overlayText}>Faça login para usar seus endereços salvos e finalizar rápido.</p>
              <button className={styles.ghostBtn} onClick={() => setIsLoginView(true)}>LOG IN</button>
            </div>

            {/* Lado Direito (Para ir pro Cadastro) */}
            <div className={`${styles.overlayPanel} ${styles.overlayRight}`}>
              <h1 className={styles.overlayTitle}>NEW HERE?</h1>
              <p className={styles.overlayText}>Cadastre-se agora e ganhe acesso ao tracking em tempo real.</p>
              <button className={styles.ghostBtn} onClick={() => setIsLoginView(false)}>SIGN UP</button>
            </div>

          </div>
        </div>

        {/* Botão fechar caso queira desistir */}
        <button className={styles.closeBtn} onClick={onClose}>✕</button>

      </motion.div>
    </motion.div>
  );
}