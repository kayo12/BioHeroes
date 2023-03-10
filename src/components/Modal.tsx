import styled from "styled-components";
import { useEffect, useState, useRef } from "react";

const ModalDiv = styled.div`
   height: 100vh;
   width: 100vw;
   display: flex;
   justify-content: center;
   align-items: center;
    position: fixed;
    background-color: rgba(0,0,0,0.7);
    color: white;
    z-index: 1;
    top: 0;
    left: 0;

    .modal-content{
        flex: 0 2 1000px;
        height: 500px;
        background-color: #f3ef83;
        opacity: 1;
    }
`;


const Modal = (props) => {

    return(
        <ModalDiv>
              <div className="modal-content">
                    <div className="modal-body">         
                    </div>
              </div>  
        </ModalDiv>
    )
}

export default Modal;