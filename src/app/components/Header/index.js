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
                    <h1 className={styles.title}>
                        Aprende, transforma y nutre tu vida con Sanuvia
                    </h1>
                    <br />
                    <p className={styles.heroText}>
                        La app que enseña a tus hijos a cultivar su salud
                    </p>
                    <br />
                    <Button text="DESCARGA APP" link="https://docs.google.com/forms/d/e/1FAIpQLScFlopf33bHf6znwVDprQniUPaTsPW78DYDf95uifmkxck4DQ/viewform?usp=dialog" />
                </div>
            </div>
        </div>
    );
}

export default Header;
