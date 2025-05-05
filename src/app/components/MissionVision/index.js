'use client';
import styles from './MissionVision.module.css';
import { FaBullseye, FaChartLine } from 'react-icons/fa';

export default function MissionVision() {
  return (
    <section className={styles.wrapper}>
      <h2 className={styles.title}>PROPÓSITO</h2>
      <div className={styles.content}>
        <div className={styles.card}>
          <h3 className={styles.cardTitle}>MISIÓN</h3>
          <FaBullseye className={styles.cardIcon} />
          <p className={styles.cardText}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        <div className={styles.card}>
          <h3 className={styles.cardTitle}>VISIÓN</h3>
          <FaChartLine className={styles.cardIcon} />
          <p className={styles.cardText}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
      </div>
    </section>
  );
}