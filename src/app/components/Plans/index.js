'use client';
import styles from './Plans.module.css';

export default function Plans() {
  const plans = [
    {
      name: 'Plan Básico',
      price: 'Gratis',
      features: [
        'Acceso al foro de recetas',
        'Consulta de enfermedades infantiles',
        'Uso limitado de NutriScan (5 escaneos/mes)',
        'Ver publicaciones en Ofertas Frescas'
      ],
      highlight: false
    },
    {
      name: 'Plan Premium',
      price: '$120 / bimestral',
      features: [
        'NutriScan ilimitado',
        'Recomendaciones personalizadas',
        'Acceso completo a foros y comunidades',
        'Publicación en Ofertas Frescas',
        'Cultivos digitales según tu ubicación',
        'Acceso offline y recordatorios de salud'
      ],
      highlight: true
    }
  ];

  return (
    <section className={styles.wrapper}>
      <h2 className={styles.title}>Planes de la App</h2>
      <div className={styles.grid}>
        {plans.map((plan, index) => (
          <div
            key={index}
            className={`${styles.card} ${plan.highlight ? styles.highlight : ''}`}
          >
            {plan.highlight && <div className={styles.label}>Recomendado</div>}
            <h3 className={styles.planName}>{plan.name}</h3>
            <p className={styles.price}>{plan.price}</p>
            <ul className={styles.features}>
              {plan.features.map((feature, i) => (
                <li key={i} className={styles.featureItem}>
                   {feature}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}