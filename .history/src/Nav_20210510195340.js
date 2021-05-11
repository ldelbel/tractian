import styled from 'styled-components';
import logo from './assets/logo.png';

const StyledNav = styled.nav`
  width: 100%;
  height: 15rem;
  background: #1F419B;
  font-size: 1rem;
  font-family: 'Poppins', sans-serif;
  color: white;
`

export function Nav() {
  return (
    <StyledNav>
      <img src={logo} alt="tractian" />
      Test
    </StyledNav>
  );
}

