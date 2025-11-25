'use client';

import { useState } from 'react';
import styles from './ShopFilters.module.css';

const CATEGORIES = ["Tudo", "Outlet", "Second Hand", "Acessórios", "Roupas", "Calçados"];
const SIZES = ["PP", "P", "M", "G", "GG", "U"];
const COLORS = [
  { name: "Preto", hex: "#000000" },
  { name: "Branco", hex: "#FFFFFF" },
  { name: "Rosa", hex: "#eb68b3" }, // Brand Pink
  { name: "Cinza", hex: "#797979" }, // Brand Grey
  { name: "Jeans", hex: "#4a90e2" },
];

export default function ShopFilters({ mobileOpen, closeMobile }) {
  const [selectedCat, setSelectedCat] = useState("Tudo");
  const [selectedSize, setSelectedSize] = useState(null);
  const [priceRange, setPriceRange] = useState(500);

  return (
    <aside className={`${styles.sidebar} ${mobileOpen ? styles.open : ''}`}>
      
      {/* Header Mobile */}
      <div className={styles.mobileHeader}>
        <h3 className={styles.stickerTitle}>FILTROS</h3>
        <button onClick={closeMobile} className={styles.closeBtn}>✕</button>
      </div>

      {/* Decoração de Fita */}
      <div className={styles.tapeTop}></div>

      {/* SEÇÃO 1: CATEGORIAS */}
      <div className={styles.filterGroup}>
        <h3 className={styles.groupTitle}>CATEGORIAS</h3>
        <ul className={styles.catList}>
          {CATEGORIES.map((cat) => (
            <li key={cat}>
              <button 
                className={`${styles.catBtn} ${selectedCat === cat ? styles.activeCat : ''}`}
                onClick={() => setSelectedCat(cat)}
              >
                {/* Seta desenhada no ativo */}
                {selectedCat === cat && <span className={styles.doodleArrow}>➔</span>}
                {cat}
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* SEÇÃO 2: TAMANHOS */}
      <div className={styles.filterGroup}>
        <h3 className={styles.groupTitle}>TAMANHO</h3>
        <div className={styles.sizeGrid}>
          {SIZES.map((size) => (
            <button 
              key={size}
              className={`${styles.sizeBtn} ${selectedSize === size ? styles.activeSize : ''}`}
              onClick={() => setSelectedSize(size === selectedSize ? null : size)}
            >
              {size}
            </button>
          ))}
        </div>
      </div>

      {/* SEÇÃO 3: FAIXA DE PREÇO */}
      <div className={styles.filterGroup}>
        <h3 className={styles.groupTitle}>PREÇO</h3>
        <div className={styles.priceControl}>
          <input 
            type="range" 
            min="0" 
            max="1000" 
            value={priceRange} 
            onChange={(e) => setPriceRange(e.target.value)}
            className={styles.slider}
          />
          <div className={styles.priceLabels}>
            <span>R$ 0</span>
            <span className={styles.currentPrice}>R$ {priceRange}</span>
          </div>
        </div>
      </div>

      {/* SEÇÃO 4: CORES */}
      <div className={styles.filterGroup}>
        <h3 className={styles.groupTitle}>COR</h3>
        <div className={styles.colorGrid}>
          {COLORS.map((col) => (
            <button 
              key={col.name}
              className={styles.colorBtn}
              style={{ backgroundColor: col.hex }}
              title={col.name}
            />
          ))}
        </div>
      </div>

      {/* Doodle no final */}

    </aside>
  );
}