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
            En SANUVIA somos una plataforma educativa digital enfocada en fomentar hábitos de alimentación saludable desde la infancia, con énfasis en comunidades vulnerables del sur de Veracruz. Mediante tecnología intuitiva e interacción accesible, promovemos decisiones informadas sobre salud nutricional infantil.
          </p>
          <ul className={styles.list}>
            <li>
              <span className={styles.checkmark}>✓</span>
              Promovemos educación alimentaria para familias y niños.
            </li>
            <li>
              <span className={styles.checkmark}>✓</span>
              Desarrollamos herramientas interactivas con enfoque social.
            </li>
            <li>
              <span className={styles.checkmark}>✓</span>
              Usamos tecnología para impactar comunidades reales.
            </li>
          </ul>
        </div>
        <div className={styles.image}>
          <Image
            src="/empresa.jpeg"
            alt="Imagen institucional Sanuvia"
            fill
            className={styles.img}
            priority
          />
        </div>
      </div>
    </section>
  );
}