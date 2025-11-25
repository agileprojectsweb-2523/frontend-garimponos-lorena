'use client';

import Link from 'next/link';
import styles from './not-found.module.css';

export default function NotFound() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.errorCode} data-text="404">404</h1>
        <h2 className={styles.title}>SYSTEM FAILURE</h2>
        <p className={styles.description}>
          A página que você procura foi deletada, movida ou nunca existiu nesta dimensão.
        </p>
        
        <Link href="/" className={styles.homeBtn}>
          <span className={styles.btnText}>REINICIAR SISTEMA</span>
          <div className={styles.btnGlitch}></div>
        </Link>
      </div>

      {/* Ruído de fundo */}
      <div className={styles.noise}></div>
      <div className={styles.scanline}></div>
    </div>
  );
}