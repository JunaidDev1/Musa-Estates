// TestimonialSliderFull.jsx
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { FaStar } from "react-icons/fa";
import img1 from "/unnamed.png";
import { motion } from "framer-motion";
const testimonials = [
  {
    name: "Umer Naeem",
    date: "2025-02-22",
    image: img1,
    content:
      "I've had an excellent experience working with the Chughtai Estate Advisor team. They're highly professional and energetic. Highly recommend!",
  },
  {
    name: "Eman Malik",
    date: "2025-02-22",
    image: img1,
    content:
      "Amazing experience! The team was knowledgeable, responsive and secured a fantastic deal. Thank you!",
  },
  {
    name: "Ajaa Khan",
    date: "2025-02-22",
    image: img1,
    content: "Chughtai Estate Advisor provided excellent service.",
  },
];

export default function TestimonialSliderFull() {
  return (
    <motion.section
      id="testimonials"
      className="w-full bg-gray-100 py-16 px-4"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="text-center mb-10">
        <h6 className="text-sm text-gray-500 uppercase mb-2 tracking-wide">
          Testimonials
        </h6>
        <h2
          className="text-1xl md:text-4xl text-gray-800"
          style={{ color: "var(--color-primary)" }}
        >
          What Our Clients Say
        </h2>
        <p className="my-7 text-gray-600">
          Trusted by countless clients for our honesty, service, and results —
          here’s what they have to say about working with us.
        </p>
      </div>

      <Swiper
        modules={[Navigation, Autoplay]}
        slidesPerView={1}
        autoplay={{ delay: 4000 }}
        navigation
        loop
        className="w-full"
      >
        {testimonials.map((item, idx) => (
          <SwiperSlide key={idx}>
            <div className="max-w-screen-xl mx-auto px-4 pb-10">
              <div className="relative bg-white h-[25rem] lg:h-full mt-20 p-20 rounded-xl shadow-lg flex flex-col items-center text-center">
                <div className="absolute -top-12">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-24 h-24 rounded-full object-cover border-4 border-white shadow-md"
                  />
                </div>

                <h4 className="font-semibold text-xl text-gray-800">
                  {item.name}
                </h4>
                <p className="text-sm text-gray-400 mb-2">{item.date}</p>

                <div className="flex justify-center mb-4 text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} />
                  ))}
                </div>

                <p className="text-gray-700 max-w-3xl mx-auto">
                  {item.content}
                </p>
              </div>
            </div>
            <style>
              {`
  .swiper-button-next, .swiper-button-prev {
    color: #6b7280 !important;
    width: 24px !important;
    height: 24px !important;
    font-size: 12px !important;
  }
`}
            </style>
          </SwiperSlide>
        ))}
      </Swiper>
    </motion.section>
  );
}
