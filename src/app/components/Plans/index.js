'use client';
import styles from './Plans.module.css';

export default function Plans() {
  const plans = [
    {
      name: 'Plan Básico',
      price: 'Gratis',
      features: [
        'Acceso al foro de recetas',
        'Uso limitado de NutriScan (5 escaneos/mes)',
        'Consulta de enfermedades infantiles',
        'Ver publicaciones en Ofertas Frescas'
      ],
      highlight: false
    },
    {
      name: 'Plan Avanzado',
      price: '$49 / mes',
      features: [
        'Acceso completo a todos los foros',
        'NutriScan ilimitado',
        'Recomendaciones personalizadas',
        'Publicación en Ofertas Frescas',
        'Acceso al sistema de cultivo por ubicación'
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
                  ✓ {feature}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
