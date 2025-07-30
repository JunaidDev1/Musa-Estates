import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";
import { Phone, Mail } from "lucide-react";
import logo from "../assets/Logo.jpeg";
const Footer = () => {
  return (
    <footer
      className="text-white px-5 py-10 lg:px-20 lg:pt-30"
      style={{ background: "var(--color-brown)" }}
    >
      <div className=" grid md:grid-cols-3 gap-20 mb-10">
        {/* Company Info */}
        <div className="space-y-4">
          <a>
            <img src={logo} className="w-20 rounded-lg" />
          </a>
          <p className="text-sm italic mt-2">
            <strong>Musa Estate & Builders</strong>
            <br />
            Trusted since 2004 for expert property consultation, smooth
            transactions, and smart leasing solutions.
          </p>
          <div className="flex gap-4 mt-4 text-xl">
            <a
              href="https://www.facebook.com/SkAssociates.Central.park"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://www.instagram.com/musa_builders7?fbclid=IwY2xjawLtzcpleHRuA2FlbQIxMABicmlkETF5OGhiV3hYT2tBZ1RnTTczAR6_SGz-U4JHrAsq1BRkcNhFF-JFXUNPHmALbSP1zujGSfsZPM8iOeywFZLEfw_aem_iEWRKJfQUztisCfYSKsJtw"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.youtube.com/@musabuilders7"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaYoutube />
            </a>
          </div>
        </div>
        {/* Important Links */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Important Links</h4>
          <ul className="space-y-2 text-sm list-disc list-inside">
            <li>
              <button
                onClick={() =>
                  document
                    .getElementById("about")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="text-white cursor-pointer hover:text-[var(--color-primary)] transition"
              >
                About Us
              </button>
            </li>
            <li>
              <button
                onClick={() =>
                  document
                    .getElementById("properties")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="text-white cursor-pointer hover:text-[var(--color-primary)] transition"
              >
                Featured Properties
              </button>
            </li>
            <li>
              <button
                onClick={() =>
                  document
                    .getElementById("team")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="text-white cursor-pointer hover:text-[var(--color-primary)] transition"
              >
                Our Team
              </button>
            </li>
            <li>
              <button
                onClick={() =>
                  document
                    .getElementById("testimonials")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="text-white cursor-pointer hover:text-[var(--color-primary)] transition"
              >
                Testimonials
              </button>
            </li>
          </ul>
        </div>
        {/* Contact Info */}
        <div className="space-y-3 text-white">
          <h6 className="font-semibold text-sm uppercase">Sales Support</h6>

          <p className="flex items-center gap-2">
            <Phone size={20} className="text-white" />
            <a
              href="tel:+923004857186"
              className="text-lg hover:text-brown-300"
            >
              (+92) 300 9481659
            </a>
          </p>

          <p className="flex items-center gap-2">
            <Mail size={20} className="text-white" />
            <a
              href="mailto:musasandhu529@gmail.com"
              className="text-lg hover:text-brown-300"
            >
              musasandhu529@gmail.com
            </a>
          </p>
        </div>
      </div>
      <div className="container pt-10 text-center border-t border-gray-600">
        <div className="mb-2">&copy; 2025 All rights reserved.</div>
        <div>
          Developed by{" "}
          <a
            href="https://softsynclab.com"
            target="_blank"
            className="text-blue-600 hover:underline"
          >
            Soft Sync Lab
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
