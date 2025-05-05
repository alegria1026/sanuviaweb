'use client';
import styles from './Testimonials.module.css';
import { FaQuoteLeft } from 'react-icons/fa';

export default function Testimonials() {
  const comments = [
    {
      name: 'María González',
      text: 'Gracias a Raíz y Vida he aprendido a cultivar en casa y comer más saludable. ¡Incluso mis hijos se interesan en el huerto!'
    },
    {
      name: 'Luis Torres',
      text: 'La funcionalidad de NutriScan es impresionante. Puedo escanear cualquier producto y saber al instante si es bueno para mi dieta.'
    },
    {
      name: 'Ana Pérez',
      text: 'Me encantan las recetas. Son fáciles de seguir y se adaptan a mis necesidades como diabética. ¡Muy recomendable!'
    },
    {
      name: 'Carlos Méndez',
      text: 'Trabajo en una frutería y con Ofertas Frescas he podido vender los productos que antes desperdiciaba. ¡Una app muy útil!'
    }
  ];

  return (
    <section className={styles.wrapper}>
      <h2 className={styles.title}>Testimonios</h2>
      <div className={styles.grid}>
        {comments.map((comment, index) => (
          <div key={index} className={styles.card}>
            <FaQuoteLeft className={styles.quoteIcon} />
            <p className={styles.text}>&ldquo;{comment.text}&rdquo;</p>
            <p className={styles.name}>— {comment.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
