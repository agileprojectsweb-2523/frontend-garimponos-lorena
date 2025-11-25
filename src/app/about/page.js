'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import styles from './page.module.css';

export default function AboutPage() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Parallax
  const yHero = useTransform(scrollYProgress, [0, 0.5], [0, 200]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.4], [1, 0]);

  return (
    <main className={styles.main} ref={containerRef}>
      
      <div className={styles.globalNoise}></div>

      {/* --- HERO: A IDENTIDADE --- */}
      <section className={styles.hero}>
        <div className={styles.heroOverlay}>
          {/* Título Mixado estilo Capricho */}
          <motion.div style={{ opacity: textOpacity }} className={styles.titleWrapper}>
            <h1 className={styles.mixedTitle}>
              <span className={styles.wordSolid}>NOSSO</span>
              <span className={styles.wordScript}>Universo</span>
            </h1>
            <h2 className={styles.subTitleOutline}>GARIMPO.NOS</h2>
          </motion.div>

          <div className={styles.heroMeta}>
            <span>MODA CIRCULAR</span>
            <span>★</span>
            <span>CURADORIA</span>
            <span>★</span>
            <span>LIFESTYLE</span>
          </div>
        </div>

        {/* FOTO HERO */}
        <motion.div style={{ y: yHero }} className={styles.heroImageContainer}>
          <img 
            src="/sobre/1.jpeg" 
            alt="Garimpo.nós Interior" 
            className={styles.heroImg} 
          />
        </motion.div>
      </section>

      {/* --- CONCEITO (SCROLLYTELLING) --- */}
      <section className={styles.conceptSection}>
        <div className={styles.conceptWrapper}>
          
          {/* FOTO: Lustre/Decor */}
          <div className={styles.stickyImage}>
            <img 
              src="/sobre/2.jpeg" 
              alt="Glamour e Arte" 
            />
            <div className={styles.imageBorder}></div>
          </div>

          {/* Texto */}
          <div className={styles.scrollableText}>
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className={styles.conceptTitle}>
                "AQUI A MODA <br/> TEM <span className={styles.highlight}>PROPÓSITO</span>."
              </h2>
              
              <p className={styles.conceptBody}>
                O <strong>Garimpo.nós</strong> nasceu para ressignificar. 
                Nós unimos o exclusivo ao urbano, a peça de grife ao achadinho vintage.
                <br/><br/>
                Acreditamos na energia circular: uma roupa parada no seu armário é uma história esperando para ser vivida por outra pessoa.
                Aqui, cada cabide tem uma curadoria feita com alma.
              </p>

              <div className={styles.signatureBlock}>
                <span>COM AMOR,</span>
                <span className={styles.scriptSignature}>Equipe Garimpo</span>
              </div>
            </motion.div>
          </div>

        </div>
      </section>

      {/* --- NOVA SEÇÃO: O TOUR (VÍDEO YOUTUBE) --- */}
      <section className={styles.videoSection}>
        <div className={styles.videoHeader}>
          <h2 className={styles.videoTitle}>
            VEM FAZER UM <span className={styles.scriptPink}>Tour</span>
          </h2>
          <p>Conheça cada cantinho do nosso espaço físico em Moji-Mirim.</p>
        </div>

        <div className={styles.videoContainer}>
          {/* Stickers Decorativos */}
          <motion.div 
            className={styles.stickerPlay}
            animate={{ rotate: [0, 5, 0] }}
            transition={{ repeat: Infinity, duration: 4 }}
          >
            DÁ O PLAY ▶
          </motion.div>
          
          <div className={styles.videoFrame}>
            <div className={styles.iframeWrapper}>
              <iframe 
                width="100%" 
                height="100%" 
                src="https://www.youtube.com/embed/Pk-O_ynqduo" 
                title="Um Tour pela Garimpo.Nos" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                referrerPolicy="strict-origin-when-cross-origin" 
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* --- GALERIA --- */}
      <section className={styles.gallerySection}>
        <div className={styles.galleryGrid}>
          <div className={`${styles.polaroid} ${styles.p1}`}>
            <img src="/sobre/4.jpeg" alt="Espaço Amplo" />
            <div className={styles.tape}></div>
            <span className={styles.caption}>VIBE</span>
          </div>
          
          <div className={`${styles.polaroid} ${styles.p2}`}>
            <img src="/sobre/5.jpeg" alt="Curadoria Jeans" />
            <div className={styles.tape}></div>
            <span className={styles.caption}>JEANS</span>
          </div>
          
          <div className={`${styles.polaroid} ${styles.p3}`}>
            <img src="/sobre/6.jpeg" alt="Detalhes" />
            <div className={styles.tape}></div>
            <span className={styles.caption}>DETAILS</span>
          </div>
        </div>
      </section>

      {/* --- DETALHES (GRID FINAL) --- */}
      <section className={styles.detailsSection}>
        <h2 className={styles.detailsTitle}>
          CADA CANTINHO <br/> UM <span className={styles.neon}>ACHADO</span>.
        </h2>
        
        <div className={styles.detailsGrid}>
          <div className={styles.detailCard}>
            <img src="/sobre/3.jpeg" alt="Vitrines" />
            <h4>VITRINES VIVAS</h4>
          </div>
          <div className={styles.detailCard}>
            <img src="/sobre/8.jpeg" alt="Acessórios" />
            <h4>ACESSÓRIOS</h4>
          </div>
          <div className={styles.detailCard}>
            <img src="/sobre/7.jpeg" alt="Street Art" />
            <h4>ARTE & DECOR</h4>
          </div>
        </div>
      </section>

      {/* --- FINAL / CONVITE --- */}
      <section className={styles.finalSection}>
        <div className={styles.finalOverlay}>
          <h2 className={styles.finalTitle}>
            VENHA NOS <span className={styles.scriptText}>Visitar</span>
          </h2>
          <p>
            Rua Senador José Bonifácio, 342 <br/>
            Moji-Mirim, SP
          </p>
          <a href="https://instagram.com" target="_blank" className={styles.socialBtn}>
            @GARIMPO.NOS
          </a>
        </div>
        <img 
          src="/sobre/4.jpeg" 
          className={styles.finalBg}
          alt="Fundo Loja"
        />
      </section>

    </main>
  );
}