import { useEffect } from "react";
import styled from "styled-components";
import Header from "../components/Header";
import Series from '../components/Series'
import Characteres from '../components/Characters'
import Footer from '../components/Footer'


export default function Home() {


  const Container = styled.div`
  width: 100vw;
  height: 100vh;
  max-width:100%;
    background-color: #F0E68C;
  `;

  return (
    <Container>
      <Header />
      <Series />
      <Characteres/>
      <Footer/>
    </Container>
  );
}
