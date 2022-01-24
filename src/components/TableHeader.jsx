import styled from "styled-components";

const THeadWrapper = styled.thead`
  background-color: var(--clr-primary-400);
  box-shadow: var(--clr-box-shadow);
  border-radius: 20px;

  th {
    text-align: left;
    padding: 25px;
    color: var(--clr-default-100);
    
    @media( max-width: 767px) {
      padding: 10px;
    }
  }
  
  th:not(:first-child) {
    cursor: pointer;
  }

  th:first-child {
    border-top-left-radius: 20px;
    border-bottom-left-radius: 20px;
  }

  th:last-child {
    border-top-right-radius: 20px;
    border-bottom-right-radius: 20px;
  }

  tr > th:first-child{
    max-width: 80px;
    text-align: center;
  }

  tr > th:nth-child(2) {
    max-width: 1160px;
    min-width: 300px;
    width: 100%;
  }

  tr > th:nth-child(3) {
    max-width: 560px;
    width: 100%;
    min-width: 250px;
  }
`

const TableHeader = ({sortData}) => {
    return (
        <THeadWrapper>
            <tr>
                <th>№</th>
                <th onClick={() => sortData("Country")}>Country</th>
                <th onClick={() => sortData("TotalConfirmed")}>Total Confirmed</th>
            </tr>
        </THeadWrapper>
    );
};

export default TableHeader;