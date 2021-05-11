import { Instructions } from "./components/Instructions";
import { Nav } from "./components/Nav";
import { StyledDivApp, StyledTextBox, StyledText } from "./components/styled";

export const App = () => {
  return (
    <>
      <Nav />
      <StyledDivApp>Demonstração da Sugestão</StyledDivApp>
      <StyledTextBox>
        A partir deste ponto o navbar encolhe para aumentar a área de
        visibilidade do conteúdo, e permanece assim enquanto o usuário estiver
        rolando para baixo ou se mantiver estático. Ao rolar para cima, o navbar
        se expande novamente para o caso do usuário estar interessado em acessar
        os links.
      </StyledTextBox>
      <StyledText>Aqui é só espaço extra mesmo.</StyledText>
      <Instructions />
    </>
  );
};
