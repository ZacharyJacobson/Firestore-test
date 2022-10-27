import {initializeApp} from "firebase/app";
import {getFirestore, doc, setDoc} from "firebase/firestore";

var json = require("./login.json");

const firebaseApp = initializeApp({
	apiKey: json.apiKey,
	authDomain: json.authDomain,
	projectId: json.projectId,
	storageBucket: json.storageBucket,
	messagingSenderId: json.messagingSenderId,
	appId: json.appId,
});

console.log("Initializing Firestore");
const firestore = getFirestore();
console.log("Initialized Firestore");

const testDoc = doc(firestore, "testCollection/testDocument")

//write to the document
console.log("Writing to Firestore");
const docData = {
	testfield: "testing"
};
setDoc(testDoc, docData)
console.log("Wrote to Firestore");