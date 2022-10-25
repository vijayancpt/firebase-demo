// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// import { getAnalytics } from "firebase/analytics";

import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';

import { doc, updateDoc } from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAVluUD6zvd7i_l6kGZ3qDldxabfeCa3bU",
  authDomain: "dcot-10693.firebaseapp.com",
  projectId: "dcot-10693",
  storageBucket: "dcot-10693.appspot.com",
  messagingSenderId: "394892658985",
  appId: "1:394892658985:web:5a90a6de205e0d5b634f38",
  measurementId: "G-3F1RD4TRH1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// const analytics = getAnalytics(app);
async function getVeggies() {
  const citiesCol = collection(db, 'VegMaster');
  const vegSnapshot = await getDocs(citiesCol);
  const vegList = vegSnapshot.docs.map(doc => doc.data());
  // console.log('DocList:', vegList);
  // return cityList;
  return vegList
}



async function addValue(db) {
  const citiesCol = collection(db, 'VegMaster');
  // const vegSnapshot = await getDocs(citiesCol);
  // const vegList = vegSnapshot.docs.map(doc => doc.data());
  // alert( typeof(citiesCol.ad))
  await citiesCol.addValue
    ({
      name: 'test'
    }
    )
}


async function updateValue(db) {

  const taskDocRef = doc(db, 'VegMaster', 'VegMasterId')
  try {
    await updateDoc(taskDocRef, {
      VegName: 'Tested',
      VegQuantity: 12
    })
    // onClose()
  } catch (err) {
    alert(err)
  }
}

// addValue(db)

// updateValue(db);

// getVeggies(db);

export const  getVegList = getVeggies;