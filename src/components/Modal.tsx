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
      display: flex;
      flex-direction: column;
      flex: 0 2 1000px;
      height: 500px;
      background-color: #f3ef83;
      position: relative;
      -webkit-animation-name: animatetop;
      -webkit-animation-duration: 0.4s;
      animation-name: animatetop;
      animation-duration: 0.4s;
      padding-top: 1rem;
    }

    .modal-body {
      width: 100%;
      height: calc(100% - 34px);
      display: flex;
      justify-content: space-around;
      padding: 2rem;
    }

    .modal-close {
      color: #000;
      font-size: 3em;
      text-align: center;
      cursor: pointer;
      position: absolute;
      right: 10px;
      top: -10px;
    }

    .modal-title {
      text-align: center;
      color: #000;
      font-size: 3rem;
      font-weight: bolder;
    }

    .flip {
      position: relative;
      display: flex;
      width: 280px;
      max-height: 300px;
      justify-content: center;
      background-color: #f9c017;
      transition: transform 0.8s;
      transform-style: preserve-3d;
      cursor: pointer;
    }

    .flip:hover {
      transform: rotateY(180deg);
    }

    .flip-front {
      transition: transform 0.6s;
      transform-style: preserve-3d;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .flip-front > span,
    .flip-back > p {
      color: #000;
      font-weight: bolder;
    }

    .flip-front > span {
      font-size: 1.7rem;
    }

    .flip-back > span {
      
    background-image: linear-gradient(to bottom right, #f84b4b, #f82525);
    border-radius: 4px;
    text-align: center;
    display: flex;
    flex-direction: column;
    padding: 3px;
    margin: 5px;
    border: none; /* Remover borda do botão */
    box-shadow: 0px 3px 0px #000000; /* Sombra do botão */
    }

    .flip-front,
    .flip-back {
      width: 100%;
      height: 100%;
      position: absolute;
      -webkit-backface-visibility: hidden;
      backface-visibility: hidden;
    }

    .flip-back::-webkit-scrollbar{
      width: 12px;
    }
    .flip-back::-webkit-scrollbar-thumb{
      background-image: linear-gradient(to bottom right, #0c0c0c, #000000);
      border-radius: 3px;
    }

    .flip-back {
      overflow-y: auto;
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
  console.log("Valor do modal: " + props.mod);
  return (
    <ModalDiv id="modal">
      <div className="modal-content">
        <span className="modal-close">&times;</span>

        {props.mod != null ? (
          <>
            <span className="modal-title">{props.mod.name}</span>
            <p>{props.mod.description}</p>
            <div className="modal-body">
              <div className="flip">
                <div className="flip-front">
                  <span>EVENTOS</span>
                </div>
                <div className="flip-back">
                  {props.mod.events && props.mod.events.items ? (
                    props.mod.events.items.map((current, i) => {
                      return <span key={i}> {current.name}</span>;
                    })
                  ) : (
                    <p>SEM REGISTROS</p>
                  )}
                
                </div>
              </div>
              <div className="flip">
                <div className="flip-front">
                  <span>HISTORIAS</span>
                </div>
                <div className="flip-back">
                  {props.mod.stories && props.mod.stories.items ? (
                    props.mod.stories.items.map((current, i) => {
                      return <span key={i}> {current.name}</span>;
                    })
                  ) : (
                    <p>SEM REGISTROS</p>
                  )}
                 
                </div>
              </div>
              <div className="flip">
                <div className="flip-front">
                  <span>SERIES</span>
                </div>
                <div className="flip-back">
                  {props.mod.series && props.mod.series.items ? (
                    props.mod.series.items.map((current, i) => {
                      return <span key={i}> {current.name}</span>;
                    })
                  ) : (
                    <p>SEM REGISTROS</p>
                  )}
                 
                </div>
              </div>
            </div>
          </>
        ) : (
          "vazio"
        )}
      </div>
    </ModalDiv>
  );
};

export default Modal;
