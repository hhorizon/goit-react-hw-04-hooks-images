import propTypes from "prop-types";
import { Item, Image } from "./ImageGalleryItem.style";

function ImageGalleryItem({ photo, index, onClickPhoto }) {
  return (
    <Item>
      <Image
        src={photo.webformatURL}
        alt={photo.tags}
        onClick={() => onClickPhoto(index)}
      />
    </Item>
  );
}

export default ImageGalleryItem;

ImageGalleryItem.propTypes = {
  photo: propTypes.object,
  index: propTypes.number,
  onClick: propTypes.func,
};
