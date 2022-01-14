import { db } from './firebase';
import { collection, getDocs } from 'firebase/firestore/lite';

export const fetchEvents = async (limit = 6) => {
    const dataCol = collection(db, 'events');
    const dataSnapshot = await getDocs(dataCol);
    const dataList = dataSnapshot.docs.map(doc => ({
        eventId: doc.id,
        ...doc.data()
    }));
    return dataList;
}