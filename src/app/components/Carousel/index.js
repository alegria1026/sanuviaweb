'use client';
import { useState, useEffect, useRef } from 'react';
import styles from './Carousel.module.css';
import Image from 'next/image';

function Carousel({ title = "PRODUCTOS DESTACADOS", products = [] }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const carouselRef = useRef(null);

  // Detectar si es móvil
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const nextSlide = () => {
    setCurrentIndex(prev => (prev + 1) % products.length);
  };

  const prevSlide = () => {
    setCurrentIndex(prev => (prev - 1 + products.length) % products.length);
  };

  // Calcular el ancho del carrusel para el desplazamiento
  const getSlideWidth = () => {
    if (carouselRef.current) {
      return carouselRef.current.offsetWidth;
    }
    return 0;
  };

  return (
    <section className={styles.wrapper}>
      <h2 className={styles.title}>{title}</h2>
      
      <div className={styles.carouselContainer} ref={carouselRef}>
        {/* Flechas solo visibles en móvil */}
        {isMobile && products.length > 1 && (
          <>
            <button 
              className={`${styles.arrowButton} ${styles.leftArrow}`}
              onClick={prevSlide}
              aria-label="Anterior"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className={styles.iconArrow}
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <button 
              className={`${styles.arrowButton} ${styles.rightArrow}`}
              onClick={nextSlide}
              aria-label="Siguiente"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className={styles.iconArrow}
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </>
        )}

        {/* Contenido del carrusel */}
        <div className={styles.carouselContent}>
          {products.map((product, index) => (
            <div 
              key={product.id || index}
              className={styles.productCard}
              style={{ 
                transform: isMobile ? `translateX(${-currentIndex * 100}%)` : 'none',
                flex: isMobile ? '0 0 100%' : '1',
                minWidth: isMobile ? '100%' : '300px',
                maxWidth: isMobile ? '100%' : 'calc(33.333% - 20px)'
              }}
            >
              <a href={product.link} className={styles.productLink}>
                <div className={styles.imageContainer}>
                  <Image
                    src={product.image}
                    alt={product.title}
                    fill
                    className={styles.productImage}
                    sizes={isMobile ? "100vw" : "33vw"}
                  />
                  <h3 className={styles.productTitle}>{product.title}</h3>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Carousel;