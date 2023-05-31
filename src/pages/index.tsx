import { useEffect } from "react";
import styled from "styled-components";
import Header from "../components/Header";
import Series from "../components/Series";
import Characteres from "../components/Characters";
import Modal from "../components/Modal"
import Footer from "../components/Footer";
import Main from "../components/Main";

import Comics from "../components/Comics"

export default function Home() {
  const Container = styled.div`
    width: 100vw;
    height: 100vh;
    max-width: 100%;
    scroll-behavior: smooth;
  `;

  return (
    <Container>
      <Header/>
      {/* <Modal/>  */}
      <Main/>
      <Series />
      <Comics/>
      <Characteres/>
      <Footer />
    </Container>
  );
}
