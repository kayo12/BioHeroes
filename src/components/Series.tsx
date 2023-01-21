import styled from "styled-components";
import main from "../assets/marvel_avengers.png";
import Cards from "./Cards";
import { FaChevronCircleRight, FaChevronCircleLeft } from "react-icons/fa";
import { useEffect, useState } from "react";

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
  justify-content: space-evenly;
  display: flex;
  flex-direction: column;
}

.PopHeader {
  width: 100%;
  padding-left: 0.5rem;
  height: 20px;
  border-left: 4px solid red;
  display: flex;
}

.PopBody {
  max-width: 100vw;
  height: auto;
  display: flex;
  margin: 0;
  padding: 0;
  list-style-type: none;
  overflow-x: scroll;
  gap: 10px;
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
}

.PopBtnLeft {
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
  padding-right:  1.5rem;
}
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
      <div className="PopContainer">
        <h3 className="PopHeader">Séries em quadrinhos </h3>
        <div className="PopControl">
          <button className="PopBtnLeft">
            <FaChevronCircleRight />
          </button>
          <button className="PopBtnRight">
            <FaChevronCircleLeft />
          </button>
        </div>
        <ul className="PopBody">
          {series.map((current, index) => {
            return current.thumbnail.path + "." + current.thumbnail.extension !=
              "https://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg" ? (
              <li key={index}>
                <Cards
                  title={current.title}
                  width={"200px"}
                  height={"300px"}
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
    </PopSection>
  );
}
