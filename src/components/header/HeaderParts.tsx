import styled from "styled-components";

const HeaderBody = styled.header<{ theme: Color }>`
  min-width: 100vw;
  height: 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${({ theme }) => theme.secondary};
  z-index: 10;
  padding: 0.2rem 2rem;
  position: fixed;
  top: 0;
  left: 0;
`;

const Logo = styled.img`
  width: 140px;
  height: 25px;
`;

const BoardName = styled.h1`
  color: white;
  font-size: 1.2rem;
  letter-spacing: 2px;
  font-weight: 600;
  text-transform: capitalize;
`;

const WrapperLeft = styled.div`
  width: 430px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const WrapperRIght = styled.div`
  width: 200px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
`;

const NewTask = styled.button<{ theme: Color }>`
  display: block;
  padding: 0.8rem 1.3rem;
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 1px;
  text-transform: capitalize;
  border-radius: 40px;
  color: white;
  border: none;
  outline: none;
  transition: all 0.1s ease-in-out;
  transition-property: background-color, color;
  background-color: ${({ theme }) => theme.third};

  &:hover {
    background-color: ${({ theme }) => theme.accent};
    color: ${({ theme }) => theme.primary};
    cursor: pointer;
  }
`;

export { HeaderBody, Logo, BoardName, WrapperLeft, WrapperRIght, NewTask };
