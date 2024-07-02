import React from "react";
import ThumbnailOne from "../../../images/body/thumbnails/image-product-1-thumbnail.jpg";
import ThumbnailTwo from "../../../images/body/thumbnails/image-product-2-thumbnail.jpg";
import ThumbnailThree from "../../../images/body/thumbnails/image-product-3-thumbnail.jpg";
import ThumbnailFour from "../../../images/body/thumbnails/image-product-4-thumbnail.jpg";

const Thumbnail = ({ currentImageIndex, setCurrentImageIndex }) => {
  const imgArray = [
    { name: ThumbnailOne, desc: "thumbnail 1" },
    { name: ThumbnailTwo, desc: "thumbnail 2" },
    { name: ThumbnailThree, desc: "thumbnail 3" },
    { name: ThumbnailFour, desc: "thumbnail 4" },
  ];

  const handleThumbnailClick = (index) => {
    setCurrentImageIndex(index);
  };

  return (
    <figure className="hidden md:flex p-2 justify-between gap-2">
      {imgArray.map((item, index) => {
        const isActive = index === currentImageIndex;
        return (
          <button
            key={index}
            className={`relative w-1/5 rounded-2xl overflow-hidden cursor-pointer transition-all duration-100 ${
              isActive ? "border-4 border-orange" : ""
            }`}
            onClick={() => handleThumbnailClick(index)}
          >
            <img
              className="w-full h-full object-cover rounded-2xl p-1"
              src={item.name}
              alt={item.desc}
            />
            <span className="absolute inset-0 bg-white opacity-0 hover:opacity-10 transition-opacity duration-300"></span>
          </button>
        );
      })}
    </figure>
  );
};

export default Thumbnail;
