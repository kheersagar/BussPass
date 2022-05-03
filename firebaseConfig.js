import { initializeApp } from "firebase/app";
import firebaseKey from "./firebase";
import {getStorage} from "firebase/storage"

const app = initializeApp(firebaseKey);
export const storage = getStorage(app);