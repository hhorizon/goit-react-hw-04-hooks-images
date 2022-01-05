import styled from "styled-components";

const GalleryWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  margin: 60px auto 25px;
  width: 1600px;
`;

const List = styled.ul`
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  padding: 0;
  margin-left: -10px;
  margin-top: -10px;
  margin-bottom: 25px;
  width: 1600px;
`;

const ModalImage = styled.img`
  max-height: 95vh;
  border-radius: 10px;
`;

export { GalleryWrapper, List, ModalImage };
