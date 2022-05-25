import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';

import { ReactComponent as SignInIcon } from '../../assets/icons/Sign-in.svg';
import AvatarIcon from '../../assets/avatar/avatar.png';
import { removeUserDataAC } from '../../store/actionCreators/userAC';
import { getCart } from '../../store/actionCreators/cartAC';
import styles from './Avatar.module.scss';

function Avatar() {
  const user = useSelector((state) => state.user.user);
  const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(getCart());
  // }, [user]);

  return (
    <div>
      {!user ? (
        <NavLink to="/sign-in">
          <SignInIcon className={styles.signInIcon} />
        </NavLink>
      ) : (
        // eslint-disable-next-line jsx-a11y/no-noninteractive-element-to-interactive-role
        user && <img src={AvatarIcon} alt="AvatarIcon" role="button" tabIndex="0" onClick={() => dispatch(removeUserDataAC())} />
      )}
    </div>
  );
}

export default Avatar;
