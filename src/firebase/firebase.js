import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyDSBUS-e9c3AJE2Ga8krg3nr_H5k9wCtj8',
  authDomain: 'instagram-clone-a5986.firebaseapp.com',
  projectId: 'instagram-clone-a5986',
  storageBucket: 'instagram-clone-a5986.appspot.com',
  messagingSenderId: '756098396115',
  appId: '1:756098396115:web:42b57840c396757ac64926',
  measurementId: 'G-MNXV60ZH7W',
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app);
const storage = getStorage(app);

export { app, auth, firestore, storage };
