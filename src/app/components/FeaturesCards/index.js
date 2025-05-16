'use client';
import styles from './FeaturesCards.module.css';
import {
  FaUtensils,
  FaSeedling,
  FaQrcode,
  FaHeartbeat,
  FaStore
} from 'react-icons/fa';

export default function Features() {
  const features = [
    {
      title: 'Recetas',
      icon: <FaUtensils className={styles.featureIcon} />,
      description: 'Comparte recetas saludables, filtra por tipo de dieta y encuentra inspiración culinaria nutritiva.',
      videoId: '4SNItNkBNLo'
    },
    {
      title: 'Cultivo',
      icon: <FaSeedling className={styles.featureIcon} />,
      description: 'Descubre qué cultivos puedes plantar según tu ubicación y clima, y aprende con guías prácticas.',
      videoId: 'eauhVvw5YHs'
    },
    {
      title: 'NutriScan',
      icon: <FaQrcode className={styles.featureIcon} />,
      description: 'Escanea alimentos para obtener su información nutricional y recibe recomendaciones personalizadas.',
      videoId: 'rChpZejmaU0'
    },
    {
      title: 'Salud Infantil',
      icon: <FaHeartbeat className={styles.featureIcon} />,
      description: 'Información clara sobre diabetes tipo 1 y 2, obesidad infantil y prevención desde temprana edad.',
      videoId: 'XUE8cnujLuE'
    },
    {
      title: 'Ofertas Frescas',
      icon: <FaStore className={styles.featureIcon} />,
      description: 'Conecta con comerciantes locales que ofrecen alimentos sobrantes del día para reducir desperdicios.',
      videoId: 'lczybookscg'
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
            <a href={`/page/demo/${feature.videoId}`} className={styles.demoButton}>
              Ver demo
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}