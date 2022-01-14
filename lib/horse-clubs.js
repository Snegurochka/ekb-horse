//import horseClubs from '../../data/horse-clubs.json';
import { db } from './firebase';
import { collection, getDocs } from 'firebase/firestore/lite';

export const fetchHorseClubs = async (limit = 6) => {
    const citiesCol = collection(db, 'clubs');
    const citySnapshot = await getDocs(citiesCol);
    const cityList = citySnapshot.docs.map(doc => doc.data());
    return cityList;
}