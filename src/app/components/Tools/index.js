import styles from './Tools.module.css';

const Tools = ({ onPlant, onWater, onRake, onReset, plantStage }) => {
  return (
    <div className={styles.tools}>
      <button
        className={`${styles.toolButton} ${plantStage === 0 ? styles.activeTool : ''}`}
        onClick={onRake}
        aria-label="Preparar tierra"
      >
        <div className={styles.toolIcon}>
          <svg viewBox="0 0 64 64" width="40" height="40">
            <rect x="30" y="4" width="4" height="40" fill="#6d4c41" />
            <g transform="translate(12,44)">
              <rect x="0" y="0" width="40" height="6" rx="2" fill="#5d4037" />
              {[...Array(5)].map((_, i) => (
                <rect
                  key={i}
                  x={4 + i * 8}
                  y={6}
                  width="2"
                  height="10"
                  fill="#3e2723"
                />
              ))}
            </g>
          </svg>
        </div>
        <span>Preparar tierra</span>
      </button>
      <button
        className={`${styles.toolButton} ${plantStage === 0 ? styles.activeTool : ''}`}
        onClick={onPlant}
        disabled={plantStage > 0}
        aria-label="Plantar semilla"
      >
        <div className={styles.toolIcon}>
          <svg viewBox="0 0 64 64" width="40" height="40" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <radialGradient id="seedGradient" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#6d4c41" />
                <stop offset="100%" stopColor="#3e2723" />
              </radialGradient>
            </defs>
            <ellipse cx="32" cy="32" rx="12" ry="18" fill="url(#seedGradient)" />
            <path d="M32 14 Q28 32 36 50" stroke="#4e342e" strokeWidth="2" fill="none" />
            <circle cx="30" cy="25" r="2" fill="#8d6e63" opacity="0.6" />
            <circle cx="34" cy="40" r="2" fill="#8d6e63" opacity="0.6" />
          </svg>
        </div>
        <span>Plantar semilla</span>
      </button>
      <button
        className={`${styles.toolButton} ${plantStage > 0 && plantStage < 4 ? styles.activeTool : ''}`}
        onClick={onWater}
        disabled={plantStage === 0 || plantStage === 4}
        aria-label="Regar planta"
      >
        <div className={styles.toolIcon}>
          <svg viewBox="0 0 64 64" width="40" height="40" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="waterGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#81d4fa" />
                <stop offset="100%" stopColor="#0288d1" />
              </linearGradient>
            </defs>
            <path
              d="M32 6 C42 20, 42 30, 32 44 C22 30, 22 20, 32 6 Z"
              fill="url(#waterGradient)"
              stroke="#0277bd"
              strokeWidth="2"
            />
            <circle cx="34" cy="26" r="3" fill="white" opacity="0.6" />
            <circle cx="30" cy="34" r="2" fill="white" opacity="0.4" />
          </svg>
        </div>
        <span>Regar</span>
      </button>
      <button
        className={styles.resetButton}
        onClick={onReset}
        aria-label="Reiniciar jardín"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 6V9L16 5L12 1V4C7.58 4 4 7.58 4 12C4 13.57 4.46 15.03 5.24 16.26L6.7 14.8C6.25 13.97 6 13.01 6 12C6 8.69 8.69 6 12 6ZM18.76 7.74L17.3 9.2C17.74 10.04 18 10.99 18 12C18 15.31 15.31 18 12 18V15L8 19L12 23V20C16.42 20 20 16.42 20 12C20 10.43 19.54 8.97 18.76 7.74Z" fill="white"/>
        </svg>
        Reiniciar jardín
      </button>
    </div>
  );
};

export default Tools;