import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC66aRg7xpZtgCDEuiHhol8VSANnddIiGI",
  authDomain: "e-commerce-61739.firebaseapp.com",
  projectId: "e-commerce-61739",
  storageBucket: "e-commerce-61739.appspot.com",
  messagingSenderId: "605374434704",
  appId: "1:605374434704:web:2dff56b8692ecf96f1f715",
};
firebase.initializeApp(firebaseConfig);

export const googleProvider = new firebase.auth.GoogleAuthProvider();
googleProvider.setCustomParameters({
  prompt: "select_account",
});
export const firestore = firebase.firestore();
export const auth = firebase.auth();
export const signInWithGoogleProvider = () =>
  auth.signInWithPopup(googleProvider);
export default firebase;

export const createUserDocument = async ({ user, ...otherData }) => {
  const docRef = await firestore.collection("users").doc(user.uid);
  const snapShot = await docRef.get();
  if (!snapShot.exists) {
    const { displayName, email } = user;
    const createdAt = new Date();
    docRef
      .set({
        displayName,
        email,
        createdAt,
        ...otherData,
      })
      .then(() => docRef);
  }
  return docRef;
};

export const isUserLoggedIn = () => {
  return new Promise((resolve, reject) => {
    const unsubscribe = auth.onAuthStateChanged(async (user) => {
      unsubscribe();
      resolve(user);
    }, reject);
  });
};

export const checkIfUserExistsOnDb = (id) => {
  return new Promise(async (resolve, reject) => {
    const userRef = await firestore.collection("users").doc(id);
    const userSnapShot = await userRef.get();
    if (userSnapShot.exists) return resolve(userSnapShot);
    else return reject(null);
  });
};

export const createCollectionsAndDocs = async (collectionKey, objects) => {
  return new Promise(async (resolve, reject) => {
    const collectionRef = firestore.collection(collectionKey);
    const batch = firestore.batch();
    Object.values(objects).forEach((object) => {
      const newDocRef = collectionRef.doc();
      batch.set(newDocRef, object);
    });
    await batch.commit();
    return resolve();
  });
};
