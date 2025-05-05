'use client';
import styles from './FeaturesCards.module.css';
import {
  FaUtensils,
  FaSeedling,
  FaMicroscope,
  FaHeartbeat,
  FaStore
} from 'react-icons/fa';

export default function Features() {
  const features = [
    {
      title: 'Recetas',
      icon: <FaUtensils className={styles.featureIcon} />,
      description: 'Comparte recetas saludables, filtra por tipo de dieta y encuentra inspiración culinaria nutritiva.'
    },
    {
      title: 'Cultivo',
      icon: <FaSeedling className={styles.featureIcon} />,
      description: 'Descubre qué cultivos puedes plantar según tu ubicación y clima, y aprende con guías prácticas.'
    },
    {
      title: 'NutriScan',
      icon: <FaMicroscope className={styles.featureIcon} />,
      description: 'Escanea alimentos para obtener su información nutricional y recibe recomendaciones personalizadas.'
    },
    {
      title: 'Salud Infantil',
      icon: <FaHeartbeat className={styles.featureIcon} />,
      description: 'Información clara sobre diabetes tipo 1 y 2, obesidad infantil y prevención desde temprana edad.'
    },
    {
      title: 'Ofertas Frescas',
      icon: <FaStore className={styles.featureIcon} />,
      description: 'Conecta con comerciantes locales que ofrecen alimentos sobrantes del día para reducir desperdicios.'
    }
  ];

  return (
    <section className={styles.wrapper}>
      <h2 className={styles.title}>Funcionalidades de la App</h2>
      <div className={styles.grid}>
        {features.map((feature, index) => (
          <div className={styles.card} key={index}>
            <div className={styles.header}>
              {feature.icon}
              <h3 className={styles.cardTitle}>{feature.title}</h3>
            </div>
            <p className={styles.cardText}>{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
