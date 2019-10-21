import { h } from "preact"

import Link from "next/link"

import "./user-detail.styl"

const UserDetail = (props) => {
    let { children, href = "" } = props

	return (
		<li className="user-detail">
			<Link href={`/user/${href}`}>
				<a className="user-link">{children}</a>
			</Link>
			is going.
		</li>
	)
}

export default UserDetail
