import { h } from "preact"

import "./setter.styl"

const Setter = props => {
	let { children, onClick } = props

	return (
		<div className="setter-wrapper">
			<button className="setter" onClick={event => onClick(event)}>
				{children}
				<div className="underline" />
			</button>
		</div>
	)
}

export default Setter
