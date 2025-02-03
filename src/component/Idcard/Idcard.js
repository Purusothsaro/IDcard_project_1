import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation, Pagination } from "swiper/modules";
import Modal from "react-modal";

const images = [
  "/assets/IdcardImages/Id1.jpg",
  "/assets/IdcardImages/Id2.jpeg",
  "/assets/IdcardImages/Id3.jpeg",
  "/assets/IdcardImages/Id4.jpeg",
  "/assets/IdcardImages/Id5.jpeg",
  "/assets/IdcardImages/Id6.avif",
  "/assets/IdcardImages/Id7.avif",
  "/assets/IdcardImages/Id8.avif",
  "/assets/IdcardImages/Id9.avif",
  "/assets/IdcardImages/Id10.jpg",
];

const Idcard = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");

  const openModal = (image) => {
    setSelectedImage(image);
    setModalIsOpen(true);
  };

  return (
    <div className="container mx-auto p-6">
      {/* Swiper Carousel */}
      <Swiper
        spaceBetween={20}
        slidesPerView={3}
        navigation
        pagination={{ clickable: true }}
        modules={[Navigation, Pagination]}
        className="rounded-lg shadow-lg"
      >
        {images.map((img, index) => (
          <SwiperSlide key={index}>
            <img
              src={img}
              alt={`Gallery-${index}`}
              className="w-full h-64 object-cover rounded-lg cursor-pointer"
              onClick={() => openModal(img)}
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Grid Gallery */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mt-6">
        {images.map((img, index) => (
          <div key={index} className="relative group">
            <img
              src={img}
              alt={`Gallery-${index}`}
              className="w-full h-32 object-cover rounded-lg cursor-pointer transition-transform duration-300 transform hover:scale-105"
              onClick={() => openModal(img)}
            />
          </div>
        ))}
      </div>

      {/* Modal for Image Preview */}
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75"
      >
        <div className="bg-white p-4 rounded-lg">
          <img
            src={selectedImage}
            alt="Preview"
            className="max-w-full h-auto rounded-lg"
          />
          <button
            className="mt-4 bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
            onClick={() => setModalIsOpen(false)}
          >
            Close
          </button>
        </div>
      </Modal>
    </div>
  );
};

export default Idcard;
