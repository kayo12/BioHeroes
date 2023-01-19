import styled from "styled-components";
import { BiSearchAlt2 } from "react-icons/bi";

const SearchDiv = styled.div`
  color: blue;
  text-align: center;
  padding: 0.8rem;
  flex: 1;


.SearchBody {
  display: flex;
  align-items: center;
  flex-direction: reverse-row;
  width: 100%;
}

.SearchButton {
  padding: 0.5rem;
  border-top-left-radius: 50px;
  border-bottom-left-radius: 50px;
  border: none;
  background-color: white;
  height: 35px;
  cursor: pointer;
}

 .SForm {
  width: 100%;
  height: 100%;
  display: flex;
}
.SInput {
  height: 35px;
  width: 100%;
  padding: 0.5rem;
  outline: none;
  border-top-right-radius: 50px;
  border-bottom-right-radius: 50px;
  border:none;
  }
  `;

interface InputSearch {
  input?: number | string;
}

export function Search(props: InputSearch) {
  return (
    <SearchDiv>
      <form className="SForm">
        <div className="SearchBody">
          <button className="SearchButton">
            <BiSearchAlt2 />
          </button>
          <input className="SInput" placeholder="Digite o nome de algum Heroi" />
        </div>
      </form>
    </SearchDiv>
  );
}
