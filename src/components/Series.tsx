import styled from "styled-components";
import main from "../assets/marvel_avengers.png";
import Cards from "./Cards";
import { FaChevronCircleRight, FaChevronCircleLeft } from "react-icons/fa";
import { useEffect, useState } from "react";

const PopSection = styled.section`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
`;
const PopContainer = styled.div`
  max-width: 990px;
  justify-content: space-around;
  display: flex;
  flex-direction: column;
`;
const PopHeader = styled.h3`
  width: 100%;
  padding-left: 0.5rem;
  height: 20px;
  border-left: 4px solid red;
  display: flex;
`;

const PopBody = styled.ul`
  max-width: 100vw;
  height: auto;
  display: flex;
  margin: 0;
  padding: 0;
  list-style-type: none;
  overflow-x: scroll;
  gap: 10px;

  li {
    width: 100%;
    height: auto;
  }
`;

const PopBtnRight = styled.button`
  width: 30px;
  font-size: 40px;
  background: none;
  border: none;
  position: relative;
  right: 10px;
`;

const PopBtnLeft = styled.button`
  width: 30px;
  position: relative;
  left: 10px;
  font-size: 40px;
  background: none;
  border: none;
`;

const PopControl = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-bettwen;
  padding-right:  1.5rem;
`;

interface Series {
  serie?: string;
}

export default function Series(props?: Series) {
  const [series, setSeries] = useState([]);

  useEffect(() => {
    fetch(
      `http://gateway.marvel.com/v1/public/series?ts=1&limit=60&apikey=${process.env.NEXT_PUBLIC_API_KEY}&hash=${process.env.NEXT_PUBLIC_API_HASH}`
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
  }, []);

  return (
    <PopSection>
      <PopContainer>
        <PopHeader>Series </PopHeader>
        <PopControl>
          <PopBtnLeft>
            <FaChevronCircleRight />
          </PopBtnLeft>
          <PopBtnRight>
            <FaChevronCircleLeft />
          </PopBtnRight>
        </PopControl>
        <PopBody>
          {series.map((current, index) => {
            return current.thumbnail.path + "." + current.thumbnail.extension !=
              "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg" ? (
              <li key={index}>
                <Cards
                  title={current.title}
                  image={
                    current.thumbnail.path + "." + current.thumbnail.extension
                  }
                />
              </li>
            ) : (
              ""
            );
          })}
        </PopBody>
        
      </PopContainer>
    </PopSection>
  );
}
