import { useEffect, useState } from "react";

import styled from "styled-components";
import Modal from "./Modal";
import Cards from "./Cards";

const CharacterSection = styled.section`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  margin: 6rem 0;

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

  .Character-description {
    padding: 1rem;
  }

  .Character-Paging {
    display: flex;
    justify-content: center;
    max-width: 100%;
  }

  .Character-Paging button {
    cursor: pointer;
    text-decoration: none;
    padding: 8px 16px;
    font-weight: bold;
  }

 
  .Clicked {
    background-image: linear-gradient(to bottom right, #f84b4b, #f82525);
    color: #fff;
    font-weight: bold;
    transform: scale(1.2);
  }
`;

export default function Characters(props) {
  const [char, setChar] = useState([]);
  const [pages, setPages] = useState(0);
  const [mod, setMod] = useState(null);
  const [loading, setLoading] = useState(false);
  const [limit, setLimit] = useState(0);
  const [pageAll, setPageAll] = useState(1);
  const [clicked, setClicked] = useState<[boolean,number]>([false,0]);

  useEffect(() => {
    setLoading(true);
    fetch(
      `https://gateway.marvel.com/v1/public/characters?ts=1&limit=100&offset=${limit}&apikey=${process.env.NEXT_PUBLIC_API_KEY}&hash=${process.env.NEXT_PUBLIC_API_HASH}`
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
    setLoading(false);
  }, [pages, limit]);

  const showModal = (current: any) => {
    let mod = document.querySelector("#modal") as HTMLDivElement;
    let close = document.querySelectorAll(".modal-close")[0] as HTMLSpanElement;
    setMod(current);
    mod.style.display = "flex";
    close.addEventListener("click", () => {
      mod.style.display = "none";
    });
  };

  const groups = () => {
    let first = pages != 0 ? Math.abs(8 - Number(pages * 8)) : 0;
    let last = pages != 0 ? Number(pages * 8) : 8;
    console.log(char.length);
    let gp = char.slice(first, last).map((current, index) => {
      return (
        <>
          <Modal key={`${index}_`} mod={mod} />
          <Cards
            key={`${index}`}
            title={current.name}
            width={"200px"}
            height={"200px"}
            image={current.thumbnail.path + "." + current.thumbnail.extension}
            onClick={() => showModal(current)}
          />
        </>
      );
    });
    return gp;
  };

  const handlerClick = (indx) => {
    console.log("HandlerClick: ")
    setPages(indx + 1);
   clicked ?  setClicked([true, indx]): setClicked([false,indx])
   console.log(clicked[0] + ':' +clicked[1])
  };

  const pagingLength = () => {
    let group = Math.round(char.length / 9);
    let pading = loading ? (
      <div>Loading...</div>
    ) : (
      [...Array(group)].map((_, indx) => {
        return (
          <button
            className={clicked[0] && clicked[1] === indx ? "Clicked" : ""}
            onClick={() => handlerClick(indx)}
            key={`${indx}_`}
          >
            {limit >= 200 ? ((limit / 200) * 10 ) + indx + pageAll: indx + pageAll }
          </button>
        );
      })
    );

    return (
      <>
        <button onClick={() => setLimit(limit > 0 ? limit - 200 : 0)}>Previous </button>
        {pading}
        <button>...{limit}</button>
        <button onClick={() => setLimit(limit + 200)}> Next </button>{" "}
      </>
    );
  };

  return (
    <>
      {/* {modalParam()} */}
      <CharacterSection>
        <div className="Character-Container">
          <h3 className="Character-Header">Personagens</h3>
          <div>
            <p className="Character-description">
              A Marvel é famosa por sua grande variedade de super-heróis e
              vilões. Seus personagens possuem uma ampla gama de poderes,
              origens e personalidades distintas que atraem fãs de todas as
              idades e interesses. Desde seres sobre-humanos até cientistas
              brilhantes, a Marvel criou uma vasta galeria de personagens que
              continuam a inspirar e entreter pessoas em todo o mundo. Dos
              heróis mais populares, como o Homem-Aranha e o Capitão América,
              aos vilões mais icônicos, como o Doutor Destino e o Duende Verde,
              a Marvel tem algo para todos.
            </p>
          </div>
          <div className="Character-Body">{groups()}</div>
          <div className="Character-Paging">{pagingLength()}</div>
        </div>
      </CharacterSection>
    </>
  );
}
