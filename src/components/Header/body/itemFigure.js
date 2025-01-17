import React from "react";
import IconNext from "../../../images/body/icon-next.svg";
import IconPrevious from "../../../images/body/icon-previous.svg";
import Thumbnail from "./thumbnail";

const ImageCarousel = ({ images, currentImageIndex, setCurrentImageIndex }) => {
  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePreviousImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <figure className="overflow-hidden w-full md:w-1/2">
      <div className="relative">
        <img
          className="h-full w-full block rounded-2xl mb-4 max-h-[600px] md:max-h-[400px] object-cover"
          src={images[currentImageIndex]}
          alt="a beautiful sneakers with a white sole and orange body"
        />
        <img
          src={IconPrevious}
          alt="Previous Icon"
          onClick={handlePreviousImage}
          className="hover:cursor-pointer transition-all duration-300 p-4 bg-slate-300 rounded-full absolute bottom-[2%] left-[2%]"
        />
        <img
          src={IconNext}
          alt="Next Icon"
          onClick={handleNextImage}
          className="hover:cursor-pointer transition-all duration-300 p-4 bg-slate-300 rounded-full absolute top-[2%] right-[2%]"
        />
      </div>
      <Thumbnail
        currentImageIndex={currentImageIndex}
        setCurrentImageIndex={setCurrentImageIndex}
      />
    </figure>
  );
};

export default ImageCarousel;
