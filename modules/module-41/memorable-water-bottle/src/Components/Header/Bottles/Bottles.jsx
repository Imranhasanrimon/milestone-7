import { useEffect, useState } from "react";
import Bottle from "../Bottle/Bottle";
import './Bottles.css'
import { addtoLS } from "../../../utilities/localStorage";

const Bottles = () => {
    const [bottles, setBottles] = useState([]);
    useEffect(() => {
        fetch('bottle.json')
            .then(res => res.json())
            .then(data => setBottles(data))
    }, []);

    const [cart, setCart] = useState([]);
    const handleAddToCart = bottle => {
        const newCart = [...cart, bottle];
        setCart(newCart);
        addtoLS(bottle.id)
    }


    return (
        <div>
            <h3>bottles availble: {bottles.length}</h3>
            <h4>cart: {cart.length}</h4>
            <div className="bottles-container">
                {
                    bottles.map((bottle) => <Bottle handleAddToCart={handleAddToCart} key={bottle.id} bottle={bottle}></Bottle>)
                }
            </div>

        </div>
    );
};

export default Bottles;