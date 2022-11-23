import { initializeApp } from "firebase/app";
import { getDocs, collection, getFirestore, query, where, doc, getDoc } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyDozaClkLRwA2Uv3tDP4Oh9642G6CBkUdw",
  authDomain: "proyecto-react-kael.firebaseapp.com",
  projectId: "proyecto-react-kael",
  storageBucket: "proyecto-react-kael.appspot.com",
  messagingSenderId: "413528432390",
  appId: "1:413528432390:web:950af37b49fd164ad88887"
};


const app = initializeApp(firebaseConfig);
export const baseDeDatos = getFirestore(app)

//Get Discos
const discosRef = collection(baseDeDatos, 'discos')


export const getItems = (nombreCategoria) => { 
    
      if (nombreCategoria) {
        return getDocs(query(discosRef, where('categoria','==', nombreCategoria)))
      }
      return getDocs(discosRef)
}

export const getItem =(diskId) => {
      return getDoc(doc(discosRef, diskId));
}