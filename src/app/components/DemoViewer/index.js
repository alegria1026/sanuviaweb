'use client';
import styles from './DemoViewer.module.css';

export default function DemoViewer({ videoId }) {
  return (
    <section className={styles.wrapper}>
      <div className={styles.videoContainer}>
        <iframe
          src={`https://www.youtube.com/embed/${videoId}`}
          title="Demo de funcionalidad"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className={styles.iframe}
        ></iframe>
      </div>
    </section>
  );
}