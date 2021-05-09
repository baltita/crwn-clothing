import firebase from "firebase/app";
import 'firebase/firestore';
import 'firebase/auth/';

const config = {
    apiKey: "AIzaSyBntNErtdBwabuMfZ2rNYFuG7qJ7pnN9m8",
    authDomain: "crwnclothing-react.firebaseapp.com",
    projectId: "crwnclothing-react",
    storageBucket: "crwnclothing-react.appspot.com",
    messagingSenderId: "773700736496",
    appId: "1:773700736496:web:d29b45a89818c7ce33f935",
    measurementId: "G-HKLVNGHX14"
}

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const userSnap = await userRef.get();

    if (!userSnap.exists) {
        const {displayName, email, phoneNumber, photoURL} = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                phoneNumber,
                photoURL,
                createdAt,
                ...additionalData
            })
        } catch (error) {
            console.log('Error creating user in DB', error.message)
         }
    }
    return userRef;
}

export const addCollectionAndDocuments = async (collectionKey, documentsToAdd) => {
    const collectionRef = firestore.collection(collectionKey);
    const batch = firestore.batch();
    documentsToAdd.forEach(obj => {
        const newRefObj = collectionRef.doc();
        batch.set(newRefObj, obj);
    })

    return await batch.commit();
}

export const convertCollectionSnapshotToMap = (collections) => {
    const transformedCollection = collections.docs.map(doc => {
            const {title, items} = doc.data();
            return {
                routeName: encodeURI(title.toLowerCase()),
                id: doc.id,
                title,
                items
            }
    });
    return transformedCollection.reduce((acumulator, collection) =>{
        acumulator[collection.title.toLowerCase()] = collection;
        return acumulator;
    }, {})
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
