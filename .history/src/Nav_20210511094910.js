import { useEffect, useState } from 'react';
import styled from 'styled-components';
import logo from './assets/logo.png';
import { usePrevious } from "./hooks";

const StyledNav = styled.nav`
  width: 100%;
  height: 5rem;
  background: #1F419B;
  font-size: 1rem;
  font-family: 'Poppins', sans-serif;
  color: white;
`

const StyledImg = styled.img`
  margin-top: -5rem;
`

export function Nav() {
  const [offset, setOffset] = useState(0);
  const [direction, setDirection] = useState();
  const prevOffset = usePrevious(offset);

  useEffect(() => {
    window.onscroll = () => {
      setOffset(window.pageYOffset)
    }
  }, []);

  useEffect(() => {
    if (prevOffset == offset) {

    }
  }, [offset])

  console.log(offset);


  return (
    <StyledNav>
      <img src={logo} alt="tractian" />
      Test
    </StyledNav>
  );
}

