import React from "react";
import styled from "styled-components";
import imageEvent from "../../public/guerra_civil.jpg";
import imageEvent2 from "../../public/hq_comics.jpg";
import imageEvent3 from "../../public/marvel-studios.jpg";

interface DefaultModal {
  img?: string;
  mod?: any;
  creaters?: string;
  description?: string;
}

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
    height: 600px;
    position: relative;
    -webkit-animation-name: animatetop;
    -webkit-animation-duration: 0.4s;
    animation-name: animatetop;
    animation-duration: 0.4s;
    padding-top: 1rem;
    background: #F7971E;  /* fallback for old browsers */
    background: -webkit-linear-gradient(to right, #FFD200, #F7971E);  /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to right, #FFD200, #F7971E); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

  }

  .modal-content::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    
    z-index: -1;
  }

  .modal-body {
    position: relative;
    width: 100%;
    height: calc(100% - 34px);
    display: flex;
    justify-content: flex-start;
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
    color: #ffffff;
    font-size: 3em;
    font-weight: bolder;
  }

  .flip {
    position: relative;
    display: flex;
    width: 280px;
    max-height: 400px;
    justify-content: center;
    transition: transform 0.8s;
    transform-style: preserve-3d;
    cursor: pointer;
    background-color: #ffff;
  }

  .flip:hover {
    transform: rotateY(180deg);
  }

  .flip-front {
    transition: transform 0.6s;
    transform-style: preserve-3d;
    display: flex;
    align-items: flex-end;
    justify-content: center;
    z-index: 9999;
  }

  #event {
    background: url("${(props) =>
    props.mod ? props.mod.thumbnail.path + "." + props.mod.thumbnail.extension : ""}") no-repeat;
    background-size: cover;
  }

  #event:hover
 

  .flip-front::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 50%;
    background: linear-gradient(to top, rgba(0, 0, 0, 50) 0%, rgba(0, 0, 0, 0) 100%);
  }

  .flip-front > span,
  .flip-back > p {
    color: #ffffff;
    font-weight: 900;
    font-size: 50px;
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
    padding: 15px;
  }

  .flip-back::-webkit-scrollbar {
    width: 12px;
  }
  .flip-back::-webkit-scrollbar-thumb {
    background-image: linear-gradient(to bottom right, #0c0c0c, #000000);
    border-radius: 3px;
  }

  .flip-back {
    overflow-y: auto;
    transform: rotateY(180deg);
    z-index: 9999;
  }

  .modal-description_list{
    padding:  0 20px;
    flex: 0 1 400px;
  }
  .description-list_body{
   
  }
  .description-list_body  li {
    list-style-type: none
  }

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

const Modal = (props: DefaultModal) => {
  console.log("Valor do modal props: " + props.mod);
  return (
    <ModalDiv id="modal" mod={props.mod}>
      <div className="modal-content">
        <span className="modal-close">&times;</span>
        {props.mod != null ? (
          <>
            <span className="modal-title">{props.mod.name}</span>
            <div className="modal-body">
              <div className="flip">
                <div className="flip-front" id="event">
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
              <div className="modal-description_list">
                <ul className="description-list_body">
                  <li>ULTIMA EDIÇÃO: {props.mod.modified}</li>
                  <li>SOBRE O PERSONAGEM: {props.mod.description}</li>
                </ul>
                <div className="description-dropdown">
                  <div>
                    
                  </div>
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
