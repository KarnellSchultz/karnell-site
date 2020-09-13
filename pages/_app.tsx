import App from 'next/app';
import '../css/normalize.css';
import '../css/styles.css';
import '../css/prsim.css';

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return <Component {...pageProps} />;
  }
}

export default MyApp;
