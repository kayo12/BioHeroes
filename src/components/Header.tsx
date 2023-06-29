import styled from "styled-components";
import Link from "next/link"


const theme = {

  media: { 
    desktop : `@media (min-width: 1024px)`,
    tablet : `@media (max-width: 1023px) and (min-width: 768px)`,
    mobile: `@media (max-width: 767px)`
  }
}


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
    padding: 0.5rem;
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
    font-size: 1.5rem;
    padding: 0.5rem 1rem;
    border-radius: 10px;
    list-style-type: none;
    
  }

  .NavLink > a {
    color: #000;
    text-decoration: none;
    transition: color 1s, font-size 1s;
  }

  .NavLink > a:hover{
    color: red;
    font-size: 1.8rem;
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
        <li className="NavLink"><Link href="#series" scroll={false} rel="noreferrer">Séries</Link></li>
          <li className="NavLink"><Link href="#comics" scroll={false} rel="noreferrer">Quadrinhos</Link></li>
          <li className="NavLink"><Link href="#chacters" scroll={false} rel="noreferrer">Personagens</Link></li>
        </ul>
      </nav>
    </NavHeader>
  );
}
