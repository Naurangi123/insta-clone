import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyAx1ttn_4yV20_1DoDjJGkORoCc8VjCK-k',
  authDomain: 'instagram-clone-7c46f.firebaseapp.com',
  projectId: 'instagram-clone-7c46f',
  storageBucket: 'instagram-clone-7c46f.appspot.com',
  messagingSenderId: '341250653587',
  appId: '1:341250653587:web:c7907bd11e615d177b3c66',
  measurementId: 'G-Q54NHTK33K',
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app);
const storage = getStorage(app);

export { app, auth, firestore, storage };
