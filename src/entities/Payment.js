import { collection, doc, getDoc, getDocs, setDoc } from "firebase/firestore";
import { firestore } from "../firebase";

export default class Payment {
  #table = "payments";
  #collection = collection(firestore, this.#table);

  async all() {
    const data = await getDocs(this.#collection);
    const docsData = data.docs.map((doc) => ({ ...doc.data() }));
    return docsData;
  }

  async create(data) {
    const id = crypto.randomUUID();
    const registry = doc(this.#collection, id);
    await setDoc(registry, { id: id, ...data });
  }

  async get(id) {
    const registry = doc(this.#collection, id);
    const data = await getDoc(registry);
    return data.data();
  }
}
