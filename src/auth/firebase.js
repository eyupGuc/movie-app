import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";


const firebaseConfig = {
    apiKey: "AIzaSyArilFwXVslhFKYwT_iYUUX1uLC-psB_5g",
    authDomain: "movie-app-b5f3a.firebaseapp.com",
    projectId: "movie-app-b5f3a",
    storageBucket: "movie-app-b5f3a.appspot.com",
    messagingSenderId: "443422671538",
    appId: "1:443422671538:web:ec7c04d3b7ba528bbcbfab"
  };

  const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
// export const signInWithGoogle = () => {
//   signInWithPopup(auth, provider);
// };




  