import React from "react";
import styled from "styled-components";
import Footer from "../../components/Footer/Footer";
import Gallery from "../../components/Gallery/Gallery";
import Hero from "../../components/Hero/Hero";
import { Navbar } from "../../components/Navbar/Navbar";
import Acknowledgments from "../../components/Sections/Acknowledgments";
import Features from "../../components/Sections/Features";
import SidebarHome from "../../components/Sidebar/SidebarHome";
import { Global__Section } from "../../styles/layout";

const Home = () => {
  return (
    <>
      <Global__Section>
        {/* <Navbar /> */}
        <SidebarHome />
        <Hero />
        <Features />
        <Acknowledgments />
        <Features />
        <Footer />
      </Global__Section>
    </>
  );
};

export default Home;
