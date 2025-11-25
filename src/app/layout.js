import { Oswald, Urbanist, Mr_Dafoe } from 'next/font/google';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import CartSidebar from '@/components/CartSidebar/CartSidebar';
import MarketingPopup from '@/components/MarketingPopup/MarketingPopup';
import Preloader from '@/components/Preloader/Preloader';
import { ThemeProvider } from '@/context/ThemeContext';
import { CartProvider } from '@/context/CartContext';
import { AuthProvider } from '@/context/AuthContext';
import './globals.css';

// 1. CONFIGURAÇÃO DAS FONTES

// Oswald: Títulos de Impacto (Estilo Garrafal/Sticker)
const oswald = Oswald({ 
  subsets: ['latin'], 
  variable: '--font-oswald',
  weight: ['400', '500', '700'], 
  display: 'swap',
});

// Urbanist: Textos corridos e UI (Leitura limpa)
const urbanist = Urbanist({ 
  subsets: ['latin'], 
  variable: '--font-urbanist',
  display: 'swap',
});

// Mr Dafoe: A nova fonte Cursiva/Brush (Estilo "Junte-se a Nós", "Ameiii")
const mrDafoe = Mr_Dafoe({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-script',
  display: 'swap',
});

// 2. METADADOS (SEO)
export const metadata = {
  title: 'GARIMPO.NOS | Curadoria & Moda',
  description: 'Moda com propósito. Peças garimpadas, outlet e acessórios para quem tem estilo próprio.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br" className={`${oswald.variable} ${urbanist.variable} ${mrDafoe.variable}`}>
      <body>
        
        {/* HIERARQUIA DE PROVIDERS */}
        <ThemeProvider>
          <AuthProvider>
            <CartProvider>
              
              {/* INTERFACE */}
              <Preloader />
              <Header />
              <CartSidebar /> 
              <MarketingPopup />
              
              {/* CONTEÚDO */}
              {children}
              
              <Footer />
              
            </CartProvider>
          </AuthProvider>
        </ThemeProvider>
        
      </body>
    </html>
  );
}
