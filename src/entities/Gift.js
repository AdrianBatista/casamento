import { collection, doc, getDocs, setDoc } from "firebase/firestore";
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
    const registry = doc(this.#collection, crypto.randomUUID());
    await setDoc(registry, data);
  }
}
