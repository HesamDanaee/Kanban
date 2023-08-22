import styled from "styled-components";

const Menu = styled.img`
  width: 5px;
  height: auto;
  grid-column: 2/3;
  grid-row: 1/2;
  justify-self: flex-end;
  align-self: center;
  &:hover {
    cursor: pointer;
  }
`;

function KebabMenu({ src, onClick }: { src: string; onClick: () => void }) {
  return <Menu src={src} onClick={onClick} />;
}

export default KebabMenu;
