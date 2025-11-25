import styles from './account.module.css';

export default function AccountPage() {
  return (
    <div className={styles.page}>
      <h1 className={styles.title}>MEU <span className={styles.highlight}>PERFIL</span></h1>
      
      <form className={styles.form}>
        <div className={styles.row}>
          <div className={styles.group}>
            <label>PRIMEIRO NOME</label>
            <input type="text" defaultValue="Patrick" className={styles.input} />
          </div>
          <div className={styles.group}>
            <label>SOBRENOME</label>
            <input type="text" defaultValue="Developer" className={styles.input} />
          </div>
        </div>

        <div className={styles.group}>
          <label>ENDEREÇO DE E-MAIL</label>
          <input type="email" defaultValue="patrick@code.dev" className={styles.input} />
        </div>

        <div className={styles.group}>
          <label>TELEFONE (WHATSAPP)</label>
          <input type="text" defaultValue="+55 11 99999-9999" className={styles.input} />
        </div>

        <button type="button" className={styles.saveBtn}>SALVAR ALTERAÇÕES</button>
      </form>
    </div>
  );
}
