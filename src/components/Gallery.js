import React from "react";
import ImageCard from "./ImageCard";
import images from "../assets/images"; // Importing images

const Gallery = () => {
  return (
    <div className="gallery">
      {images.map((img, index) => (
        <ImageCard key={index} src={img.src} title={img.title} />
      ))}
    </div>
  );
};

export default Gallery;
