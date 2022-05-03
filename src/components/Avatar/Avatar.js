import React from 'react';

import { ReactComponent as SignInIcon } from '../../assets/icons/Sign-in.svg';
import AvatarIcon from '../../assets/avatar/avatar.png';

import styles from './Avatar.module.scss';

function Avatar() {
  return (
    <div>
      <SignInIcon className={styles.signInIcon} />
      <img src={AvatarIcon} alt="AvatarIcon" />
    </div>
  );
}

export default Avatar;
