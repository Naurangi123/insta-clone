import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

// const firebaseConfig = {
//   apiKey: 'AIzaSyDSBUS-e9c3AJE2Ga8krg3nr_H5k9wCtj8',
//   authDomain: 'instagram-clone-a5986.firebaseapp.com',
//   projectId: 'instagram-clone-a5986',
//   storageBucket: 'instagram-clone-a5986.appspot.com',
//   messagingSenderId: '756098396115',
//   appId: '1:756098396115:web:42b57840c396757ac64926',
//   measurementId: 'G-MNXV60ZH7W',
// };
// const firebaseConfig = {
//   apiKey: 'AIzaSyBXghoDieSC6fnACTK2LTXr6vylBluDR4A',
//   authDomain: 'instgramclone-69fd5.firebaseapp.com',
//   projectId: 'instgramclone-69fd5',
//   storageBucket: 'instgramclone-69fd5.appspot.com',
//   messagingSenderId: '507217948420',
//   appId: '1:507217948420:web:20e773b30cd4c20d7a6a51',
//   measurementId: 'G-FZYNBS15PE',
// };
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID,
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app);
const storage = getStorage(app);

export { app, auth, firestore, storage };
