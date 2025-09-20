import About from "./components/About/About";
import Blogs from "./components/Blogs/Blogs";
import Footer from "./components/Footer/Footer";
import LandingPage from "./components/LandingPage/LandingPage";
import Navbar from "./components/Navbar/Navbar";
import OurFurniture from "./components/OurFurniture/OurFurniture";

function App() {
  return (
    <>
      <Navbar />
      <LandingPage />
      <OurFurniture />
      <About />
      <Blogs />
      <Footer />
    </>
  );
}

export default App;
