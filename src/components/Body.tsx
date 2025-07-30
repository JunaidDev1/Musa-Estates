import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import house1 from "/5marla.jpeg";
import house2 from "/8-marla.jpeg";
import house3 from "/15 marla.jpeg";
import house4 from "/12-marla.webp";
import central1 from "/houseCen.jpg";
import central2 from "/cen1.jpg";
import central3 from "/cen2.jpg";
import central4 from "/cen3.jpg";
import { useState } from "react";
import { motion } from "framer-motion";
import { AnimatePresence } from "framer-motion";
import { useRef, useEffect } from "react";
interface Property {
  title: string;
  province: string;
  img: string;
  images?: string[];
  location: string;
  size: string;
  price: string;
  contact: string;
  list: string;
}

const cities: Property[] = [
  {
    title: "Central Park",
    province: "5 Marla",
    img: central1,
    images: [central2, central3, central4],
    location: "Central Park Lahore",
    size: "5 Marla",
    price: "PKR 1.2 Crore",
    contact: "0300 9481659",
    list: "Sewerage, Gas, Water, Electricity",
  },
  {
    title: "Central Park",
    province: "8 Marla",
    img: house1,
    images: [central2, central3, central4],
    location: "Central Park Lahore",
    size: "8 Marla",
    price: "PKR 1.5 Crore",
    contact: "0300 9481659",
    list: "Sewerage, Gas, Water, Electricity",
  },
  {
    title: "Central Park",
    province: "12 Marla",
    img: house2,
    images: [central2, central3, central4],
    location: "Central Park Lahore",
    size: "12 Marla",
    price: "PKR 2.1 Crore",
    contact: "0300 9481659",
    list: "Sewerage, Gas, Water, Electricity",
  },
  {
    title: "Central Park",
    province: "15 Marla",
    img: house3,
    images: [central2, central3, central4],
    location: "Central Park Lahore",
    size: "15 Marla",
    price: "PKR 2.8 Crore",
    contact: "0300 9481659",
    list: "Sewerage, Gas, Water, Electricity",
  },
  {
    title: "Central Park",
    province: "10 Marla",
    img: house4,
    images: [central2, central3, central4],
    location: "Central Park Lahore",
    size: "10 Marla",
    price: "PKR 2 Crore",
    contact: "0300 9481659",
    list: "Sewerage, Gas, Water, Electricity",
  },
];
const Content = () => {
  const [showModal, setShowModal] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedProperty, setSelectedProperty] = useState<Property | null>(
    null
  );

  const handleOpen = (city: Property) => {
    setSelectedProperty(city);
    setShowModal(true);
    setTimeout(() => setModalVisible(true), 50);
  };

  const handleClose = () => {
    setModalVisible(false);
    setTimeout(() => setShowModal(false), 300);
  };
  const modalRef = useRef(null);
  useEffect(() => {
    function handleOutsideClick(e: MouseEvent) {
      if (
        modalRef.current &&
        !(modalRef.current as HTMLElement).contains(e.target as Node)
      ) {
        handleClose();
      }
    }

    if (showModal) {
      document.addEventListener("mousedown", handleOutsideClick);
    }

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [showModal]);
  return (
    <div className="max-w-screen-xl mx-auto pt-20 pb-30 px-4" id="properties">
      <h3
        className="text-4xl text-center font-bold mb-10"
        style={{ color: "var(--color-primary)" }}
      >
        Featured Properties
      </h3>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.4 }}
      >
        <Swiper
          modules={[Navigation, Autoplay]}
          spaceBetween={10}
          slidesPerView={4}
          navigation
          loop
          autoplay={{ delay: 2000 }}
          breakpoints={{
            320: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 4 },
          }}
        >
          {cities.map((city, index) => (
            <SwiperSlide key={index}>
              <div className="relative h-72 rounded-xl overflow-hidden group transition-transform duration-500 hover:scale-105 shadow-md">
                <img
                  src={city.img}
                  alt={city.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-0 left-0 w-full h-full bg-[#393436]/70 z-3" />
                <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-white text-center p-4">
                  <h6 className="text-sm font-semibold">{city.title}</h6>
                  <p className="text-lg font-bold">{city.province}</p>
                  <button
                    onClick={() => handleOpen(city)}
                    className="mt-3 px-4 py-2 cursor-pointer text-white font-medium rounded hover:bg-red-300 transition"
                    style={{ background: "var(--color-primary)" }}
                  >
                    Discover more
                  </button>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </motion.div>
      <AnimatePresence>
        {showModal && selectedProperty && (
          <div className="fixed inset-0 z-50 flex items-center justify-center px-4 transition-opacity duration-300 ease-in-out">
            <div
              ref={modalRef}
              className={`bg-white w-full max-w-3xl rounded-lg shadow-xl relative transform transition-all duration-300 ease-in-out ${
                modalVisible
                  ? "opacity-100 scale-100 translate-y-0"
                  : "opacity-0 scale-90 translate-y-5"
              }`}
            >
              <button
                onClick={handleClose}
                className="absolute top-2 z-50 right-3 text-gray-700 cursor-pointer text-3xl font-bold hover:text-red-600 p-2"
              >
                ×
              </button>

              <Swiper
                modules={[Navigation, Autoplay]}
                navigation
                loop
                autoplay={{ delay: 3000 }}
                className="w-full h-96"
              >
                {(selectedProperty.images || [selectedProperty.img]).map(
                  (img, i) => (
                    <SwiperSlide key={i}>
                      <img
                        src={img}
                        alt={`property-${i}`}
                        className="w-full h-96 object-cover"
                      />
                    </SwiperSlide>
                  )
                )}
              </Swiper>

              <div className="p-6 space-y-4 text-gray-800">
                <div className="flex justify-between items-start flex-wrap gap-2">
                  <h2 className="text-2xl font-bold text-gray-900">
                    {selectedProperty.title}
                    <span className="block text-sm font-medium text-gray-500">
                      {selectedProperty.province}
                    </span>
                  </h2>
                  <span className="inline-block px-4 py-1 bg-green-100 text-green-700 rounded-full text-sm font-semibold">
                    Rs. {selectedProperty.price}
                  </span>
                </div>

                <div className="grid sm:grid-cols-2 gap-4 text-sm">
                  <p className="flex items-center gap-2 text-gray-700">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-5 h-5 text-red-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 11c1.657 0 3-1.343 3-3S13.657 5 12 5s-3 1.343-3 3 1.343 3 3 3z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 22s8-4.5 8-11a8 8 0 10-16 0c0 6.5 8 11 8 11z"
                      />
                    </svg>
                    <span>
                      <strong>Location:</strong> {selectedProperty.location}
                    </span>
                  </p>

                  <p className="flex items-center gap-2 text-gray-700">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-5 h-5 text-gray-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 17.25V6.75A.75.75 0 013.75 6h16.5a.75.75 0 01.75.75v10.5a.75.75 0 01-.75.75H3.75a.75.75 0 01-.75-.75zM7.5 12h9"
                      />
                    </svg>
                    <span>
                      <strong>Size:</strong> {selectedProperty.size}
                    </span>
                  </p>

                  <p className="flex items-center gap-2 text-gray-700">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-5 h-5 text-blue-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 6h16M4 12h16M4 18h16"
                      />
                    </svg>
                    <span>
                      <strong>Facilities:</strong> {selectedProperty.list}
                    </span>
                  </p>

                  <p className="flex items-center gap-2 text-gray-700">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-5 h-5 text-green-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h1.586A2 2 0 018 4.414l1.586 1.586a2 2 0 010 2.828L8 11a9 9 0 005 5l2.172-1.586a2 2 0 012.828 0L19.586 16a2 2 0 01.414 2.828V20a2 2 0 01-2 2h-1C10.611 22 2 13.389 2 4V3a2 2 0 011-1z"
                      />
                    </svg>
                    <span>
                      <strong>Contact:</strong> {selectedProperty.contact}
                    </span>
                  </p>
                </div>
              </div>

              <div className="bg-gray-100 px-6 py-3 flex justify-end gap-3">
                <button
                  onClick={handleClose}
                  className="px-4 py-2 rounded bg-red-500 border-none cursor-pointer hover:bg-red-600 text-white"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Content;
