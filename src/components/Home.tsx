import { motion } from "framer-motion";
import banner from "../assets/banner.jpeg";
import { MdRealEstateAgent, MdVerified, MdSupportAgent } from "react-icons/md";
export default function Home() {
  return (
    <>
      <div className="relative h-[25rem] lg:h-[45rem] md:h-[25rem] sm:h-[35rem] w-full">
        {/* 🔹 Background Image */}
        <img
          className="object-cover h-full w-full"
          src="https://cdn.pixabay.com/photo/2023/12/19/22/46/house-8458547_1280.jpg"
          alt=""
        />

        {/* 🔹 Dark Overlay */}
        <div className="absolute top-0 left-0 w-full h-full bg-black/60 z-30" />

        {/* 🔹 Centered Content */}
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white px-4 z-40">
          <h5 className="text-md font-bold uppercase mb-1">Welcome to</h5>
          <h1 className="text-5xl lg:text-7xl font-bold uppercase bg-gradient-to-r from-red-500 to-white bg-clip-text text-transparent">
            Musa
          </h1>
          <h3 className="uppercase mt-3 text-2xl lg:text-4xl">
            estate advisor
          </h3>
          <p className="uppercase mt-3 text-2xl">New Beginnings Start Here</p>

          {/* 🔽 Scroll Button */}
          <button
            onClick={() => {
              const section = document.getElementById("about");
              section?.scrollIntoView({ behavior: "smooth"});
            }}
            className="mt-10 animate-bounce text-white text-3xl cursor-pointer"
          >
            ↓
          </button>
        </div>

        {/* 🔻 Double Waves at Bottom */}
        <div className="absolute -bottom-0 left-0 w-full z-20">
          <svg
            className="w-full rotate-180"
            viewBox="0 0 1000 100"
            preserveAspectRatio="none"
          >
            <path
              className="fill-[#F8F8F8] "
              opacity="0.4"
              d="M473,67.3c-203.9,88.3-263.1-34-320.3,0C66,119.1,0,59.7,0,59.7V0h1000v59.7 
              c0,0-62.1,26.1-94.9,29.3c-32.8,3.3-62.8-12.3-75.8-22.1C806,49.6,745.3,8.7,694.9,4.7S492.4,59,473,67.3z"
            />
            <path
              className="fill-[#F8F8F8]"
              opacity="0.66"
              d="M734,67.3c-45.5,0-77.2-23.2-129.1-39.1c-28.6-8.7-150.3-10.1-254,39.1 
      s-91.7-34.4-149.2,0C115.7,118.3,0,39.8,0,39.8V0h1000v36.5c0,0-28.2-18.5-92.1-18.5C810.2,18.1,775.7,67.3,734,67.3z"
            />
            <path
              className="fill-[#F8F8F8]"
              opacity="0.8"
              d="M766.1,28.9c-200-57.5-266,65.5-395.1,19.5C242,1.8,242,5.4,184.8,20.6
      C128,35.8,132.3,44.9,89.9,52.5C28.6,63.7,0,0,0,0 h1000c0,0-9.9,40.9-83.6,48.1S829.6,47,766.1,28.9z"
            />
          </svg>
        </div>
      </div>

      {/* 🔻 Next Section */}
      <div id="about" className=" bg-white mt-0 p-5 lg:p-10">
        <div className="flex flex-wrap">
          <div className="w-full sm:w-1/2 p-2">
            <motion.div
              className="p-4"
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.4 }}
            >
              <div className="p-4 px-0 lg:px-15">
                <h2
                  className="text-3xl lg:text-4xl"
                  style={{ color: "var(--color-primary)" }}
                >
                  Musa Estate & Builders
                </h2>
                <p className="my-3 text-justify">
                  <strong>Musa Estate & Builders </strong>is a growing is one of
                  the fastest-growing real estate companies in Pakistan,
                  recognized for its integrity, transparency, and exceptional
                  client service. As an authorized sales partner for several
                  prestigious residential and commercial projects across the
                  country, the company has successfully managed property sales
                  exceeding PKR 20 billion annually, with over 30,000 satisfied
                  clients worldwide.
                </p>
                <p className="text-justify" style={{ wordSpacing: "0px" }}>
                  <strong>Musa Estate & Builders</strong> has earned a strong
                  reputation both locally and internationally for its
                  transparent dealings and exceptional after-sales support. In
                  partnership with the Property Naama Group, our experienced
                  realtors go the extra mile to understand and fulfill each
                  client’s unique needs. We offer a diverse portfolio of
                  residential, commercial, and mixed-use properties tailored to
                  meet modern investment and living standards.
                </p>
              </div>
            </motion.div>
          </div>
          <div className="w-full sm:w-1/2 p-2">
            <motion.div
              className="p-4"
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.4 }}
            >
              <img src={banner} alt="" className="mt-10" />
            </motion.div>
          </div>
        </div>
      </div>

      <section id="about" className="mt-10 pb-30 bg-gray-50 fade-in-left">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-20">
          <div className="grid lg:grid-cols-2 gap-10 items-center relative">
            {/* Image on top for mobile, side for desktop */}
            <div className="relative w-full h-[300px] lg:h-[600px]">
              <img
                src="https://chughtaiestateadvisor.com/wp-content/uploads/2025/01/couple-meeting-with-real-estate-agent.jpg"
                alt="Why Choose Us"
                className="w-full h-full object-cover shadow-lg"
              />
            </div>

            {/* Card – Absolute on large, block on mobile */}
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.4 }}
              className="lg:absolute lg:top-20 lg:right-0 lg:max-w-[600px] z-10 bg-white p-6 sm:p-10 shadow-lg rounded-md"
            >
              <h6 className="font-semibold text-sm uppercase mb-2">
                Why Choose us
              </h6>
              <h2
                className="text-2xl sm:text-3xl font-bold mb-4"
                style={{ color: "var(--color-primary)" }}
              >
                Your journey to the perfect property starts here.
              </h2>
              <p className="text-gray-700 mb-8 max-w-xl">
                <strong>Musa Estate & Builders</strong> is a leading{" "}
                <span className="underline underline-offset-4">
                  real estate
                </span>{" "}
                consultancy based in Lahore, Pakistan. Established in 2004, we
                specialize in all types of{" "}
                <span className="underline underline-offset-4">properties</span>{" "}
                — including plots, houses, apartments, and offices.
              </p>

              <div className="grid sm:grid-cols-2 gap-4">
                {/* Card 1 */}
                <div className="flex items-start space-x-4 sm:col-span-2">
                  <div className="bg-[#2D37481F] rounded text-4xl p-4">
                    <MdRealEstateAgent
                      style={{ color: "var(--color-primary)" }}
                    />
                  </div>
                  <div>
                    <h4
                      className="text-lg font-semibold mb-1"
                      style={{ color: "var(--color-primary)" }}
                    >
                      Top Company
                    </h4>
                    <p className="text-gray-600 text-sm">
                      We build trust through knowledge.
                    </p>
                  </div>
                </div>

                {/* Card 2 */}
                <div className="flex items-start space-x-4 sm:col-span-2">
                  <div className="bg-[#2D37481F] rounded text-4xl p-4">
                    <MdVerified style={{ color: "var(--color-primary)" }} />
                  </div>
                  <div>
                    <h4
                      className="text-lg font-semibold mb-1"
                      style={{ color: "var(--color-primary)" }}
                    >
                      Certified Dealer
                    </h4>
                    <p className="text-gray-600 text-sm">
                      Built on Transparency. Trusted in Real Estate.
                    </p>
                  </div>
                </div>

                {/* Card 3 */}
                <div className="flex items-start space-x-4 sm:col-span-2">
                  <div className="bg-[#2D37481F] rounded text-4xl p-4">
                    <MdSupportAgent style={{ color: "var(--color-primary)" }} />
                  </div>
                  <div>
                    <h4
                      className="text-lg font-semibold mb-1"
                      style={{ color: "var(--color-primary)" }}
                    >
                      24/7 Support
                    </h4>
                    <p className="text-gray-600 text-sm">
                      Success and ongoing support you can rely on.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
