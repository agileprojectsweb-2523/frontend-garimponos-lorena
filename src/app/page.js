import Hero from '@/components/Hero/Hero';
import Marquee from '@/components/Marquee/Marquee';
import CategoryCarousel from '@/components/CategoryCarousel/CategoryCarousel'; // Novo componente de Carrossel
import FeaturedDrops from '@/components/FeaturedDrops/FeaturedDrops';
import styles from './page.module.css';

export default function Home() {
  return (
    <main className={styles.main}>
      {/* Seção 1: Hero (Fullscreen + Banner Gigante) */}
      <Hero />

      {/* Seção 2: Faixa de Movimento Infinita */}
      <Marquee />

      {/* Seção 3: Carrossel de Categorias (Substituindo o Grid antigo) */}
      {/* Isso dá o foco individual em cada tipo de produto que a cliente queria */}
      <CategoryCarousel />
      
      {/* Seção 4: Lançamentos e Produtos em Destaque */}
      <FeaturedDrops />
      
      {/* Espaço extra para respiro antes do Footer (que está no layout.js) */}
      <div style={{ height: '100px' }}></div>
    </main>
  );
}