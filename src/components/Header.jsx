import logo from "../images/logo.jpg";
import Search from "./Search";
import styled from "styled-components";

const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  
  @media (max-width: 1200px) {
    flex-wrap: wrap;
  }

  .header__logo {
    max-width: 200px;

    @media (max-width: 767px) {
      max-width: 100px;
    }

    img {
      width: 100%;
      height: auto;
      object-fit: cover;
    }
  }

  .header__title {
    margin-right: auto;
    font-weight: bold;
    font-size: 72px;
    line-height: 120%;
    color: var(--clr-default-900);
    
    @media (max-width: 767px) {
      font-size: 50px;
    }
    @media (max-width: 460px) {
      font-size: 22px;
    }
  }

`

const Header = ({setSearchTerm}) => {
    return (
        <header>
            <HeaderWrapper>
                <div className="header__logo">
                    <img src={logo} height="200" width="200" alt="Logo"/>
                </div>
                <h1 className="header__title">STATISTIC</h1>
                <Search setSearchTerm={setSearchTerm}/>
            </HeaderWrapper>
        </header>
    );
};

export default Header;