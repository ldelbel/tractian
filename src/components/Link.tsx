import { HiChevronDown } from "react-icons/hi";
import { StyledIcon, StyledLink } from "./styled";

interface LinkProps {
  text: string;
  dropdown?: boolean;
}

export const Link = ({ text, dropdown = false }: LinkProps) => (
  <StyledLink href="#">
    <span>{text}</span>
    {dropdown && (
      <StyledIcon>
        <HiChevronDown stroke="#000" stroke-width="0.3" />
      </StyledIcon>
    )}
  </StyledLink>
);
