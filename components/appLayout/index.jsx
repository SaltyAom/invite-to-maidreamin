import { h } from "preact"

import AuthLayout from "components/authLayout"

import Aside from "./aside"
import CreatePanel from "./createPanel"

import "./app-layout.styl"

const AppLayout = props => {
	let { children, createLayout = false } = props

	if (createLayout) {
		return (
			<AuthLayout>
				<CreatePanel />
				<main id="layout">{children}</main>
			</AuthLayout>
		)
	}

	return (
		<AuthLayout>
			<Aside />
			<main id="layout">{children}</main>
		</AuthLayout>
	)
}

export default AppLayout
