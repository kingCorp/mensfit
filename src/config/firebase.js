import * as firebase from 'firebase';
// Initialize Firebase
export const config = {
    apiKey: "AIzaSyCPwVBoaohj3GlYWR2hfrx045D4qw9Ti2E",
    authDomain: "menfit-429ad.firebaseapp.com",
    databaseURL: "https://menfit-429ad.firebaseio.com",
    projectId: "menfit-429ad",
    storageBucket: "menfit-429ad.appspot.com",
    messagingSenderId: "608836768253"
};
const firebaseService = firebase.initializeApp(config);
export default firebaseService;