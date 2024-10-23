import { useEffect, useState } from "react";
import Bottle from "../Bottle/Bottle";
import './Bottles.css'
import { addtoLS, getStoredCart } from "../../../utilities/localStorage";

const Bottles = () => {
    const [bottles, setBottles] = useState([]);
    useEffect(() => {
        fetch('bottle.json')
            .then(res => res.json())
            .then(data => setBottles(data))
    }, []);

    useEffect(() => {
        console.log('bottle loaded', bottles.length);
        if (bottles.length > 0) {
            const storedCart = getStoredCart();
            console.log(storedCart);
        }
    }, [bottles])

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
// revising this module again