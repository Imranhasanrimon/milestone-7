import { useState } from "react"

export default function Counter() {
    const [count, setCount] = useState(0);
    const handleCount = () => {
        const newCount = count + 1;
        setCount(newCount);
    }
    const hadleReduce = () => {
        setCount(count - 1)
    }

    return (
        <div>
            <h3>Counter: {count}</h3>
            <button onClick={handleCount}>Add</button>
            <button onClick={hadleReduce}>Reduce</button>
        </div>
    )
}