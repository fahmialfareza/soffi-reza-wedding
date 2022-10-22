import "bootstrap/dist/css/bootstrap.min.css";
import type { AppProps } from "next/app";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Footer from "../components/Footer";
import Header from "../components/Header";

import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header />

      <Component {...pageProps} />

      <Footer />

      <ToastContainer theme="colored" />
    </>
  );
}

export default MyApp;
