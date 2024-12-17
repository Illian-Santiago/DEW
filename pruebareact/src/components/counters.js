import { useState } from 'react';

export default function Counters() {
    const [count, setCount] = useState(0);

    function handleClick() {
        setCount(count + 1);
    }

    return (
        <button onClick={handleClick}>
            Hiciste un click {count} veces.
        </button>
    );
}