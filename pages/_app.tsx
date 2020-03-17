import "../styles.css";
import App from "next/app";
import { ThemeProvider } from "styled-components";
import Layout from "../components/Layout";
import { GlobalStyles } from "../GlobalStyles";
const theme = {
  colors: {
    primary: "#5c73ff",
    primaryHover: "#8899ff",
    pink: "papayawhip",
    text: "#b3b9c5",
    textHighlight: "#fafafa",
    body: "#202020",
    darkBackground: "#252525",
    black: "#0e1111"
  },
  pinkTheme: {
    primary: "#E28DA9",
    primaryHover: "palevioletred"
  }
};

const LightTheme = {
  colors: {
    // primary: '#E28DA9',
    primary: "#DB7093",
    primaryHover: "#E28DA9",
    buttonText: "#FAFAFA",
    buttonTextHover: "#AF5A76",
    textHighlight: "#111",
    body: "#fafafa",
    background: "#FAFAFA",
    black: "#0e1111",
    buttonBackground: "#F0F0F0",
    text: "#111111"
  }
};

const pinkDarkTheme = {
  colors: {
    primary: "#E28DA9",
    primaryHover: "#EDB6C8",
    buttonText: "#FAFAFA",
    buttonTextHover: "#DB7093",
    buttonBackground: "#181818",
    text: "#b3b9c5",
    textHighlight: "#FFF",
    headerText: "#cecece",
    body: "#202020",
    darkBackground: "#252525",
    black: "#0e1111",
    codeBackground: "#3A3A3A"
  }
};

// palevioletred = #DB7093
// #AF5A76
// DB7093

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <ThemeProvider theme={pinkDarkTheme}>
        <GlobalStyles />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    );
  }
}
