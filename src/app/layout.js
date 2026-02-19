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

// ╔══════════════════════════════════════════════╗
// ║  🔧 MODO MANUTENÇÃO                         ║
// ║  true  = Site BLOQUEADO (mostra manutenção)  ║
// ║  false = Site NORMAL (funcionando)           ║
// ╚══════════════════════════════════════════════╝
const MAINTENANCE_MODE = true;

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
  title: MAINTENANCE_MODE ? 'GARIMPO.NOS | Em Manutenção' : 'GARIMPO.NOS | Curadoria & Moda',
  description: 'Moda com propósito. Peças garimpadas, outlet e acessórios para quem tem estilo próprio.',
};

// Componente da Página de Manutenção
function MaintenancePage() {
  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      background: '#0a0a0a',
      backgroundImage: 'radial-gradient(#333 1px, transparent 1px)',
      backgroundSize: '20px 20px',
      color: '#ffffff',
      fontFamily: 'var(--font-body)',
      textAlign: 'center',
      padding: '2rem',
      overflow: 'hidden',
      position: 'relative',
    }}>
      {/* Glow Effect Background */}
      <div style={{
        position: 'absolute',
        width: '400px',
        height: '400px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(235,104,179,0.15) 0%, transparent 70%)',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        pointerEvents: 'none',
      }} />

      {/* Logo / Brand */}
      <div style={{
        position: 'relative',
        zIndex: 2,
        marginBottom: '2rem',
      }}>
        <h1 style={{
          fontFamily: 'var(--font-display)',
          fontSize: 'clamp(3rem, 8vw, 5rem)',
          fontWeight: 900,
          textTransform: 'uppercase',
          letterSpacing: '-2px',
          color: '#eb68b3',
          textShadow: '3px 3px 0px #000, 6px 6px 0px #797979',
          lineHeight: 1,
        }}>
          GARIMPO.NOS
        </h1>
      </div>

      {/* Sticker-style Tag */}
      <div style={{
        position: 'relative',
        zIndex: 2,
        background: '#FFD000',
        color: '#000',
        padding: '0.6rem 2rem',
        fontFamily: 'var(--font-display)',
        fontSize: 'clamp(1rem, 3vw, 1.4rem)',
        fontWeight: 700,
        textTransform: 'uppercase',
        transform: 'rotate(-2deg)',
        boxShadow: '4px 4px 0px #000',
        marginBottom: '2rem',
        letterSpacing: '2px',
      }}>
        🔧 Em Manutenção
      </div>

      {/* Message */}
      <p style={{
        position: 'relative',
        zIndex: 2,
        fontFamily: 'var(--font-body)',
        fontSize: 'clamp(1rem, 2.5vw, 1.2rem)',
        color: '#aaa',
        maxWidth: '500px',
        lineHeight: 1.6,
        marginBottom: '1.5rem',
      }}>
        Estamos preparando novidades incríveis pra você! <br />
        Voltamos em breve com peças ainda mais garimpadas. ✨
      </p>

      {/* Script Font Accent */}
      <p style={{
        position: 'relative',
        zIndex: 2,
        fontFamily: 'var(--font-script)',
        fontSize: 'clamp(2rem, 5vw, 3.5rem)',
        color: '#eb68b3',
        transform: 'rotate(-5deg)',
        marginBottom: '2rem',
      }}>
        Volte logo!
      </p>

      {/* Social / Contact */}
      <div style={{
        position: 'relative',
        zIndex: 2,
        display: 'flex',
        gap: '1rem',
        alignItems: 'center',
        fontSize: '0.85rem',
        color: '#797979',
      }}>
        <span>📸 @garimpo.nos</span>
        <span style={{ color: '#333' }}>|</span>
        <span>💬 WhatsApp</span>
      </div>
    </div>
  );
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br" className={`${oswald.variable} ${urbanist.variable} ${mrDafoe.variable}`}>
      <body>

        {MAINTENANCE_MODE ? (
          /* MODO MANUTENÇÃO ATIVO */
          <MaintenancePage />
        ) : (
          /* SITE NORMAL */
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
        )}

      </body>
    </html>
  );
}
