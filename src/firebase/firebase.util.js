import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDOvstmHNhnf4wm2BLhWWeab1AS3Jjlwb0",
    authDomain: "crwn-db-12aa5.firebaseapp.com",
    databaseURL: "https://crwn-db-12aa5.firebaseio.com",
    projectId: "crwn-db-12aa5",
    storageBucket: "crwn-db-12aa5.appspot.com",
    messagingSenderId: "564149232225",
    appId: "1:564149232225:web:76d878123e0b42451e4020",
    measurementId: "G-71Y0BTDHJN"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapshot = await userRef.get();

    if (!snapshot.exist) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData,
            });
        } catch (err) {
            console.log('Error: ', err.message);
        }
    }

    return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;