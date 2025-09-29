import React from 'react';
import styles from './Sidebar.module.css';

const Sidebar = ({ isCollapsed, onToggle, activeItem, onItemClick }) => {
  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: '📊' },
    { id: 'analytics', label: 'Analytics', icon: '📈' },
    { id: 'customers', label: 'Customers', icon: '👥' },
    { id: 'orders', label: 'Orders', icon: '📦' },
    { id: 'products', label: 'Products', icon: '🛍️' },
    { id: 'settings', label: 'Settings', icon: '⚙️' }
  ];

  const sidebarClass = [
    styles.sidebar,
    isCollapsed ? styles.collapsed : styles.expanded
  ].filter(Boolean).join(' ');

  return (
    <aside className={sidebarClass}>
      {/* Toggle Button */}
      <button className={styles.toggleButton} onClick={onToggle}>
        <span className={styles.toggleIcon}>
          {isCollapsed ? '→' : '←'}
        </span>
        {!isCollapsed && (
          <span className={styles.toggleText}>Collapse Menu</span>
        )}
      </button>

      {/* Menu Items */}
      <nav className={styles.nav}>
        {menuItems.map((item) => {
          const itemClass = [
            styles.navItem,
            activeItem === item.id ? styles.active : '',
            isCollapsed ? styles.collapsed : ''
          ].filter(Boolean).join(' ');

          return (
            <button
              key={item.id}
              onClick={() => onItemClick(item.id)}
              className={itemClass}
            >
              <span className={styles.itemIcon}>{item.icon}</span>
              {!isCollapsed && <span className={styles.itemLabel}>{item.label}</span>}
            </button>
          );
        })}
      </nav>
    </aside>
  );
};

export default Sidebar;