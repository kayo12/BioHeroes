import { useEffect } from "react";
import styled from "styled-components";
import Header from "../components/Header";
import Series from '../components/Series'


export default function Home() {


  const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: #F0E68C;
    display: flex;
    flex-direction: column;
  `;

  return (
    <Container>
      <Header />
      <Series/>
    </Container>
  );
}
