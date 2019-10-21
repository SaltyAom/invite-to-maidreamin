const firebase = require('firebase')
const firebaseConfig = {
    apiKey: "AIzaSyC6OlYOkf2GiWG_zUgNcRGZa27L_ngxmBg",
    authDomain: "invite-to-maidreamin.firebaseapp.com",
    databaseURL: "https://invite-to-maidreamin.firebaseio.com",
    projectId: "invite-to-maidreamin",
    storageBucket: "",
    messagingSenderId: "1050451333091",
    appId: "1:1050451333091:web:cd34712784c6ac94"
}

if (!firebase.apps.length) firebase.initializeApp(firebaseConfig)
export default firebase