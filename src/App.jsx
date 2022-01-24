import './App.css';
import {useEffect, useState} from "react";
import CountriesService from "./API/CountriesService";
import Loader from "./components/Loader";
import MyModal from "./components/MyModal";
import Header from "./components/Header";
import Table from "./components/Table";
import skull from "./images/skull.svg";
import heartbeat from "./images/heartbeat.svg";
import file from "./images/file.svg";
import styled from "styled-components";

const AppWrapper = styled.div`
  overflow: hidden;
  width: 100%;
  min-width: 320px;
  min-height: 100%;
`

const App = () => {
    const [countries, setCountries] = useState([]);
    const [isCountriesLoading, setIsCountriesLoading] = useState(false);
    const [modal, setModal] = useState(false);
    const [countryInfo, setCountryInfo] = useState({
        country: '',
        totalConfirmed: '',
        totalDeaths: '',
        totalRecovered: ''
    });
    const [sort, setSort] = useState("ASC");
    const [searchTerm, setSearchTerm] = useState('');

    const sortData = (col) => {
        // ASC (по умолчанию) устанавливает порядок сортировки по возрастанию, от меньших значений к большим
        // DESC устанавливает порядок сортировки по убыванию, от больших значений к меньшим
        if (sort === "ASC") {
            let sorted = [];
            if (typeof countries[0][col] == "number") {
                /*сортировка массива по убыванию*/
                sorted = [...countries].sort((a, b) =>
                    b[col] - a[col]
                );
            } else if (typeof countries[0][col] == "string") {
                sorted = [...countries].sort((a, b) =>
                    a[col].toLowerCase() > b[col].toLowerCase() ? 1 : -1
                );
            }
            setCountries(sorted);
            setSort("DSC")
        } else if (sort === "DSC") {
            let sorted = [];
            if (typeof countries[0][col] == "number") {
                /*сортировка массива по возрастанию*/
                sorted = [...countries].sort((a, b) =>
                    a[col] - b[col]
                );
            } else if (typeof countries[0][col] == "string") {
                sorted = [...countries].sort((a, b) =>
                    a[col].toLowerCase() < b[col].toLowerCase() ? 1 : -1
                );
            }
            setCountries(sorted);
            setSort("ASC")
        }
    };

    const fetchCountriess = async () => {
        setIsCountriesLoading(true);
        const countries = await CountriesService.getAll();
        setCountries(countries);
        setIsCountriesLoading(false);
    }

    useEffect(() => {
        fetchCountriess();
    }, []);

    return (
        <AppWrapper>
            <div className="container">
                <Header setSearchTerm={setSearchTerm}/>
                {
                    (isCountriesLoading)
                        ? <Loader/>
                        : <Table searchTerm={searchTerm}
                                 countries={countries}
                                 setModal={setModal}
                                 setCountryInfo={setCountryInfo}
                                 sortData={sortData}
                        />
                }
                <MyModal visible={modal} setVisible={setModal}>
                    <h1 className="modal__title">
                        {countryInfo.country}
                    </h1>
                    <ul className="modal__list">
                        <li className="modal__item">
                            <div className="modal__item-inner">
                                <div className="modal__item-img">
                                    <img src={heartbeat} alt=""/>
                                </div>
                                <p className="modal__item-text">totalConfirmed</p>
                            </div>
                            <div className="modal__item-value">{countryInfo.totalConfirmed}</div>
                        </li>
                        <li className="modal__item">
                            <div className="modal__item-inner">
                                <div className="modal__item-img">
                                    <img src={skull} alt=""/>
                                </div>
                                <p className="modal__item-text">
                                    totalDeaths
                                </p>
                            </div>
                            <div className="modal__item-value">{countryInfo.totalDeaths}</div>
                        </li>
                        <li className="modal__item">
                            <div className="modal__item-inner">
                                <div className="modal__item-img">
                                    <img src={file} alt=""/>
                                </div>
                                <p className="modal__item-text">
                                    totalRecovered
                                </p>
                            </div>
                            <div className="modal__item-value">{countryInfo.totalRecovered}</div>
                        </li>
                    </ul>
                </MyModal>
            </div>
        </AppWrapper>
    );
}

export default App;
