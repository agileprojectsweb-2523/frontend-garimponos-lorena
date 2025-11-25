'use client';

import { useRef } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import styles from './CategoryCarousel.module.css';

const CATEGORIES = [
  { 
    id: 1, 
    name: "ACESSÓRIOS", 
    sub: "Queridinhos",
    img: "https://images.unsplash.com/photo-1576871337632-b9aef4c17ab9?q=80&w=800&auto=format&fit=crop"
  },
  { 
    id: 2, 
    name: "T-SHIRTS", 
    sub: "Básicas & Cool",
    img: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?q=80&w=800&auto=format&fit=crop"
  },
  { 
    id: 3, 
    name: "JACKETS", 
    sub: "Terceira Peça",
    img: "https://images.unsplash.com/photo-1551488852-7a3370763aff?q=80&w=800&auto=format&fit=crop"
  },
  { 
    id: 4, 
    name: "BOTTOMS", 
    sub: "Saias & Calças",
    img: "https://images.unsplash.com/photo-1552160753-117159821e01?q=80&w=800&auto=format&fit=crop"
  },
  { 
    id: 5, 
    name: "KIDS", 
    sub: "Mini Fashion",
    img: "https://images.unsplash.com/photo-1519238263496-6361932a4ad4?q=80&w=800&auto=format&fit=crop"
  }
];

export default function CategoryCarousel() {
  const carouselRef = useRef();

  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <h2 className={styles.title}>
          ESCOLHA SUA <span className={styles.scriptHighlight}>Vibe</span>
        </h2>
        <div className={styles.arrows}>
          <span>← ARRASTE PARA O LADO →</span>
        </div>
      </div>

      <div className={styles.carouselContainer} ref={carouselRef}>
        <motion.div 
          className={styles.track}
          drag="x"
          dragConstraints={carouselRef}
        >
          {CATEGORIES.map((cat) => (
            <Link href={`/shop`} key={cat.id} className={styles.cardLink}>
              <motion.div 
                className={styles.card}
                whileHover={{ y: -10, rotate: 2 }} // Leve rotação no hover para brincar
                transition={{ duration: 0.3 }}
              >
                <div className={styles.imageWrapper}>
                  <div className={styles.overlay} />
                  <img src={cat.img} alt={cat.name} />
                  
                  <div className={styles.cardContent}>
                    <span className={styles.sub}>{cat.sub}</span>
                    <h3 className={styles.catName}>{cat.name}</h3>
                    <span className={styles.btn}>
                      VER PEÇAS
                    </span>
                  </div>
                </div>
              </motion.div>
            </Link>
          ))}
        </motion.div>
      </div>
    </section>
  );
}