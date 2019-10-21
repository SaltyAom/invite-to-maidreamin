import { h } from "preact"

import "./user-detail.styl"

const UserDetail = props => {
	let { photo, children } = props

	return (
		<li className="user-detail">
			<span style={{ fontWeight: "bold", marginRight: ".35em" }}>
				{children}
			</span>
			is going.
		</li>
	)
}

export default UserDetail
