import styled from "styled-components";
import { useEffect, useState, useRef } from "react";

interface DefaultModal {
  mod?: any;
  creaters?: string;
  description?: string;
}

const Modal = (props: DefaultModal) => {
  const ModalDiv = styled.div<{ name: any }>`
    height: 100vh;
    width: 100vw;
    display: none;
    justify-content: center;
    align-items: center;
    position: fixed;
    background-color: rgba(0, 0, 0, 0.7);
    color: white;
    z-index: 1;
    top: 0;
    left: 0;

    .modal-content {
      flex: 0 2 1000px;
      height: 500px;
      background-color: #f3ef83;
      position: relative;
      -webkit-animation-name: animatetop;
      -webkit-animation-duration: 0.4s;
      animation-name: animatetop;
      animation-duration: 0.4s;
    }

    .modal-close {
      color: #000;
      font-size: 3em;
      text-align: center;
      cursor: pointer;
      position: absolute;
      right: 10px;
    }

    .modal-title {
      text-align: center;
      color: #000;
      font-size: 2rem;
    }

    .flip {
      position: relative;
      display: flex;
      width: 280px;
      min-height: 300px;
      justify-content: center;
      background-color: blueviolet;
      transition: transform 0.6s;
      transform-style: preserve-3d;
    }

    .flip-front {
      transition: transform 0.6s;
      transform-style: preserve-3d;
    }

    .flip-front,
    .flip-back {
      width: 100%;
      height: 100%;
      position: absolute;
      -webkit-backface-visibility: hidden;
      backface-visibility: hidden;
    }

    .flip-back{
      transform: rotateY(180deg);
    }
    // animação do modal

    @-webkit-keyframes animatetop {
      from {
        left: -1200px;
        opacity: 0;
      }
      to {
        left: 0;
        opacity: 1;
      }
    }

    @keyframes animatetop {
      from {
        left: -1200px;
        opacity: 0;
      }
      to {
        left: 0;
        opacity: 1;
      }
    }
  `;
  // console.log("Valor do modal: " + props.mod);
  return (
    <ModalDiv id="modal">
      <div className="modal-content">
        <span className="modal-close">&times;</span>
        <div className="modal-body">
          {props.mod != null ? (
            <>
              <span className="modal-title">{props.mod.name}</span>
              <div className="flip">
                <div className="flip-front">HISTORIAS</div>
                <div className="flip-back">
                  <p>Historia 1</p>
                  <p>Historia 2</p>
                  <p>Historia 3</p>
                  <p>{props.mod.description}</p>
                  <p>{props.mod.description}</p>
                </div>
              </div>
            </>
          ) : (
            "vazio"
          )}
        </div>
      </div>
    </ModalDiv>
  );
};

export default Modal;
