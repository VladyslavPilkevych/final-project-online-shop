import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { toggleMenu } from '../../store/actionCreators/menuAC';
import { toggleSearch } from '../../store/actionCreators/searchAC';
import { toggleCart, getCart } from '../../store/actionCreators/cartAC';
import { toggleMiniMenu } from '../../store/actionCreators/miniMenuAC';

import Menu from '../Menu/Menu';
import MiniMenu from '../MiniMenu/MiniMenu';
import Search from '../Search/Search';
import MiniCart from '../MiniCart/MiniCart';
import Avatar from '../Avatar/Avatar';
import { ReactComponent as FbIcon } from '../../assets/icons/ant-design_facebook-filled.svg';
import { ReactComponent as InstagramIcon } from '../../assets/icons/ant-design_instagram-filled.svg';
import { ReactComponent as LogoIcon } from '../../assets/icons/Logo.svg';
import { ReactComponent as CartIcon } from '../../assets/icons/Cart.svg';
import { ReactComponent as SearchIcon } from '../../assets/icons/Vector.svg';

import styles from './Header.module.scss';

const items = [
  {
    value: 'Laptops',
    to: '/category/laptops',
    className: '{styles.navLinks}',
  },
  {
    value: 'Monitors',
    to: '/category/monitors',
    className: '{styles.navLinks}',
  },
  {
    value: 'Phones',
    to: '/category/phones',
    className: '{styles.navLinks}',
  },
  {
    value: 'Headphones',
    to: '/category/headphones',
    className: '{styles.navLinks}',
  },
];

function Header() {
  const isOpen = useSelector((state) => state.menu.isOpen);
  const isOpenMiniMenu = useSelector((state) => state.miniMenu.isOpenMiniMenu);
  const user = useSelector((state) => state.user.user);

  const isOpenSearch = useSelector((state) => state.search.isOpenSearch);
  const isOpenCart = useSelector((state) => state.cart.isOpenCart);
  const [value, setValue] = useState('');

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCart());
  }, [user]);

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
              <NavLink className={styles.navLinksLogo} to="/">
                <LogoIcon className={styles.logo} role="button" tabIndex="0" />
              </NavLink>
            </nav>
            <nav className={styles.navBur}>
              {!isOpenMiniMenu && (
                <div className={styles.btnBurger} role="button" tabIndex="0" onClick={() => dispatch(toggleMiniMenu(!isOpenMiniMenu))}>
                  {' '}
                  <span className={styles.btnSpan}> </span>
                </div>
              )}
              <Menu items={items} />
              <MiniMenu items={items} />
            </nav>
          </div>
          <Search />
          <div className={styles.searchBox}>
            <input
              className={styles.searchInput}
              type="text"
              placeholder="Search entiere store here..."
              value={value}
              onChange={(e) => {
                setValue(e.target.value);
                console.log(value);
              }}
            />
          </div>
          <div className={styles.navBarRight}>
            <nav className={styles.navBur}>
              <SearchIcon
                className={styles.searchIcon}
                role="button"
                tabIndex="0"
                onClick={() => {
                  dispatch(toggleSearch(!isOpenSearch));
                  dispatch(toggleMenu(!isOpen));
                }}
              />
              <li className={styles.navBarRightItem}>
                <CartIcon className={styles.cartIcon} role="button" tabIndex="0" onClick={() => dispatch(toggleCart(!isOpenCart))} />
                <MiniCart />
              </li>
              <li className={styles.navBarRightItem}>
                <Avatar />
              </li>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
