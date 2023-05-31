import styled from "styled-components";
import {GoMarkGithub } from "react-icons/go"; 
import {FaLinkedin} from "react-icons/fa"

const Footer = styled.footer`
  height: 200px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #FFD700;

  .Media-Icons{
    width: 100%;
    height: 100px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding-right: 2em;
  }

  .Media-Icons li{
    padding: 0 1rem 0  ;
    list-style-type: none;
    font-size: 2em;
  }
  .Media-Icons a {
    color: #000;
  }

`
const CopyRight = styled.span`
  font-size: 0.9rem;
  font-weight: bold;
`

export default function Header() {

  const date = new Date()

  return (
      <Footer>
          <ul className="Media-Icons">
            <li><a href="https://github.com/kayo12" target="_blank" title="GitHub"><GoMarkGithub/></a></li>
            <li><a href="https://www.linkedin.com/in/kayohcampos/" target="_blank" title="Linkedin"><FaLinkedin/></a></li>
          </ul>
        <CopyRight>
          Copyright {date.getFullYear()}
        </CopyRight>      
      </Footer>
  );
}
