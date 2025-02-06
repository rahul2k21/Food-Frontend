import React from "react";
import Navbar from "../Navbar/Navbar";
import Hero from "../Hero/Hero";
import Services from "../Services/Services";
import Banner from "../Banner/Banner";
import AppStore from "../AppStore/Appstore";
import Testimonial from "../Testimonial/Testimonial";
import Footer from "../Footer/Footer";

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <Banner />
      <AppStore />
      <Testimonial />
      <Footer />
    </>
  );
}

export default Home;
