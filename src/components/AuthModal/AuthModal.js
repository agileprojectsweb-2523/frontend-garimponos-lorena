'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useAuth } from '@/context/AuthContext';
import styles from './AuthModal.module.css';

export default function AuthModal({ isOpen, onClose }) {
  const [isLoginView, setIsLoginView] = useState(true);
  const { login } = useAuth();

  if (!isOpen) return null;

  // Função unificada para Login e Cadastro (Simulação)
  const handleAuth = (e) => {
    e.preventDefault();
    
    // Pega os dados do form (Simulação)
    const formData = new FormData(e.target);
    const email = formData.get('email');
    const name = formData.get('name') || "Cliente Garimpo"; // Se for login, usa nome genérico ou do banco

    // 1. Atualiza o Contexto Global (Loga o usuário)
    login({ name, email });

    // 2. Fecha o Modal para liberar a tela
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
        transition={{ type: "spring", stiffness: 300, damping: 25 }}
      >
        
        {/* --- FORMULÁRIO DE CADASTRO (SIGN UP) --- */}
        <div className={`${styles.formContainer} ${styles.signUpContainer}`}>
          <form className={styles.form} onSubmit={handleAuth}>
            <h1 className={styles.title}>CRIAR CONTA</h1>
            
            <div className={styles.socialContainer}>
              <button type="button" className={styles.socialBtn}>G</button>
              <button type="button" className={styles.socialBtn}></button>
            </div>
            
            <span className={styles.divider}>ou use seu e-mail</span>
            
            <input name="name" type="text" placeholder="SEU NOME" className={styles.input} required />
            <input name="email" type="email" placeholder="E-MAIL" className={styles.input} required />
            <input name="password" type="password" placeholder="CRIE UMA SENHA" className={styles.input} required />
            
            <button type="submit" className={styles.actionBtn}>CADASTRAR ➜</button>
          </form>
        </div>

        {/* --- FORMULÁRIO DE LOGIN (SIGN IN) --- */}
        <div className={`${styles.formContainer} ${styles.signInContainer}`}>
          <form className={styles.form} onSubmit={handleAuth}>
            <h1 className={styles.title}>BEM-VINDA(O)</h1>
            
            <div className={styles.socialContainer}>
              <button type="button" className={styles.socialBtn}>G</button>
              <button type="button" className={styles.socialBtn}></button>
            </div>
            
            <span className={styles.divider}>ou entre com sua conta</span>
            
            <input name="email" type="email" placeholder="E-MAIL" className={styles.input} required />
            <input name="password" type="password" placeholder="SENHA" className={styles.input} required />
            
            <a href="#" className={styles.forgotPass}>Esqueceu a senha?</a>
            
            <button type="submit" className={styles.actionBtn}>ENTRAR ➜</button>
          </form>
        </div>

        {/* --- OVERLAY DESLIZANTE (Painel Colorido) --- */}
        <div className={styles.overlayContainer}>
          <div className={styles.overlay}>
            
            {/* Lado Esquerdo (Visto quando quer ir para Login) */}
            <div className={`${styles.overlayPanel} ${styles.overlayLeft}`}>
              <h2 className={styles.overlayTitle}>
                JÁ É DO <br/> <span className={styles.scriptWhite}>Clube?</span>
              </h2>
              <p className={styles.overlayText}>
                Faça login para acessar seus pedidos, cupons e finalizar suas compras.
              </p>
              <button className={styles.ghostBtn} onClick={() => setIsLoginView(true)}>
                QUERO ENTRAR
              </button>
            </div>

            {/* Lado Direito (Visto quando quer ir para Cadastro) */}
            <div className={`${styles.overlayPanel} ${styles.overlayRight}`}>
              <h2 className={styles.overlayTitle}>
                PRIMEIRA <br/> <span className={styles.scriptWhite}>Vez?</span>
              </h2>
              <p className={styles.overlayText}>
                Cadastre-se agora e garanta acesso antecipado aos drops e descontos exclusivos.
              </p>
              <button className={styles.ghostBtn} onClick={() => setIsLoginView(false)}>
                QUERO CADASTRAR
              </button>
            </div>

          </div>
        </div>

        {/* Botão fechar (Caso queira apenas olhar o site sem logar) */}
        <button className={styles.closeBtn} onClick={onClose}>✕</button>

      </motion.div>
    </motion.div>
  );
}