import { useState } from 'react';

export default function Counter({ style }) {

    const [count, setCount] = useState(0);
    const handleCount = () => {
        const newCount = count + 1;
        setCount(newCount);
    }
    const handleReduce = () => {
        const newCount = count - 1;
        setCount(newCount)
    }
    return (
        <div style={style}>
            <h3>Counter: {count}</h3>
            <button onClick={handleCount}>Add</button>
            <button onClick={handleReduce}>Reduce</button>
        </div>
    )
}