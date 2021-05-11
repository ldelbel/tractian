import styled from 'styled-components';

const StyledDiv = styled.div`
  width: 30rem;
  height: 4rem;
  background: var(--green);
  color: white;
  position: fixed;
  bottom: 0;
  left: calc(50% - 15rem);
  padding: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 15px 15px 0 0;
  font-weight: bold;
  text-align: center;
  text-shadow: 1px 1px rgba(0,0,0, 0.6);
  box-shadow: 1px 1px rgba(0,0,0, 0.6);
`

export const Instructions = () => {
  return (
    <StyledDiv>
      Role para baixo e para cima para ver a sugestão funcionando. Desça até a área de fundo branco.
    </StyledDiv>
  )
}