import { Fragment } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import React from "react";
import "../styles/globals.css";
import Modal from '../components/Modal';

function MyApp({ Component, pageProps }) {
  return (
    <>
        <Navbar />
        <Component {...pageProps} />
        <Modal />
        <Footer />
    </>
  );
}

export default MyApp;