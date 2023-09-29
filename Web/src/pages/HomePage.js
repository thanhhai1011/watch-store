import React from "react";
import Header from "../components/header/Header";
import Carousel from "../components/Slider/Carousel";
import Footer from "../components/footer/Footer";
import AppChat from "../components/AppChat/AppChat";
import ScrollToTop from "../components/ScrollToTop/ScrollToTop";
import { useSelector } from "react-redux";
import Casio from "../components/HotSale/components/Casio";
import Bentley from "../components/HotSale/components/Bentley";
import Citizen from "../components/HotSale/components/Citizen";

function HomePage(props) {
  const { userInfo } = useSelector((state) => state.userSignin);

  return (
    <div style={{ position: "relative" }}>
      <Header />
      <Carousel />
      <Bentley />
      <Citizen />
      <Casio />
      <Footer></Footer>
      <ScrollToTop></ScrollToTop>
      {userInfo && userInfo.isAdmin === false ? <AppChat></AppChat> : ""}
    </div>
  );
}

export default HomePage;
