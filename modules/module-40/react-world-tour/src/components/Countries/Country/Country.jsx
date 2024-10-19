import './country.css'
const Country = ({ country }) => {
    const { name, flags } = country;
    return (
        <div className='country'>
            <p>name: {name.common}</p>
            <img src={flags.png} alt="" />

        </div>
    );
};

export default Country;