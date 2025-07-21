import { useState } from 'react';
import Navbar from './Navbar';

export default function Header({ current, onNavigate }) {
  const [open, setOpen] = useState(false);

  const handleNavigate = (page) => {
    onNavigate(page);
    setOpen(false);
  };

  return (
    <header className="header">
      <div className="header-top">
        <h1 className="site-title">Sterling UTV</h1>
        <button
          className="hamburger"
          aria-label="Toggle navigation"
          onClick={() => setOpen(!open)}
        >
          &#9776;
        </button>
      </div>
      {open && <Navbar current={current} onNavigate={handleNavigate} />}
    </header>
  );
}
