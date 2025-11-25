import styles from './orders.module.css';

const ORDERS = [
  { 
    id: "#8821-X", 
    date: "20 NOV 2025", 
    status: "ENTREGUE", 
    total: "R$ 459,80",
    items: [
      "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?q=80&w=200",
      "https://images.unsplash.com/photo-1576871337632-b9aef4c17ab9?q=80&w=200"
    ]
  },
  { 
    id: "#8822-Y", 
    date: "18 NOV 2025", 
    status: "PROCESSANDO", 
    total: "R$ 129,90",
    items: [
      "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?q=80&w=200"
    ]
  }
];

export default function OrdersPage() {
  return (
    <div>
      <h1 className={styles.title}>HISTÓRICO DE <span className={styles.highlight}>PEDIDOS</span></h1>
      
      <div className={styles.ordersList}>
        {ORDERS.map((order) => (
          <div key={order.id} className={styles.orderCard}>
            
            {/* Header do Card */}
            <div className={styles.cardHeader}>
              <div className={styles.idGroup}>
                <span className={styles.label}>ID DO PEDIDO</span>
                <span className={styles.orderId}>{order.id}</span>
              </div>
              <div className={`${styles.statusBadge} ${styles[order.status.toLowerCase()]}`}>
                {order.status}
              </div>
            </div>

            {/* Detalhes */}
            <div className={styles.detailsGrid}>
              <div>
                <span className={styles.label}>DATA</span>
                <span>{order.date}</span>
              </div>
              <div>
                <span className={styles.label}>TOTAL</span>
                <span className={styles.total}>{order.total}</span>
              </div>
            </div>

            {/* Imagens dos itens */}
            <div className={styles.itemsRow}>
              {order.items.map((img, i) => (
                <img key={i} src={img} alt="Item" className={styles.itemThumb} />
              ))}
            </div>

            <button className={styles.detailsBtn}>VER DETALHES →</button>
          </div>
        ))}
      </div>
    </div>
  );
}
