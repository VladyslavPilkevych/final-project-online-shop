import React, { useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { toggleMenu } from '../../store/actionCreators/menuAC';
import { toggleSearch } from '../../store/actionCreators/searchAC';
import { toggleCart } from '../../store/actionCreators/cartAC';

import Menu from '../Menu/Menu';
import Search from '../Search/Search';
import MiniCart from '../MiniCart/MiniCart';
import { ReactComponent as FbIcon } from '../../assets/icons/ant-design_facebook-filled.svg';
import { ReactComponent as InstagramIcon } from '../../assets/icons/ant-design_instagram-filled.svg';
import { ReactComponent as LogoIcon } from '../../assets/icons/Logo.svg';
import { ReactComponent as CartIcon } from '../../assets/icons/Cart.svg';
import { ReactComponent as SignInIcon } from '../../assets/icons/Sign-in.svg';
import { ReactComponent as SearchIcon } from '../../assets/icons/Vector.svg';

import styles from './Header.module.scss';

function Header() {
  const isOpen = useSelector((state) => state.menu.isOpen);

  const isOpenSearch = useSelector((state) => state.search.isOpenSearch);
  const isOpenCart = useSelector((state) => state.cart.isOpenCart);

  const dispatch = useDispatch();

  const items = [
    {
      value: 'Laptops',
      to: '/category/laptops',
      className: '{styles.navLinks}',
      style: '{({ isActive }) => (isActive ? activeStyle : null)}',
    },
    {
      value: 'Monitors',
      to: '/category/monitors',
      className: '{styles.navLinks}',
      // style: '{({ isActive }) => (isActive ? activeStyle : null)}',
    },
    {
      value: 'Phones',
      to: '/category/phones',
      className: '{styles.navLinks}',
      // style: '{({ isActive }) => (isActive ? activeStyle : null)}',
    },
    {
      value: 'Headphones',
      to: '/category/headphones',
      className: '{styles.navLinks}',
      // style: '{({ isActive }) => (isActive ? activeStyle : null)}',
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
            <p className={styles.adressBur}>Visit our showroom in 1234 Street Adress City A</p>
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
                <Link className={styles.navLinksLogo} to="/">
                  <LogoIcon className={styles.logo} role="button" tabIndex="0" />
                </Link>
              </li>
            </nav>
            <nav className={styles.navBur}>
              {(!isOpen) && (
                <div className={styles.btnBurger} role="button" tabIndex="0" onClick={() => dispatch(toggleMenu(!isOpen))}>
                  {' '}
                  <span className={styles.btnSpan}> </span>
                </div>
              )}
              <Menu items={items} />
            </nav>
            <nav className={styles.navBur}>
              {items.map((item) => (
                <li key={item.value}>
                  <div>
                    <NavLink className={styles.navLinks} style={items.style} to={item.to}>
                      {item.value}
                    </NavLink>
                  </div>
                </li>
              ))}
            </nav>
          </div>
          <div className={styles.navBarRight}>
            <nav className={styles.navBur}>
              <Search />
              <SearchIcon className={styles.searchIcon} role="button" tabIndex="0" onClick={() => dispatch(toggleSearch(!isOpenSearch))} />
              <li className={styles.navBarRightItem}>
                <CartIcon className={styles.cartIcon} role="button" tabIndex="0" onClick={() => dispatch(toggleCart(!isOpenCart))} />
                <MiniCart />
              </li>
              <li className={styles.navBarRightItem}>
                <NavLink style={({ isActive }) => (isActive ? activeStyle : null)} to="/sign-in">
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
