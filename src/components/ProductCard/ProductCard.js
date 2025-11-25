'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useCart } from '@/context/CartContext';
import styles from './ProductCard.module.css';

export default function ProductCard({ product }) {
  const { cartItems, setCartItems } = useCart(); // Acessando o contexto (ajuste conforme seu context real)
  
  // Simulação de adicionar ao carrinho (Adapte para sua função 'addItem' do Context)
  const handleAddToCart = (e) => {
    e.preventDefault(); // IMPEDE que o Link abra a página do produto
    e.stopPropagation();
    
    console.log(`Adicionado ao carrinho: ${product.name}`);
    // Aqui você chamaria a função real: addItem(product);
    alert(`Sticker colado! ${product.name} foi pra sacola! 💖`);
  };

  return (
    <Link href={`/shop/${product.id}`} className={styles.linkWrapper}>
      <motion.div 
        className={styles.card}
        initial="rest"
        whileHover="hover"
        animate="rest"
      >
        {/* Fita Adesiva */}
        <div className={styles.tape}></div>

        {/* Wrapper da Imagem */}
        <div className={styles.imageContainer}>
          {product.tag && (
            <span className={styles.tagSticker}>
              {product.tag}
            </span>
          )}

          <img 
            src={product.imgFront} 
            alt={product.name} 
            className={styles.imgFront} 
          />
          
          <motion.img 
            src={product.imgBack} 
            alt={product.name} 
            className={styles.imgBack}
            variants={{
              rest: { opacity: 0 },
              hover: { opacity: 1 }
            }}
          />

          {/* Botão Add Rápido (Com preventDefault) */}
          <motion.button 
            className={styles.addBtn}
            onClick={handleAddToCart}
            variants={{
              rest: { y: '100%' },
              hover: { y: 0 }
            }}
            transition={{ type: "tween", duration: 0.3 }}
          >
            QUERO +
          </motion.button>
        </div>

        {/* Informações */}
        <div className={styles.info}>
          <div className={styles.nameRow}>
            <h3 className={styles.name}>{product.name}</h3>
            <span className={styles.price}>{product.price}</span>
          </div>
          <p className={styles.category}>{product.category}</p>
        </div>
      </motion.div>
    </Link>
  );
}