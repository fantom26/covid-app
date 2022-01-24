import React from 'react';
import styled from "styled-components";

const SearchWrapper = styled.div`
  position: relative;
  margin-left: 15px;

  @media (max-width: 1200px) {
    flex-grow: 1;
    flex-basis: 100%;
    margin-left: initial;
  }

  &::before {
    content: '';
    position: absolute;
    top: 50%;
    right: 20px;
    width: 30px;
    height: 30px;
    transform: translateY(-50%);
    background-image: url("../../images/search.svg");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }

  input {
    max-width: 600px;
    width: 100%;
    display: flex;
    align-items: center;
    font-size: 48px;
    min-height: 80px;
    padding-left: 30px;
    padding-right: 65px;
    line-height: 130%;
    color: var(--clr-default-900);
    border: initial;
    box-shadow: var(--clr-box-shadow);
    border-radius: 20px;

    @media (max-width: 767px) {
      min-height: 60px;
      max-width: 400px;
      font-size: 24px;
    }

    &::placeholder {
      opacity: 0.8;

      @media (max-width: 767px) {
        font-size: 24px;
      }
    }
  }
`

const Search = ({setSearchTerm}) => {
    return (
        <SearchWrapper>
            <input type="text"
                   placeholder="Search..."
                   onChange={(e) => setSearchTerm(e.target.value)}/>
        </SearchWrapper>
    );
};

export default Search;