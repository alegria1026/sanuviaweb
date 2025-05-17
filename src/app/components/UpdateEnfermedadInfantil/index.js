'use client';

import { useState, useEffect } from 'react';
import styles from './UpdateEnfermedadInfantil.module.css';
import { doc, getDoc, updateDoc } from 'firebase/firestore';
import { db } from '@/app/lib/firabese';

function UpdateEnfermedadInfantil({ id, onUpdateComplete }) {
  const [formData, setFormData] = useState({
    titulo: '',
    descripcion: '',
    fecha: '',
    UrlImage: ''
  });
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);
  
  // Cargar los datos actuales del documento
  useEffect(() => {
    async function fetchEnfermedadData() {
      if (!id) return;
      
      try {
        setLoading(true);
        const docRef = doc(db, "enfermedades_infantiles", id);
        const docSnap = await getDoc(docRef);
        
        if (docSnap.exists()) {
          const data = docSnap.data();
          // Formato para input datetime-local
          let formattedDate = '';
          if (data.fecha) {
            try {
              // Intenta convertir la fecha a formato ISO y luego recortarla
              formattedDate = new Date(data.fecha).toISOString().substring(0, 16);
            } catch (err) {
              formattedDate = '';
            }
          }
          
          setFormData({
            ...data,
            fecha: formattedDate
          });
        } else {
          setError('No se encontró la enfermedad con el ID proporcionado');
        }
      } catch (err) {
        setError(`Error al cargar datos: ${err.message}`);
      } finally {
        setLoading(false);
      }
    }

    fetchEnfermedadData();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!id) {
      setError('ID de documento no válido');
      return;
    }
    
    try {
      setLoading(true);
      setError(null);
      
      const docRef = doc(db, "enfermedades_infantiles", id);
      
      // Preparar datos para actualizar
      const updateData = {
        titulo: formData.titulo,
        descripcion: formData.descripcion,
        UrlImage: formData.UrlImage
      };
      
      // Añadir fecha solo si está presente
      if (formData.fecha) {
        updateData.fecha = formData.fecha;
      } else {
        // Si no hay fecha, usar la actual
        updateData.fecha = new Date().toISOString();
      }
      
      // Actualizar el documento en Firestore
      await updateDoc(docRef, updateData);
      
      setSuccess(true);
      setTimeout(() => {
        if (onUpdateComplete) {
          onUpdateComplete();
        }
      }, 2000);
      
    } catch (err) {
      setError(`Error al actualizar: ${err.message}`);
    } finally {
      setLoading(false);
    }
  };

  if (loading && !formData.titulo) {
    return <div className={styles.loadingContainer}>Cargando datos...</div>;
  }

  return (
    <section className={styles.wrapper}>
      <h2 className={styles.title}>Actualizar Enfermedad Infantil</h2>
      
      {error && <div className={styles.error}>{error}</div>}
      {success && <div className={styles.success}>¡Enfermedad actualizada correctamente!</div>}
      
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.inputGroup}>
          <label htmlFor="titulo" className={styles.label}>Título</label>
          <input
            type="text"
            id="titulo"
            name="titulo"
            value={formData.titulo}
            onChange={handleChange}
            className={styles.input}
            required
            placeholder="Título de la enfermedad"
          />
        </div>
        
        <div className={styles.inputGroup}>
          <label htmlFor="descripcion" className={styles.label}>Descripción</label>
          <textarea
            id="descripcion"
            name="descripcion"
            value={formData.descripcion}
            onChange={handleChange}
            className={styles.textarea}
            required
            placeholder="Descripción detallada de la enfermedad"
            rows="4"
          />
        </div>
        
        <div className={styles.inputGroup}>
          <label htmlFor="UrlImage" className={styles.label}>URL de la Imagen</label>
          <input
            type="url"
            id="UrlImage"
            name="UrlImage"
            value={formData.UrlImage}
            onChange={handleChange}
            className={styles.input}
            placeholder="https://ejemplo.com/imagen.jpg"
          />
        </div>
        
        <div className={styles.inputGroup}>
          <label htmlFor="fecha" className={styles.label}>Fecha</label>
          <input
            type="datetime-local"
            id="fecha"
            name="fecha"
            value={formData.fecha}
            onChange={handleChange}
            className={styles.input}
          />
          <small className={styles.helperText}>
            Si no se especifica, se usará la fecha actual
          </small>
        </div>
        
        <div className={styles.buttonGroup}>
          <button 
            type="submit" 
            disabled={loading} 
            className={styles.submitButton}
          >
            {loading ? 'Actualizando...' : 'Actualizar Enfermedad'}
          </button>
          
          <button 
            type="button"
            onClick={() => onUpdateComplete ? onUpdateComplete() : null}
            className={styles.cancelButton}
          >
            Cancelar
          </button>
        </div>
      </form>
    </section>
  );
}

export default UpdateEnfermedadInfantil;