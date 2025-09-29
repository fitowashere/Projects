import React from 'react';
import styles from './LoadingSpinner.module.css';

const LoadingSpinner = ({ 
  size = 'medium', 
  color = '#3b82f6',
  className = ''
}) => {
  const spinnerClass = [
    styles.container,
    className
  ].filter(Boolean).join(' ');
  
  const loaderClass = [
    styles.spinner,
    styles[size]
  ].filter(Boolean).join(' ');
  
  return (
    <div className={spinnerClass}>
      <div 
        className={loaderClass}
        style={{ 
          borderTopColor: color,
          borderRightColor: `${color}20`,
          borderBottomColor: `${color}20`,
          borderLeftColor: `${color}20`
        }}
      />
    </div>
  );
};

export default LoadingSpinner;