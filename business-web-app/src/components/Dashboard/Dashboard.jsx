import React from 'react';
import Card from '../Card';
import Button from '../Button';
import styles from './Dashboard.module.css';

const Dashboard = () => {
  const stats = [
    { title: 'Total Revenue', value: '$45,231', change: '+12%', positive: true },
    { title: 'Orders', value: '1,234', change: '+8%', positive: true },
    { title: 'Customers', value: '892', change: '+23%', positive: true },
    { title: 'Conversion Rate', value: '3.24%', change: '-2%', positive: false }
  ];

  const recentOrders = [
    { id: '#12345', customer: 'John Doe', amount: '$299.00', status: 'Completed' },
    { id: '#12346', customer: 'Jane Smith', amount: '$159.00', status: 'Processing' },
    { id: '#12347', customer: 'Bob Johnson', amount: '$89.00', status: 'Pending' },
    { id: '#12348', customer: 'Alice Brown', amount: '$199.00', status: 'Completed' }
  ];

  return (
    <div className={styles.dashboard}>
      {/* Page Header */}
      <div className={styles.header}>
        <div className={styles.headerContent}>
          <h1 className={styles.title}>Dashboard</h1>
          <p className={styles.subtitle}>
            Welcome back! Here's what's happening with your business today.
          </p>
        </div>
        <Button variant="primary">View Reports</Button>
      </div>

      {/* Stats Grid */}
      <div className={styles.statsGrid}>
        {stats.map((stat, index) => (
          <Card key={index} padding="medium" hoverable={true}>
            <div className={styles.statCard}>
              <div className={styles.statContent}>
                <p className={styles.statLabel}>{stat.title}</p>
                <h3 className={styles.statValue}>{stat.value}</h3>
              </div>
              <div className={`${styles.statChange} ${stat.positive ? styles.positive : styles.negative}`}>
                <span>{stat.change}</span>
              </div>
            </div>
          </Card>
        ))}
      </div>

      {/* Recent Orders */}
      <Card title="Recent Orders" subtitle="Your latest customer orders">
        <div className={styles.tableContainer}>
          <table className={styles.table}>
            <thead className={styles.tableHead}>
              <tr>
                <th className={styles.tableHeader}>Order ID</th>
                <th className={styles.tableHeader}>Customer</th>
                <th className={styles.tableHeader}>Amount</th>
                <th className={styles.tableHeader}>Status</th>
              </tr>
            </thead>
            <tbody>
              {recentOrders.map((order) => (
                <tr key={order.id} className={styles.tableRow}>
                  <td className={styles.tableCell}>{order.id}</td>
                  <td className={styles.tableCell}>{order.customer}</td>
                  <td className={`${styles.tableCell} ${styles.amount}`}>{order.amount}</td>
                  <td className={styles.tableCell}>
                    <span className={`${styles.status} ${styles[order.status.toLowerCase()]}`}>
                      {order.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
};

export default Dashboard;