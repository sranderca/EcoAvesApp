import { doc, getDoc } from "firebase/firestore";
import { FIREBASE_STORE } from '../../firebaseConfig'; // Suponiendo que aquí está configurada tu instancia de Firestore

const obtenerLeccionPorId = async (idLeccion) => {
  try {
    const docRef = doc(FIREBASE_STORE, "Lecciones", idLeccion);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      console.log("Document data:", docSnap.data());
      return docSnap.data(); // Retorna los datos del documento si existe
    } else {
      console.log("No such document!");
      return null; // Retorna null si el documento no existe
    }
  } catch (error) {
    console.error("Error al obtener la lección:", error);
    throw error;
  }
};

export default obtenerLeccionPorId;
