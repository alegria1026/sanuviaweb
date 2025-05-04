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
                    <h1 className={styles.title}>Transforma tu alimentación diaria</h1>
                    <br></br>
                    <p className={styles.heroText}>
                        En FreshFusion, ofrecemos kits de almuerzo saludables, nutritivos y equilibrados que se adaptan a las necesidades nutricionales específicas de personas con diabetes, obesidad y desnutrición.
                    </p>
                    <br></br>
                    <Button text="Descubre nuestros kits" link="/kits" />
                </div>
            </div>
        </div>
    );
}

export default Header;