/* eslint-disable max-len */
import React, { useState, useEffect } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { toggleMenu } from '../../store/actionCreators/menuAC';
import { toggleSearch, searchProducts } from '../../store/actionCreators/searchAC';
import { toggleCart, getCart } from '../../store/actionCreators/cartAC';
import { GET_CART } from '../../store/actions/cartActions';
import { toggleMiniMenu } from '../../store/actionCreators/miniMenuAC';

import Menu from '../Menu/Menu';
import MiniMenu from '../MiniMenu/MiniMenu';
import Search from '../Search/Search';
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
    to: '/filter/laptop',
    className: '{styles.navLinks}',
  },
  {
    value: 'Monitors',
    to: '/filter/monitor',
    className: '{styles.navLinks}',
  },
  {
    value: 'Phones',
    to: '/filter/phones',
    className: '{styles.navLinks}',
  },
  {
    value: 'Headphones',
    to: '/filter/headphones',
    className: '{styles.navLinks}',
  },
];

function Header() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [value, setValue] = useState('');

  const token = useSelector((state) => state.user.token);
  const isOpen = useSelector((state) => state.menu.isOpen);
  const isOpenCart = useSelector((state) => state.cart.isOpenCart);
  const dataCart = useSelector((state) => state.cart.dataCart) || [];
  const isOpenSearch = useSelector((state) => state.search.isOpenSearch);
  const isOpenMiniMenu = useSelector((state) => state.miniMenu.isOpenMiniMenu);

  useEffect(() => {
    if (token) {
      dispatch(getCart());
    } else {
      const cartData = JSON.parse(localStorage.getItem('cart')) || [];
      dispatch({ type: GET_CART, payload: cartData });
    }
  }, [token]);

  const phrase = { query: value };
  const emptyPhraseWithSpace = { query: ' ' };

  const putSearchedProducts = () => {
    if (value === '') {
      dispatch(searchProducts(emptyPhraseWithSpace));
    } else {
      dispatch(searchProducts(phrase));
    }
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
            <form
              onSubmit={(e) => {
                e.preventDefault();
                putSearchedProducts();
                localStorage.setItem('phrase', JSON.stringify(phrase));
                navigate({ pathname: '/products/search' });
                setValue('');
              }}
            >
              <input
                className={styles.searchInput}
                type="text"
                placeholder="Search entiere store here..."
                value={value}
                onChange={(e) => {
                  setValue(e.target.value);
                }}
              />
            </form>
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
              </li>
              <li className={styles.navBarRightItem}>
                {dataCart.length !== 0 && <div className={styles.cartIconIndex}>{dataCart.length}</div>}
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
