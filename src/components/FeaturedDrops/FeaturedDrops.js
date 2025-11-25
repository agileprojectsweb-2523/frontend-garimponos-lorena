'use client';

import { motion } from 'framer-motion';
import ProductCard from '../ProductCard/ProductCard';
import styles from './FeaturedDrops.module.css';
import Link from 'next/link';

// Dados Mockados
const DROPS = [
  {
    id: 1,
    name: "Cropped X1",
    price: "R$ 349,90",
    category: "Garimpo",
    tag: "AMEI!",
    imgFront: "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?q=80&w=800&auto=format&fit=crop",
    imgBack: "https://images.unsplash.com/photo-1578587018452-892bacefd3f2?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 2,
    name: "Tee Acid Wash",
    price: "R$ 129,90",
    category: "Outlet",
    tag: "HOT",
    imgFront: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?q=80&w=800&auto=format&fit=crop",
    imgBack: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 3,
    name: "Jaqueta Puffer",
    price: "R$ 499,90",
    category: "Second Hand",
    tag: null,
    imgFront: "https://images.unsplash.com/photo-1559563458-527698bf5295?q=80&w=800&auto=format&fit=crop",
    imgBack: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 4,
    name: "Beanie Neon",
    price: "R$ 89,90",
    category: "Acessórios",
    tag: "ÚLTIMO",
    imgFront: "https://images.unsplash.com/photo-1576871337632-b9aef4c17ab9?q=80&w=800&auto=format&fit=crop",
    imgBack: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?q=80&w=800&auto=format&fit=crop"
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 50, rotate: 5 },
  visible: { 
    opacity: 1, 
    y: 0, 
    rotate: 0,
    transition: { type: "spring", stiffness: 100 }
  }
};

export default function FeaturedDrops() {
  return (
    <section className={styles.section}>
      
      <div className={styles.header}>
        <h2 className={styles.title}>
          <span className={styles.blockText}>A MODA DO</span>
          <span className={styles.scriptText}>Momento</span>
        </h2>
        
        <Link href="/shop" className={styles.viewAllBtn}>
          VER TUDO ➝
        </Link>
      </div>

      <motion.div 
        className={styles.grid}
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
      >
        {DROPS.map((product) => (
          <motion.div key={product.id} variants={cardVariants}>
            <ProductCard product={product} />
          </motion.div>
        ))}
      </motion.div>

      {/* Rabisco decorativo no fundo */}
      <div className={styles.doodleBottom}></div>
    </section>
  );
}