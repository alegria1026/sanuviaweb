'use client';
import styles from './UsSummary.module.css';
import Image from 'next/image';

function UsSummary() {
  return (
    <section className={styles.wrapper}>
      <h2 className={styles.title}>NOSOTROS</h2>
      <div className={styles.content}>
        <div className={styles.text}>
          <p>
            En Fresh Fusion, nos dedicamos a ofrecer kits de comida saludable, nutritiva y balanceada, especialmente diseñados para personas con necesidades nutricionales específicas. Nuestro propósito es mejorar la salud y el bienestar a través de soluciones alimenticias prácticas y deliciosas.
          </p>
          <p>
            Nuestros kits están elaborados con ingredientes frescos, orgánicos y de alta calidad. Ofrecemos opciones para personas con diabetes, obesidad y desnutrición, asegurando que cada comida sea adecuada para cada necesidad.
          </p>
          <ul className={styles.list}>
            <li>Recetas personalizadas para cada tipo de dieta</li>
            <li>Ingredientes frescos y orgánicos</li>
            <li>Kits listos para disfrutar, sin necesidad de preparación</li>
            <li>Empaque 100% reutilizable y sostenible</li>
          </ul>
          <a href="/us" className={styles.btnConocer}>
            Conocer más
          </a>
        </div>
        <div className={styles.image}>
          <Image src="/empresa.png" alt="Imagen de la empresa" fill className={styles.img} />
        </div>
      </div>
    </section>
  );
}

export default UsSummary;