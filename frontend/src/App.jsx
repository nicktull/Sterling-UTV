import { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Products from './pages/Products';
import Services from './pages/Services';
import About from './pages/About';
import Contact from './pages/Contact';
import Cart from './pages/Cart';
import './App.css';

export default function App() {
  const [page, setPage] = useState('home');
  const [cart, setCart] = useState([]);
  const [search, setSearch] = useState('');
  const [message, setMessage] = useState('');

  const handleAdd = (item) => {
    setCart([...cart, item]);
    setMessage(`${item.name} added to cart`);
  };
  const handleRemove = (index) =>
    setCart(cart.filter((_, i) => i !== index));

  useEffect(() => {
    if (!message) return;
    const timer = setTimeout(() => setMessage(''), 3000);
    return () => clearTimeout(timer);
  }, [message]);

  const renderPage = () => {
    switch (page) {
      case 'products':
        return (
          <Products
            search={search}
            onSearch={setSearch}
            onAdd={handleAdd}
          />
        );
      case 'services':
        return <Services />;
      case 'about':
        return <About />;
      case 'contact':
        return <Contact />;
      case 'cart':
        return <Cart cart={cart} onRemove={handleRemove} />;
      default:
        return <Home />;
    }
  };

  return (
    <>
      {message && <div className="notification">{message}</div>}
      <Header current={page} onNavigate={setPage} />
      <main>{renderPage()}</main>
      <Footer />
    </>
  );
}
