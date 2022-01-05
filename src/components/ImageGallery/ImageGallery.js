import { useState } from "react";
import propTypes, { bool } from "prop-types";
import ImageGalleryItem from "../ImageGalleryItem";
import Button from "../Button";
import Loader from "../Loader";
import Modal from "../Modal";
import { GalleryWrapper, List, ModalImage } from "./ImageGallery.style";

function ImageGallery({ photos, isLoading, isLoadingMoreBtn, onLoadMore }) {
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  const onClickPhoto = (index) => {
    setSelectedPhoto(photos[index]);
  };

  const closeModal = () => {
    setSelectedPhoto(null);
  };

  return (
    <GalleryWrapper>
      {isLoading && <Loader />}

      <List>
        {photos.map((photo, index) => (
          <ImageGalleryItem
            key={index}
            photo={photo}
            index={index}
            onClickPhoto={onClickPhoto}
          />
        ))}
      </List>

      {isLoadingMoreBtn && <Button text="Load more" onClick={onLoadMore} />}

      {selectedPhoto && (
        <Modal closeModal={closeModal}>
          <ModalImage
            src={selectedPhoto.largeImageURL}
            alt={selectedPhoto.tags}
          ></ModalImage>
        </Modal>
      )}
    </GalleryWrapper>
  );
}

export default ImageGallery;

ImageGallery.propTypes = {
  photos: propTypes.arrayOf(propTypes.object),
  onLoadMore: propTypes.func,
  isLoading: bool,
  isloadingMoreBtn: bool,
};
