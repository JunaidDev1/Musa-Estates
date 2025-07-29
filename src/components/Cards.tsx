import { FaLongArrowAltRight } from "react-icons/fa";
import { useState } from "react";
import { motion } from "framer-motion";
const posts = [
  {
    id: 1,
    title: "Blue World City Awami Green Block Development Charges",
    excerpt:
      "The Blue World City administration has recently announced development charges...",
    img: "https://propertynaama.com/wp-content/uploads/2025/07/WhatsApp-Image-2025-07-19-at-2.09.03-PM-750x400.jpeg",
    link: "https://propertynaama.com/awami-green/",
  },
  {
    id: 2,
    title: "How to Avoid Scams in Property Investment?",
    excerpt: "Are you going to invest in property? It can be...",
    img: "https://propertynaama.com/wp-content/uploads/2025/07/WhatsApp-Image-2025-07-19-at-1.04.00-PM-750x400.jpeg",
    link: "https://propertynaama.com/how-to-avoid-scams-in-property-investment/",
  },
  {
    id: 3,
    title: "Capital and Lahore Smart City Latest News",
    excerpt:
      "The Leadership of Future Development Holdings Private Limited (FDHL) has...",
    img: "https://propertynaama.com/wp-content/uploads/2025/07/WhatsApp-Image-2025-07-19-at-12.15.58-PM-1-750x400.jpeg",
    link: "https://propertynaama.com/capital-and-lahore-smart-city/",
  },
  {
    id: 4,
    title: "New Metro City: Latest Development Progress",
    excerpt: "Updates on the New Metro City's development milestones...",
    img: "https://propertynaama.com/wp-content/uploads/2025/07/WhatsApp-Image-2025-07-19-at-1.04.00-PM-750x400.jpeg",
    link: "https://propertynaama.com/new-metro-city-update/",
  },
  {
    id: 5,
    title: "Top 5 Housing Projects to Watch in 2025",
    excerpt:
      "Here are the most anticipated housing projects launching in 2025...",
    img: "https://propertynaama.com/wp-content/uploads/2025/07/WhatsApp-Image-2025-07-19-at-2.09.03-PM-750x400.jpeg",
    link: "https://propertynaama.com/top-5-housing-2025/",
  },
  {
    id: 6,
    title: "Real Estate Taxes 2025 – What You Need to Know",
    excerpt:
      "Understanding the new real estate tax policies introduced this year...",
    img: "https://propertynaama.com/wp-content/uploads/2025/07/WhatsApp-Image-2025-07-19-at-12.15.58-PM-1-750x400.jpeg",
    link: "https://propertynaama.com/real-estate-taxes-2025/",
  },
];

export default function BlogGrid() {
  const [visibleCount, setVisibleCount] = useState(3);
  const [loading, setLoading] = useState(false);

  const handleLoadMore = () => {
    setLoading(true);
    setTimeout(() => {
      setVisibleCount((prev) => prev + 3);
      setLoading(false);
    }, 1000); // 1 second loading simulation
  };

  const visiblePosts = posts.slice(0, visibleCount);

  return (
    <section className="bg-white py-15">
      <h3
        className="text-4xl text-center font-bold mb-15"
        style={{ color: "var(--color-primary)" }}
      >
        Our Projects
      </h3>
      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-3 gap-8">
        {visiblePosts.map((post, index) => (
          <motion.div
            key={post.id}
            className="relative group overflow-hidden rounded shadow hover:shadow-xl transition"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <div className="relative">
              <img
                src={post.img}
                alt={post.title}
                className="w-full h-52 object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-60 transition duration-300">
                <a href={post.link} className="text-white text-3xl">
                  <FaLongArrowAltRight />
                </a>
              </div>
            </div>
            <div className="p-4">
              <h2
                className="font-semibold text-lg hover:text-red-600 transition line-clamp-2"
                style={{ color: "var(--color-primary)" }}
              >
                <a href={post.link} target="_blank" rel="noopener noreferrer">
                  {post.title}
                </a>
              </h2>
              <p className="text-gray-600 text-sm mt-2 line-clamp-2">
                {post.excerpt}
              </p>
              <a
                href={post.link}
                className="inline-block mt-3 text-sm font-medium hover:underline"
                style={{ color: "var(--color-primary)" }}
              >
                Read More
              </a>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Load More Button */}
      {visibleCount < posts.length && (
        <div className="text-center mt-10">
          <button
            onClick={handleLoadMore}
            className="bg-red-600 text-white px-6 py-3 rounded hover:bg-red-700 transition"
            disabled={loading}
          >
            {loading ? "Loading..." : "Load More"}
          </button>
        </div>
      )}
    </section>
  );
}
