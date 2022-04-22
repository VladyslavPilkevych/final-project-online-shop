import React from 'react';
import style from './Companies.module.scss';

function Companies() {
  return (
    <div className={style.companiesLogos}>
      <img src="images/companies-images/image-roccat.png" className={style.companieImage} alt="logo-roccat" />
      <img src="images/companies-images/image-msi.png" className={style.companieImage} alt="logo-msi" />
      <img src="images/companies-images/image-razer.png" className={style.companieImage} alt="logo-razer" />
      <img src="images/companies-images/image-thermaltake.png" className={style.companieImage} alt="logo-thermaltake" />
      <img src="images/companies-images/image-adata.png" className={style.companieImage} alt="logo-adata" />
      <img src="images/companies-images/image-hp.png" className={style.companieImage} alt="logo-hp" />
      <img src="images/companies-images/image-gigabyte.png" className={style.companieImage} alt="logo-gigabyte" />
    </div>
  );
}

export default Companies;
