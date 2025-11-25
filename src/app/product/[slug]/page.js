'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ProductCard from '@/components/ProductCard/ProductCard';
import styles from './page.module.css';

// --- MOCK DATA PRODUTO ---
const PRODUCT = {
  id: "cropped-x1",
  name: "CROPPED X1",
  price: "R$ 349,90",
  description: "Aquele básico nada básico que a gente ama. Tecido super confortável, modelagem que valoriza e combina com tudo. Perfeito para compor com peças de cintura alta.",
  images: [
    "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?q=80&w=1200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1578587018452-892bacefd3f2?q=80&w=1200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?q=80&w=1200&auto=format&fit=crop"
  ],
  sizes: ["P", "M", "G", "GG"],
  colors: [
    { name: "Preto", hex: "#0D0D0D" },
    { name: "Rosa", hex: "#eb68b3" }
  ],
  reviews: [
    { id: 1, user: "Ana K.", avatar: "https://i.pravatar.cc/150?u=a042581f4e29026024d", rating: 5, date: "Há 2 dias", text: "Gente, sério! O tecido é perfeito, não fica transparente. Amei demais!", verified: true },
    { id: 2, user: "Bia J.", avatar: "https://i.pravatar.cc/150?u=a042581f4e29026704d", rating: 5, date: "Semana passada", text: "Chegou super rápido e o cheirinho da caixa? Tudo pra mim.", verified: true },
  ]
};

