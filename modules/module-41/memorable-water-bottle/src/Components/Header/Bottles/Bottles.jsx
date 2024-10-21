import { useEffect, useState } from "react";
import Bottle from "../Bottle/Bottle";
import './Bottles.css'

const Bottles = () => {
    const [bottles, setBottles] = useState([]);
    useEffect(() => {
        fetch('bottle.json')
            .then(res => res.json())
            .then(data => setBottles(data))
    }, [])
    return (
        <div>
            <h3>bottles here</h3>
            <div className="bottles-container">
                {
                    bottles.map((bottle) => <Bottle key={bottle.id} bottle={bottle}></Bottle>)
                }
            </div>

        </div>
    );
};

export default Bottles;