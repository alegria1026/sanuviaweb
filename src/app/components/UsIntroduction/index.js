'use client';
import styles from './UsIntroduction.module.css';
import Image from 'next/image';

function UsIntroduction() {
  return (
    <section className={styles.wrapper}>
      <h2 className={styles.title}>¿QUIÉNES SOMOS?</h2>
      <div className={styles.content}>
        <div className={styles.text}>
          <p>
            Somos cinco estudiantes de la Facultad de Contaduría y Administración de la Universidad Veracruzana y creamos FreshFusion® a partir de la dificultad que tienen las personas con enfermedades como la diabetes, el sobrepeso y la desnutrición para encontrar alimentos que sean tanto saludables como agradables al paladar.
          </p>
          <ul className={styles.list}>
            <li>
              <span className={styles.checkmark}>✓</span>
              Kits para necesidades específicas (diabetes, obesidad, desnutrición)
            </li>
            <li>
              <span className={styles.checkmark}>✓</span>
              Alimentos saludables y deliciosos
            </li>
            <li>
              <span className={styles.checkmark}>✓</span>
              Empaques 100% reutilizables
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

export default UsIntroduction;