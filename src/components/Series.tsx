import styled from "styled-components";
import main from "../assets/marvel_avengers.png";
import { useEffect, useState } from "react"


const PopSection = styled.section`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
`;
const PopContainer = styled.div`
  width: 990px;
  justify-content: space-around;
  display: flex;
  flex-direction: column;
`;
const PopHeader = styled.h4`
  width: 100%;
  padding-left: 0.5rem;
  height: 20px;
  border-left: 4px solid red;
  display: flex;
`;

const PopBody = styled.ul`

  display: flex; 
  margin: 0;
  padding: 0;  
  list-style-type: none;
  overflow-x: scroll;
  gap: 10px;
  

  li{
    flex: none;
    display: flex;
    flex-direction: column;
    width: 300px;
    height: 500px;
    padding: 0.5rem;
  }
`;


const ImgSeries = styled.img`
  max-width: 100%;
  max-height: 100%;
  object-fit: cover;
`

interface Series{
  serie?: string

}

export default function Series(props?: Series) {

  const [series, setSeries] = useState([])
  
  useEffect(() => {
    fetch(
    `http://gateway.marvel.com/v1/public/series?ts=1&limit=20&apikey=${process.env.NEXT_PUBLIC_API_KEY}&hash=${process.env.NEXT_PUBLIC_API_HASH}`

    ).then((response) => {
        return response.json();
      })
      .then((jsonParsed) => {
        console.log(jsonParsed.data);
        setSeries(jsonParsed.data.results)
      })
      .catch((e) => {
        console.log(e);
      });
  },[]);


  return (
    <PopSection>
      <PopContainer>
        <PopHeader>Series Populares</PopHeader>
        <PopBody>
          {series.map((current, index) => {
              return (
                <li key={index}>
                  <ImgSeries src={current.thumbnail.path+ "." + current.thumbnail.extension }/>
                  {/* {current.title} */}
                  <span> {current.title}</span>
                  </li>
              )
          })}
        </PopBody>
      </PopContainer>
    </PopSection>
  );
}
