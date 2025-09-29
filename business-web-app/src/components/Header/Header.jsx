import React from 'react';
import Button from '../Button';
import styles from './Header.module.css';

const Header = ({ isLoggedIn, onLogout, user }) => {
  return (
    <header className={styles.header}>
      {/* Logo */}
      <div className={styles.logo}>
        <div className={styles.logoIcon}>
          <span className={styles.logoText}>B</span>
        </div>
        <h1 className={styles.brandName}>Business App</h1>
      </div>

      {/* Navigation */}
      {isLoggedIn ? (
        <div className={styles.nav}>
          <nav className={styles.navLinks}>
            <a href="#dashboard" className={styles.navLink}>Dashboard</a>
            <a href="#reports" className={styles.navLink}>Reports</a>
            <a href="#settings" className={styles.navLink}>Settings</a>
          </nav>
          
          <div className={styles.userSection}>
            <div className={styles.userAvatar}>
              <span className={styles.userInitial}>
                {user?.name?.charAt(0) || 'U'}
              </span>
            </div>
            <Button variant="secondary" size="small" onClick={onLogout}>
              Logout
            </Button>
          </div>
        </div>
      ) : null}
    </header>
  );
};

export default Header;