import { useEffect, useState } from "react";
import styled from "styled-components";
import { Link } from "./Link";
import { usePrevious } from "../hooks";

const StyledNav = styled.nav`
  width: 100%;
  height: ${(props) => {
    if (props.scroll.off === 0) return "6.8rem";
    if (props.scroll.dir === "up" || props.scroll.off < 550) return "5.2rem";

    return "2.8rem";
  }};
  position: fixed;
  background: ${(props) =>
    props.scroll.off === 0 ? "transparent" : "var(--blue)"};
  font-size: 1rem;
  color: white;
  display: flex;
  align-items: center;
  padding: 0 1.5rem;
  transition: all 0.25s;
  transition-timing-function: ease-in-out;

  .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 100%;
  }

  .links {
    display: flex;
    justify-content: space-between;
    max-width: 48rem;
    min-width: 60.5%;
  }
`;
const Button = styled.button`
  background: var(--green);
  padding: ${(props) => {
    if (props.scroll.dir === "up" || props.scroll.off < 550) return "0.5rem";

    return "0.2rem"
  }} 1rem;
  line-height: 1.5rem;
  color: white;
  border-radius: 0.375rem;
  font-size: 1rem;
  transition: 0.25s;
  transition-timing-function: ease-in-out;

  &:hover {
    background: var(--green-light);
    cursor: pointer;
  }
`;

export function Nav() {
  const [offset, setOffset] = useState(0);
  const [scrollDirection, setScrollDirection] = useState("up");
  const prevOffset = usePrevious(offset);

  useEffect(() => {
    window.onscroll = () => {
      setOffset(window.pageYOffset);
    };
  }, []);

  useEffect(() => {
    prevOffset > offset ? setScrollDirection("up") : setScrollDirection("down");
  }, [prevOffset, offset]);

  return (
    <StyledNav scroll={{ dir: scrollDirection, off: offset }}>
      <div class="container">
        <a href="#">
          <img
            src="https://imgix.tractian.com/images/Logo-Tractian.svg"
            width="170"
            height="60"
            alt="tractian"
          />
        </a>

        <div class="links">
          <Link text="Conheça o Produto" dropdown />
          <Link text="Sobre Nós" dropdown />
          <Link text="Materiais Gratuitos" dropdown />
          <Link text="Blog" />
          <Link text="Área do cliente" />
        </div>

        <div>
          <Button scroll={{ dir: scrollDirection, off: offset }}>
            Demonstração
          </Button>
        </div>
      </div>
    </StyledNav>
  );
}
