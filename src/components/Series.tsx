import styled from "styled-components";
import main from "../assets/marvel_avengers.png";
import Cards from "./Cards";
import { FaChevronCircleRight, FaChevronCircleLeft } from "react-icons/fa";
import { useEffect, useState, useRef } from "react";

const PopSection = styled.section`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  .PopContainer {
    max-width: 980px;
    width: 100%;
    height: auto;
    justify-content: flex-end;
    display: flex;
    align-items: flex-end;
    flex-direction: column;
  }

  .PopHeader {
    width: 100%;
    padding-left: 0.5rem;
    height: 20px;
    border-left: 4px solid red;
    display: flex;
  }

  .PopCarousel {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    padding: 0.8rem;
    flex: 1;
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


    if (!parentRef || childRef) {
      console.log("Entrou no useEffect")
      controlBtn(parentRef, childRef);
    }

    fetch(
      `https://gateway.marvel.com/v1/public/series?ts=1&limit=60&apikey=${process.env.NEXT_PUBLIC_API_KEY}&hash=${process.env.NEXT_PUBLIC_API_HASH}`
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
  }, [Parent_Ref.current, Child_Ref.current]);


  function controlBtn(parent: HTMLUListElement, child: HTMLDivElement) {


      console.log("entrou no if series");
      document
        .querySelector<HTMLElement>("#popBtnLeft")
        .addEventListener("click", () => {
          parent.scrollLeft += 300
          console.log("Proximo slide")
        });
      document
        .querySelector<HTMLElement>("#popBtnRight")
        .addEventListener("click", () => {
          
          parent.scrollLeft -= 300
        });
    
  }

  return (
    <PopSection>
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
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
              sit amet ipsum risus. Fusce et commodo quam. Vestibulum ante ipsum
              primis in faucibus orci luctus et ultrices posuere cubilia curae;
              Ut rutrum tortor nec consequat dignissim. Vestibulum tincidunt
              turpis et nibh convallis, sed convallis justo auctor. Praesent eu
              posuere orci, nec tempor urna. Donec sollicitudin efficitur metus,
              vel lobortis augue tempor non. Morbi placerat ac neque et
              bibendum. Fusce condimentum sem quis eros ultrices, eget egestas
              mauris condimentum.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
              sit amet ipsum risus. Fusce et commodo quam. Vestibulum ante ipsum
              primis in faucibus orci luctus et ultrices posuere cubilia curae;
              Ut rutrum tortor nec consequat dignissim. Vestibulum tincidunt
              turpis et nibh convallis, sed convallis justo auctor. Praesent eu
              posuere orci, nec tempor urna. Donec sollicitudin efficitur metus,
              vel lobortis augue tempor non. Morbi placerat ac neque et
              bibendum. Fusce condimentum sem quis eros ultrices, eget egestas
              mauris condimentum.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
              sit amet ipsum risus. Fusce et commodo quam. Vestibulum ante ipsum
              primis in faucibus orci luctus et ultrices posuere cubilia curae;
              Ut rutrum tortor nec consequat dignissim. Vestibulum tincidunt
              turpis et nibh convallis, sed convallis justo auctor. Praesent eu
              posuere orci, nec tempor urna. Donec sollicitudin efficitur metus,
              vel lobortis augue tempor non. Morbi placerat ac neque et
              bibendum. Fusce condimentum sem quis eros ultrices, eget egestas
              mauris condimentum.
            </p>
          </div>
          <ul className="PopBody" ref={Parent_Ref}>
            {series.map((current, index) => {
              return current.thumbnail.path +
                "." +
                current.thumbnail.extension !=
                "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg" ? (
                <li key={`${index}_`} >
                  <Cards
                    Child_Ref={Child_Ref}
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
