'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './AccountSidebar.module.css';

const LINKS = [
  { name: 'DASHBOARD', path: '/account' },
  { name: 'MEUS PEDIDOS', path: '/account/orders' },
  { name: 'ENDEREÇOS', path: '/account/addresses' },
  { name: 'WISHLIST', path: '/account/wishlist' },
  { name: 'LOGOUT', path: '/' }, // Em real seria uma função
];

export default function AccountSidebar() {
  const pathname = usePathname();

  return (
    <aside className={styles.sidebar}>
      <div className={styles.userInfo}>
        <div className={styles.avatar}>PK</div>
        <div>
          <h3 className={styles.userName}>PATRICK K.</h3>
          <span className={styles.userLevel}>MEMBER // LVL 1</span>
        </div>
      </div>

      <nav className={styles.nav}>
        {LINKS.map((link) => {
          const isActive = pathname === link.path;
          return (
            <Link 
              key={link.path} 
              href={link.path}
              className={`${styles.link} ${isActive ? styles.active : ''}`}
            >
              {isActive && <span className={styles.indicator}>›</span>}
              {link.name}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}