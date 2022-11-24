import "bootstrap/dist/css/bootstrap.min.css";
import "nprogress/nprogress.css";
import "../styles/nprogress.css";
import { useEffect } from "react";
import type { AppProps } from "next/app";
import Head from "next/head";
import Router from "next/router";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import NProgress from "nprogress";
import { Analytics } from "@vercel/analytics/react";

import Footer from "../components/Footer";
import Header from "../components/Header";

import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    const handleRouteStart = () => NProgress.start();
    const handleRouteDone = () => NProgress.done();

    Router.events.on("routeChangeStart", handleRouteStart);
    Router.events.on("routeChangeComplete", handleRouteDone);
    Router.events.on("routeChangeError", handleRouteDone);

    return () => {
      // Make sure to remove the event handler on unmount!
      Router.events.off("routeChangeStart", handleRouteStart);
      Router.events.off("routeChangeComplete", handleRouteDone);
      Router.events.off("routeChangeError", handleRouteDone);
    };
  }, []);

  return (
    <>
      <Head>
        <title>Generator Undangan</title>
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no"
        />
      </Head>

      <Header />

      <Component {...pageProps} />

      <Footer />

      <ToastContainer theme="colored" />

      <Analytics />
    </>
  );
}

export default MyApp;
