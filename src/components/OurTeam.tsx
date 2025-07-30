import { FaWhatsapp } from "react-icons/fa";
import { MdPhone } from "react-icons/md";
import img from "../assets/owner.jpeg";
import { motion } from "framer-motion";
export default function Team() {
  return (
    <>
      <section id="team" className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h6 className="text-sm text-gray-500 uppercase mb-2 tracking-wide">
            Meet Our Experts
          </h6>
          <h2
            className="text-3xl font-bold text-gray-800 mb-4"
            style={{ color: "var(--color-primary)" }}
          >
            Guiding You Home with Confidence.
          </h2>
          <p className="text-gray-600 mb-10">
            Our dedicated team is here to help you make smart and secure
            property decisions.
          </p>

          {/* Top Member (centered) */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, amount: 0.4 }}
            className="flex justify-center mb-10"
          >
            <div className="bg-gray-50 shadow-lg p-6 text-center w-96 hover:shadow-xl transition-all duration-300">
              <a>
                <img src={img} className="mb-4" />
              </a>
              <h4 className="text-xl" style={{ color: "var(--color-primary)" }}>
                <a>Ch Jamshed Sandhu </a>
              </h4>
              <p className="text-sm text-gray-500">Musa Estate & Builders</p>
            </div>
          </motion.div>

          {/* Bottom Two Members */}
          <div className="flex flex-wrapper justify-center gap-4 grid grid-cols-1 lg:grid lg:grid-cols-2">
            {/* Member 2 */}
            <motion.div
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true, amount: 0.4 }}
              className="bg-white rounded shadow px-20 py-4 text-center hover:shadow-xl transition-all duration-300"
            >
              <h4 className="text-lg" style={{ color: "var(--color-primary)" }}>
                <a>M.Nouman Aslam</a>
              </h4>
              <p className="text-sm text-gray-500">Senior Estate Advisor</p>
              <div className="flex justify-center mt-3 space-x-4">
                <a
                  href="https://wa.me/923009481659"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-1 rounded"
                  style={{ background: "var(--color-primary)" }}
                >
                  <FaWhatsapp className="w-6 h-6 text-white cursor-pointer" />
                </a>
                <a
                  href="tel:+923009481659"
                  className="p-1 rounded"
                  style={{ background: "var(--color-primary)" }}
                >
                  <MdPhone className="w-6 h-6 text-white cursor-pointer" />
                </a>
              </div>
            </motion.div>

            {/* Member 3 */}
            <motion.div
              initial={{ x: 100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true, amount: 0.4 }}
              className="bg-white rounded shadow px-20 py-4 text-center hover:shadow-xl transition-all duration-300"
            >
              <h4 className="text-lg" style={{ color: "var(--color-primary)" }}>
                <a>M.Nouman Aslam</a>
              </h4>
              <p className="text-sm text-gray-500">Senior Estate Advisor</p>
              <div className="flex justify-center mt-3 space-x-4">
                <a
                  href="https://wa.me/923009481659"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-1 rounded"
                  style={{ background: "var(--color-primary)" }}
                >
                  <FaWhatsapp className="w-6 h-6 text-white cursor-pointer" />
                </a>
                <a
                  href="tel:+923009481659"
                  className="p-1 rounded"
                  style={{ background: "var(--color-primary)" }}
                >
                  <MdPhone className="w-6 h-6 text-white cursor-pointer" />
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
