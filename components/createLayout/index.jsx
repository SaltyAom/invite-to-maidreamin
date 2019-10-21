import { h, Fragment } from "preact"

import Link from "next/link"

import "./create-layout.styl"

const CreateLayout = props => {
	let {
		children,
		back = "Back",
		next = "Next",
		start = false,
		end = false,
		nextHref = "",
		backHref = "",
		disabled = false
	} = props

	return (
		<Fragment>
			<form id="create-layout">{children}</form>
			<aside id="create-aside">
				{!start ? (
					<Link href={`/create/${backHref}`}>
						<a className="create-nav create-back">
							<i className="material-icons">chevron_left</i>
							{back}
						</a>
					</Link>
				) : (
					<div />
				)}
				{!end ? (
					<Link href={!disabled ? `/create/${nextHref}` : ''}>
						<a className={`create-nav create-next ${disabled ? 'disabled' : ''}`}>
							{next}
							<i className="material-icons">chevron_right</i>
						</a>
					</Link>
				) : null}
			</aside>
		</Fragment>
	)
}

export default CreateLayout
