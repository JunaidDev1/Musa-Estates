import { motion } from "framer-motion";
export default function Banner() {
  return (
    <>
      <div className="relative h-[35rem] w-full">
        {/* 🔹 Background Image */}
        <div
          className="bg-bottom bg-no-repeat bg-cover h-[550px] w-full"
          style={{
            backgroundImage:
              "url('https://chughtaiestateadvisor.com/wp-content/uploads/2025/01/real-estate-agent-working-in-his-office.jpg')",
          }}
        ></div>

        {/* 🔹 Dark Overlay */}
        <div className="absolute top-0 left-0 w-full h-[550px] bg-[#393436]/70 z-30" />

        {/* 🔹 Centered Content */}
        <motion.div
          className="absolute inset-0 flex flex-col justify-center lg:pl-[10rem] xl:pl-[50rem] text-white px-4 z-40"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.4 }}
        >
          <h2 className="text-2xl sm:text-2xl lg:text-6xl xl:text-4xl pe-20">
            Unlock the Future of Real Estate with Confidence
          </h2>
          <p className="uppercase my-5 text-sm lg:text-md">
            With deep market knowledge and a commitment to integrity, we help
            you make smart, secure real estate decisions. Whether you're buying,
            selling, or investing — our expert team ensures you move forward
            with confidence and clarity.
          </p>
          <div className="text-start">
            <button
              className="mt-3 px-4 inline-block py-2 cursor-pointer text-white font-medium rounded hover:bg-red-300 transition"
              style={{ background: "var(--color-primary)" }}
            >
              Explore Properties
            </button>
          </div>
        </motion.div>
      </div>
    </>
  );
}
