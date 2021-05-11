import styled from "styled-components";

export const StyledDiv = styled.div`
  width: 30rem;
  height: 4rem;
  background: var(--green);
  color: white;
  position: fixed;
  bottom: 0;
  left: calc(50% - 15rem);
  padding: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 15px 15px 0 0;
  font-weight: bold;
  text-align: center;
  text-shadow: 1px 1px rgba(0, 0, 0, 0.6);
  box-shadow: 1px 1px rgba(0, 0, 0, 0.6);
`;

export const StyledLink = styled.a`
  color: white;
  display: flex;
  text-shadow: 1px 1px rgba(0, 0, 0, 0.1);

  &:hover {
    color: var(--green-light);
  }
`;

export const StyledIcon = styled.div`
  width: 1.8rem;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  font-size: 1.35rem;
  font-weight: 700;
`;

export const StyledNav = styled.nav`
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

export const StyledButton = styled.button`
  background: var(--green);
  padding: ${(props) => {
      if (props.scroll.dir === "up" || props.scroll.off < 550) return "0.5rem";

      return "0.2rem";
    }}
    1rem;
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

export const StyledDivApp = styled.div`
  width: 100%;
  height: calc(100vh - 2.5rem);
  background: linear-gradient(to left, var(--grad-from), var(--blue));
  font-size: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  text-shadow: 1px 1px rgba(0, 0, 0, 0.3);
  margin-bottom: 20rem;
`;

export const StyledTextBox = styled.div`
  color: white;
  background: var(--green);
  font-size: 2rem;
  padding: 1rem 5rem;
  text-align: justify;
  margin: 0 2rem;
  border-radius: 2rem;
  text-shadow: 1px 1px var(--blue);
  box-shadow: 0.8rem 0.8rem var(--blue);
  margin-bottom: 30rem;
`;

export const StyledText = styled.p`
  color: var(--blue);
  font-size: 2rem;
  text-shadow: 2px 2px var(--green);
  text-align: center;
`;