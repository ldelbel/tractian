import { Instructions } from "./components/Instructions";
import { Nav } from "./components/Nav";
import styled from "styled-components";

const StyledDiv = styled.div`
  width: 100%;
  height: calc(100vh - 2.5rem);
  background: linear-gradient(to left, var(--grad-from), var(--blue));
  font-size: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  text-shadow: 1px 1px rgba(0, 0, 0, 0.3);
  margin-bottom: 20rem;
`;

const StyledTextBox = styled.div`
  color: white;
  background: var(--green);
  font-size: 2rem;
  padding: 1rem 5rem;
  text-align: justify;
  margin: 0 2rem;
  border-radius: 2rem;
  text-shadow: 1px 1px var(--blue);
  box-shadow: 0.8rem 0.8rem var(--blue);
  margin-bottom: 30rem;
`;

const StyledText = styled.p`
  color: var(--blue);
  font-size: 2rem;
  text-shadow: 2px 2px var(--green);
  text-align: center;
`

export const App = () => {
  return (
    <>
      <Nav />
      <StyledDiv>Demonstração da Sugestão</StyledDiv>
      <StyledTextBox>
        A partir deste ponto o navbar encolhe para aumentar a área de
        visibilidade do conteúdo, e permanece assim enquanto o usuário estiver rolando
        para baixo ou se mantiver estático. Ao rolar para cima, o navbar
        se expande novamente para o caso do usuário estar interessado em acessar os links.
      </StyledTextBox>
      <StyledText>Aqui é só espaço extra mesmo.</StyledText>
      <Instructions />
    </>
  );
};
