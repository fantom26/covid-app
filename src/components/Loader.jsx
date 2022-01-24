// import cl from './Loader.module.css';
import styled, {keyframes} from "styled-components";

const heartAnimation = keyframes`
  5% {
    transform: translate(-50%, -50%) scale(1);
  }
  20% {
    transform: translate(-50%, -50%) scale(1.15);
  }
  50% {
    transform: translate(-50%, -50%) scale(1.1);
  }
  53% {
    transform: translate(-50%, -50%) scale(1.3);
  }
  100% {
    transform: translate(-50%, -50%) scale(1);
  }
`

const LoaderWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;

  /* loader */

  .loader {
    flex-basis: 100%;
    max-width: 100%;
    min-height: 300px;
    max-height: 300px;
    height: 50vh;
    position: relative;
    overflow: hidden;
    border: 2px solid #ffffff;
    z-index: 1;
  }

  .loader__container {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  .loader__ball {
    position: absolute;
  }

  .loader ::before,
  .loader ::after {
    position: absolute;
    content: "";
    box-sizing: border-box;
  }

  /* loader - heart */

  .heart .loader__container {
    width: 80px;
    height: 70px;
    animation: ${heartAnimation} 1.8s infinite ease;
  }

  .heart .loader__container::before,
  .heart .loader__container::after {
    width: 40px;
    height: 100%;
    top: 0;
    background-color: #ef1144;
    border-radius: 70px 70px 0 0;
  }

  .heart .loader__container::before {
    left: 50%;
    transform-origin: bottom left;
    transform: rotate(-45deg);
  }

  .heart .loader__container::after {
    right: 50%;
    transform-origin: bottom right;
    transform: rotate(45deg);
  }
`

const Loader = () => {
    return (
        <LoaderWrapper>
            <div className={["loader", "heart"].join(" ")}>
                <div className="loader__container">

                </div>
            </div>
        </LoaderWrapper>
    );
};

export default Loader;