import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import React from "react";
import "../styles/globals.css";
import Modal from "../components/Modal";
import Head from "../components/meta";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head />
      <Navbar />
      <Component {...pageProps} />
      <Modal />
      <Footer />
    </>
  );
}

export default MyApp;
