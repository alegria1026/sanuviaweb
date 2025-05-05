import React from 'react';
import styles from './Header.module.css';
import Button from '../Button'; 
import Menu from '../Menu';

function Header() {
    return (
        <div className={styles.heroSection}>
            <div className={styles.heroOverlay}></div>
            <div className={styles.menuWrapper}>
                <Menu />
            </div>
            <div className={styles.heroContent}>
                <div className={styles.heroTextContainer}>
                    <h1 className={styles.title}>BIENVENIDO A SANUVIA</h1>
                    <br></br>
                    <p className={styles.heroText}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                    <br></br>
                    <Button text="DESCARGAR APP" link="/kits" />
                </div>
            </div>
        </div>
    );
}

export default Header;