import { useEffect, useState } from "react";
import Image from "next/image";
import styled from "styled-components";
import imageComics from "../../public/comics2.jpg";
import { HiOutlineChevronRight, HiOutlineChevronLeft } from "react-icons/hi";

const ComicsSection = styled.section`
  height: 90vh;
  max-width: 100vw;
  width: 100%;
  background-image: url(${imageComics.src});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-blend-mode: saturation;
  position: relative;
  display: flex;
  align-items: center;
  padding: 1rem 0;

  .Comics-carousel {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    overflow-x: auto;
    scroll-behavior: smooth;
  }

  .Comics-Controll {
    height: 100%;
    width: 100%;
  }

  .Comics-btnRight,
  .Comics-btnLeft {
    position: absolute;
    top: 50%;
    padding: 30px 13px;
    font-size: 2rem;;
    cursor: pointer;
    opacity: 0.7;
    color: #fff;
    background-color: #000;
    &:hover{
      opacity: 0.9;
    }
  }

  .Comics-btnRight{
    right: 0;
  }

  .Comics-Container {
    height: 80%;
    width: 370px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    transition: width 4s;
    &:hover {
      font-size: 1rem;
    }
  }

  .Comics-Front {
    display: flex;
    height: 100%;
    width: 100%;
  }

  .Comics-Body h2 {
    font-size: 0;
  }

  .Comics-Front img {
    min-width: 280px;
    width: 100%;
    max-height: 100%;
    object-fit: contain;
    cursor: pointer;
  }
`;




const Comics = (props) => {
  const [comics, setComics] = useState([]);
  useEffect(() => {
    
    fetch(
      `https://gateway.marvel.com/v1/public/comics?ts=1&limit=40&apikey=${process.env.NEXT_PUBLIC_API_KEY}&hash=${process.env.NEXT_PUBLIC_API_HASH}`
    )
      .then((response) => {
        return response.json();
      })
      .then((jsonParsed) => {
        console.log(jsonParsed.data);
        setComics(jsonParsed.data.results);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  useEffect(()=>{
    scrollMove();
  })

function scrollMove(): void{

  let xChild = document.querySelectorAll<HTMLElement>(".Comics-Container")[0]
  let xParent = document.querySelectorAll<HTMLElement>(".Comics-carousel")[0]
  document.querySelector<HTMLElement>("#btnLeft").addEventListener("click", () => {
    xParent.scrollLeft -= Number(xParent.clientWidth - xChild.clientWidth);
  })
  document.querySelector<HTMLElement>("#btnRight").addEventListener("click", () => {
    xParent.scrollLeft += Number(xParent.clientWidth - xChild.clientWidth);
  })
}

  return (
    <ComicsSection>
      <div className="Comics-carousel">
        <div className="Comics-Controll">
          <button className="Comics-btnLeft" id="btnLeft">
            <HiOutlineChevronLeft />
          </button>
          <button className="Comics-btnRight" id="btnRight">
            <HiOutlineChevronRight />
          </button>
        </div>
        {comics.map((current, index) => {
          return current.thumbnail.path + "." + current.thumbnail.extension !=
            "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg" ? (
            <div className="Comics-Container">
              <div className="Comics-Body">
                <h2> {current.title}</h2>
              </div>
              <div className="Comics-Front">
                <img
                  src={
                    current.thumbnail.path + "." + current.thumbnail.extension
                  }
                  alt="Revista em quadrinhos"
                />
              </div>
            </div>
          ) : (
            <></>
          );
        })}
      </div>
    </ComicsSection>
  );
};

export default Comics;
