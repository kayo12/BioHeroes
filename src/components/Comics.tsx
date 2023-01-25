import { useEffect, useState } from "react";
import Image from "next/image";
import styled from "styled-components";
import imageComics from "../../public/comics2.jpg";
import { HiOutlineChevronRight,HiOutlineChevronLeft } from "react-icons/hi";

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
  display: flex;
  align-items: center;
  padding: 1rem;
  overflow-x: scroll;
  perspective: 1000px;


  .Comics-Container {
    height: 80%;
    width: 370px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    transition: width 4s;
    &:hover{
      transform: scale(1.2);
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
    min-width: 300px;
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
      `https://gateway.marvel.com/v1/public/comics?ts=1&limit=60&apikey=${process.env.NEXT_PUBLIC_API_KEY}&hash=${process.env.NEXT_PUBLIC_API_HASH}`
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

  return (
    <ComicsSection>
  
      {comics.map((current, index) => {
        return current.thumbnail.path + "." + current.thumbnail.extension !=
          "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg" ? (
          <div className="Comics-Container">
            <HiOutlineChevronRight/>
            <div className="Comics-Body">
              <h2> {current.title}</h2>
            </div>
            <div className="Comics-Front">
              <img
                src={current.thumbnail.path + "." + current.thumbnail.extension}
                alt="Revista em quadrinhos"
              />

            </div>
          </div>
        ) : (
          <></>
        );
      })}
    </ComicsSection>
  );
};

export default Comics;
