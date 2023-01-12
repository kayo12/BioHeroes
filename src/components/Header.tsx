import styled from 'styled-components'
import { Search } from './Search'

const Navbar = styled.nav`
    
    width: 100%;
    height: auto;
    background-color:	#FFD700;
    display: flex;
    justify-content: space-around;
    
 `

const NavList = styled.ul`
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 3;
`

const NavLink = styled.li`
    font-weight: bold;
    font-size: 1rem;
    padding: 0.5rem 1rem;
    border-radius: 10px;
    list-style-type: none; 
`

export default function Header(props){
    return(
          <Navbar> 
              <NavList>  
                <NavLink>Populares</NavLink>
                <NavLink>Top 10 Herois</NavLink>
                <NavLink>Series</NavLink>
                <NavLink>Ranking</NavLink>
              </NavList>
              <Search/>
          </Navbar>  
    )

}