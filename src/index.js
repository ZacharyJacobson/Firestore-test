import {initializeApp} from "firebase/app";
import {getFirestore, doc, setDoc} from "firebase/firestore";

const firebaseApp = initializeApp({
	//insert information here (do not display on github)
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