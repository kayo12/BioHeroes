import styled from "styled-components";
import { Search } from "./Search";

const NavHeader = styled.header`
  width: 100%;
  height: 70px;

  .Navbar {
    width: 100%;
    height: 100%;
    display: flex;
    flex-wrap: wrap;
    background-color: #ffd700;
    justify-content: space-around;
  }

  .NavHeader__Logo {
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1;
  }


  .NavHeader__Logo span{
    font-weight: bolder;
    font-size: 2rem;
    padding: 0.4rem;
    color: #fff;
    background-color: #ff0a0a;
  }

  .NavList {
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 2;
  }

  .NavLink {
    font-weight: bold;
    font-size: 1rem;
    padding: 0.5rem 1rem;
    border-radius: 10px;
    list-style-type: none;
  }
`;

export default function Header(props) {
  return (
    <NavHeader>
      <nav className="Navbar">
        <div className="NavHeader__Logo">
          <span>BIOHEROES</span>
        </div>
        <ul className="NavList">
          <li className="NavLink">Personagens</li>
          <li className="NavLink">Séries</li>
          <li className="NavLink">Quadrinhos</li>
          <li className="NavLink">Ranking</li>
        </ul>
        <Search />
      </nav>
    </NavHeader>
  );
}
