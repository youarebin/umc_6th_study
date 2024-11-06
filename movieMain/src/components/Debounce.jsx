import { useEffect, useState } from "react";
import React from "react";

const Debounce = (value, delay = 200) =>{
    const [debounceValue, setDebounceValue] = useState(value);

    useEffect(()=>{
        const timer = setTimeout(()=>{
            setDebounceValue(value);
        }, delay);

        return () =>{
            clearTimeout(timer);
        };
    }, [value, delay]);

    return debounceValue;
};

export default Debounce;