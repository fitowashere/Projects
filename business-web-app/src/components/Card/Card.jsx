import React, { useState } from 'react';
import styles from './Card.module.css';

const Card = ({ 
  children, 
  title, 
  subtitle, 
  padding = 'medium', 
  shadow = true, 
  hoverable = false,
  className = ''
}) => {
  const [isHovered, setIsHovered] = useState(false);
  
  const cardClass = [
    styles.card,
    styles[`padding-${padding}`],
    shadow ? styles.shadow : '',
    hoverable ? styles.hoverable : '',
    isHovered && hoverable ? styles.hovered : '',
    className
  ].filter(Boolean).join(' ');
  
  return (
    <div 
      className={cardClass}
      onMouseEnter={() => hoverable && setIsHovered(true)}
      onMouseLeave={() => hoverable && setIsHovered(false)}
    >
      {(title || subtitle) && (
        <div className={styles.header}>
          {title && <h3 className={styles.title}>{title}</h3>}
          {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
        </div>
      )}
      <div className={styles.content}>
        {children}
      </div>
    </div>
  );
};

export default Card;