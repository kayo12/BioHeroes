import { useEffect, useState, useRef } from "react";
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

  .Comics-carousel {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    overflow-x: hidden;
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
    font-size: 2rem;
    cursor: pointer;
    opacity: 0.7;
    color: #fff;
    z-index: 2;
    background-color: #000;
    &:hover {
      opacity: 0.9;
    }
  }

  .Comics-btnRight {
    right: 0;
  }

  .Comics-Container {
    height: 80%;
    width: 470px;
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
    justify-content: center;
    flex-direction: column;
    height: 100%;
    width: 100%;
    padding: 0 5px;
    position: relative;
    z-index: 1;
  }

  .Comics-Front img {
    min-width: 340px;
    width: 100%;
    max-height: 100%;
    object-fit: cover;
    object-position: center; /* Centraliza a imagem na div */
    cursor: pointer;
  }

  .Tooltip-text{
    position: absolute; 
    top: 50%;
    left: 50%;

  }

  .Tooltip .Tooltip-text {
    visibility: hidden;
    width: 120px;
    background-color: #ffffff;
    color: #000000;
    text-align: center;
    border-radius: 6px;
    padding: 5px 3px;
   
    z-index: 1;
  }

  .Tooltip .Tooltip-text::after{
    content: " ";
    position: absolute;
    top: 100%;
    right: 50%;
    margin-left: -5px;
    border-width: 5px;
    border-style: solid;
    border-color: black transparent transparent transparent;
  }

  .Tooltip:hover .Tooltip-text {
    visibility: visible;
    display: block;
  }

  

`;

const Comics = (props) => {
  const [comics, setComics] = useState([]);
  const xParentRef = useRef<HTMLDivElement>(null);
  const xChildRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const xParent = xParentRef.current;
    const xChild = xChildRef.current;

    if (!xParent || xChild) {
      scrollMove(xParent, xChild);
    }
    fetch(
      `https://gateway.marvel.com/v1/public/comics?ts=1&limit=100&apikey=${process.env.NEXT_PUBLIC_API_KEY}&hash=${process.env.NEXT_PUBLIC_API_HASH}`
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
  }, [xParentRef.current, xChildRef.current]);

  function scrollMove(xParent: HTMLDivElement, xChild: HTMLDivElement): void {
    if (xParent || xChild) {
      document
        .querySelector<HTMLElement>("#btnLeft")
        .addEventListener("click", () => {
          xParent.scrollLeft -= Number(
            xParent.clientWidth - xChild.offsetWidth
          );
        });
      document
        .querySelector<HTMLElement>("#btnRight")
        .addEventListener("click", () => {
          xParent.scrollLeft += Number(
            xParent.clientWidth - xChild.offsetWidth
          );
        });
    }
  }

  return (
    <ComicsSection>
      <div className="Comics-carousel" ref={xParentRef}>
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
            <div className="Comics-Container" ref={xChildRef}>
              <div className="Comics-Front Tooltip">
                <img
                  src={
                    current.thumbnail.path + "." + current.thumbnail.extension
                  }
                  alt={current.title}
                />

                  <span className="Tooltip-text">{current.title}</span>
 
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
