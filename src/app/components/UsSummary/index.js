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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <p>
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
          <ul className={styles.list}>
            <li>Lorem ipsum dolor sit amet.</li>
            <li>Consectetur adipiscing elit.</li>
            <li>Sed do eiusmod tempor incididunt.</li>
            <li>Labore et dolore magna aliqua.</li>
          </ul>
          <a href="/page/us" className={styles.btnConocer}>
            Conocer más acerca de la empresa
          </a>
        </div>
        <div className={styles.image}>
          <Image src="/empresa.png" alt="Imagen de la empresa" fill className={styles.img} />
        </div>
      </div>
    </section>
  );
}