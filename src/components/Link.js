import { HiChevronDown } from 'react-icons/hi';
import styled from 'styled-components';

const StyledLink = styled.a`
  color: white;
  display: flex;
  text-shadow: 1px 1px rgba(0,0,0,0.1);

  &:hover {
    color: #6ADF81;
  }
`

const Icon = styled.div`
  width: 1.8rem;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  font-size: 1.35rem;
  font-weight: 700;
`

export const Link = ({ text, dropdown = false }) => (
  <StyledLink href="#">
    <span>{text}</span>
    { dropdown && <Icon><HiChevronDown stroke='#000' stroke-width="0.3" /></Icon> }
  </StyledLink>
)
