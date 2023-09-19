import firebase from "firebase/compat/app";
import "firebase/compat/auth";

// const firebaseConfig = {
//   apiKey: "AIzaSyCi0WI1DWunTEUXvEwftIOXIqKibekFLrw",
//   authDomain: "yt-clone-project-1.firebaseapp.com",
//   projectId: "yt-clone-project-1",
//   storageBucket: "yt-clone-project-1.appspot.com",
//   messagingSenderId: "740600529566",
//   appId: "1:740600529566:web:952f7589d2965ff520718f",
// };
const firebaseConfig = {
  apiKey: "AIzaSyA8OtTZdmz-dQsZNCs4nCfNYJJicSBfdCU",
  authDomain: "yt-clone-project-2.firebaseapp.com",
  projectId: "yt-clone-project-2",
  storageBucket: "yt-clone-project-2.appspot.com",
  messagingSenderId: "354828610068",
  appId: "1:354828610068:web:9c9c088eb4a72fb8391501",
};

firebase.initializeApp(firebaseConfig);
// eslint-disable-next-line react-refresh/only-export-components
export default firebase.auth();
