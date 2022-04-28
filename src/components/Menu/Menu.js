/* eslint-disable max-len */
import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { toggleMenu } from '../../store/actionCreators/menuAC';
import { ReactComponent as LogoIcon } from '../../assets/icons/Logo.svg';
import { ReactComponent as CloseIcon } from '../../assets/icons/closeIcon.svg';

import styles from './Menu.module.scss';

function Menu({ items }) {
  const { header, className, style } = items;
  const navigate = useNavigate();
  const handleItemSubMenu = (url) => navigate(url);

  const isOpen = useSelector((state) => state.menu.isOpen);
  const dispatch = useDispatch();
  if (!isOpen) return null;
  const closeMenu = () => {
    dispatch(toggleMenu(false));
  };
  return (
    <div className={styles.menu} role="button" tabIndex="0" onClick={closeMenu}>
      <div className={styles.menuWrapper}>
        <div className={styles.menuContent} role="button" tabIndex="0" onClick={(e) => e.stopPropagation()}>
          <div className={styles.menuHeader}>
            <LogoIcon className={styles.menuLogoIcon} onClick={() => navigate('/')} />
            <CloseIcon className={styles.btnClose} onClick={closeMenu} />
          </div>
          <ul className={styles.navBur}>
            {items.map((item) => (
              <li key={item.value}>
                <div>
                  <NavLink className={styles.navLinks} style={style} to={item.to} onClick={closeMenu}>
                    {item.value}
                  </NavLink>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

Menu.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
  className: PropTypes.string,
  style: PropTypes.object,
  // value: PropTypes.string,
  // onClick: PropTypes.func,
};

Menu.defaultProps = {
  className: '',
  style: {},
  // value: '',
  // onClick: () => {},
};
export default Menu;
