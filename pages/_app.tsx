import App from 'next/app'
import React from 'react'
import { ThemeProvider } from 'styled-components'
import Layout from '../components/Layout'


const theme = {
  colors: {
    // primary: '#0070f3',
    primary: '#5c73ff',
    primaryHover: '#8899ff',
    pink:'papayawhip',
  },
}

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props
    return (
      <ThemeProvider theme={theme}>
        <Layout  >
        <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    )
  }
}