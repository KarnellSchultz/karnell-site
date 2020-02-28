import App from "next/app";
import { ThemeProvider } from "styled-components";
import Layout from "../components/Layout";
const theme = {
  colors: {
    // primary: "palevioletred",
    primary: "#5c73ff",
    primaryHover: "#8899ff",
    pink: "papayawhip",
    black: "#0e1111",
    text: "#b3b9c5",
    textHighlight: "#fafafa",
    body: "#202020"
  }
};

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <ThemeProvider theme={theme}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    );
  }
}

import "../styles.css";
