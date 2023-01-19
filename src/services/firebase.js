import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

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
//const analytics = getAnalytics(app);
export const auth = app.auth()
export default app
