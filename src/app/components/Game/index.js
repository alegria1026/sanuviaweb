'use client'
import { useEffect, useRef } from 'react'
import * as Phaser from 'phaser'
import MainScene from '@/app/components/MainScene'

export default function Game() {
  const gameRef = useRef(null)
  
  useEffect(() => {
    if (!gameRef.current) return
    
    const config = {
      type: Phaser.AUTO,
      width: 800,
      height: 600,
      parent: gameRef.current,
      scene: [MainScene],
      physics: {
        default: 'arcade',
        arcade: {
          gravity: { y: 0 },
          debug: false
        }
      },
      scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH,
      },
      backgroundColor: '#87CEEB', // Color de cielo más brillante
      render: {
        pixelArt: false,
        antialias: true,
        roundPixels: true
      }
    }
    
    const game = new Phaser.Game(config)
    
    return () => game.destroy(true)
  }, [])
  
  return (
    <div style={{ 
      width: '100%', 
      height: '100vh', 
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center', 
      justifyContent: 'center',
      background: 'linear-gradient(to bottom, #e6f7ff, #ffffff)'
    }}>
      <h1 style={{ 
        textAlign: 'center', 
        margin: '20px 0', 
        color: '#388e3c', 
        fontFamily: 'Arial, sans-serif', 
        fontSize: '36px',
        fontWeight: 'bold',
        textShadow: '2px 2px 4px rgba(0,0,0,0.1)'
      }}>Mi Juego de Agricultura</h1>
      
      <div ref={gameRef} style={{
        width: '800px',
        height: '600px',
        maxWidth: '95%',
        border: '3px solid #388e3c',
        borderRadius: '12px',
        boxShadow: '0 8px 16px rgba(0,0,0,0.2)',
        overflow: 'hidden'
      }} />
      
      <p style={{ 
        textAlign: 'center', 
        margin: '20px 0', 
        color: '#2e7d32', 
        fontFamily: 'Arial, sans-serif', 
        fontSize: '18px',
        maxWidth: '600px',
        padding: '0 20px'
      }}>Aprende sobre el crecimiento de plantas y cosecha mientras te diviertes</p>
    </div>
  )
}