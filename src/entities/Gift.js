import {
  collection,
  doc,
  getDoc,
  getDocs,
  setDoc,
  updateDoc,
} from "firebase/firestore";
import { firestore } from "../firebase";

export default class Gift {
  #table = "gifts";
  #collection = collection(firestore, this.#table);

  async all() {
    const data = await getDocs(this.#collection);
    const docsData = data.docs.map((doc) => ({ ...doc.data() }));
    return docsData;
  }

  async create(data) {
    const id = crypto.randomUUID();
    const registry = doc(this.#collection, id);
    await setDoc(registry, { id, ...data });
  }

  async get(id) {
    const registry = doc(this.#collection, id);
    const data = await getDoc(registry);
    return data.data();
  }

  async edit(id, data) {
    const registry = doc(this.#collection, id);
    await updateDoc(registry, data);
  }
}
