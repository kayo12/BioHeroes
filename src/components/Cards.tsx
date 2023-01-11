import styled from "styled-components";

const Card = styled.div`
  width: 100%;
  height: 100%;
  background-color: #ffd700;
`;
const CardBody = styled.div`
  display: flex;
  justify-content: center;
  height: 80px;
`;
const CardTitle = styled.p`
  font-weight: bold;
  padding: 0 0.2rem;
  text-align: center;
`;

export default function Cards(props) {

  const CardImage = styled.div`
    background-image: url(${props.image});
    background-repeat: no-repeat;
    background-size: cover;
    width: 200px;
    height: 200px;
  `;

  return (
    <Card>
      <CardImage />
      <CardBody>
        <CardTitle>{props.title}</CardTitle>
      </CardBody>
    </Card>
  );
}
