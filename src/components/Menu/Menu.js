import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import { ReactComponent as LogoIcon } from '../../assets/icons/Logo.svg';
import { ReactComponent as CloseIcon } from '../../assets/icons/closeIcon.svg';

import styles from './Menu.module.scss';

function Menu({ items }) {
  const { header, className, style } = items;
  const navigate = useNavigate();
  navigate('success');
  const handleItemSubMenu = (url) => navigate(url);
  return (
    <div className={styles.menu}>
      <div className={styles.menuContent}>
        <div className={styles.menuHeader}>
          <LogoIcon className={styles.menuLogoIcon} onClick={navigate('/')} />
          <CloseIcon className={styles.btnClose} />
        </div>
        <nav className={styles.navBur}>
          {items.map((item) => (
            <li key={item.value}>
              <NavLink className={styles.navLinks} style={style} to={item.to}>
                {item.value}
              </NavLink>
            </li>
          ))}
        </nav>
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
