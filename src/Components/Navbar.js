import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FiMenu } from 'react-icons/fi';
import { GrClose } from 'react-icons/gr';
import './Navbar.css';

export default function Navbar() {
  const [ShowMobileMenu, setShowMobileMenu] = useState(false);

  const handleMenu = () => {
    setShowMobileMenu((prev) => !prev);
  };

  const skipToLinks = () => {
    setShowMobileMenu((prev) => (prev ? !prev : prev));
  };

  return (
    <nav className={ShowMobileMenu ? 'navopen' : 'navclose'}>
      <div className={ShowMobileMenu ? 'Nav-items-container-open' : 'Nav-items-container-close'}>
        <div className={ShowMobileMenu ? 'logo-open' : 'logo-close'}>
          <h1 className="logo">
            Math Magicians
          </h1>
        </div>
        <button
          className={ShowMobileMenu ? 'navbtn-open' : 'navbtn-close'}
          type="button"
          onClick={handleMenu}
        >
          {ShowMobileMenu ? <GrClose /> : <FiMenu />}
        </button>
        <ul className={ShowMobileMenu ? 'ul-open' : 'ul-close'}>
          <li className={ShowMobileMenu ? 'li-title-open' : 'li-title-close'}>
            <h1>Math Magicians Menu</h1>
          </li>

          <li>
            <NavLink onClick={skipToLinks} className={({ isActive }) => (isActive ? 'active' : '')} to="/">Home</NavLink>
          </li>
          <li>
            <NavLink onClick={skipToLinks} to="/Calculator">Calculator</NavLink>
          </li>
          <li>
            <NavLink onClick={skipToLinks} to="/Quote">Quote</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}
