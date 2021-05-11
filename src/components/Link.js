import { HiChevronDown } from "react-icons/hi";
import { StyledIcon, StyledLink } from "./styled";

export const Link = ({ text, dropdown = false }) => (
  <StyledLink href="#">
    <span>{text}</span>
    {dropdown && (
      <StyledIcon>
        <HiChevronDown stroke="#000" stroke-width="0.3" />
      </StyledIcon>
    )}
  </StyledLink>
);
