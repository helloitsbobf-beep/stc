import React, { Suspense, lazy } from 'react';
import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './src/app/layout';

// Lazy load pages
const HomePage = lazy(() => import('./src/app/page'));
const CategoryPage = lazy(() => import('./src/app/category/page'));
const ProductPage = lazy(() => import('./src/app/product/page'));
const CartPage = lazy(() => import('./src/app/cart/page'));
const CheckoutPage = lazy(() => import('./src/app/checkout/page'));
const NotFoundPage = lazy(() => import('./src/app/not-found'));

// Admin Pages
const AdminLayout = lazy(() => import('./src/admin/AdminLayout'));
const Dashboard = lazy(() => import('./src/admin/pages/Dashboard'));
const ContentEditor = lazy(() => import('./src/admin/pages/ContentEditor'));
const ProductManager = lazy(() => import('./src/admin/pages/ProductManager'));

const PageLoader = () => (
  <div className="min-h-[60vh] flex items-center justify-center">
    <div className="w-8 h-8 border-4 border-navy-200 border-t-action-600 rounded-full animate-spin"></div>
  </div>
);

function App() {
  return (
    <Router>
      <Layout>
        <Suspense fallback={<PageLoader />}>
          <Routes>
            {/* Public Store Routes */}
            <Route path="/" element={<HomePage />} />
            <Route path="/category" element={<CategoryPage />} />
            <Route path="/product/:id" element={<ProductPage />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/checkout" element={<CheckoutPage />} />
            
            {/* Admin Routes */}
            <Route path="/admin" element={<AdminLayout />}>
              <Route index element={<Dashboard />} />
              <Route path="products" element={<ProductManager />} />
              <Route path="content" element={<ContentEditor />} />
              <Route path="orders" element={<div className="p-8">Order Management Coming Soon</div>} />
              <Route path="settings" element={<div className="p-8">System Settings Coming Soon</div>} />
            </Route>

            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Suspense>
      </Layout>
    </Router>
  );
}

export default App;