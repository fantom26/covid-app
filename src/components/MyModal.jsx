import React from 'react';
import styled from "styled-components";

const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  display: none;
  background-color: rgba(0, 0, 0, 0.5);

  &.active {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .modal__content {
    padding: 25px;
    background-color: var(--clr-default-100);
    border-radius: 20px;
    max-width: 600px;
    width: 100%;
    min-height: 400px;
  }

  .modal__btn {
    margin-top: 35px;
    display: flex;
    justify-content: center;
    
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
`

const MyModal = ({children, visible, setVisible}) => {

    const rootClasses = [];

    if (visible) {
        rootClasses.push("active");
    }

    return (
        <ModalWrapper className={rootClasses.join(' ')} onClick={() => setVisible(false)}>
            <div className="modal__content" onClick={(e) => e.stopPropagation()}>
                {children}
                <div className="modal__btn">
                    <button onClick={() => setVisible(false)}>OK</button>
                </div>
            </div>
        </ModalWrapper>
    );
};

export default MyModal;