import React from 'react';
import PropTypes from 'prop-types';
import styles from './MainBanerElem.module.scss';

function MainBanerElem(props) {
  const {
    title, id, key, img, model,
  } = props;

  return (
    <div
      style={{
        backgroundImage: `url(${img})`,
        width: '100%',
      }}
      key={key}
      id={id}
    >
      <div className={styles.titleWrapper}>
        <h1 className={styles.banerTitle}>{model}</h1>
        <p>{title}</p>
        <button
          type="button"
          onClick={() => {
            console.log(`Click on baner button, id ${id}`);
          }}
          className={styles.bannerBtn}
        >
          SHOP NOW
        </button>
      </div>
    </div>
  );
}
MainBanerElem.propTypes = {
  title: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  key: oneOfType(PropTypes.string, PropTypes.number),
  img: PropTypes.string,
  model: PropTypes.string,
};

MainBanerElem.defaultProps = {
  key: '',
  img: '',
  model: '',
};
export default MainBanerElem;
