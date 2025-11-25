'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import ShopFilters from '@/components/ShopFilters/ShopFilters';
import ProductCard from '@/components/ProductCard/ProductCard';
import styles from './page.module.css';

// Mock Data Atualizada (Exemplos de produtos)
const PRODUCTS = [
  { id: 1, name: "Cropped X1", price: "R$ 349,90", category: "Garimpo", tag: "AMEI!", imgFront: "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?q=80&w=800&auto=format&fit=crop", imgBack: "https://images.unsplash.com/photo-1578587018452-892bacefd3f2?q=80&w=800&auto=format&fit=crop" },
  { id: 2, name: "Tee Acid Wash", price: "R$ 129,90", category: "Outlet", tag: "HOT", imgFront: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?q=80&w=800&auto=format&fit=crop", imgBack: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?q=80&w=800&auto=format&fit=crop" },
  { id: 3, name: "Jaqueta Puffer", price: "R$ 499,90", category: "Second Hand", tag: null, imgFront: "https://images.unsplash.com/photo-1559563458-527698bf5295?q=80&w=800&auto=format&fit=crop", imgBack: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?q=80&w=800&auto=format&fit=crop" },
  { id: 4, name: "Beanie Neon", price: "R$ 89,90", category: "Acessórios", tag: "ÚLTIMO", imgFront: "https://images.unsplash.com/photo-1576871337632-b9aef4c17ab9?q=80&w=800&auto=format&fit=crop", imgBack: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?q=80&w=800&auto=format&fit=crop" },
  { id: 5, name: "Cargo Pants V2", price: "R$ 289,90", category: "Outlet", tag: "REPOSIÇÃO", imgFront: "https://images.unsplash.com/photo-1552160753-117159821e01?q=80&w=800&auto=format&fit=crop", imgBack: "https://images.unsplash.com/photo-1605518216938-7c31b7b14ad0?q=80&w=800&auto=format&fit=crop" },
  { id: 6, name: "Oversized Bomber", price: "R$ 599,90", category: "Garimpo", tag: null, imgFront: "https://images.unsplash.com/photo-1551488852-7a3370763aff?q=80&w=800&auto=format&fit=crop", imgBack: "https://images.unsplash.com/photo-1551488852-7a3370763aff?q=80&w=800&auto=format&fit=crop" },
];

export default function ShopPage() {
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  return (
    <main className={styles.main}>
      
      {/* HERO DA PÁGINA: MIX DE FONTES */}
      <section className={styles.shopHero}>
        <h1 className={styles.mixedTitle}>
          <span className={styles.wordSolid}>TODAS</span>
          <span className={styles.wordScript}>as</span>
          <span className={styles.wordOutline}>PEÇAS</span>
        </h1>
        
        <div className={styles.counterTag}>
          {PRODUCTS.length} ITENS DISPONÍVEIS
        </div>
      </section>

      {/* BARRA DE CONTROLE */}
      <div className={styles.controls}>
        <button 
          className={styles.filterToggle} 
          onClick={() => setMobileFiltersOpen(true)}
        >
          <span className={styles.icon}>≡</span> FILTROS
        </button>

        <div className={styles.sortWrapper}>
          <span>ORDENAR POR:</span>
          <select className={styles.sortSelect}>
            <option>MAIS NOVOS</option>
            <option>MENOR PREÇO</option>
            <option>MAIOR PREÇO</option>
            <option>MAIS VENDIDOS</option>
          </select>
        </div>
      </div>

      <div className={styles.container}>
        {/* SIDEBAR (Filtros) */}
        <ShopFilters 
          mobileOpen={mobileFiltersOpen} 
          closeMobile={() => setMobileFiltersOpen(false)} 
        />

        {/* GRID DE PRODUTOS */}
        <motion.div 
          className={styles.productGrid}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {PRODUCTS.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </motion.div>

        {/* OVERLAY ESCURO (Mobile) */}
        {mobileFiltersOpen && (
          <div 
            className={styles.overlay} 
            onClick={() => setMobileFiltersOpen(false)}
          />
        )}
      </div>
    </main>
  );
}