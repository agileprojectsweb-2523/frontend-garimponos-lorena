'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import styles from './page.module.css';

const LOOKS = [
  {
    id: 1,
    title: "SILVER",
    subtitle: "Mood",
    desc: "A tendência do prata veio pra ficar. Misture correntes pesadas com brincos delicados.",
    mainImg: "https://images.unsplash.com/photo-1576871337632-b9aef4c17ab9?q=80&w=800&auto=format&fit=crop", // Ex: Beanie/Joias
    products: [
      { name: "Corrente Chunky", price: "R$ 89,90" },
      { name: "Brinco Star", price: "R$ 49,90" }
    ],
    sticker: "TREND",
    color: "pink"
  },
  {
    id: 2,
    title: "BAGS &",
    subtitle: "Stuff",
    desc: "Bolsas que cabem o mundo (e mais um pouco). O toque de cor que faltava no seu look all black.",
    mainImg: "https://images.unsplash.com/photo-1559563458-527698bf5295?q=80&w=800&auto=format&fit=crop", // Ex: Bolsa
    products: [
      { name: "Bolsa Cargo V2", price: "R$ 159,90" },
      { name: "Óculos Retro", price: "R$ 79,90" }
    ],
    sticker: "MUST HAVE",
    color: "black"
  },
  {
    id: 3,
    title: "MIX DE",
    subtitle: "Texturas",
    desc: "Não tenha medo de ousar. Acessórios de metal com tecidos felpudos? A gente AMA.",
    mainImg: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=800&auto=format&fit=crop",
    products: [
      { name: "Bucket Hat", price: "R$ 69,90" },
      { name: "Cinto Industrial", price: "R$ 59,90" }
    ],
    sticker: "AMEIII",
    color: "pink"
  }
];

export default function LookbookPage() {
  return (
    <main className={styles.main}>
      
      <div className={styles.bgGrid}></div>

      {/* HERO DO LOOKBOOK */}
      <section className={styles.hero}>
        <div className={styles.badge}>★ EDITORIAL 2025</div>
        <h1 className={styles.title}>
          <span className={styles.wordSolid}>USE &</span>
          <span className={styles.wordScript}>Abuse</span>
        </h1>
        <p className={styles.intro}>
          Acessórios não são detalhe. São o <strong>protagonista</strong>.
        </p>
      </section>

      {/* LISTA DE LOOKS (Estilo Revista) */}
      <div className={styles.lookbookContainer}>
        {LOOKS.map((look, index) => (
          <section key={look.id} className={`${styles.lookSection} ${index % 2 !== 0 ? styles.inverted : ''}`}>
            
            {/* LADO DA FOTO (Polaroid Gigante) */}
            <div className={styles.imageCol}>
              <motion.div 
                className={styles.polaroidFrame}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <div className={styles.tape}></div>
                <img src={look.mainImg} alt={look.title} className={styles.lookImg} />
                
                {/* Sticker na foto */}
                <div className={`${styles.sticker} ${styles[look.color]}`}>
                  {look.sticker}
                </div>
              </motion.div>
            </div>

            {/* LADO DO CONTEÚDO */}
            <div className={styles.infoCol}>
              <motion.div
                initial={{ opacity: 0, x: index % 2 !== 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <h2 className={styles.lookTitle}>
                  <span className={styles.blockTitle}>{look.title}</span>
                  <span className={styles.scriptTitle}>{look.subtitle}</span>
                </h2>
                
                <p className={styles.lookDesc}>{look.desc}</p>

                {/* Lista de Produtos no Look */}
                <div className={styles.productList}>
                  <h3 className={styles.listHeader}>NESTE LOOK:</h3>
                  {look.products.map((prod, i) => (
                    <div key={i} className={styles.productItem}>
                      <span className={styles.prodName}>{prod.name}</span>
                      <div className={styles.dots}></div>
                      <span className={styles.prodPrice}>{prod.price}</span>
                    </div>
                  ))}
                </div>

                <Link href="/shop" className={styles.shopBtn}>
                  COMPRAR O LOOK ➜
                </Link>
              </motion.div>
            </div>

          </section>
        ))}
      </div>

      {/* FINAL CTA */}
      <div className={styles.finalCta}>
        <h2>QUER VER MAIS?</h2>
        <Link href="/shop" className={styles.btnOutline}>IR PARA A LOJA</Link>
      </div>

    </main>
  );
}