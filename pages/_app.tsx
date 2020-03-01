import '../styles.css';
import App from 'next/app';
import { ThemeProvider } from 'styled-components';
import Layout from '../components/Layout';
const theme = {
	colors: {
		primary: '#E28DA9',
		// primary: '#FFA7C4',
		primaryHover: 'palevioletred',
		// primary: '#5c73ff',
		// primaryHover: '#8899ff',
		pink: 'papayawhip',
		text: '#b3b9c5',
		textHighlight: '#fafafa',
		body: '#202020',
		darkBackground: '#252525',
		black: '#0e1111',
	},
	pinkTheme: {
		primary: '#E28DA9',
		primaryHover: 'palevioletred',
	},
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
