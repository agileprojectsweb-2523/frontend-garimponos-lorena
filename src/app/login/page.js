'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import styles from './page.module.css';

export default function AuthPage() {
  const [isLogin, setIsLogin] = useState(true);

  const toggleMode = () => setIsLogin(!isLogin);

  return (
    <main className={styles.main}>
      
      {/* CONTAINER PRINCIPAL (Com classe condicional para animação CSS) */}
      <div className={`${styles.container} ${!isLogin ? styles.activePanel : ''}`}>
        
        {/* --- FORMULÁRIO DE CADASTRO (SIGN UP) --- */}
        <div className={`${styles.formContainer} ${styles.signUpContainer}`}>
          <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
            <h1 className={styles.title}>CRIAR CONTA</h1>
            <div className={styles.socialContainer}>
              <button className={styles.socialBtn}>G</button>
              <button className={styles.socialBtn}></button>
            </div>
            <span className={styles.divider}>ou use seu e-mail para se registrar</span>
            
            <div className={styles.inputGroup}>
              <input type="text" placeholder="NOME" className={styles.input} />
              <input type="email" placeholder="E-MAIL" className={styles.input} />
              <input type="password" placeholder="SENHA" className={styles.input} />
            </div>
            
            <button className={styles.actionBtn}>CADASTRAR</button>
          </form>
        </div>

        {/* --- FORMULÁRIO DE LOGIN (SIGN IN) --- */}
        <div className={`${styles.formContainer} ${styles.signInContainer}`}>
          <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
            <h1 className={styles.title}>BEM-VINDO DE VOLTA</h1>
            <div className={styles.socialContainer}>
              <button className={styles.socialBtn}>G</button>
              <button className={styles.socialBtn}></button>
            </div>
            <span className={styles.divider}>ou use sua conta</span>
            
            <div className={styles.inputGroup}>
              <input type="email" placeholder="E-MAIL" className={styles.input} />
              <input type="password" placeholder="SENHA" className={styles.input} />
            </div>
            
            <Link href="#" className={styles.forgotPass}>Esqueceu sua senha?</Link>
            <button className={styles.actionBtn}>ENTRAR</button>
          </form>
        </div>

        {/* --- OVERLAY DESLIZANTE (O Painel Visual) --- */}
        <div className={styles.overlayContainer}>
          <div className={styles.overlay}>
            
            {/* Lado Esquerdo (Visto quando quer Logar) */}
            <div className={`${styles.overlayPanel} ${styles.overlayLeft}`}>
              <h1 className={styles.overlayTitle}>BEM-VINDO DE VOLTA!</h1>
              <p className={styles.overlayText}>
                Para se conectar com a GARIMPO.NOS, faça login com suas credenciais.
              </p>
              <button className={styles.ghostBtn} onClick={toggleMode}>
                ENTRAR
              </button>
            </div>

            {/* Lado Direito (Visto quando quer Cadastrar) */}
            <div className={`${styles.overlayPanel} ${styles.overlayRight}`}>
              <h1 className={styles.overlayTitle}>OLÁ, SEJA BEM VINDO.</h1>
              <p className={styles.overlayText}>
                Entre para o clã. Cadastre-se e comece sua jornada no hype.
              </p>
              <button className={styles.ghostBtn} onClick={toggleMode}>
                CADASTRAR
              </button>
            </div>

          </div>
        </div>

      </div>
    </main>
  );
}
