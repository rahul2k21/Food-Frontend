import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import Home from "./components/Home/Home.jsx";
import Services from "./components/Services/Services.jsx";
import Banner from "./components/Banner/Banner.jsx";
import AppStore from "./components/AppStore/Appstore.jsx";
import Testimonial from "./components/Testimonial/Testimonial.jsx";
import Contact_us from "./pages/Contact_us/Contact_us.jsx";
import Footer from "./components/Footer/Footer.jsx"; 
import About_us from "./pages/About-us/About_us.jsx";

const App = () => {
  React.useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 500,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);

  return (
    <Router>
      <div className="bg-white dark:bg-gray-900 dark:text-white duration-200">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/banner" element={<Banner />} />
          <Route path="/appstore" element={<AppStore />} />
          <Route path="/testimonials" element={<Testimonial />} />
          <Route path="/about" element={<About_us />} />
          <Route path="/contact" element={<Contact_us />} />
          <Route path="/footer" element={<Footer />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
