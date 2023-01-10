import styled from "styled-components";
import { BiSearchAlt2 } from "react-icons/bi";

const SearchDiv = styled.div`
  color: blue;
  text-align: center;
  padding: 0.8rem;
  flex: 1;
`;

const SearchBody = styled.div`
  display: flex;
  align-items: center;
  flex-direction: reverse-row;
  width: 100%;
`;

const SearchButton = styled.button`
  padding: 0.5rem;
  border-top-left-radius: 50px;
  border-bottom-left-radius: 50px;
  border: none;
  background-color: white;
  height: 35px;
  cursor: pointer;
`;

const SForm = styled.form`
  width: 100%;
  height: 100%;
  display: flex;
`;
const SInput = styled.input`
  height: 35px;
  width: 100%;
  padding: 0.5rem;
  outline: none;
  border-top-right-radius: 50px;
  border-bottom-right-radius: 50px;
  border:none;
  `;

interface InputSearch {
  input?: number | string;
}

export function Search(props: InputSearch) {
  return (
    <SearchDiv>
      <SForm>
        <SearchBody>
          <SearchButton>
            <BiSearchAlt2 />
          </SearchButton>
          <SInput placeholder="Digite o nome de algum Heroi" />
        </SearchBody>
      </SForm>
    </SearchDiv>
  );
}
