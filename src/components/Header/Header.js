import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Header.module.scss';
import { ReactComponent as FbIcon } from '../../assets/icons/ant-design_facebook-filled.svg';
import { ReactComponent as InstagramIcon } from '../../assets/icons/ant-design_instagram-filled.svg';

function Header() {
  const activeStyle = {
    opacity: '0.5',
    cursor: 'default',
    pointerEvents: 'none',
  };
  return (
    <header className={styles.headerWrapper}>
      <div className={styles.blackBg}>
        <div>
          <p className={styles.dateBur}>
            Mon-Thu:
            <span className={styles.timeBur}> 9:00 AM - 5:30 PM</span>
          </p>
        </div>
        <div>
          <p className={styles.adressBur}>
            Visit our showroom in 1234 Street Adress City Address, 1234
            <a className={styles.adressBurLink} href="mailto:address@gmail.com">
              Contact Us
            </a>
          </p>
        </div>
        <div className={styles.phoneBurWrapper}>
          <div>
            <a href="tel:0012345678" className={styles.phoneNumber}>
              Call Us: (00) 1234 5678
            </a>
          </div>
          <div>
            <FbIcon className={styles.fbIcon} />
            <InstagramIcon className={styles.instagramIcon} />
          </div>
        </div>
      </div>
      <ul>
        <li>
          <NavLink style={({ isActive }) => (isActive ? activeStyle : undefined)} to="/">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink style={({ isActive }) => (isActive ? activeStyle : undefined)} to="/sign-in">
            Sign-in
          </NavLink>
        </li>
        <li>
          <NavLink style={({ isActive }) => (isActive ? activeStyle : undefined)} to="/cart">
            Cart
          </NavLink>
        </li>
        <li>
          <NavLink style={({ isActive }) => (isActive ? activeStyle : undefined)} to="/favourite">
            Favourite
          </NavLink>
        </li>
      </ul>
    </header>
  );
}

export default Header;
