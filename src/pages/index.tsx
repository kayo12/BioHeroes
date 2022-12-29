import { useEffect } from "react";
import styled from "styled-components";
import Header from "../components/Header";


export default function Home() {
  const Container = styled.div`
    width: 100vw;
    height: auto;
  `;

  return (
    <Container>
      <Header />
    </Container>
  );
}
