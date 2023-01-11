import styled from "styled-components";

const Footer = styled.footer`
  height: 300pc;
  display: flex;
  justify-content: center;
  align-items: center;

`
const CopyRight = styled.span`
  font-size: 0.8rem;
  font-weight: bold;
`

export default function Header() {

  const date = new Date()

  return (
    <>
      <Footer>
        <CopyRight>
          Copyright {date.getFullYear()}
        </CopyRight>
      </Footer>
    </>
  );
}
