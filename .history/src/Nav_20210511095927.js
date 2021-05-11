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

export function Nav() {
  const [offset, setOffset] = useState(0);
  const [scrollDirection, setScrollDirection] = useState('rest');
  const prevOffset = usePrevious(offset);

  useEffect(() => {
    window.onscroll = () => {
      setOffset(window.pageYOffset)
    }
  }, []);

  useEffect(() => {
    if (prevOffset == offset) {
      setScrollDirection('rest')
    } else if (prevOffset > offset) {
      setScrollDirection('up')
    } else {
      setScrollDirection('down')
    }
  }, [prevOffset, offset])

  console.log(offset);
  console.log(scrollDirection);


  return (
    <StyledNav>
      <div></div>
      <img src={logo} alt="tractian" />
      Test
    </StyledNav>
  );
}

