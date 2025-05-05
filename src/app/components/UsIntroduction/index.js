'use client';
import styles from './UsIntroduction.module.css';
import Image from 'next/image';

export default function UsIntroduction() {
  return (
    <section className={styles.wrapper}>
      <h2 className={styles.title}>¿QUIÉNES SOMOS?</h2>
      <div className={styles.content}>
        <div className={styles.text}>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <ul className={styles.list}>
            <li>
              <span className={styles.checkmark}>✓</span>
              Lorem ipsum dolor sit amet.
            </li>
            <li>
              <span className={styles.checkmark}>✓</span>
              Consectetur adipiscing elit.
            </li>
            <li>
              <span className={styles.checkmark}>✓</span>
              Sed do eiusmod tempor.
            </li>
          </ul>
        </div>
        <div className={styles.image}>
          <Image
            src="/empresa.png"
            alt="Equipo FreshFusion"
            fill
            className={styles.img}
            priority
          />
        </div>
      </div>
    </section>
  );
}