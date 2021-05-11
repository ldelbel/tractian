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
  const [scrolldirection, setDirection] = useState('rest');
  const prevOffset = usePrevious(offset);

  useEffect(() => {
    window.onscroll = () => {
      setOffset(window.pageYOffset)
    }
  }, []);

  useEffect(() => {
    if (prevOffset == offset) {
      setDirection('rest')
    } else if (prevOffset < offset) {
      setDirection('scrolling up')
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

