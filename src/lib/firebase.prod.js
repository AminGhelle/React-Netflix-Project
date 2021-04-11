import Firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'


// seed the data base

// config 
const config = {
    apiKey: "AIzaSyBtY-OD5FEH-MRPTUXvTQAT0MW5NwTjnlw",
    authDomain: "netflix-project-eac2b.firebaseapp.com",
    projectId: "netflix-project-eac2b",
    storageBucket: "netflix-project-eac2b.appspot.com",
    messagingSenderId: "582123596199",
    appId: "1:582123596199:web:83c666405aed30541eae82"
}

const firebase = Firebase.initializeApp(config)



export {firebase}