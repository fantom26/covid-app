import React from 'react';
import styled from "styled-components";

const ModalWrapper = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  z-index: 20;
  overflow-x: hidden;
  overflow-y: auto;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.3s, visibility 0.3s;

  &.active {
    opacity: 1;
    visibility: visible;
    transition: opacity 0.3s, visibility 0.3s;

    .modal__content {
      opacity: 1;
      transform: translateY(0);
      transition: transform 0.3s, opacity 0.3s;
    }
  }

  .modal__inner {
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 100%;
    padding: 100px 15px 50px;
  }

  .modal__content {
    padding: 25px;
    border-radius: 20px;
    max-width: 600px;
    width: 100%;
    min-height: 250px;
    background-color: var(--clr-default-100);
    position: relative;
    opacity: 0;
    transform: translateY(-100%);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    backdrop-filter: blur(10px);
    transition: transform .3s, opacity .3s;

    @media (max-width: 576px) {
      padding: 20px 15px;
    }
  }

  .modal__btn {
    margin-top: 35px;
    display: flex;
    justify-content: center;

    @media (max-width: 767px) {
      margin-top: 20px;
    }

    button {
      border-radius: 20px;
      padding: 15px;
      font-size: 24px;
      line-height: 95%;
      min-height: 50px;
      color: var(--clr-default-100);
      background-color: var(--clr-primary-400);
      cursor: pointer;
      border: initial;
      min-width: 170px;
      transition: background-color .3s;

      @media (hover) {
        &:hover {
          background-color: #074479;
          transition: background-color .3s;
        }
      }
    }
  }

  .modal__title {
    text-align: center;
    font-weight: bold;
    font-size: 48px;
    line-height: 120%;
    color: var(--clr-default-900);
    margin-bottom: 35px;

    @media (max-width: 767px) {
      font-size: 30px;
      margin-bottom: 20px;
    }
  }

  .modal__item {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .modal__item + .modal__item {
    margin-top: 45px;

    @media (max-width: 767px) {
      margin-top: 20px;
    }
  }

  .modal__item-inner {
    display: flex;
    align-items: center;
  }

  .modal__item-img {
    max-width: 30px;
    margin-right: 30px;

    @media (max-width: 767px) {
      max-width: 20px;
      margin-right: 15px;
    }
  }

  .modal__item-img img {
    width: 100%;
    height: auto;
    object-fit: cover;
  }

  .modal__item-text {
    font-size: 24px;
    line-height: 110%;
    color: var(--clr-default-800);

    @media (max-width: 767px) {
      font-size: 16px;
    }
  }

  .modal__item-value {
    font-size: 24px;
    margin-left: 15px;
    color: var(--clr-default-800);

    @media (max-width: 767px) {
      font-size: 16px;
    }
  }
`

const MyModal = ({children, visible, setVisible}) => {

    const rootClasses = [];

    if (visible) {
        rootClasses.push("active");
    }

    return (
        <ModalWrapper className={rootClasses.join(' ')} onClick={() => setVisible(false)}>
            <div className="modal__inner">
                <div className="modal__content" onClick={(e) => e.stopPropagation()}>
                    {children}
                    <div className="modal__btn">
                        <button onClick={() => setVisible(false)}>OK</button>
                    </div>
                </div>
            </div>
        </ModalWrapper>
    );
};

export default MyModal;