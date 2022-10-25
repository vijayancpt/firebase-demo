// Import the functions you need from the SDKs you need
import { async } from '@firebase/util';
import { initializeApp } from 'firebase/app';
// import { getAnalytics } from "firebase/analytics";

// import { getFirestore, collection, getDocs,addDoc } from 'firebase/firestore/lite';

import { getFirestore, collection, getDocs, addDoc, deleteDoc, doc, setDoc } from 'firebase/firestore';

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

export async function deleteData() {
  try {
    const citiesCol = collection(db, 'VegMaster');
    const vegSnapshot = await getDocs(citiesCol);

    await deleteDoc(doc(db, "VegMaster", vegSnapshot.docs[0].id));

    // const docRef = get
    // const vegSnapshot = await getDocs(citiesCol);
    // const vegList = vegSnapshot.docs .map(doc => doc.data());
    // await deleteDoc(vegSnapshot.docs[0]);
  }
  catch (error) {
    console.log(error);
  }
  // console.log('DocList:', vegList);
  // return cityList;
  // return vegList
}

export async function addValue() {
  try {
    const docRef = await addDoc(collection(db, "VegMaster"), {
      VegName: "Trial",
      VegQuantity: 121
    });
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}

export async function updateData() {
  const docRef = doc(db, "VegMaster", "TestDoc");
  const data = {
    Name: 'Mano'
  };
  setDoc(docRef, data)
}


// async function updateValue(db) {

//   const taskDocRef = doc(db, 'VegMaster', 'VegMasterId')
//   try {
//     await updateDoc(taskDocRef, {
//       VegName: 'Tested',
//       VegQuantity: 12
//     })
//     // onClose()
//   } catch (err) {
//     alert(err)
//   }
// }

// addValue(db)

// updateValue(db);

// getVeggies(db);

export const getVegList = getVeggies;