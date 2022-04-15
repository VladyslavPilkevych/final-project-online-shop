import React from 'react'
import styles from './MainBanerElem.module.scss'

const MainBanerElem = (props) => {
  const { title, id, key, img, model } = props

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
          onClick={() => {
            console.log(`Click on baner button, id ${id}`)
          }}
          className={styles.bannerBtn}
        >
          SHOP NOW
        </button>
      </div>
    </div>
  )
}

export default MainBanerElem
