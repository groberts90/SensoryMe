import { useState, useEffect } from 'react';
import { storage } from '../storage';

export default function useLocalStorage<T>(key: string, initial: T) {
    // hook is instantiated
    
    // every time state changes, store the value in localstorage
    const [value, setValue] = useState<T>(() => {
        return storage.get<T>(key) ?? initial;
    });

    useEffect(() => {
        storage.set(key, value);
    }, [key, value]);


    return [value, setValue] as const;
}