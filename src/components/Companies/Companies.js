import React from 'react';
import style from './Companies.module.scss';
import imageRoccat from '../../assets/images/companies-images/image-roccat.png';
import imageMsi from '../../assets/images/companies-images/image-msi.png';
import imageRazer from '../../assets/images/companies-images/image-razer.png';
import imageThermaltake from '../../assets/images/companies-images/image-thermaltake.png';
import imageAdata from '../../assets/images/companies-images/image-adata.png';
import imageHp from '../../assets/images/companies-images/image-hp.png';
import imageGigabyte from '../../assets/images/companies-images/image-gigabyte.png';

function Companies() {
  return (
    <div className={style.companiesLogos}>
      <img src={imageRoccat} className={style.companieImage} alt="logo-roccat" />
      <img src={imageMsi} className={style.companieImage} alt="logo-msi" />
      <img src={imageRazer} className={style.companieImage} alt="logo-razer" />
      <img src={imageThermaltake} className={style.companieImage} alt="logo-thermaltake" />
      <img src={imageAdata} className={style.companieImage} alt="logo-adata" />
      <img src={imageHp} className={style.companieImage} alt="logo-hp" />
      <img src={imageGigabyte} className={style.companieImage} alt="logo-gigabyte" />
    </div>
  );
}

export default Companies;
