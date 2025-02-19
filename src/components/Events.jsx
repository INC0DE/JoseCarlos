import { motion } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import {
  image1,
  image2,
  image3,
  image4,
  image5,
  image6,
  image7,
  image8,
  image9,
} from "../assets/index.js";

const initialImages = [
  image1,
  image2,
  image3,
  image4,
  image5,
  image6,
  image7,
  image8,
  image9,
];

const Events = () => {
  const [images, setImages] = useState([...initialImages]);
  const galleryRef = useRef(null);

  const loadMoreImages = () => {
    setImages((prevImages) => [...prevImages, ...initialImages]);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (galleryRef.current) {
        const { scrollTop, scrollHeight, clientHeight } = galleryRef.current;
        if (scrollTop + clientHeight >= scrollHeight - 200) {
          loadMoreImages();
        }
      }
    };

    const galleryDiv = galleryRef.current;
    if (galleryDiv) {
      galleryDiv.addEventListener("scroll", handleScroll);
    }

    return () => {
      if (galleryDiv) {
        galleryDiv.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);

  return (
    <div
      ref={galleryRef}
      className="w-full h-[100vh] overflow-y-auto scrollbar-hide p-4"
    >
      <div className="columns-2 md:columns-3 gap-4 space-y-4">
        {images.map((src, index) => (
          <motion.div
            key={index}
            className="relative w-full overflow-hidden rounded-xl shadow-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <img
              src={src}
              alt={`Gallery ${index}`}
              className="w-full h-auto object-cover rounded-xl"
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Events;
