import styled from "styled-components";
import image from "../../src/assets/marvel1.png";
const MainHeader = styled.main`
  height: 100vh;
  width: 100%;
  background: url(${image.src}) no-repeat;
  background-size: contain;
  background-position: left;
  display: flex;
  justify-content: flex-end ;
  align-items: center;
  padding: 0 2rem;

  .Main__article {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    
    min-height: 200px;
    flex: 0 1 400px;
    padding: 1rem;
    background-color: #fff;
    opacity: 0.8;
  }

  .Main__article p{
    font-size: 1rem;
    line-height: 20px;
    padding: 1rem 0 ;
  }


  .Main__article-marvel{
    font-weight: bolder;
    font-size: 1.5rem;
    color: #fff;
    background-color:#ff0a0a ;
    padding: 0.1rem;
    margin-top: 1rem;
  }
`;

const Main = (props) => {
  return (
    <MainHeader>
      <article className="Main__article">
        
        <h2>Descubra o universo Marvel com nossos heróis icônicos</h2>
        <p>
          Acompanhe as novidades da Marvel, incluindo filmes, jogos e muito
          mais. Junte-se à comunidade de fãs da Marvel e compartilhe sua paixão
          pelos quadrinhos. E não perca as próximas histórias emocionantes, com
          personagens novos e antigos, que estarão disponíveis em breve.
        </p>
        <p>
          Descubra o universo Marvel através das aventuras épicas dos
          Vingadores, os X-Men e outros heróis lendários. Conheça o lado obscuro
          dos vilões mais notórios da Marvel, como Thanos, Magneto e Venom. E
          celebre décadas de histórias em quadrinhos incríveis com nossa seção
          de colecionáveis e itens exclusivos.
        </p>
        <span className="Main__article-marvel"> BIOHEROES</span>   
      </article>
    </MainHeader>
  );
};

export default Main;
