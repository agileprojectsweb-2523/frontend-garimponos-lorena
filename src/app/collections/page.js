'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import styles from './page.module.css';

const COLLECTIONS = [
  { 
    id: "outlet", 
    title: "OUTLET", 
    subtitle: "Garimpo", 
    desc: "Peças únicas com preços incríveis.",
    image: "/hero/1.jpeg",
    sticker: "SALE",
    stickerColor: "pink"
  },
  { 
    id: "xoxo", 
    title: "XOXO", 
    subtitle: "Collection", 
    desc: "A nova era. Edição limitada.",
    image: "/colecao/xoxocolection.png",
    sticker: "NEW",
    stickerColor: "black"
  },
  { 
    id: "second-hand", 
    title: "SECOND", 
    subtitle: "Hand", 
    desc: "Moda circular com história.",
    image: "/hero/5.jpeg",
    sticker: "ECO",
    stickerColor: "green"
  },
  { 
    id: "acessorios", 
    title: "USE &", 
    subtitle: "Abuse", 
    desc: "Acessórios para finalizar o look.",
    image: "/hero/3.jpeg",
    sticker: "HOT",
    stickerColor: "pink"
  },
];

export default function CollectionsPage() {
  return (
    <main className={styles.main}>
      
      {/* Background Grid (Caderno) */}
      <div className={styles.bgGrid}></div>

      {/* HEADER */}
      <section className={styles.header}>
        <h1 className={styles.pageTitle}>
          <span className={styles.wordSolid}>NOSSAS</span>
          <span className={styles.wordScript}>Coleções</span>
        </h1>
        <p className={styles.description}>
          Explore nossos universos. Do <strong>Outlet</strong> ao <strong>Hype</strong>.
        </p>
      </section>

      {/* GRID RETO */}
      <div className={styles.grid}>
        {COLLECTIONS.map((col) => (
          <Link href="/shop" key={col.id} className={styles.cardWrapper}>
            <motion.div 
              className={styles.posterCard}
              whileHover={{ y: -10, boxShadow: "15px 15px 0px #eb68b3" }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              {/* Fita Adesiva Reta */}
              <div className={styles.tape}></div>

              {/* Sticker Reto */}
              <div className={`${styles.sticker} ${styles[col.stickerColor]}`}>
                {col.sticker}
              </div>

              <div className={styles.imageFrame}>
                <img src={col.image} alt={col.title} />
              </div>

              <div className={styles.info}>
                <div className={styles.titleGroup}>
                  <span className={styles.titleMain}>{col.title}</span>
                  <span className={styles.titleSub}>{col.subtitle}</span>
                </div>
                <div className={styles.divider}></div>
                <p className={styles.colDesc}>{col.desc}</p>
                <button className={styles.viewBtn}>EXPLORAR</button>
              </div>

            </motion.div>
          </Link>
        ))}
      </div>

      {/* EM BREVE */}
      <section className={styles.comingSoon}>
        <div className={styles.dashedBorder}>
          <h3 className={styles.soonTitle}>EM BREVE...</h3>
          <p>Novos drops estão sendo garimpados.</p>
        </div>
      </section>

    </main>
  );
}