// --- ITENS RELACIONADOS ---
const RELATED_ITEMS = [
  { id: 2, name: "Tee Acid Wash", price: "R$ 129,90", category: "Outlet", tag: "HOT", imgFront: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?q=80&w=800&auto=format&fit=crop", imgBack: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?q=80&w=800&auto=format&fit=crop" },
  { id: 5, name: "Cargo Pants V2", price: "R$ 289,90", category: "Garimpo", tag: "MATCH", imgFront: "https://images.unsplash.com/photo-1552160753-117159821e01?q=80&w=800&auto=format&fit=crop", imgBack: "https://images.unsplash.com/photo-1605518216938-7c31b7b14ad0?q=80&w=800&auto=format&fit=crop" },
  { id: 4, name: "Beanie Neon", price: "R$ 89,90", category: "Acessórios", tag: null, imgFront: "https://images.unsplash.com/photo-1576871337632-b9aef4c17ab9?q=80&w=800&auto=format&fit=crop", imgBack: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?q=80&w=800&auto=format&fit=crop" },
  { id: 6, name: "Jaqueta Puffer", price: "R$ 499,90", category: "Outlet", tag: "TECH", imgFront: "https://images.unsplash.com/photo-1559563458-527698bf5295?q=80&w=800&auto=format&fit=crop", imgBack: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?q=80&w=800&auto=format&fit=crop" },
];

export default function ProductPage() {
  const [selectedSize, setSelectedSize] = useState("M");
  const [selectedColor, setSelectedColor] = useState("Preto");
  const [activeImg, setActiveImg] = useState(0);
  const [reviewFormOpen, setReviewFormOpen] = useState(false);
  const [rating, setRating] = useState(0);

  return (
    <main className={styles.main}>
      
      {/* Fundo Quadriculado */}
      <div className={styles.bgGrid}></div>

      <div className={styles.container}>
        
        {/* --- COLUNA ESQUERDA (GALERIA SCRAPBOOK) --- */}
        <div className={styles.gallery}>
          <div className={styles.mainImageWrapper}>
            <div className={styles.tapeTop}></div>
            <motion.img 
              key={activeImg} 
              src={PRODUCT.images[activeImg]} 
              className={styles.mainImage} 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
            />
            {/* Sticker decorativo na foto */}
            <div className={styles.stickerPhoto}>LOOKINHO</div>
          </div>
          
          <div className={styles.thumbGrid}>
            {PRODUCT.images.map((img, idx) => (
              <div 
                key={idx} 
                className={`${styles.thumb} ${activeImg === idx ? styles.activeThumb : ''}`} 
                onClick={() => setActiveImg(idx)}
              >
                <img src={img} alt="thumbnail" />
              </div>
            ))}
          </div>
        </div>

        {/* --- COLUNA DIREITA (INFO CADERNO) --- */}
        <div className={styles.infoPanel}>
          <div className={styles.stickyWrapper}>
            
            <div className={styles.header}>
              <div className={styles.tagWrapper}>
                <span className={styles.tagNew}>NEW DROP</span>
                <span className={styles.tagSeason}>SEASON 01</span>
              </div>
              
              <h1 className={styles.title}>{PRODUCT.name}</h1>
              
              <div className={styles.priceRow}>
                <span className={styles.priceTag}>{PRODUCT.price}</span>
                <div className={styles.ratingSummary}>
                  <span className={styles.stars}>★★★★★</span>
                  <span className={styles.reviewCount}>(142 reviews)</span>
                </div>
              </div>
            </div>

            <p className={styles.description}>
              <span className={styles.doodleArrow}>➔</span>
              {PRODUCT.description}
            </p>
            
            <div className={styles.selectors}>
               {/* COR */}
               <div className={styles.selectorGroup}>
                  <label>COR: <span className={styles.scriptLabel}>{selectedColor}</span></label>
                  <div className={styles.colorOptions}>
                    {PRODUCT.colors.map(c => (
                      <button 
                        key={c.name} 
                        onClick={()=>setSelectedColor(c.name)} 
                        className={`${styles.colorBtn} ${selectedColor === c.name ? styles.activeColorBtn : ''}`}
                        style={{backgroundColor: c.hex}} 
                        title={c.name}
                      />
                    ))}
                  </div>
               </div>

               {/* TAMANHO */}
               <div className={styles.selectorGroup}>
                  <label>TAMANHO: <span className={styles.scriptLabel}>{selectedSize}</span></label>
                  <div className={styles.sizeOptions}>
                    {PRODUCT.sizes.map(s => (
                      <button 
                        key={s} 
                        onClick={()=>setSelectedSize(s)} 
                        className={`${styles.sizeBtn} ${selectedSize === s ? styles.activeSize : ''}`}
                      >
                        {s}
                      </button>
                    ))}
                  </div>
               </div>
            </div>

            <button className={styles.addToCartBtn}>
              BOTA NA SACOLA! 🛍️
            </button>

            <div className={styles.shippingNote}>
              <span className={styles.truckIcon}>🚚</span> FRETE GRÁTIS acima de R$ 500
            </div>
          </div>
        </div>
      </div>

      {/* --- AVALIAÇÕES (MURAL DE RECADOS) --- */}
      <section className={styles.reviewsSection}>
        <div className={styles.reviewsHeader}>
          <h2>
            QUEM JÁ COMPROU & <span className={styles.scriptHighlight}>Amou!</span>
          </h2>
          <button 
            className={styles.writeReviewBtn} 
            onClick={() => setReviewFormOpen(!reviewFormOpen)}
          >
            {reviewFormOpen ? 'FECHAR X' : 'DEIXAR MEU RECADO ✎'}
          </button>
        </div>

        {/* FORM */}
        <AnimatePresence>
          {reviewFormOpen && (
            <motion.form 
              className={styles.reviewForm}
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              onSubmit={(e) => e.preventDefault()}
            >
              <h3>AVALIE ESSE LOOK</h3>
              <div className={styles.starInput}>
                {[1, 2, 3, 4, 5].map((star) => (
                  <span key={star} onClick={() => setRating(star)} className={star <= rating ? styles.starFilled : styles.starEmpty}>★</span>
                ))}
              </div>
              <input type="text" placeholder="SEU NOME" className={styles.input} />
              <textarea placeholder="CONTA PRA GENTE O QUE ACHOU..." className={styles.textarea} rows={3}></textarea>
              <button className={styles.submitBtn}>ENVIAR</button>
            </motion.form>
          )}
        </AnimatePresence>

        {/* CARDS DE REVIEW */}
        <div className={styles.reviewsGrid}>
          {PRODUCT.reviews.map((review) => (
            <div key={review.id} className={styles.reviewCard}>
              <div className={styles.pin}></div>
              <div className={styles.reviewTop}>
                <div className={styles.userInfo}>
                  <img src={review.avatar} alt={review.user} className={styles.userAvatar} />
                  <div>
                    <span className={styles.userName}>{review.user}</span>
                    {review.verified && <span className={styles.verified}>COMPRA VERIFICADA</span>}
                  </div>
                </div>
                <div className={styles.stars}>{"★".repeat(review.rating)}</div>
              </div>
              <p className={styles.reviewText}>"{review.text}"</p>
            </div>
          ))}
        </div>
      </section>

      {/* --- ITENS RELACIONADOS --- */}
      <section className={styles.relatedSection}>
        <h2 className={styles.relatedTitle}>
          COMPLETE O <span className={styles.scriptPink}>Look</span>
        </h2>
        
        <div className={styles.relatedGrid}>
          {RELATED_ITEMS.map((item) => (
            <ProductCard key={item.id} product={item} />
          ))}
        </div>
      </section>

    </main>
  );
}