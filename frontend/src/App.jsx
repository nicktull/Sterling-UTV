import { useState } from 'react';
import Navbar from './components/Navbar';
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

  const handleAdd = (item) => setCart([...cart, item]);
  const handleRemove = (index) =>
    setCart(cart.filter((_, i) => i !== index));

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
      <h1>Sterling UTV</h1>
      <Navbar current={page} onNavigate={setPage} />
      <main>{renderPage()}</main>
    </>
  );
}
