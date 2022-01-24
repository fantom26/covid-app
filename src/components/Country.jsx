const Country = ({number, country, setModal, setCountryInfo}) => {
    return (
        <tr>
            <td>{number}</td>
            <td onClick={() => {
                setModal(true);
                setCountryInfo({
                    country: country.Country,
                    totalConfirmed: country.TotalConfirmed,
                    totalDeaths: country.TotalDeaths,
                    totalRecovered: country.TotalRecovered
                })
            }}>{country.Country}</td>
            <td>{country.TotalConfirmed}</td>
        </tr>
    );
};

export default Country;