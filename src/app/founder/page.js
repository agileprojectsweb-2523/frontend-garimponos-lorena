'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import styles from './page.module.css';

export default function FounderPage() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Parallax para o Hero
  const yHero = useTransform(scrollYProgress, [0, 0.5], [0, 200]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.4], [1, 0]);
  const xText = useTransform(scrollYProgress, [0.2, 0.8], [0, -200]);

  return (
    <main className={styles.main} ref={containerRef}>
      
      <div className={styles.globalNoise}></div>

      {/* --- HERO: A PRESENÇA --- */}
      <section className={styles.hero}>
        <div className={styles.heroOverlay}>
          <motion.h1 style={{ opacity: textOpacity }} className={styles.heroTitle}>
            A CARA DO <br/> <span className={styles.hollow}>GARIMPO</span>
          </motion.h1>
          <div className={styles.heroMeta}>
            <span>LORENA LIMA</span>
            <span>CURADORIA</span>
            <span>LIFESTYLE</span>
          </div>
        </div>

        {/* FOTO HERO */}
        <motion.div style={{ y: yHero }} className={styles.heroImageContainer}>
          <img 
            src="/fundador/teste.png" 
            alt="Lorena Lima" 
            className={styles.heroImg} 
          />
        </motion.div>
      </section>

      {/* --- MANIFESTO (SCROLLYTELLING) --- */}
      <section className={styles.stickySection}>
        <div className={styles.stickyWrapper}>
          
          {/* FOTO: Curadoria */}
          <div className={styles.stickyImage}>
            <img 
              src="/fundador/5.jpeg" 
              alt="Curadoria de Moda" 
            />
            <div className={styles.imageFilter}></div>
          </div>

          {/* Texto que rola ao lado */}
          <div className={styles.scrollableText}>
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className={styles.manifestoTitle}>
                "ROUPAS PARADAS <br/> VALEM <span className={styles.highlight}>DINHEIRO</span>!"
              </h2>
              
              <p className={styles.manifestoBody}>
                Aqui no Garimpo a gente acredita que suas peças podem fazer novas histórias. 
                Não é só sobre vender, é sobre responsabilidade no descarte e girar a energia.
                <br/><br/>
                Minha missão é te ajudar a encontrar aquele look <strong>INCRÍVEL</strong> ou dar um novo lar para o que você não usa mais. 
                Tudo com uma curadoria feita a dedo, do jeito que a gente ama.
              </p>

              <div className={styles.signatureBlock}>
                <span className={styles.scriptSignature}>Lorena Lima</span>
                <span>CEO & FUNDADORA</span>
              </div>
            </motion.div>
          </div>

        </div>
      </section>

      {/* --- MOOD & LIFESTYLE (GALERIA) --- */}
      <section className={styles.gallerySection}>
        <div className={styles.textRail}>
          <motion.h3 style={{ x: xText }} className={styles.galleryHeader}>
            OS JEANS MAIS COOL // QUEM AÍ TAMBÉM É LOUCA POR GARIMPO? //
          </motion.h3>
        </div>

        <div className={styles.galleryGrid}>
          {/* FOTO 3: Artística */}
          <div className={`${styles.polaroid} ${styles.p1}`}>
            <img src="/fundador/3.jpeg" alt="Visão Artística" />
            <div className={styles.tape}></div>
            <span className={styles.caption}>TÔ DE OLHO</span>
          </div>

          {/* FOTO 1: Selfie/Bastidores */}
          <div className={`${styles.polaroid} ${styles.p2}`}>
            <img src="/fundador/1.jpeg" alt="Bastidores" />
            <div className={styles.tape}></div>
            <span className={styles.caption}>AMEIII</span>
          </div>
        </div>
      </section>

      {/* --- FINAL: CONVITE --- */}
      <section className={styles.finalSection}>
        <div className={styles.finalOverlay}>
          <h2 className={styles.finalTitle}>
            JUNTE-SE À <span className={styles.scriptText}>Nós!</span>
          </h2>
          <p>"O ano vira, o propósito volta mais forte. Vem escolher seu look!"</p>
          
          <a href="/shop" className={styles.socialBtn}>
            VER NOVIDADES
          </a>
        </div>
        
        {/* FOTO 4: Acolhedora */}
        <img 
          src="/fundador/4.jpeg" 
          className={styles.finalBg}
          alt="Bem vindos"
        />
      </section>

    </main>
  );
}