import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyARXuZP0uRe_T34hLckt8GvVKyHGVPE91o",
  authDomain: "chamsaccess-assessment.firebaseapp.com",
  projectId: "chamsaccess-assessment",
  storageBucket: "chamsaccess-assessment.appspot.com",
  messagingSenderId: "402499458915",
  appId: "1:402499458915:web:94e835bd027bfedb542556",
  measurementId: "G-4TKW738B94"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);



//export const auth = app.auth()
export const auth = getAuth(app)
// export default app
