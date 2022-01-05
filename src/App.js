import { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import fetchPhotos from "./services/photosApi";
import SearchBar from "./components/Searchbar";
import ImageGallery from "./components/ImageGallery";

function App() {
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [photos, setPhotos] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isLoadingMoreBtn, setIsLoadingMoreBtn] = useState(false);

  useEffect(() => {
    if (searchQuery === "") {
      return;
    }

    setIsLoading(true);

    fetchPhotos(searchQuery, currentPage)
      .then((nextPhotos) => {
        setPhotos((state) => [...state, ...nextPhotos.hits]);
        setIsLoadingMoreBtn(true);

        if (nextPhotos.hits.length === 0) {
          toast("No results were found for your search.");
        }

        if (nextPhotos.totalHits === photos.length) {
          setIsLoadingMoreBtn(false);
        }
      })
      .catch((error) => console.log(error))
      .finally(() => {
        setIsLoading(false);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchQuery, currentPage]);

  const onSubmit = (searchQuery) => {
    setSearchQuery(searchQuery);
    setCurrentPage(1);
    setPhotos([]);
  };

  const onLoadMore = () => {
    setCurrentPage((state) => state + 1);
  };

  return (
    <>
      <SearchBar onSubmit={onSubmit} />

      {photos.length > 0 && (
        <ImageGallery
          photos={photos}
          onLoadMore={onLoadMore}
          isLoading={isLoading}
          isLoadingMoreBtn={isLoadingMoreBtn}
        />
      )}

      <ToastContainer autoClose={3000} />
    </>
  );
}

export default App;
