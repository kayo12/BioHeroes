import styled from "styled-components";
import { Search } from "./Search";

const NavHeader = styled.header`
  width: 100%;
  height: 70px;
`;

const Navbar = styled.nav`
  width: 100%;
  height: 100%;
  display: flex;
  background-color: #ffd700;
  justify-content: space-around;
`;

const NavList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 2;
`;

const NavLink = styled.li`
  font-weight: bold;
  font-size: 1rem;
  padding: 0.5rem 1rem;
  border-radius: 10px;
  list-style-type: none;
`;

export default function Header(props) {
  return (
    <NavHeader>
      <Navbar>
        <NavList>
          <NavLink>Populares</NavLink>
          <NavLink>Top 10 Herois</NavLink>
          <NavLink>Series</NavLink>
          <NavLink>Ranking</NavLink>
        </NavList>
        <Search />
      </Navbar>
    </NavHeader>
  );
}
