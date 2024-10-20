import { useEffect } from "react";
import { useState } from "react";
import Country from "./Country/Country";
import './countries.css'

const Countries = () => {
    const [countries, setCountries] = useState([]);
    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then(res => res.json())
            .then(data => setCountries(data))
    }, []);

    const [mVisited, setMVisited] = useState([]);
    const makeList = (countryName) => {
        const newMVisited = [...mVisited, countryName];
        setMVisited(newMVisited);
    }
    return (
        <div>
            <h3>Countries: {countries.length}</h3>
            <div>
                <h4>visited Countries:</h4>
                <ul>
                    {
                        mVisited.map((name, i) => <li key={i}>{name}</li>)
                    }
                </ul>
            </div>
            <div className="country-container">
                {
                    countries.map(country => <Country makeList={makeList} key={country.cca3} country={country}></Country>)
                }
            </div>
        </div>
    );
};

export default Countries;