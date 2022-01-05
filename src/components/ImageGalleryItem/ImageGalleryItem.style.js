import styled from "styled-components";

const Item = styled.li`
  width: 390px;
  height: 260px;
  flex-basis: calc((100% - 40px) / 4);
  margin-left: 10px;
  margin-top: 10px;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 250ms;

  &:hover {
    transform: scale(1.1);
  }
`;

export { Item, Image };
