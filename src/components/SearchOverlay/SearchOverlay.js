'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import styles from './SearchOverlay.module.css';

// Mock Data para busca
const SEARCH_ITEMS = [
  { id: 1, name: "Cyber Hoodie X1", category: "Hoodies", price: "349,90", img: "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?q=80&w=200" },
  { id: 2, name: "Neon Beanie", category: "Accessories", price: "89,90", img: "https://images.unsplash.com/photo-1576871337632-b9aef4c17ab9?q=80&w=200" },
  { id: 3, name: "Cargo Pants V2", category: "Pants", price: "289,90", img: "https://images.unsplash.com/photo-1552160753-117159821e01?q=80&w=200" },
  { id: 4, name: "Acid Wash Tee", category: "T-Shirts", price: "129,90", img: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?q=80&w=200" },
];

export default function SearchOverlay({ isOpen, onClose }) {
  const [query, setQuery] = useState('');
  const inputRef = useRef(null);

  // Auto-focus quando abre
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [isOpen]);

  // Filtro simples
  const filteredItems = SEARCH_ITEMS.filter(item => 
    item.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div 
          className={styles.overlay}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <div className={styles.container}>
            {/* Botão Fechar */}
            <button onClick={onClose} className={styles.closeBtn}>✕ ESC</button>

            {/* Input Gigante */}
            <div className={styles.inputWrapper}>
              <input 
                ref={inputRef}
                type="text" 
                placeholder="TYPE TO SEARCH..." 
                className={styles.input}
                value={query}
                onChange={(e) => setQuery(e.target.value)}
              />
              <div className={styles.line}></div>
            </div>

            {/* Resultados */}
            <div className={styles.results}>
              {query && filteredItems.length === 0 && (
                <p className={styles.noResults}>NO MATCHES FOUND FOR "{query}"</p>
              )}

              {query && filteredItems.map((item) => (
                <Link href={`/product/${item.id}`} key={item.id} className={styles.resultItem} onClick={onClose}>
                  <img src={item.img} alt={item.name} className={styles.thumb} />
                  <div className={styles.info}>
                    <span className={styles.cat}>{item.category}</span>
                    <h3 className={styles.name}>{item.name}</h3>
                    <span className={styles.price}>R$ {item.price}</span>
                  </div>
                  <span className={styles.arrow}>→</span>
                </Link>
              ))}

              {!query && (
                <div className={styles.quickLinks}>
                  <span>TRENDING:</span>
                  <button onClick={() => setQuery("Hoodie")}>HOODIES</button>
                  <button onClick={() => setQuery("Pants")}>CARGO</button>
                  <button onClick={() => setQuery("Neon")}>NEON</button>
                </div>
              )}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}