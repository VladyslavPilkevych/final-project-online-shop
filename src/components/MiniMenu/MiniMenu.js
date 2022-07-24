/* eslint-disable max-len */
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';

import { toggleMiniMenu } from '../../store/actionCreators/miniMenuAC';
import { ReactComponent as LogoIcon } from '../../assets/icons/Logo.svg';
import { ReactComponent as CloseIcon } from '../../assets/icons/closeIcon.svg';

import styles from './MiniMenu.module.scss';

function MiniMenu({ items }) {
  const { style } = items;

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const isOpenMiniMenu = useSelector((state) => state.miniMenu.isOpenMiniMenu);

  if (!isOpenMiniMenu) return null;

  const closeMenu = () => {
    dispatch(toggleMiniMenu(false));
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

MiniMenu.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
  style: PropTypes.object,
};

MiniMenu.defaultProps = {
  style: {},
};
export default MiniMenu;
