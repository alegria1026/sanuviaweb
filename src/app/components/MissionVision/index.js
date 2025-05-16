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
            Somos una plataforma digital dedicada a informar los beneficios de la alimentación saludable, así como enfermedades relacionadas como la diabetes y la obesidad infantil. Con herramientas interactivas, buscamos acercar el conocimiento a las familias para fomentar decisiones informadas desde la infancia.
          </p>
        </div>
        <div className={styles.card}>
          <h3 className={styles.cardTitle}>VISIÓN</h3>
          <FaChartLine className={styles.cardIcon} />
          <p className={styles.cardText}>
            Ser una plataforma líder en información nutrimental en la zona sur de Veracruz, reconocida por ser confiable e innovadora, utilizando tecnología para generar impacto social en los hábitos de salud alimentaria en futuras generaciones.
          </p>
        </div>
      </div>
    </section>
  );
}