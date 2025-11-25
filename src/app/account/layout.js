import AccountSidebar from '@/components/AccountSidebar/AccountSidebar';
import styles from './layout.module.css';

export default function AccountLayout({ children }) {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <AccountSidebar />
        <div className={styles.content}>
          {children}
        </div>
      </div>
    </div>
  );
}