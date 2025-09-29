import React, { useState } from 'react';
import Card from '../Card';
import FormInput from '../FormInput';
import Button from '../Button';
import LoadingSpinner from '../LoadingSpinner';
import styles from './LoginForm.module.css';

const LoginForm = ({ onLogin, loading = false }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const newErrors = {};
    if (!email) newErrors.email = 'Email is required';
    if (!password) newErrors.password = 'Password is required';
    if (email && !/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = 'Email is invalid';
    }
    
    setErrors(newErrors);
    
    if (Object.keys(newErrors).length === 0) {
      onLogin({ email, password });
    }
  };

  return (
    <div className={styles.container}>
      <Card padding="large" shadow={true} className={styles.card}>
        <div className={styles.content}>
          <div className={styles.header}>
            <div className={styles.logoIcon}>
              <span className={styles.logoText}>B</span>
            </div>
            <h2 className={styles.title}>Welcome Back</h2>
            <p className={styles.subtitle}>Sign in to your account</p>
          </div>

          <form onSubmit={handleSubmit} className={styles.form}>
            <FormInput
              label="Email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              error={errors.email}
              required
            />
            
            <FormInput
              label="Password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              error={errors.password}
              required
            />

            <Button 
              type="submit" 
              variant="primary" 
              size="large"
              disabled={loading}
              className={styles.submitButton}
            >
              {loading ? <LoadingSpinner size="small" color="#ffffff" /> : 'Sign In'}
            </Button>
          </form>

          <div className={styles.footer}>
            <p className={styles.demoText}>
              Demo credentials: admin@example.com / password
            </p>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default LoginForm;