'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        
        {/* LADO ESQUERDO - NAVEGAÇÃO */}
        <div className={styles.linksSection}>
          <div className={styles.column}>
            <h3>NAVEGAÇÃO</h3>
            <Link href="/">Início</Link>
            <Link href="/shop">Loja & Outlet</Link>
            <Link href="/collections">Coleções</Link>
            <Link href="/about">Sobre a Loja</Link>
            <Link href="/account">Minha Conta</Link>
          </div>
        </div>

        {/* LADO DIREITO - MANIFESTO / VIBE */}
        <div className={styles.brandSection}>
          <h2 className={styles.brandTitle}>
            MODA COM <br /> <span className={styles.scriptHighlight}>Propósito</span>.
          </h2>
          
          <div className={styles.manifestoBox}>
            <p className={styles.manifestoTitle}>MODA CIRCULAR E OUTLET</p>
            <p className={styles.manifestoText}>
              Brechó e loja de consignação. 
              Curadoria de peças que contam histórias para quem tem pressa de viver.
            </p>
            {/* Endereço Atualizado */}
            <p className={styles.est}>
              Rua Senador José Bonifácio, 342 <br/>
              Moji-Mirim, SP - 13800-060
            </p>
          </div>
          
          <div className={styles.socialRow}>
            <a href="#" className={styles.socialLink}>INSTAGRAM</a>
            <a href="#" className={styles.socialLink}>TIKTOK</a>
            <a href="#" className={styles.socialLink}>PINTEREST</a>
          </div>
        </div>
      </div>

      {/* BARRA INFERIOR - BIG TYPOGRAPHY */}
      <div className={styles.bottomBar}>
        {/* Logo Gigante (Agora todo sólido) */}
        <motion.h1 
          className={styles.bigLogo}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
        >
          GARIMPO<span>.NOS</span>
        </motion.h1>
        
        <div className={styles.copyrightRow}>
          <span className={styles.copyText}>© 2025 GARIMPO.NÓS - TODOS OS DIREITOS RESERVADOS.</span>
          
          <div className={styles.devCredit}>
            DESENVOLVIDO POR 
            <a 
              href="https://www.codebypatrick.dev/" 
              target="_blank" 
              rel="noopener noreferrer"
              className={styles.devLink}
            >
              PATRICK.DEVELOPER
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}