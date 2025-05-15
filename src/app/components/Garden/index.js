import { useState, useEffect } from 'react';
import Plant from '@/app/components/Plant';
import styles from './Garden.module.css';

const Garden = ({ plantStage, isWatered }) => {
  const [waterDrops, setWaterDrops] = useState([]);

  useEffect(() => {
    if (isWatered) {
      const newDrops = [];
      for (let i = 0; i < 8; i++) {
        newDrops.push({
          id: i,
          left: 40 + Math.random() * 40 - 20,
          delay: Math.random() * 0.5,
          size: 5 + Math.random() * 10
        });
      }
      setWaterDrops(newDrops);
    } else {
      setWaterDrops([]);
    }
  }, [isWatered]);

  return (
    <div className={styles.garden}>
      <div className={styles.sky}>
        <div className={styles.cloud} style={{ left: '10%', animationDelay: '0s' }}></div>
        <div className={styles.cloud} style={{ left: '50%', animationDelay: '2s' }}></div>
      </div>
      <div className={styles.soil}>
        {plantStage > 0 && (
          <>
            <Plant stage={plantStage} />
            {waterDrops.map((drop) => (
              <div
                key={drop.id}
                className={styles.waterDrop}
                style={{
                  left: `${drop.left}%`,
                  animationDelay: `${drop.delay}s`,
                  width: `${drop.size}px`,
                  height: `${drop.size * 1.5}px`
                }}
              ></div>
            ))}
          </>
        )}
      </div>
      <div className={styles.ground}></div>
    </div>
  );
};

export default Garden;