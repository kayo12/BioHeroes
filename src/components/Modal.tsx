import React, { useState, useRef } from "react";
import styled from "styled-components";
import imageEvent3 from "../../public/marvel-studios.jpg";
import { BiChevronUp, BiChevronDown } from "react-icons/bi";


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
    text-shadow: 1px 1px 2px #000, 2px 2px 4px #000, 3px 3px 6px #000;

  }

  .flip {
    position: relative;
    display: flex;
    min-width: 300px;
    max-height: 400px;
    justify-content: center;
    transition: transform 0.8s;
    transform-style: preserve-3d;
    perspective: 100px;
    cursor: pointer;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    border-radius: 20px;
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
    border-radius: 20px;
  }

  #imgFront {
    background: url("${(props) =>
    props.mod ? props.mod.thumbnail.path + "." + props.mod.thumbnail.extension : ""}") no-repeat;
    background-size: cover;
  }

  #imgBack {
   
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
    flex: auto;
    display: flex;
    flex-flow: column nowrap;
    justify-content: space-evenly;
    align-items: ;
    
  }

  .description-list_body{
    text-shadow: 1px 1px 2px #000, 2px 2px 4px #000, 3px 3px 6px #000;

   display: flex;
   height: auto;
   flex: auto;
   justify-content: flex-start;
   align-items: flex-start;
   flex-direction: column;
  }

  .description-list_body  > li , .description-dropdown ul li{
    list-style-type: none;
  }


  .description-dropdown ul li{
    line-height: 1rem;
  }

  .description-dropdown{
    list-style-type: none
    width: 100%;
    height: 90%;
    display: flex;
    justify-content: flex-start;
    flex-flow: column nowrap;
  }

  .head-dropdown{
    display: flex;
    justify-content: space-between;
    padding: 0.3rem 0.2rem;
    width: 100%;
    background-image: linear-gradient(to bottom right,#f84b4b,#f82525);
    cursor: pointer;
    margin: 2px 0;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19); 
  }

  .list-dropdown{
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    
  }

  .list-dropdown li{
    background: #fff;
    color: #000;
    font-weight: bolder;
    padding: 0.2rem;
    border-radius: 5px;
    margin: 1px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19); 

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

  const eventRef = useRef(null);
  const hqRef = useRef(null);
  const seriesRef = useRef(null);
  
  const handlerClick = (element) =>{
    console.log(element.target.id);

    if(element.target && element.target.id == "myEvents"){
        console.log("Entrou no myEvents");

        eventRef.current.style.display = handlerCheck(eventRef.current.style.display)
    }

    if(element.target && element.target.id == "myHqs"){
      console.log("Entrou no myHQs");
      hqRef.current.style.display = handlerCheck(hqRef.current.style.display)
    }

    if(element.target && element.target.id == "mySeries"){
      console.log("Entrou no mySeries");
      seriesRef.current.style.display =  handlerCheck(seriesRef.current.style.display)
    }

  } 

  const handlerCheck = (current) => {
      if(current === "none"){
        return "flex"
      }
    return "none"  
  }

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
                <div className="flip-front" id="imgFront">
                </div>
                <div className="flip-back" id="imgBack">
                  {/* Inserir alguma coisa aqui */}
                </div>
              </div>
              <div className="modal-description_list">
                <ul className="description-list_body">
                  <li>ULTIMA EDIÇÃO: {props.mod.modified}</li>
                  <li>SOBRE O PERSONAGEM: {props.mod.description}</li>
                </ul>
                <div className="description-dropdown">
                  <div className="head-dropdown" id="myEvents" onClick={(event) => handlerClick(event)}>
                    <span className="title-dropdown" >
                      Eventos
                    </span>
                    <BiChevronUp />
                  </div>
                  <ul className="list-dropdown"  ref={eventRef}>
                    {props.mod.events && props.mod.events.items ? (
                      props.mod.events.items.map((current, i) => {
                        return <li key={i}> {current.name}</li>;
                      })
                    ) : (
                      <p>SEM REGISTROS</p>
                    )}
                  </ul>
                  <div className="head-dropdown" id="myHqs" onClick={(event) => handlerClick(event)}>
                    <span className="title-dropdown">
                      HQs
                    </span>
                    <BiChevronUp />
                  </div>
                  <ul className="list-dropdown" ref={hqRef}>
                    {props.mod.events && props.mod.events.items ? (
                      props.mod.stories.items.map((current, i) => {
                        return <li key={i}> {current.name}</li>;
                      })
                    ) : (
                      <p>SEM REGISTROS</p>
                    )}
                  </ul>
                  <div className="head-dropdown" id="mySeries" onClick={(event) => handlerClick(event)}>
                    <span className="title-dropdown">
                      Series
                    </span>
                    <BiChevronUp />
                  </div>
                  <ul className="list-dropdown" ref={seriesRef}>
                    {props.mod.events && props.mod.events.items ? (
                      props.mod.series.items.map((current, i) => {
                        return <li key={i}> {current.name}</li>;
                      })
                    ) : (
                      <p>SEM REGISTROS</p>
                    )}
                  </ul>
                  <hr />
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
