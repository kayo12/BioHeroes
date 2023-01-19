import styled from 'styled-components'
import image from "../assets/marvel.png"


const MainHeader = styled.main`
        height: calc(100% - 300px);
        width: 100%;
        background: url(${image});
`

const Main = (props) => {
    return(
        <MainHeader>
            teste
        </MainHeader>
    )
}

export default Main;