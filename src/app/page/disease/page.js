'use client';

import { useState, useEffect } from 'react';
import { collection, query, getDocs } from 'firebase/firestore';
import { db } from '@/app/lib/firabese';
import UpdateEnfermedadInfantil from '@/app/components/UpdateEnfermedadInfantil';
import Menu from '@/app/components/Menu';
import styles from './disease.module.css';

export default function Disease() {
  const [selectedId, setSelectedId] = useState('');
  const [enfermedadList, setEnfermedadList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [isUpdating, setIsUpdating] = useState(false);
  
  // Función para cargar la lista de enfermedades
  async function loadEnfermedades() {
    setLoading(true);
    setError(null);
    
    try {
      const q = query(collection(db, "enfermedades_infantiles"));
      const querySnapshot = await getDocs(q);
      
      const enfermedades = [];
      querySnapshot.forEach((doc) => {
        enfermedades.push({
          id: doc.id,
          ...doc.data()
        });
      });
      
      setEnfermedadList(enfermedades);
    } catch (err) {
      setError(`Error al cargar las enfermedades: ${err.message}`);
    } finally {
      setLoading(false);
    }
  }
  
  // Cargar enfermedades al montar el componente
  useEffect(() => {
    loadEnfermedades();
  }, []);
  
  const handleSelectEnfermedad = (id) => {
    setSelectedId(id);
    setIsUpdating(true);
  };
  
  const handleUpdateComplete = () => {
    setIsUpdating(false);
    setSelectedId('');
    // Recargar la lista después de actualizar
    loadEnfermedades();
  };
  
  return (
    <div>
      
      <div className={styles.container}>
        
        {error && <div className={styles.error}>{error}</div>}
        
        {isUpdating ? (
          <UpdateEnfermedadInfantil 
            id={selectedId} 
            onUpdateComplete={handleUpdateComplete} 
          />
        ) : (
          <div className={styles.content}>
            <h2 className={styles.sectionTitle}>Seleccionar Enfermedad para Actualizar</h2>
            
            {loading ? (
              <div className={styles.loading}>Cargando enfermedades...</div>
            ) : enfermedadList.length > 0 ? (
              <div className={styles.enfermedadGrid}>
                {enfermedadList.map((enfermedad) => (
                  <div 
                    key={enfermedad.id} 
                    className={styles.enfermedadCard}
                    onClick={() => handleSelectEnfermedad(enfermedad.id)}
                  >
                    <div className={styles.cardImg}>
                      {enfermedad.UrlImage ? (
                        <img 
                          src={enfermedad.UrlImage} 
                          alt={enfermedad.titulo} 
                          className={styles.enfermedadImage}
                        />
                      ) : (
                        <div className={styles.noImage}>Sin imagen</div>
                      )}
                    </div>
                    <div className={styles.cardContent}>
                      <h3 className={styles.enfermedadTitle}>{enfermedad.titulo}</h3>
                      <p className={styles.enfermedadDesc}>
                        {enfermedad.descripcion.length > 100 
                          ? `${enfermedad.descripcion.substring(0, 100)}...` 
                          : enfermedad.descripcion}
                      </p>
                      <button className={styles.editButton}>
                        Editar
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className={styles.noData}>
                No se encontraron enfermedades infantiles en la base de datos.
              </div>
            )}
            
            <div className={styles.refreshSection}>
              <button 
                onClick={loadEnfermedades} 
                className={styles.refreshButton}
                disabled={loading}
              >
                {loading ? 'Cargando...' : 'Actualizar Lista'}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}