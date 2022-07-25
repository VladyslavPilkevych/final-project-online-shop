import React, { memo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';

import { ReactComponent as SignInIcon } from '../../assets/icons/Sign-in.svg';
import AvatarIcon from '../../assets/avatar/avatar.png';
import { removeUserDataAC } from '../../store/actionCreators/userAC';

import styles from './Avatar.module.scss';

function Avatar() {
  const dispatch = useDispatch();

  const user = useSelector((state) => state.user.user);

  return (
    <div>
      {!user ? (
        <NavLink to="/sign-in">
          <SignInIcon className={styles.signInIcon} />
        </NavLink>
      ) : (
        user && <img src={AvatarIcon} alt="AvatarIcon" role="presentation" onClick={() => dispatch(removeUserDataAC())} />
      )}
    </div>
  );
}

export default memo(Avatar);
