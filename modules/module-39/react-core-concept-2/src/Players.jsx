import { useState } from "react"

export default function Players() {
    const [player, setPlayer] = useState(11);
    const handleHire = () => {
        const newPlayer = player + 1;
        setPlayer(newPlayer)
    }
    const handleCut = () => {
        setPlayer(player - 1)
    }

    return (
        <div className="box">
            <h3>Players: {player}</h3>
            <button onClick={handleHire}>Hire</button>
            <button onClick={handleCut}>Cut</button>
        </div>
    )
}