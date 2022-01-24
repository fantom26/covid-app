import Country from "./Country";
import styled from "styled-components";

const TBodyWrapper = styled.tbody`
  & > tr {
    box-shadow: var(--clr-box-shadow);
    border-radius: 20px;
  }

  tr > td:first-child {
    max-width: 80px;
    text-align: center;
    border-right: 1px solid #B2B2B2;
  }

  tr > td:nth-child(2) {
    max-width: 1160px;
    min-width: 300px;
    width: 100%;
    cursor: pointer;
  }

  tr > td:nth-child(3) {
    min-width: 560px;
    border-left: 1px solid #B2B2B2;

    @media (max-width: 1200px) {
      min-width: 300px;
    }
  }

  td {
    padding: 25px;

    @media ( max-width: 767px) {
      padding: 10px;
    }
  }
`

const TableBody = ({countries, setModal, setCountryInfo, searchTerm}) => {

    return (
        <TBodyWrapper>
            {countries
                .filter(val => {
                    if (searchTerm === '') {
                        return val;
                    } else if (
                        val.Country.toLowerCase().includes(searchTerm.toLowerCase())) {
                        return val;
                    }
                })
                .map((country, i) => (
                    <Country
                        country={country}
                        key={i}
                        number={i + 1}
                        setModal={setModal}
                        setCountryInfo={setCountryInfo}
                    />
                ))
            }
        </TBodyWrapper>
    );
};

export default TableBody;