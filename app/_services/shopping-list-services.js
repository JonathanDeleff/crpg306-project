import { db } from "../_utils/firebase";
import { collection, getDocs, addDoc, query, where } from "firebase/firestore";

export const getItems = async (userId) => {
    const items = [];

    try {
        const itemsRef = collection(db, `users/${userId}/items`);
        
        const itemsSnapshot = await getDocs(itemsRef);

        if (itemsSnapshot.empty) {
            console.log("No items in the shopping list");
            return items;
        }

        itemsSnapshot.forEach((doc) => {
            items.push({id: doc.id, ...doc.data()});
        });

        return items;
    } catch (error) {
        console.error("Error in getItems ", error);
    }
}

export const addItem = async (userId, item) => {
    try {
        const itemsRef = collection(db, "users", userId, "items");
        const docRef = await addDoc(itemsRef, item);

        return docRef.id;

    } catch (error) {
        console.error("Error in addItem ", error);
    }
}
