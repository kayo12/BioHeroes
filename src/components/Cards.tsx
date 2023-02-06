import styled from "styled-components";

interface ModelCard {

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
   
  `;

  const CardBody = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 80px;
    width: 100%;
  
    background-image: linear-gradient(to bottom right, #f84b4b, #f82525);
    &:hover{
      opacity: 0.9;
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
    <Card >
      <CardBody >
        <p className="CardTitle">{props.title}</p>
      </CardBody>
    </Card>
  );
}

export default Cards
