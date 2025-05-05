// src/app/components/Login.js
'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';  // Para redirigir
import { auth, signInWithEmailAndPassword } from "@/app/lib/firabese";
import styles from './Login.module.css';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const router = useRouter();  // Para redirigir al dashboard

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      // Intentar iniciar sesión con Firebase
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      
      // Verificar si el correo es "example@gmail.com"
      if (email === 'yahirhumberto04@gmail.com') {
        // Si es exitoso, redirige al dashboard
        router.push('/page/disease');
      } else {
        // Si el correo no es el permitido, muestra un error
        setError('Este correo no tiene acceso.');
      }
    } catch (err) {
      // Si hay un error, muestra el mensaje
      setError('Credenciales incorrectas o error de conexión.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className={styles.wrapper}>
      <h2 className={styles.title}>Iniciar Sesión</h2>
      <form onSubmit={handleSubmit} className={styles.form}>
        {error && <div className={styles.error}>{error}</div>}
        <div className={styles.inputGroup}>
          <label htmlFor="email" className={styles.label}>Correo Electrónico</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={styles.input}
            required
            placeholder="Correo Electrónico"
          />
        </div>
        <div className={styles.inputGroup}>
          <label htmlFor="password" className={styles.label}>Contraseña</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className={styles.input}
            required
            placeholder="Contraseña"
          />
        </div>
        <button type="submit" disabled={loading} className={styles.submitButton}>
          {loading ? 'Cargando...' : 'Iniciar Sesión'}
        </button>
      </form>
    </section>
  );
}

export default Login;
