import styled from 'styled-components'

const CharacterSection = styled.section`
width: 100%;
min-height: 100vh;
display: flex;
justify-content: center;
align-items: center;
`

const CharacterHeader = styled.h3`
  width: 100%;
  padding-left: 0.5rem;
  height: 20px;
  border-left: 4px solid red;
  display: flex;

`;

export default function Characters(props){

 return(
    <CharacterSection>
      <CharacterHeader/>
    </CharacterSection>

 )       


}