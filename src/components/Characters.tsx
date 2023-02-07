import { useEffect, useState } from "react";
import styled from "styled-components";
import Cards from "./Cards";

const CharacterSection = styled.section`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;

  .Character-Container {
    max-width: 990px;
    padding: 20px;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: stretch;
  }

  .Character-Body {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    padding: 2rem 0rem;
    align-items: center;
    gap: 10px;
    width: 100%;
    height: auto;
  }

  .Character-Header {
    width: 100%;
    padding-left: 0.5rem;
    font-size: 2rem;
    height: 30px;
    border-left: 4px solid red;
    display: flex;
  }

  .Character-Paging {
    display: flex;
    justify-content: center;
    width: 100%;
  }

  .Character-Paging a {
    text-decoration: none;
    padding: 8px 16px;
    color: #000000;
    font-weight: bold;
  }
  .Character-Paging a:hover {
    background-color: #ff3700;
    color: #fff;
    font-weight: bold;
  }
`;

export default function Characters(props) {
  const [char, setChar] = useState([]);
  const [pages, setPages] = useState(undefined)

  useEffect(() => {
    fetch(
      `https://gateway.marvel.com/v1/public/characters?ts=1&limit=30&apikey=${process.env.NEXT_PUBLIC_API_KEY}&hash=${process.env.NEXT_PUBLIC_API_HASH}`
    )
      .then((response) => {
        return response.json();
      })
      .then((jsonParsed) => {
        console.log(jsonParsed.data);
        setChar(jsonParsed.data.results);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  const groups = () => {

    let last = Number(pages?.target.value * 8);
    let first = 8 - (Number(pages?.target.value * 8));
    let gp = char.slice(first, last).map((current, index) => {
      return (
        <Cards
          key={`${index}`}
          title={current.name}
          width={"200px"}
          height={"200px"}
          image={current.thumbnail.path + "." + current.thumbnail.extension}
        />
      );
    });

    return gp;
  };

  const pagingLength = () => {
    let group = Math.round(char.length / 8);
    let pading = [...Array(group)].map((_, indx) => {
      return (
        <a href="" key={`${indx}_`} onClick={(current) => setPages(current)}>
          {indx + 1}
        </a>
      );
    });
    return pading;
  };

  return (
    <CharacterSection>
      <div className="Character-Container">
        <h3 className="Character-Header">Personagens</h3>
        <div className="Character-Body">{groups()}</div>
        <div className="Character-Paging">{pagingLength()}</div>
      </div>
    </CharacterSection>
  );
}
