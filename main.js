import { initializeApp } from "https://www.gstatic.com/firebasejs/9.4.0/firebase-app.js";
import { getFirestore, doc, collection, addDoc, setDoc } from "https://www.gstatic.com/firebasejs/9.4.0/firebase-firestore.js";


const firebaseConfig = {
	apiKey: "AIzaSyA6wIWF-0GOi9svYxJLa1uEqWnsN3taEUY",
	authDomain: "deneme-37a17.firebaseapp.com",
	databaseURL: "https://deneme-37a17-default-rtdb.firebaseio.com",
	projectId: "deneme-37a17",
	storageBucket: "deneme-37a17.appspot.com",
	messagingSenderId: "423697686410",
	appId: "1:423697686410:web:609a1015d27f4ecfc23273",
	measurementId: "G-2TDYJNS0ZT"
};

// Initia
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

const uDb = collection(db,"users");
