import { useEffect, useState } from "react";
import styled from "styled-components";
import Header from "../components/Header";
import Series from "../components/Series";
import Characteres from "../components/Characters";
import Footer from "../components/Footer";
import Main from "../components/Main";

import Comics from "../components/Comics"

export default function Home() {

  const Container = styled.div`
    width: 100vw;
    height: 100vh;
    max-width: 100%;
    scroll-behavior: smooth;

    section {
      opacity: 0.0;
      transition: opacity 2s;
    }

    .ShowDiv{
      opacity: 1.0;
    }

  `;

  const CheckElements = (section) => {
    var sec = section.getBoundingClientRect();
   

    return (
      sec.top <= 0 &&
      sec.left >= 0 &&
      sec.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      sec.right <= (window.innerWidth || document.documentElement.clientWidth)
    )
  }

  function ShowSection() {
    console.log("ShowSection chamado");

    let section = document.querySelectorAll('section');
    section.forEach((current, index) => {
      if (CheckElements(current)) {
        current.classList.add("ShowDiv");
        console.log("Entrou no SHOWSECTION")
      }
    })
  }

  useEffect(() => {
    window.addEventListener('scroll', ShowSection);
    return () => {
      window.removeEventListener('scroll', ShowSection)
    }
  }, [])

  return (
    <Container>
      <Header />
      <Main />
      <Series />
      <Comics />
      <Characteres />
      <Footer />
    </Container>
  );
}
