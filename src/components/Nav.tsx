import { useEffect, useState } from "react";
import { Link } from "./Link";
import { usePrevious } from "../hooks";
import { StyledButton, StyledNav, EmptyLink } from "./styled";

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
    if (prevOffset)
    prevOffset > offset ? setScrollDirection("up") : setScrollDirection("down");
  }, [prevOffset, offset]);

  const scrollObj = {
    dir: scrollDirection,
    off: offset,
  }

  return (
    <StyledNav scroll={scrollObj}>
      <div className="container">
        <EmptyLink href="#">
          <img
            src="https://imgix.tractian.com/images/Logo-Tractian.svg"
            width="170"
            height="60"
            alt="tractian"
          />
        </EmptyLink>

        <div className="links">
          <Link text="Conheça o Produto" dropdown />
          <Link text="Sobre Nós" dropdown />
          <Link text="Materiais Gratuitos" dropdown />
          <Link text="Blog" />
          <Link text="Área do cliente" />
        </div>

        <div>
          <StyledButton scroll={scrollObj}>
            Demonstração
          </StyledButton>
        </div>
      </div>
    </StyledNav>
  );
}
