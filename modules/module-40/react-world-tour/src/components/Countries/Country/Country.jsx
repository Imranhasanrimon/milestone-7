import { useState } from 'react';
import './country.css'
const Country = ({ country, makeList }) => {
    const { name, flags, population, area, cca3 } = country;
    const [visited, setVisited] = useState(false);
    const handleClick = () => {
        setVisited(!visited);
    }
    return (
        <div className={`country ${visited && 'visited'}`}>
            <p>name: {name.common}</p>
            <img src={flags.png} alt="" />
            <p>population: {population}</p>
            <p>area: {area}</p>
            <p><small>code: {cca3}</small></p>
            <button onClick={() => makeList(name.common)}>Mark Visited</button>
            <br />
            <button onClick={handleClick}>{visited ? 'Visited' : 'Going'}</button>
            <span>{visited ? 'I have visited this' : 'I will visit this next year'}</span>

        </div>
    );
};

export default Country;