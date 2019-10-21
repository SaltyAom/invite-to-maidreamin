import App from "next/app"

import { Provider } from "react-redux"
import store from "stores/store"

import "stylus/init.styl"
import "public/material-icon/material-icons.styl"

class MyApp extends App {
	render() {
		const { Component, pageProps } = this.props

		return (
			<Provider store={store}>
				<Component {...pageProps} />
			</Provider>
		)
	}
}

export default MyApp
