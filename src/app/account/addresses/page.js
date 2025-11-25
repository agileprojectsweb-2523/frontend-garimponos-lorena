import styles from './addresses.module.css';

export default function AddressesPage() {
  return (
    <div>
      <div className={styles.header}>
        <h1 className={styles.title}>LOCALIZAÇÕES <span className={styles.highlight}>SALVAS</span></h1>
        <button className={styles.addBtn}>+ NOVO ENDEREÇO</button>
      </div>
      
      <div className={styles.grid}>
        {/* Card 1 */}
        <div className={styles.addressCard}>
          <div className={styles.tag}>PADRÃO</div>
          <h3>CASA</h3>
          <p>Av. Paulista, 1000 - Apt 42</p>
          <p>Bela Vista, São Paulo - SP</p>
          <p>CEP: 01310-100</p>
          
          <div className={styles.actions}>
            <button>EDITAR</button>
            <button>EXCLUIR</button>
          </div>
        </div>

        {/* Card 2 */}
        <div className={styles.addressCard}>
          <h3>ESCRITÓRIO</h3>
          <p>Rua Funchal, 200</p>
          <p>Vila Olímpia, São Paulo - SP</p>
          <p>CEP: 04551-060</p>
          
          <div className={styles.actions}>
            <button>EDITAR</button>
            <button>EXCLUIR</button>
          </div>
        </div>
      </div>
    </div>
  );
}
