import { useEffect, useState } from "react";
import styled from "styled-components";
import { Link } from "./Link";
import { usePrevious } from "../hooks";

const StyledNav = styled.nav`
  width: 100%;
  height: ${(props) =>
    props.scroll.dir === "up" || props.scroll.off === 0 ? "5.2rem" : "2.8rem"};
  position: fixed;
  background: #1e3a8a;
  font-size: 1rem;
  color: white;
  display: flex;
  align-items: center;
  font-family: "Poppins", sans-serif;
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
  background: rgba(34, 197, 94);
  padding: ${(props) =>
      props.scroll.dir === "up" || props.scroll.off === 0 ? "0.5rem" : "0.2rem"}
    1rem;
  font-family: "Poppins", sans-serif;
  line-height: 1.5rem;
  color: white;
  border-radius: 0.375rem;
  font-size: 1rem;
  transition: 0.25s;
  transition-timing-function: ease-in-out;

  &:hover {
    background: #6adf81;
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
