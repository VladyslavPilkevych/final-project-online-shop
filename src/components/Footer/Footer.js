/* eslint-disable no-mixed-operators */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable max-len */
import React, { useState } from 'react';
import styles from './Footer.module.scss';
import { ReactComponent as FbIconGrey } from '../../assets/icons/facebook-icon-grey.svg';
import { ReactComponent as InstagramIconGrey } from '../../assets/icons/instagram-icon-grey.svg';
import arrowDownIcon from '../../assets/icons/icon-arrow-down.png';

function Footer() {
  const [arrowUp, setArrowUp] = useState(false);
  const [elemId, setElemId] = useState(0);

  const arrowUpfunc = (id) => {
    if (!arrowUp && elemId === 0 || elemId !== 0) {
      setArrowUp(true);
      setElemId(id);
    }
  };

  return (
    <div className={styles.footer}>
      <div className={styles.footerWrapper}>
        <p className={styles.footerTitle}>Sign Up To Our Newsletter.</p>
        <p className={styles.footerText}>Be the first to hear about the latest offers.</p>
        <div className={styles.footerListContainer}>
          <div className={styles.footerList}>
            <div className={styles.footerListNameWrapper}>
              <h3 className={styles.footerListName}>Information</h3>
              {!arrowUp && elemId === 0 || elemId !== '1' ? (
                <div id={1} className={styles.footerArrowWrapper} onClick={(event) => arrowUpfunc(event.currentTarget.id)}>
                  <img className={styles.footerArrowDown} src={arrowDownIcon} alt="arrow-icon" />
                </div>
              )
                : (
                  <div id={1} className={styles.footerArrowWrapper} onClick={() => arrowUpfunc()}>
                    <img className={styles.footerArrowUp} src={arrowDownIcon} alt="arrow-icon" />
                  </div>
                )}

            </div>
            {!arrowUp && elemId === 0 || elemId !== '1' ? (
              <div className={styles.footerListWrapperClose}>
                <p className={styles.footerListPart}>About Us</p>
                <p className={styles.footerListPart}>About Zip</p>
                <p className={styles.footerListPart}>Privacy Policy</p>
                <p className={styles.footerListPart}>Search</p>
                <p className={styles.footerListPart}>Terms</p>
                <p className={styles.footerListPart}>Orders and Returns</p>
                <p className={styles.footerListPart}>Contact Us</p>
                <p className={styles.footerListPart}>Advanced Search</p>
              </div>
            ) : (
              <div className={styles.footerListWrapper}>
                <p className={styles.footerListPart}>About Us</p>
                <p className={styles.footerListPart}>About Zip</p>
                <p className={styles.footerListPart}>Privacy Policy</p>
                <p className={styles.footerListPart}>Search</p>
                <p className={styles.footerListPart}>Terms</p>
                <p className={styles.footerListPart}>Orders and Returns</p>
                <p className={styles.footerListPart}>Contact Us</p>
                <p className={styles.footerListPart}>Advanced Search</p>
              </div>
            )}

          </div>
          <div className={styles.footerList}>
            <div className={styles.footerListNameWrapper}>
              <h3 className={styles.footerListName}>PC Parts</h3>
              {!arrowUp && elemId === 0 || elemId !== '2' ? (
                <div id={2} className={styles.footerArrowWrapper} onClick={(event) => arrowUpfunc(event.currentTarget.id)}>
                  <img className={styles.footerArrowDown} src={arrowDownIcon} alt="arrow-icon" />
                </div>
              )
                : (
                  <div id={2} className={styles.footerArrowWrapper} onClick={() => arrowUpfunc()}>
                    <img className={styles.footerArrowUp} src={arrowDownIcon} alt="arrow-icon" />
                  </div>
                )}
            </div>
            {!arrowUp && elemId === 0 || elemId !== '2' ? (
              <div className={styles.footerListWrapperClose}>
                <p className={styles.footerListPart}>CPUS</p>
                <p className={styles.footerListPart}>Add On Cards</p>
                <p className={styles.footerListPart}>Hard Drives (Internal)</p>
                <p className={styles.footerListPart}>Graphic Cards</p>
                <p className={styles.footerListPart}>Keyboards / Mice</p>
                <p className={styles.footerListPart}>Cases / Power Supplies / Cooling</p>
                <p className={styles.footerListPart}>RAM (Memory)</p>
                <p className={styles.footerListPart}>Software</p>
                <p className={styles.footerListPart}>Speakers / Headsets</p>
                <p className={styles.footerListPart}>Motherboards</p>
              </div>
            ) : (
              <div className={styles.footerListWrapper}>
                <p className={styles.footerListPart}>CPUS</p>
                <p className={styles.footerListPart}>Add On Cards</p>
                <p className={styles.footerListPart}>Hard Drives (Internal)</p>
                <p className={styles.footerListPart}>Graphic Cards</p>
                <p className={styles.footerListPart}>Keyboards / Mice</p>
                <p className={styles.footerListPart}>Cases / Power Supplies / Cooling</p>
                <p className={styles.footerListPart}>RAM (Memory)</p>
                <p className={styles.footerListPart}>Software</p>
                <p className={styles.footerListPart}>Speakers / Headsets</p>
                <p className={styles.footerListPart}>Motherboards</p>
              </div>
            )}

          </div>
          <div className={styles.footerList}>
            <div className={styles.footerListNameWrapper}>
              <h3 className={styles.footerListName}>Desktop PCs</h3>
              {!arrowUp && elemId === 0 || elemId !== '3' ? (
                <div id={3} className={styles.footerArrowWrapper} onClick={(event) => arrowUpfunc(event.currentTarget.id)}>
                  <img className={styles.footerArrowDown} src={arrowDownIcon} alt="arrow-icon" />
                </div>
              )
                : (
                  <div id={3} className={styles.footerArrowWrapper} onClick={() => arrowUpfunc()}>
                    <img className={styles.footerArrowUp} src={arrowDownIcon} alt="arrow-icon" />
                  </div>
                )}
            </div>
            {!arrowUp && elemId === 0 || elemId !== '3' ? (
              <div className={styles.footerListWrapperClose}>
                <p className={styles.footerListPart}>Custom PCs</p>
                <p className={styles.footerListPart}>Servers</p>
                <p className={styles.footerListPart}>MSI All-In-One PCs</p>
                <p className={styles.footerListPart}>HP/Compaq PCs</p>
                <p className={styles.footerListPart}>ASUS PCs</p>
                <p className={styles.footerListPart}>Tecs PCs</p>
              </div>
            ) : (
              <div className={styles.footerListWrapper}>
                <p className={styles.footerListPart}>Custom PCs</p>
                <p className={styles.footerListPart}>Servers</p>
                <p className={styles.footerListPart}>MSI All-In-One PCs</p>
                <p className={styles.footerListPart}>HP/Compaq PCs</p>
                <p className={styles.footerListPart}>ASUS PCs</p>
                <p className={styles.footerListPart}>Tecs PCs</p>
              </div>
            )}

          </div>
          <div className={styles.footerList}>
            <div className={styles.footerListNameWrapper}>
              <h3 className={styles.footerListName}>Laptops</h3>
              {!arrowUp && elemId === 0 || elemId !== '4' ? (
                <div id={4} className={styles.footerArrowWrapper} onClick={(event) => arrowUpfunc(event.currentTarget.id)}>
                  <img className={styles.footerArrowDown} src={arrowDownIcon} alt="arrow-icon" />
                </div>
              )
                : (
                  <div id={4} className={styles.footerArrowWrapper} onClick={() => arrowUpfunc()}>
                    <img className={styles.footerArrowUp} src={arrowDownIcon} alt="arrow-icon" />
                  </div>
                )}
            </div>
            {!arrowUp && elemId === 0 || elemId !== '4' ? (
              <div className={styles.footerListWrapperClose}>
                <p className={styles.footerListPart}>Everyday Use Notebooks</p>
                <p className={styles.footerListPart}>MSI Workstation Series</p>
                <p className={styles.footerListPart}>MSI Prestige Series</p>
                <p className={styles.footerListPart}>Tablets and Pads</p>
                <p className={styles.footerListPart}>Netbooks</p>
                <p className={styles.footerListPart}>Infinity Gaming Notebooks</p>
              </div>
            ) : (
              <div className={styles.footerListWrapper}>
                <p className={styles.footerListPart}>Everyday Use Notebooks</p>
                <p className={styles.footerListPart}>MSI Workstation Series</p>
                <p className={styles.footerListPart}>MSI Prestige Series</p>
                <p className={styles.footerListPart}>Tablets and Pads</p>
                <p className={styles.footerListPart}>Netbooks</p>
                <p className={styles.footerListPart}>Infinity Gaming Notebooks</p>
              </div>
            )}

          </div>
          <div className={styles.footerList}>
            <div className={styles.footerListNameWrapper}>
              <h3 className={styles.footerListName}>Address</h3>
              {!arrowUp && elemId === 0 || elemId !== '5' ? (
                <div id={5} className={styles.footerArrowWrapper} onClick={(event) => arrowUpfunc(event.currentTarget.id)}>
                  <img className={styles.footerArrowDown} src={arrowDownIcon} alt="arrow-icon" />
                </div>
              )
                : (
                  <div id={5} className={styles.footerArrowWrapper} onClick={() => arrowUpfunc()}>
                    <img className={styles.footerArrowUp} src={arrowDownIcon} alt="arrow-icon" />
                  </div>
                )}
            </div>
            {!arrowUp && elemId === 0 || elemId !== '5' ? (
              <div className={styles.footerListWrapperClose}>
                <p className={styles.footerListPart}>Address: 1234 Street Adress City Address, 1234</p>
                <p className={styles.footerListPart}>Phones: (00) 1234 5678</p>
                <p className={styles.footerListPart}>We are open: Monday-Thursday: 9:00 AM - 5:30 PM</p>
                <p className={styles.footerListPart}>Friday: 9:00 AM - 6:00 PM</p>
                <p className={styles.footerListPart}>Saturday: 11:00 AM - 5:00 PM</p>
                <p className={styles.footerListPart}>E-mail: shop@email.com</p>
              </div>
            ) : (
              <div className={styles.footerListWrapper}>
                <p className={styles.footerListPart}>Address: 1234 Street Adress City Address, 1234</p>
                <p className={styles.footerListPart}>Phones: (00) 1234 5678</p>
                <p className={styles.footerListPart}>We are open: Monday-Thursday: 9:00 AM - 5:30 PM</p>
                <p className={styles.footerListPart}>Friday: 9:00 AM - 6:00 PM</p>
                <p className={styles.footerListPart}>Saturday: 11:00 AM - 5:00 PM</p>
                <p className={styles.footerListPart}>E-mail: shop@email.com</p>
              </div>
            )}

          </div>
        </div>
        <div className={styles.footerBottomWrapper}>
          <div className={styles.footerIconsWrapper}>
            <FbIconGrey className={styles.faceBoookGrey} />
            <InstagramIconGrey />
          </div>
          <p className={styles.footerBottomText}>Copyright © 2020 Shop Pty. Ltd.</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
