import React from 'react';
import { NavLink } from 'react-router-dom';

import Menu from '../Menu/Menu';

import { ReactComponent as FbIcon } from '../../assets/icons/ant-design_facebook-filled.svg';
import { ReactComponent as InstagramIcon } from '../../assets/icons/ant-design_instagram-filled.svg';
import { ReactComponent as LogoIcon } from '../../assets/icons/Logo.svg';
import { ReactComponent as CartIcon } from '../../assets/icons/Cart.svg';
import { ReactComponent as SignInIcon } from '../../assets/icons/Sign-in.svg';
import { ReactComponent as Search } from '../../assets/icons/Vector.svg';

import styles from './Header.module.scss';

function Header() {
  const items = [
    {
      value: 'Laptops',
      to: '/Laptops',
      className: '{styles.navLinks}',
      style: '{({ isActive }) => (isActive ? activeStyle : undefined)}',
    },
    {
      value: 'Monitors',
      to: '/Monitors',
      className: '{styles.navLinks}',
      style: '{({ isActive }) => (isActive ? activeStyle : undefined)}',
    },
    {
      value: 'Phones',
      to: '/Phones',
      className: '{styles.navLinks}',
      style: '{({ isActive }) => (isActive ? activeStyle : undefined)}',
    },
    {
      value: 'Headphones',
      to: '/Headphones',
      className: '{styles.navLinks}',
      style: '{({ isActive }) => (isActive ? activeStyle : undefined)}',
    },
  ];

  const activeStyle = {
    // opacity: '0.5',
    cursor: 'default',
    pointerEvents: 'none',
  };
  return (
    <header>
      <div className={styles.headerWrapper}>
        <div className={styles.blackBg}>
          <div>
            <p className={styles.dateBur}>
              Mon-Thu:
              <span className={styles.timeBur}> 9:00 AM - 5:30 PM</span>
            </p>
          </div>
          <div className={styles.adressBurWrapper}>
            <p className={styles.adressBur}>
              Visit our showroom in 1234 Street Adress City Address, 1234
            </p>
            <a className={styles.adressBurLink} href="mailto:address@gmail.com">
              Contact Us
            </a>
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
      </div>
      <div className={styles.whiteWrapper}>
        <div className={styles.wrapperContainer}>
          <div className={styles.wrapperNavBar}>
            <nav className={styles.navBur}>
              <li>
                <NavLink className={styles.navLinks} style={({ isActive }) => (isActive ? activeStyle : undefined)} to="/">
                  <LogoIcon className={styles.logo} />
                </NavLink>
              </li>
            </nav>
            <nav className={styles.navBur}>
              <div className={styles.btnBurger}>
                <span className={styles.btnSpan}> </span>
              </div>
              <Menu header="menasdasdau" items={items} />
              {/* <li>
                <NavLink className={styles.navLinks}
                style={({ isActive }) => (isActive ? activeStyle : undefined)} to="/Laptops">
                  Laptops
                </NavLink>
              </li>
              <li>
                <NavLink className={styles.navLinks}
                 style={({ isActive }) => (isActive ? activeStyle : undefined)} to="/Monitors">
                  Monitors
                </NavLink>
              </li>
              <li>
                <NavLink className={styles.navLinks}
                style={({ isActive }) => (isActive ? activeStyle : undefined)} to="/Phones">
                  Phones
                </NavLink>
              </li>
              <li>
                <NavLink className={styles.navLinks}
                style={({ isActive }) => (isActive ? activeStyle : undefined)} to="/Headphones">
                  Headphones
                </NavLink>
              </li> */}
            </nav>
          </div>
          <div className={styles.navBarRight}>
            <nav className={styles.navBur}>
              <div className={styles.searchBox}>
                <input className={styles.searchInput} type="text" placeholder="Search entiere store here..." />
                <Search className={styles.searchIcon} />
              </div>
              <li className={styles.navBarRightItem}>
                <NavLink style={({ isActive }) => (isActive ? activeStyle : undefined)} to="/cart">
                  <CartIcon className={styles.cartIcon} />
                </NavLink>
              </li>
              <li className={styles.navBarRightItem}>
                <NavLink style={({ isActive }) => (isActive ? activeStyle : undefined)} to="/sign-in">
                  <SignInIcon className={styles.signInIcon} />
                </NavLink>
              </li>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
