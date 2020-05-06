import { useState } from 'react';


const useLocalStore = (key, initialValue) => {

    const [storedValue, setStoredValue] = useState(() => {
        // Get from local storage by key
        const item = window.localStorage.getItem(key);
        //Parse and return JSON stored or, if undefined, return initialValue
        return item ? JSON.parese(item) : initialValue;
    })


    const setValue = value => {
        //Save state
        setStoredValue(value);
        //Save to local storage
        window.localStorage.setItem(key, JSON.stringify(value));
    }

    return [storedValue, setValue]
};

export default useLocalStore;



