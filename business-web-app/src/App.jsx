import React, { useState } from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import LoginForm from './components/LoginForm';
import Dashboard from './components/Dashboard';
import DataTable from './components/DataTable';
import Modal from './components/Modal';
import Card from './components/Card';
import Button from './components/Button';
import FormInput from './components/FormInput';
import './App.css';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loading, setLoading] = useState(false);
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [activeMenuItem, setActiveMenuItem] = useState('dashboard');
  const [modalOpen, setModalOpen] = useState(false);
  const [user, setUser] = useState(null);

  const handleLogin = async (credentials) => {
    setLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      if (credentials.email === 'admin@example.com' && credentials.password === 'password') {
        setUser({ name: 'Admin User', email: credentials.email });
        setIsLoggedIn(true);
      }
      setLoading(false);
    }, 1500);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUser(null);
    setActiveMenuItem('dashboard');
  };

  const sampleTableData = [
    { id: 1, name: 'John Doe', email: 'john@example.com', role: 'Admin', status: 'Active' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'User', status: 'Active' },
    { id: 3, name: 'Bob Johnson', email: 'bob@example.com', role: 'User', status: 'Inactive' },
    { id: 4, name: 'Alice Brown', email: 'alice@example.com', role: 'Manager', status: 'Active' },
    { id: 5, name: 'Charlie Wilson', email: 'charlie@example.com', role: 'User', status: 'Active' },
    { id: 6, name: 'Diana Prince', email: 'diana@example.com', role: 'Admin', status: 'Inactive' },
    { id: 7, name: 'Ethan Hunt', email: 'ethan@example.com', role: 'Manager', status: 'Active' },
    { id: 8, name: 'Fiona Green', email: 'fiona@example.com', role: 'User', status: 'Active' }
  ];

  const tableColumns = [
    { field: 'id', label: 'ID' },
    { field: 'name', label: 'Name' },
    { field: 'email', label: 'Email' },
    { field: 'role', label: 'Role' },
    { 
      field: 'status', 
      label: 'Status',
      render: (value) => (
        <span style={{
          padding: '4px 8px',
          borderRadius: '6px',
          fontSize: '12px',
          fontWeight: '500',
          backgroundColor: value === 'Active' ? '#dcfce7' : '#fee2e2',
          color: value === 'Active' ? '#16a34a' : '#dc2626'
        }}>
          {value}
        </span>
      )
    }
  ];

  if (!isLoggedIn) {
    return <LoginForm onLogin={handleLogin} loading={loading} />;
  }

  return (
    <div className="app">
      <Header 
        isLoggedIn={isLoggedIn} 
        onLogout={handleLogout} 
        user={user}
      />
      
      <div className="app-content">
        <Sidebar
          isCollapsed={sidebarCollapsed}
          onToggle={() => setSidebarCollapsed(!sidebarCollapsed)}
          activeItem={activeMenuItem}
          onItemClick={setActiveMenuItem}
        />
        
        <main className="main-content">
          {activeMenuItem === 'dashboard' && <Dashboard />}
          
          {activeMenuItem === 'customers' && (
            <div className="page">
              <div className="page-header">
                <h1 className="page-title">Customers</h1>
                <Button onClick={() => setModalOpen(true)}>
                  Add Customer
                </Button>
              </div>
              
              <Card>
                <DataTable 
                  data={sampleTableData}
                  columns={tableColumns}
                  sortable={true}
                  pagination={true}
                  pageSize={5}
                />
              </Card>
            </div>
          )}

          {activeMenuItem === 'analytics' && (
            <div className="page">
              <h1 className="page-title">Analytics</h1>
              <div className="analytics-grid">
                <Card title="Revenue Trends" subtitle="Monthly revenue analysis">
                  <div className="chart-placeholder">
                    <p>📈 Revenue chart will be displayed here</p>
                  </div>
                </Card>
                <Card title="Customer Growth" subtitle="User acquisition metrics">
                  <div className="chart-placeholder">
                    <p>👥 Customer growth chart will be displayed here</p>
                  </div>
                </Card>
                <Card title="Top Products" subtitle="Best selling items">
                  <div className="chart-placeholder">
                    <p>🛍️ Product performance chart will be displayed here</p>
                  </div>
                </Card>
                <Card title="Geographic Data" subtitle="Sales by region">
                  <div className="chart-placeholder">
                    <p>🌍 Geographic distribution chart will be displayed here</p>
                  </div>
                </Card>
              </div>
            </div>
          )}

          {activeMenuItem === 'orders' && (
            <div className="page">
              <div className="page-header">
                <h1 className="page-title">Orders</h1>
                <div className="header-actions">
                  <Button variant="secondary">Export</Button>
                  <Button variant="primary">New Order</Button>
                </div>
              </div>
              
              <Card title="Recent Orders" subtitle="Manage your customer orders">
                <DataTable 
                  data={[
                    { id: '#ORD-001', customer: 'John Doe', date: '2024-01-15', amount: '$299.00', status: 'Completed' },
                    { id: '#ORD-002', customer: 'Jane Smith', date: '2024-01-14', amount: '$159.00', status: 'Processing' },
                    { id: '#ORD-003', customer: 'Bob Johnson', date: '2024-01-13', amount: '$89.00', status: 'Pending' },
                    { id: '#ORD-004', customer: 'Alice Brown', date: '2024-01-12', amount: '$199.00', status: 'Completed' },
                    { id: '#ORD-005', customer: 'Charlie Wilson', date: '2024-01-11', amount: '$349.00', status: 'Shipped' }
                  ]}
                  columns={[
                    { field: 'id', label: 'Order ID' },
                    { field: 'customer', label: 'Customer' },
                    { field: 'date', label: 'Date' },
                    { field: 'amount', label: 'Amount' },
                    { 
                      field: 'status', 
                      label: 'Status',
                      render: (value) => (
                        <span style={{
                          padding: '4px 8px',
                          borderRadius: '6px',
                          fontSize: '12px',
                          fontWeight: '500',
                          backgroundColor: 
                            value === 'Completed' ? '#dcfce7' : 
                            value === 'Processing' ? '#fef3c7' : 
                            value === 'Shipped' ? '#dbeafe' : '#fee2e2',
                          color: 
                            value === 'Completed' ? '#16a34a' : 
                            value === 'Processing' ? '#d97706' : 
                            value === 'Shipped' ? '#2563eb' : '#dc2626'
                        }}>
                          {value}
                        </span>
                      )
                    }
                  ]}
                  sortable={true}
                  pagination={true}
                  pageSize={10}
                />
              </Card>
            </div>
          )}
          
          {!['dashboard', 'customers', 'analytics', 'orders'].includes(activeMenuItem) && (
            <div className="page">
              <h1 className="page-title" style={{ textTransform: 'capitalize' }}>
                {activeMenuItem}
              </h1>
              <Card title={`${activeMenuItem.charAt(0).toUpperCase() + activeMenuItem.slice(1)} Page`} subtitle="This page is under construction">
                <div className="under-construction">
                  <p>🚧 The {activeMenuItem} section is currently under development.</p>
                  <p>Check back soon for updates!</p>
                </div>
              </Card>
            </div>
          )}
        </main>
      </div>

      <Modal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        title="Add New Customer"
        size="medium"
      >
        <form className="modal-form" onSubmit={(e) => {
          e.preventDefault();
          setModalOpen(false);
          // Handle form submission here
        }}>
          <FormInput
            label="Full Name"
            placeholder="Enter customer name"
            required
          />
          <FormInput
            label="Email Address"
            type="email"
            placeholder="Enter email address"
            required
          />
          <FormInput
            label="Phone Number"
            type="tel"
            placeholder="Enter phone number"
          />
          <FormInput
            label="Company"
            placeholder="Enter company name"
          />
          
          <div className="modal-actions">
            <Button variant="secondary" type="button" onClick={() => setModalOpen(false)}>
              Cancel
            </Button>
            <Button variant="primary" type="submit">
              Add Customer
            </Button>
          </div>
        </form>
      </Modal>
    </div>
  );
};

export default App;