import styled from "styled-components";
import main from "../assets/marvel_avengers.png";
import Cards from "./Cards";

import { FaChevronCircleRight, FaChevronCircleLeft } from "react-icons/fa";
import { useEffect, useState, useRef } from "react";

const PopSection = styled.section`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 6rem 0;
padding: 20px;
  .PopContainer {
    max-width: 980px;
    width: 100%;
    min-height: 550px;
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
    flex-direction: column;
  }

  .PopHeader {
    width: 100%;
    padding-left: 0.5rem;
    font-size: 2rem;
    height: 30px;
    border-left: 4px solid red;
    display: flex;
  }

  .PopCarousel {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    flex: 1;
    align-items: center;
    gap: 20px;
  }

  .PopDescription {
    width: 100%;
    height: 100%;
    display: flex;
    padding: 10px;
    align-items: center;
    flex-direction: column;
    flex: 1;
    gap: 10px;
  }

  .PopDescription h3 {
    text-align: center;
  }

  .PopBody {
    max-width: 300px;
    height: auto;
    display: flex;
    margin: 0;
    padding: 0;
    list-style-type: none;
    scroll-behavior: smooth;
    overflow-x: hidden;
    flex: 1;
  }

  li {
    width: 100%;
    height: auto;
  }

  .PopBtnRight {
    width: 30px;
    font-size: 40px;
    background: none;
    border: none;
    position: relative;
    right: 10px;
    cursor: pointer;
  }

  .PopBtnLeft {
    cursor: pointer;
    width: 30px;
    position: relative;
    left: 10px;
    font-size: 40px;
    background: none;
    border: none;
  }

  .PopControl {
    width: 100%;
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-bettwen;
    padding-right: 1.5rem;
  }

  @media only screen and  (max-width: 768px){

    .PopControl{
      justify-content: center;
      padding: 2rem 0;
    }

    .PopCarousel{
      flex-wrap: wrap;
      flex: none;
      flex-direction: column-reverse;
    }

    .PopDescription {
      flex: none;

    }

  }

`;

interface Series {
  serie?: string;
}

export default function Series(props?: Series) {
  const [series, setSeries] = useState([]);
  const Parent_Ref = useRef<HTMLUListElement>(null);
  const Child_Ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const parentRef = Parent_Ref.current;
    const childRef = Child_Ref.current;
    controlBtn(parentRef, childRef);

    fetch(
      `https://gateway.marvel.com/v1/public/series?ts=1&limit=80&apikey=${process.env.NEXT_PUBLIC_API_KEY}&hash=${process.env.NEXT_PUBLIC_API_HASH}`
    )
      .then((response) => {
        return response.json();
      })
      .then((jsonParsed) => {
        console.log(jsonParsed.data);
        setSeries(jsonParsed.data.results);
      })
      .catch((e) => {
        console.log(e);
      });
  }, [Parent_Ref, Child_Ref]);

  function controlBtn(parent: HTMLUListElement, child: HTMLDivElement) {
    console.log("entrou no if series");
    document
      .querySelector<HTMLElement>("#popBtnLeft")
      .addEventListener("click", () => {
        parent.scrollLeft += 300;
        console.log("Proximo slide");
      });
    document
      .querySelector<HTMLElement>("#popBtnRight")
      .addEventListener("click", () => {
        parent.scrollLeft -= 300;
      });
  }

  return (
    <PopSection id="series" >
      <div className="PopContainer">
        <h3 className="PopHeader">Séries em quadrinhos </h3>
        <div className="PopControl">
          <button className="PopBtnLeft" id="popBtnLeft">
            <FaChevronCircleRight />
          </button>
          <button className="PopBtnRight" id="popBtnRight">
            <FaChevronCircleLeft />
          </button>
        </div>
        <div className="PopCarousel">
          <div className="PopDescription">
            <p>
              As séries em quadrinhos da Marvel são um dos maiores tesouros da
              cultura pop. Desde a sua criação em 1939, a Marvel tem criado
              algumas das histórias mais icônicas e personagens inesquecíveis
              que o mundo dos quadrinhos já viu.
            </p>
            <p>
              Uma das séries mais populares da Marvel é &quot;Os
              Vingadores&quot;, que reúne os maiores heróis da editora em uma
              única equipe para enfrentar ameaças que nenhum deles poderia
              enfrentar sozinho. A equipe é composta por personagens como Homem
              de Ferro, Capitão América, Thor, Hulk e Viúva Negra, entre outros.
            </p>
            <p>
              Outra série icônica da Marvel é &quot;X-Men&quot;, que conta a
              história de um grupo de mutantes que lutam para proteger um mundo
              que os teme e os odeia. Os personagens mais populares dos X-Men
              incluem Wolverine, Professor Xavier, Ciclope, Tempestade e Jean
              Grey.
            </p>
            <p>
              Além dessas séries, a Marvel também tem uma série de personagens
              solo que são extremamente populares. O Homem-Aranha, por exemplo,
              é um dos personagens mais amados da editora, enquanto o Demolidor
              é conhecido por sua habilidade de lutar contra o crime mesmo sendo
              cego.
            </p>
            <p>
              A Marvel também é conhecida por seus eventos crossover épicos, que
              reúnem vários personagens e equipes em uma única história.
              Exemplos notáveis incluem &quot;Guerra Civil&quot;, que viu os
              heróis da Marvel se dividirem em dois lados em relação a um
              projeto de lei de registro de super-heróis, e &quot;Infinity
              Gauntlet&quot;, que viu o vilão Thanos reunir as seis Joias do
              Infinito para se tornar um ser onipotente.
            </p>
          
          </div>
          <ul className="PopBody" ref={Parent_Ref}>
            {series.map((current, index) => {
              return current.thumbnail.path +
                "." +
                current.thumbnail.extension !=
                "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg" ? (
                <li key={`${index}_`}>
                  <Cards
                    title={current.title}
                    width={"300px"}
                    height={"400px"}
                    image={
                      current.thumbnail.path + "." + current.thumbnail.extension
                    }
                  />
                </li>
              ) : (
                ""
              );
            })}
          </ul>
        </div>
      </div>
    </PopSection>
  );
}
