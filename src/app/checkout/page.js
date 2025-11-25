'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useCart } from '@/context/CartContext';
import { useAuth } from '@/context/AuthContext'; 
import Link from 'next/link';
import AuthModal from '@/components/AuthModal/AuthModal';
import styles from './page.module.css';

export default function CheckoutPage() {
  const { cartItems, subtotal } = useCart();
  const { user, isAuthenticated } = useAuth(); 
  
  const [paymentMethod, setPaymentMethod] = useState('credit');
  const [isProcessing, setIsProcessing] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  
  // Se não estiver logado, o modal já nasce aberto (true)
  // Se estiver logado (isAuthenticated), nasce fechado (false)
  const [showAuthModal, setShowAuthModal] = useState(!isAuthenticated);

  // Lógica de Cupom
  const [couponCode, setCouponCode] = useState('');
  const [discount, setDiscount] = useState(0);
  const [couponApplied, setCouponApplied] = useState(false);

  // Efeito para garantir que o modal abra/feche baseado no estado de autenticação
  useEffect(() => {
    if (!isAuthenticated) {
      setShowAuthModal(true);
    } else {
      setShowAuthModal(false);
    }
  }, [isAuthenticated]);

  const handleApplyCoupon = (e) => {
    e.preventDefault();
    if (couponCode.toUpperCase() === 'GARIMPO10') {
      setDiscount(subtotal * 0.1); 
      setCouponApplied(true);
    } else {
      alert('Cupom inválido :( Tenta GARIMPO10');
    }
  };

  const total = subtotal - discount;

  const handleCheckout = (e) => {
    e.preventDefault();
    
    // Segurança extra: Se tentar enviar sem estar logado, abre o modal
    if (!isAuthenticated) {
      setShowAuthModal(true);
      return;
    }

    setIsProcessing(true);
    setTimeout(() => { setIsProcessing(false); setIsSuccess(true); }, 2500);
  };

  if (cartItems.length === 0 && !isSuccess) {
    return (
      <div className={styles.emptyPage}>
        <div className={styles.sadSticker}>:(</div>
        <h1>SUA SACOLA ESTÁ VAZIA</h1>
        <Link href="/shop" className={styles.backBtn}>VOLTAR PARA O GARIMPO</Link>
      </div>
    );
  }

  return (
    <main className={styles.main}>
      
      <div className={styles.bgTexture}></div>

      {/* --- MODAL DE LOGIN (Aparece automático se !isAuthenticated) --- */}
      <AnimatePresence>
        {showAuthModal && (
          <AuthModal 
            isOpen={showAuthModal} 
            // Só permite fechar se o carrinho estiver vazio ou se o usuário desistir (volta pra home)
            // Na prática, aqui obrigamos o login para continuar no checkout
            onClose={() => { 
               if(isAuthenticated) setShowAuthModal(false); 
               // Opcional: Redirecionar se fechar sem logar
            }} 
          />
        )}
      </AnimatePresence>

      <div className={styles.container}>
         
         {/* ESQUERDA: FORMULÁRIOS */}
         <div className={styles.formColumn}>
            
            <h1 className={styles.pageTitle}>
              <span className={styles.wordSolid}>FINALIZAR</span>
              <span className={styles.wordScript}>Pedido</span>
            </h1>

            {/* ÁREA DE CUPOM */}
            <div className={styles.couponSection}>
              <div className={styles.couponTicket}>
                <div className={styles.cutLine}></div>
                <div className={styles.couponContent}>
                  <label className={styles.couponLabel}>
                    TEM UM <span className={styles.scriptPink}>Cupom?</span>
                  </label>
                  <div className={styles.couponInputWrapper}>
                    <input 
                      type="text" 
                      placeholder="INSIRA SEU CÓDIGO" 
                      value={couponCode}
                      onChange={(e) => setCouponCode(e.target.value)}
                      disabled={couponApplied}
                    />
                    <button onClick={handleApplyCoupon} disabled={couponApplied}>
                      {couponApplied ? 'APLICADO! ★' : 'USAR'}
                    </button>
                  </div>
                  {couponApplied && <p className={styles.successMsg}>DESCONTO GARANTIDO!</p>}
                </div>
                <span className={styles.scissorIcon}>✂</span>
              </div>
            </div>

            <form id="checkout-form" onSubmit={handleCheckout}>
              
              {/* 1. DADOS (PREENCHIDOS AUTOMATICAMENTE) */}
              <section className={styles.section}>
                <div className={styles.sectionHeader}>
                  <span className={styles.stepNum}>01</span>
                  <h2>SEUS DADOS</h2>
                </div>
                
                {isAuthenticated && (
                  <div className={styles.loggedInBadge}>
                    LOGADO COMO: <strong>{user?.name}</strong> ({user?.email})
                  </div>
                )}

                <div className={styles.inputGroup}>
                  {/* Email vem do AuthContext */}
                  <input 
                    type="email" 
                    placeholder="E-MAIL" 
                    className={styles.input} 
                    defaultValue={user?.email || ''} 
                    required 
                    readOnly={isAuthenticated} // Trava o email se estiver logado
                  />
                  <input type="text" placeholder="WHATSAPP / TELEFONE" className={styles.input} required />
                </div>
              </section>

              {/* 2. ENTREGA */}
              <section className={styles.section}>
                <div className={styles.sectionHeader}>
                  <span className={styles.stepNum}>02</span>
                  <h2>ENTREGA</h2>
                </div>
                <div className={styles.grid2}>
                  {/* Nome vem do AuthContext (Split simples para exemplo) */}
                  <input 
                    type="text" 
                    placeholder="NOME" 
                    className={styles.input} 
                    defaultValue={user?.name ? user.name.split(' ')[0] : ''} 
                    required 
                  />
                  <input 
                    type="text" 
                    placeholder="SOBRENOME" 
                    className={styles.input} 
                    defaultValue={user?.name ? user.name.split(' ').slice(1).join(' ') : ''} 
                    required 
                  />
                </div>
                <input type="text" placeholder="ENDEREÇO" className={styles.input} required />
                <div className={styles.grid3}>
                  <input type="text" placeholder="CEP" className={styles.input} required />
                  <input type="text" placeholder="CIDADE" className={styles.input} required />
                  <input type="text" placeholder="UF" className={styles.input} required />
                </div>
              </section>

              {/* 3. PAGAMENTO */}
              <section className={styles.section}>
                <div className={styles.sectionHeader}>
                  <span className={styles.stepNum}>03</span>
                  <h2>PAGAMENTO</h2>
                </div>
                <div className={styles.paymentGrid}>
                  <button type="button" className={`${styles.payOption} ${paymentMethod === 'credit' ? styles.activePay : ''}`} onClick={() => setPaymentMethod('credit')}>
                    <span className={styles.payIcon}>💳</span> CARTÃO
                  </button>
                  <button type="button" className={`${styles.payOption} ${paymentMethod === 'pix' ? styles.activePay : ''}`} onClick={() => setPaymentMethod('pix')}>
                    <span className={styles.payIcon}>💠</span> PIX
                  </button>
                </div>
                
                {paymentMethod === 'credit' && (
                  <motion.div className={styles.cardForm} initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }}>
                    <input type="text" placeholder="NÚMERO DO CARTÃO" className={styles.input} />
                    <div className={styles.grid2}>
                      <input type="text" placeholder="VALIDADE (MM/AA)" className={styles.input} />
                      <input type="text" placeholder="CVV" className={styles.input} />
                    </div>
                    <input type="text" placeholder="NOME NO CARTÃO" className={styles.input} />
                  </motion.div>
                )}
                 {paymentMethod === 'pix' && (
                  <motion.div className={styles.pixBox} initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                    <p>O QR Code será gerado na próxima tela com desconto de 5%!</p>
                  </motion.div>
                )}
              </section>
            </form>
         </div>

         {/* DIREITA: RESUMO */}
         <div className={styles.summaryColumn}>
            <div className={styles.summaryCard}>
              <div className={styles.tapeTop}></div>
              
              <h2 className={styles.summaryTitle}>SEU PEDIDO</h2>
              
              <div className={styles.itemsList}>
                {cartItems.map((item) => (
                  <div key={item.id} className={styles.itemRow}>
                    <div className={styles.imgWrapper}>
                      <img src={item.image} alt={item.name} />
                      <span className={styles.qtyBadge}>{item.quantity}</span>
                    </div>
                    <div className={styles.itemInfo}>
                      <h4>{item.name}</h4>
                      <p>{item.color} / {item.size}</p>
                    </div>
                    <span className={styles.itemPrice}>R$ {item.price}</span>
                  </div>
                ))}
              </div>
              
              <div className={styles.divider}></div>
              
              <div className={styles.totals}>
                <div className={styles.totalRow}>
                  <span>SUBTOTAL</span>
                  <span>R$ {subtotal.toFixed(2)}</span>
                </div>
                
                {couponApplied && (
                  <div className={`${styles.totalRow} ${styles.discountRow}`}>
                    <span>CUPOM (10%)</span>
                    <span>- R$ {discount.toFixed(2)}</span>
                  </div>
                )}

                <div className={styles.totalRow}>
                  <span>FRETE</span>
                  <span className={styles.free}>GRÁTIS</span>
                </div>
                
                <div className={`${styles.totalRow} ${styles.grandTotal}`}>
                  <span>TOTAL</span>
                  <span>R$ {total.toFixed(2)}</span>
                </div>
              </div>

              <button type="submit" form="checkout-form" className={styles.payBtn} disabled={isProcessing}>
                {isProcessing ? 'PROCESSANDO...' : 'CONFIRMAR COMPRA ➜'}
              </button>
              
              <p className={styles.secureText}>🔒 AMBIENTE SEGURO</p>
            </div>
         </div>
      </div>

      {/* MODAL DE SUCESSO */}
      <AnimatePresence>
        {isSuccess && (
          <motion.div className={styles.successOverlay} initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <motion.div className={styles.successModal} initial={{ scale: 0.8, rotate: -5 }} animate={{ scale: 1, rotate: 0 }}>
              <div className={styles.checkIcon}>★</div>
              <h1>PEDIDO CONFIRMADO!</h1>
              <p>Bem-vinda ao clube. Seu garimpo já é seu.</p>
              <div className={styles.orderId}>PEDIDO #8821-X</div>
              <Link href="/" className={styles.homeLink}>VOLTAR PRA HOME</Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}