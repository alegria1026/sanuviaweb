"use client";

import { useState } from "react";
import Head from "next/head";
import Garden from "@/app/components/Garden";
import Tools from "@/app/components/Tools";
import styles from "./play.module.css";

export default function Play() {
  const [plantStage, setPlantStage] = useState(0);
  const [isWatered, setIsWatered] = useState(false);
  const [message, setMessage] = useState("¡Bienvenido a tu jardín! Comienza a cultivar.");
  const [showTutorial, setShowTutorial] = useState(false);

  const handlePlant = () => {
    if (plantStage === 0) {
      setPlantStage(1);
      setMessage("¡Has plantado una semilla! Ahora necesita agua.");
    } else {
      setMessage("Ya has plantado una semilla.");
    }
  };

  const handleWater = () => {
    if (plantStage === 0) {
      setMessage("¡Primero debes plantar una semilla!");
      return;
    }
    
    setIsWatered(true);
    setMessage("¡Has regado tu planta!");
    
    if (plantStage === 1) {
      setTimeout(() => {
        setPlantStage(2);
        setIsWatered(false);
        setMessage("¡Tu planta está creciendo! Necesita más agua.");
      }, 2000);
    } else if (plantStage === 2) {
      setTimeout(() => {
        setPlantStage(3);
        setIsWatered(false);
        setMessage("¡Tu planta está floreciendo! Un poco más de agua.");
      }, 2000);
    } else if (plantStage === 3) {
      setTimeout(() => {
        setPlantStage(4);
        setMessage("¡Felicidades! Has cultivado una planta exitosamente.");
      }, 2000);
    }
  };

  const handleRake = () => {
    if (plantStage === 0) {
      setMessage("¡Estás preparando la tierra para plantar!");
    } else {
      setMessage("La tierra ya está preparada y has plantado una semilla.");
    }
  };

  const resetGarden = () => {
    setPlantStage(0);
    setIsWatered(false);
    setMessage("¡Jardín reiniciado! Comienza de nuevo.");
  };

  const toggleTutorial = () => {
    setShowTutorial(!showTutorial);
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Juego de Cultivo</title>
        <meta name="description" content="Aprende a cultivar jugando" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <main className={styles.main}>
        <div className={styles.header}>
          <h1 className={styles.title}>Mi Jardín de Cultivo</h1>
          <button
            className={styles.helpButton}
            onClick={toggleTutorial}
            aria-label="Mostrar tutorial"
          >
            ?
          </button>
        </div>
        
        <div className={`${styles.message} ${styles[`stage${plantStage}`]}`}>
          {message}
        </div>
        
        <Garden plantStage={plantStage} isWatered={isWatered} />
        
        <Tools
          onPlant={handlePlant}
          onWater={handleWater}
          onRake={handleRake}
          onReset={resetGarden}
          plantStage={plantStage}
        />
        
        {showTutorial && (
          <div className={styles.tutorialOverlay}>
            <div className={styles.tutorialContent}>
              <h2>¿Cómo jugar?</h2>
              <ol>
                <li>Usa el rastrillo para preparar la tierra</li>
                <li>Planta una semilla</li>
                <li>Riega la planta periódicamente</li>
                <li>¡Observa cómo crece tu planta!</li>
              </ol>
              <button
                className={styles.closeTutorial}
                onClick={toggleTutorial}
              >
                Entendido
              </button>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}