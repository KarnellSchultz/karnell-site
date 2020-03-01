import '../styles.css';
import App from 'next/app';
import { ThemeProvider } from 'styled-components';
import Layout from '../components/Layout';
const theme = {
	colors: {
		primary: '#5c73ff',
		primaryHover: '#8899ff',
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

const pinkTheme = {
	colors: {
		primary: '#E28DA9',
		primaryHover: '#EDB6C8',
		buttonTextHover: '#AF5A76',
		textHighlight: '#FFF',
		text: '#b3b9c5',
		body: '#202020',
		darkBackground: '#252525',
		black: '#0e1111',
	},
};

// palevioletred = #DB7093
// #AF5A76

export default class MyApp extends App {
	render() {
		const { Component, pageProps } = this.props;
		return (
			<ThemeProvider theme={pinkTheme}>
				<Layout>
					<Component {...pageProps} />
				</Layout>
			</ThemeProvider>
		);
	}
}
