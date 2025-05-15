import styles from './Plant.module.css';

const Plant = ({ stage }) => {
  const getPlantHeight = () => {
    switch (stage) {
      case 1: return 30; // semilla
      case 2: return 80; // brote
      case 3: return 140; // planta joven
      case 4: return 180; // planta desarrollada
      default: return 0;
    }
  };

  const getPlantWidth = () => {
    switch (stage) {
      case 1: return 15; // semilla
      case 2: return 50; // brote
      case 3: return 90; // planta joven
      case 4: return 120; // planta desarrollada
      default: return 0;
    }
  };

  const renderLeaves = () => {
    if (stage < 2) return null;
    
    const leaves = [];
    const leafCount = stage * 2 + 2;
    
    for (let i = 0; i < leafCount; i++) {
      const side = i % 2 === 0 ? 'left' : 'right';
      const sizeVariation = 5 + Math.random() * 10;
      
      leaves.push(
        <div
          key={i}
          className={`${styles.leaf} ${styles[`leaf${side}`]}`}
          style={{
            top: `${20 + (i * (100 / leafCount))}px`,
            animationDelay: `${i * 0.1}s`,
            width: `${30 + sizeVariation}px`,
            height: `${15 + sizeVariation/2}px`
          }}
        ></div>
      );
    }
    
    return leaves;
  };

  const renderFlower = () => {
    if (stage < 4) return null;
    
    return (
      <div className={styles.flower}>
        <div className={styles.petal} style={{ transform: 'rotate(0deg)' }}></div>
        <div className={styles.petal} style={{ transform: 'rotate(45deg)' }}></div>
        <div className={styles.petal} style={{ transform: 'rotate(90deg)' }}></div>
        <div className={styles.petal} style={{ transform: 'rotate(135deg)' }}></div>
      </div>
    );
  };

  const renderSeed = () => {
    if (stage > 1) return null;
    
    return (
      <div className={styles.seed} style={{
        width: `${getPlantWidth()}px`,
        height: `${getPlantWidth()}px`
      }}>
        <div className={styles.seedDetail}></div>
      </div>
    );
  };

  return (
    <div
      className={styles.plant}
      style={{
        height: `${getPlantHeight()}px`,
        width: `${getPlantWidth()}px`
      }}
    >
      {stage > 1 && <div className={styles.stem}></div>}
      {renderSeed()}
      {renderLeaves()}
      {renderFlower()}
    </div>
  );
};

export default Plant;