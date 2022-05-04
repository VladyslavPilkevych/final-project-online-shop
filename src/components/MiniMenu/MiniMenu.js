/* eslint-disable max-len */
import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { toggleMiniMenu } from '../../store/actionCreators/miniMenuAC';
import { ReactComponent as LogoIcon } from '../../assets/icons/Logo.svg';
import { ReactComponent as CloseIcon } from '../../assets/icons/closeIcon.svg';

import styles from './MiniMenu.module.scss';

function MiniMenu({ items }) {
  const { header, className, style } = items;
  const navigate = useNavigate();
  const handleItemSubMenu = (url) => navigate(url);

  const isOpenMiniMenu = useSelector((state) => state.miniMenu.isOpenMiniMenu);
  const dispatch = useDispatch();
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
  className: PropTypes.string,
  style: PropTypes.object,
  // value: PropTypes.string,
  // onClick: PropTypes.func,
};

MiniMenu.defaultProps = {
  className: '',
  style: {},
  // value: '',
  // onClick: () => {},
};
export default MiniMenu;
