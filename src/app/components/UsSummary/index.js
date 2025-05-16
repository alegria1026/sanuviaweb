'use client';
import styles from './UsSummary.module.css';
import Image from 'next/image';

export default function UsSummary() {
  return (
    <section className={styles.wrapper}>
      <h2 className={styles.title}>NOSOTROS</h2>
      <div className={styles.content}>
        <div className={styles.text}>
          <p>
            Sanuvia es una organización comprometida con el bienestar infantil, enfocada en fomentar hábitos alimenticios saludables en niñas y niños.
          </p>
          <p>
            A través de una app interactiva, asesorada por profesionales en nutrición, buscamos transformar la educación alimentaria desde casa mediante el juego, el cultivo y la tecnología.
          </p>
          <ul className={styles.list}>
            <li>Educación nutricional basada en evidencia.</li>
            <li>Recetas saludables para toda la familia.</li>
            <li>Guías personalizadas para cultivar en casa.</li>
            <li>Juego interactivo para aprender sembrando.</li>
          </ul>
          <a href="/page/us" className={styles.btnConocer}>
            Conocer más acerca de la empresa
          </a>
        </div>
        <div className={styles.image}>
          <Image src="/empresa.jpeg" alt="Imagen de la empresa" fill className={styles.img} />
        </div>
      </div>ß
    </section>
  );
}