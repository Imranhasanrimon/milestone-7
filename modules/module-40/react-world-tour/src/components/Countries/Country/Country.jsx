import './country.css'
const Country = ({ country }) => {
    const { name, flags, population, area, cca3 } = country;
    return (
        <div className='country'>
            <p>name: {name.common}</p>
            <img src={flags.png} alt="" />
            <p>population: {population}</p>
            <p>area: {area}</p>
            <p><small>code: {cca3}</small></p>

        </div>
    );
};

export default Country;