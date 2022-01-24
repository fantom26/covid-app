import TableBody from "./TableBody";
import TableHeader from "./TableHeader";
import styled from "styled-components";

const TableWrapper = styled.div`
  overflow-x: auto;
  
  table {
    width: 100%;
    border-spacing: 1px 20px;
    font-size: 24px;
    font-weight: 700;
    min-width: 600px;
  }
`

const Table = ({countries, setModal, setCountryInfo, sortData, searchTerm}) => {
    return (
        <TableWrapper>
            <table>
                <TableHeader sortData={sortData}/>
                <TableBody
                    searchTerm={searchTerm}
                    countries={countries}
                    setModal={setModal}
                    setCountryInfo={setCountryInfo}
                />
            </table>
        </TableWrapper>
    );
};

export default Table;