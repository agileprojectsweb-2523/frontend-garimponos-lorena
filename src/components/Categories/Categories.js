'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import styles from './Categories.module.css';

const CATEGORIES = [
  { 
    id: 1, 
    name: "HOODIES & JACKETS", 
    img: "https://images.unsplash.com/photo-1559563458-527698bf5295?q=80&w=1000&auto=format&fit=crop",
    size: "large" // Ocupa 2 espaços
  },
  { 
    id: 2, 
    name: "TEES & TOPS", 
    img: "https://images.unsplash.com/photo-1503341504253-dff4815485f1?q=80&w=800&auto=format&fit=crop",
    size: "small"
  },
  { 
    id: 3, 
    name: "PANTS & CARGO", 
    img: "https://images.unsplash.com/photo-1552160753-117159821e01?q=80&w=800&auto=format&fit=crop",
    size: "small"
  },
  { 
    id: 4, 
    name: "ACCESSORIES", 
    img: "https://images.unsplash.com/photo-1523380744952-b7e00e6e2ffa?q=80&w=800&auto=format&fit=crop",
    size: "wide" // Ocupa a largura toda embaixo
  },
];

export default function Categories() {
  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <h2 className={styles.title}>SHOP BY <span className={styles.highlight}>VIBE</span></h2>
        <p className={styles.subtitle}>Escolha sua armadura urbana.</p>
      </div>

      <div className={styles.grid}>
        {CATEGORIES.map((cat) => (
          <Link key={cat.id} href={`/shop/${cat.name.toLowerCase()}`} className={`${styles.card} ${styles[cat.size]}`}>
            <motion.div 
              className={styles.imageWrapper}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <div 
                className={styles.image} 
                style={{ backgroundImage: `url(${cat.img})` }} 
              />
              <div className={styles.overlay} />
            </motion.div>

            <div className={styles.content}>
              <motion.h3 className={styles.catName}>
                {cat.name}
              </motion.h3>
              <span className={styles.arrow}>↗</span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}