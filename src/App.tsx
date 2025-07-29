import "./App.css";
import Content from "./components/Body";
import Home from "./components/Home";
import WhyChooseUs from "./components/WhyChoos";
import Banner from "./components/Banner";
import BlogGrid from "./components/Cards";
import Team from "./components/OurTeam";  
import Footer from "./pages/Footer";
import TestimonialSection from "./components/Testimonial";
function App() {
  return (
    <>
      <Home></Home>
      <Content></Content>
      <WhyChooseUs></WhyChooseUs>
      <Banner></Banner>
      <BlogGrid></BlogGrid>
      <Team></Team>
      <TestimonialSection></TestimonialSection>
      <Footer></Footer>
    </>
  );
}

export default App;
