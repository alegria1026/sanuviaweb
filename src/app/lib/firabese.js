// Actualizar la configuración de Firebase para incluir Firestore
import { initializeApp } from 'firebase/app';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore'; // Añadimos esta importación

// Configuración de Firebase
const firebaseConfig = {
  apiKey: "AIzaSyAqlgSClk__NyLWMgcXeern1iB3uXI0voU",
  authDomain: "anfeca2025.firebaseapp.com",
  projectId: "anfeca2025",
  storageBucket: "anfeca2025.appspot.com",
  messagingSenderId: "379146167730",
  appId: "1:379146167730:web:5d1bac3119f3e43b0230ab",
  measurementId: "G-GZWZSYKN65"
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app); // Instancia de Firestore

export { auth, db, signInWithEmailAndPassword };