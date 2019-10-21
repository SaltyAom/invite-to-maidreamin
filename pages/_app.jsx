import App, { Container } from "next/app"

import { Provider } from "react-redux"
import store from "stores/store"

import "stylus/init.styl"
import "static/material-icon/material-icons.styl"

class MyApp extends App {
	static async getInitialProps({ Component, ctx }) {
		let pageProps = {}

		if (Component.getInitialProps) {
			pageProps = await Component.getInitialProps(ctx)
		}

		return { pageProps }
	}

	render() {
		const { Component, pageProps } = this.props

		return (
			<Provider store={store}>
				<Container>
					<Component {...pageProps} />
				</Container>
			</Provider>
		)
	}
}

export default MyApp
