'use client';
import styles from './MissionVision.module.css';
import { FaBullseye, FaChartLine } from 'react-icons/fa';

function MissionVision() {
  return (
    <section className={styles.wrapper}>
      <h2 className={styles.title}>PROPÓSITO</h2>
      <div className={styles.content}>
        <div className={styles.card}>
          <h3 className={styles.cardTitle}>MISIÓN</h3>
          <FaBullseye className={styles.cardIcon} />
          <p className={styles.cardText}>
            Transformar la alimentación diaria con kits de almuerzo saludables, nutritivos y equilibrados que se adapten a las necesidades nutricionales específicas de personas con diabetes, obesidad y desnutrición, utilizando ingredientes frescos y de alta calidad.
          </p>
        </div>
        <div className={styles.card}>
          <h3 className={styles.cardTitle}>VISIÓN</h3>
          <FaChartLine className={styles.cardIcon} />
          <p className={styles.cardText}>
            Ser líderes en el mercado de kits de almuerzo saludables en México dentro de 5 años, con presencia en escuelas y empresas, llegando al 80% de la población y promoviendo información sobre alimentación equilibrada.
          </p>
        </div>
      </div>
    </section>
  );
}

export default MissionVision;