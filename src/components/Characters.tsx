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

  .Character-Paging {
    display: flex;
    justify-content: center;

    max-width: 100%;
  }

  .Character-Paging button {
    cursor: pointer;
    text-decoration: none;
    padding: 8px 16px;
    color: #000000;
    font-weight: bold;
  }
  .Character-Paging button:hover {
    background-color: #ff3700;
    color: #fff;
    font-weight: bold;
  }
`;

export default function Characters(props) {
  const [char, setChar] = useState([]);
  const [pages, setPages] = useState(0);
  const [mod, setMod] = useState(false)

  useEffect(() => {
    fetch(
      `https://gateway.marvel.com/v1/public/characters?ts=1&limit=100&apikey=${process.env.NEXT_PUBLIC_API_KEY}&hash=${process.env.NEXT_PUBLIC_API_HASH}`
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
  }, [pages]);


  const modalParam = (current?: any) =>{
    
    return( 
        <Modal name={current}/>
    )
  }

  const showModal = (current: any) =>{
      console.log("Acessando valores" + JSON.stringify(current))
      let mod =  document.querySelector("#modal") as HTMLDivElement
     let close = document.querySelectorAll(".modal-close")[0] as HTMLSpanElement
     console.log(current.name)
      modalParam(current.name)
     mod.style.display = "flex"
     close.addEventListener("click", () => {
        mod.style.display = "none"
     }) 

  }

  const groups = () => {
    let first = pages != 0 ? Math.abs(8 - Number(pages * 8)) : 0;
    let last = pages != 0 ? Number(pages * 8) : 8;
    let gp = char.slice(first, last).map((current, index) => {
        
      return (
        <Cards
          key={`${index}`}
          title={current.name}
          width={"200px"}
          height={"200px"}
          image={current.thumbnail.path + "." + current.thumbnail.extension}
          onClick={() => showModal(current)}
        />
      );
    });

    return gp;
  };

  const pagingLength = () => {
    let group = Math.round(char.length / 8);
    let pading = [...Array(group)].map((_, indx) => {
      return (
        <button key={`${indx}_`} onClick={() => setPages(indx + 1)}>
          {indx + 1}
        </button>
      );
    });
    return pading;
  };

  return (
    <>
    {modalParam()}
    <CharacterSection>
      <div className="Character-Container">
        <h3 className="Character-Header">Personagens</h3>
        <div className="Character-Body">{groups()}</div>
        <div className="Character-Paging">{pagingLength()}</div>
      </div>
    </CharacterSection>
    </>
  );
}
