// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAnalytics } from 'firebase/analytics'
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyC9VjUytMNSb5BMW35GsSf1gThJM6_nJKQ',
  authDomain: 'yoga-mobile-37abd.firebaseapp.com',
  projectId: 'yoga-mobile-37abd',
  storageBucket: 'yoga-mobile-37abd.firebasestorage.app',
  messagingSenderId: '271512576190',
  appId: '1:271512576190:web:00bcb1cddb787bef5dbeef',
  measurementId: 'G-G2BE500C8F',
}

// Initialize Firebase
export const app = initializeApp(firebaseConfig)
export const analytics = getAnalytics(app)
export const db = getFirestore(app)
