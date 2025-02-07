import styled from "styled-components";


interface ModelCard {
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  width: string,
  height: string,
  image: string,
  title: string,
}

const Cards = (props: ModelCard) => {

  const Card = styled.div`
    display: flex;
    align-items: flex-end;
    cursor: pointer;
    background-image: url(${props.image});
    background-repeat: no-repeat;
    background-size: cover;
    width: ${props.width};
    height: ${props.height};
    border: none; /* Remover borda do botão */
    box-shadow: 3px 4px 4px #000000; /* Sombra do botão */
    border-radius: 5px;
   
    @media only screen and  (max-width: 768px){
      width: 300px;
      height: 300px;
    }

  `;

  const CardBody = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 80px;
    width: 100%;
  
    background-image: linear-gradient(to bottom right, #f84b4b, #f82525);
    &:hover{
      opacity: 0.7;
    }

    .CardTitle {
      font-weight: bold;
      font-size: 1.3rem;
      padding: 0 0.2rem;
      text-align: center;
      color: #ffffff;
    }
    
 

  `;

  return (
    <Card onClick={props.onClick}>
      <CardBody >
        <p className="CardTitle">{props.title}</p>
      </CardBody>
    </Card>
  );
}

export default Cards
