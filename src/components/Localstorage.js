import { useEffect, useState } from 'react';


const useLocalStorage = (key, defaultvalue) => {
     const deserialize = JSON.parse;
    const [state, setState] = useState(() => {
        return deserialize(window.localStorage.getItem(key)) ?? defaultvalue;
    });

    useEffect(() => {
        const serialize = JSON.stringify;
        window.localStorage.setItem(key, serialize(state));
    }, [key, state])

    return [state, setState];
};



export { useLocalStorage};