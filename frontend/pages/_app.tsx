import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";

import "@fontsource/pacifico";
import "@fontsource/inter";

import "@fontsource/inter/100.css";
import "@fontsource/inter/200.css";
import "@fontsource/inter/300.css";
import "@fontsource/inter/400.css";
import "@fontsource/inter/500.css";
import "@fontsource/inter/700.css";
import "@fontsource/inter/900.css";
import "@fontsource/inter/900.css";
import "@fontsource/inter/700.css";
import "@fontsource/inter/900.css";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const theme = extendTheme({
  semanticTokens: {
    colors: {
      background: "#FFE9ED",
      grey: "#525260",
      "grey-light": "#9F9A93",
      pink: "#FAB8C4",
      error: "#C75C6F",
      green: "#598784",
      success: "#58BF8E",
    },
  },
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />

      <ToastContainer theme="colored" />
    </ChakraProvider>
  );
}

export default MyApp;
