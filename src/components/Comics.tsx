import { useEffect, useState } from "react";
import Image from "next/image";
import styled from "styled-components";
import imageComics from "../../public/comics.jpg";

const ComicsSection = styled.section`
  height: 90vh;
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
  overflow: scroll;

  .Comics-Container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 80%;
    background-color: #fff;
  }

  .Comics-Body {
    max-height: 400px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    width: 600px;
  }

  .Comics-Body p{
    font-size: 0.8rem;
  }

  .Comics-Front{
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: flex-end;
  }



  .Comics-Front img {
    min-width: 500px;
    width: 100%;
    max-height: 100%;
    object-fit: contain;
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
        return (
          current.thumbnail.path + "." + current.thumbnail.extension != 
          'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg' ?

          (<div className="Comics-Container">
             <div className="Comics-Body">
              <h2> {current.title}</h2>
              <p>{current.description}</p>
            </div>
            <div className="Comics-Front">
              <img
                src={current.thumbnail.path + "." + current.thumbnail.extension }
                alt="Revista em quadrinhos"
              />
            </div>  
          </div>):(
            <></>
          )
          
        );
      })}
    </ComicsSection>
  );
};

export default Comics;
