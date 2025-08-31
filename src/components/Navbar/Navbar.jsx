import React, { useState } from 'react';
import { HiMenuAlt4, HiX } from 'react-icons/hi';
import { motion } from 'framer-motion';

import './Navbar.scss';

// Yeni veri yapısı
const navItems = [
  { name: 'Ana Sayfa', id: 'home' },
  { name: 'Hakkımda', id: 'about' },
  { name: 'Projeler', id: 'work' },
  { name: 'Yetenekler', id: 'skills' },
  { name: 'İletişim', id: 'contact' },
];

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <p>ZEYNEP</p>
      </div>
      <ul className="app__navbar-links">
        {navItems.map((item) => (
          <li className="app__flex p-text" key={`link-${item.name}`}>
            <div />
            <a href={`#${item.id}`}>{item.name}</a>
          </li>
        ))}
      </ul>

      <div className="app__navbar-menu">
        <HiMenuAlt4 onClick={() => setToggle(true)} />

        {toggle && (
          <motion.div
            initial={{ x: 300 }}
            animate={{ x: 0 }}
            exit={{ x: 300 }}
            transition={{ duration: 0.85, ease: 'easeOut' }}
          >
            <HiX onClick={() => setToggle(false)} />
            <ul>
              {navItems.map((item) => (
                <li key={item.name}>
                  <a href={`#${item.id}`} onClick={() => setToggle(false)}>
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
